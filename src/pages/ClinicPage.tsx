import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import NotFound from "./NotFound";
import { MapPin, Phone, Mail, Clock, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

interface OperatingHour {
  day: string;
  open: string;
  close: string;
  closed?: boolean;
}

interface GalleryItem {
  id: string;
  image_url: string;
}

interface OrgSettings {
  primary_color?: string;
  accent_color?: string;
  hero_image_url?: string;
  operating_hours?: OperatingHour[];
  gallery_items?: GalleryItem[];
  certifications?: string[];
  branding?: {
    tagline?: string;
    logo_url?: string;
    primary_color?: string;
  };
}

interface Organization {
  id: string;
  name: string;
  slug: string;
  logo_url: string | null;
  email: string | null;
  phone: string | null;
  address: string | null;
  clinic_type: string;
  settings: OrgSettings | null;
}

const ClinicPage = () => {
  const { clinicSlug } = useParams<{ clinicSlug: string }>();

  const { data: org, isLoading, error } = useQuery({
    queryKey: ["clinic-page", clinicSlug],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("organizations")
        .select("id, name, slug, logo_url, email, phone, address, clinic_type, settings")
        .eq("slug", clinicSlug!)
        .maybeSingle();

      if (error) throw error;
      return data as Organization | null;
    },
    enabled: !!clinicSlug,
  });

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
      </div>
    );
  }

  if (!org) return <NotFound />;

  const settings = org.settings ?? {};
  const primaryColor = settings.primary_color || settings.branding?.primary_color || "#008080";
  const heroImage = settings.hero_image_url;
  const hours = settings.operating_hours ?? [];
  const gallery = settings.gallery_items ?? [];
  const tagline = settings.branding?.tagline;

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section
        className="relative flex min-h-[420px] items-center justify-center overflow-hidden"
        style={{
          background: heroImage
            ? `linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.6)), url(${heroImage}) center/cover no-repeat`
            : primaryColor,
        }}
      >
        <div className="relative z-10 mx-auto max-w-3xl px-6 py-20 text-center text-white">
          {org.logo_url && (
            <img
              src={org.logo_url}
              alt={org.name}
              className="mx-auto mb-6 h-20 rounded-xl bg-white/10 object-contain p-2 backdrop-blur-sm"
            />
          )}
          <h1 className="mb-3 text-4xl font-extrabold tracking-tight md:text-5xl lg:text-6xl">
            {org.name}
          </h1>
          {tagline && (
            <p className="mb-6 text-lg text-white/80">{tagline}</p>
          )}
          {org.phone && (
            <a href={`tel:${org.phone}`}>
              <Button
                size="lg"
                className="gap-2 rounded-full px-8 text-white shadow-lg"
                style={{ backgroundColor: primaryColor }}
              >
                <Phone className="h-4 w-4" /> Call Us
              </Button>
            </a>
          )}
        </div>
      </section>

      {/* Info cards */}
      <section className="mx-auto -mt-12 max-w-5xl px-4">
        <div className="grid gap-4 sm:grid-cols-3">
          {org.address && (
            <div className="flex items-start gap-3 rounded-xl border bg-white p-5 shadow-md">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0" style={{ color: primaryColor }} />
              <div>
                <h3 className="text-sm font-semibold text-gray-900">Address</h3>
                <p className="text-sm text-gray-600">{org.address}</p>
              </div>
            </div>
          )}
          {org.phone && (
            <div className="flex items-start gap-3 rounded-xl border bg-white p-5 shadow-md">
              <Phone className="mt-0.5 h-5 w-5 shrink-0" style={{ color: primaryColor }} />
              <div>
                <h3 className="text-sm font-semibold text-gray-900">Phone</h3>
                <a href={`tel:${org.phone}`} className="text-sm text-gray-600 hover:underline">
                  {org.phone}
                </a>
              </div>
            </div>
          )}
          {org.email && (
            <div className="flex items-start gap-3 rounded-xl border bg-white p-5 shadow-md">
              <Mail className="mt-0.5 h-5 w-5 shrink-0" style={{ color: primaryColor }} />
              <div>
                <h3 className="text-sm font-semibold text-gray-900">Email</h3>
                <a href={`mailto:${org.email}`} className="text-sm text-gray-600 hover:underline">
                  {org.email}
                </a>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Operating Hours */}
      {hours.length > 0 && (
        <section className="mx-auto max-w-5xl px-4 py-16">
          <h2 className="mb-6 text-center text-2xl font-bold text-gray-900">Operating Hours</h2>
          <div className="mx-auto max-w-md rounded-xl border bg-white p-6 shadow-sm">
            {hours.map((h) => (
              <div
                key={h.day}
                className="flex items-center justify-between border-b border-gray-100 py-3 last:border-0"
              >
                <span className="text-sm font-medium text-gray-700">{h.day}</span>
                <span className="text-sm text-gray-500">
                  {h.closed ? "Closed" : `${h.open} – ${h.close}`}
                </span>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Gallery */}
      {gallery.length > 0 && (
        <section className="mx-auto max-w-5xl px-4 pb-16">
          <h2 className="mb-6 text-center text-2xl font-bold text-gray-900">Gallery</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {gallery.map((item) => (
              <div key={item.id} className="overflow-hidden rounded-xl shadow-md">
                <img
                  src={item.image_url}
                  alt="Clinic gallery"
                  className="h-56 w-full object-cover transition-transform duration-300 hover:scale-105"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="border-t bg-gray-50 py-8 text-center">
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} {org.name}. Powered by{" "}
          <a
            href="https://clinexus.com.ng"
            className="font-medium hover:underline"
            style={{ color: primaryColor }}
          >
            Clinexus
          </a>
        </p>
      </footer>
    </div>
  );
};

export default ClinicPage;
