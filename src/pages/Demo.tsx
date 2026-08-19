import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { useState } from "react";

import clinicWebsite from "@/assets/demo/clinic-website.png";
import patients from "@/assets/demo/patients.png";
import analytics from "@/assets/demo/analytics.png";
import dentalCharts from "@/assets/demo/dental-charts.png";
import treatments from "@/assets/demo/treatments.png";
import inventory from "@/assets/demo/inventory.png";
import staff from "@/assets/demo/staff.png";
import websiteSettings from "@/assets/demo/website-settings.png";
import profitability from "@/assets/demo/profitability.png";
import aiAssistant from "@/assets/demo/ai-assistant.png";

const screens = [
  { src: aiAssistant, title: "AI Clinic Assistant", description: "Chat with your AI assistant to query live clinic data, manage appointments, check inventory alerts, and get clinical insights — all conversationally." },
  { src: patients, title: "Patient Management", description: "View, search, and manage all patients with status tracking, phone details, and quick-access profiles. Supports list and grid views." },
  { src: dentalCharts, title: "Interactive Dental Charts", description: "Full tooth-by-tooth charting with FDI notation. Track conditions like decay, crowns, implants, and more — color-coded for instant clarity." },
  { src: treatments, title: "Treatments & Procedures", description: "Browse your treatment catalog by category with pricing. Create treatment plans and link them directly to invoices." },
  { src: profitability, title: "Profitability Dashboard", description: "Revenue vs. expenses with profit margin KPIs. Visual monthly comparisons help you make data-driven decisions." },
  { src: analytics, title: "Advanced Analytics", description: "Staff performance metrics, lab turnaround tracking, and chair utilization heatmaps — all in one place." },
  { src: inventory, title: "Inventory Tracking", description: "Real-time stock levels by category with status badges. Track items from syringes to PPE with low-stock alerts." },
  { src: staff, title: "Staff Management", description: "Manage your team with role-based badges, specializations, and contact details. Supports 9 built-in role types." },
  { src: websiteSettings, title: "Website Builder", description: "Configure your clinic's public-facing website — branding, hero section, hours, social links, and booking settings." },
  { src: clinicWebsite, title: "Public Clinic Website", description: "Each clinic gets a branded landing page with services, team info, online booking, and contact details." },
];

const Demo = () => {
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[hsl(var(--medical-blue-dark))] py-20 md:py-28">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent to-[hsl(var(--medical-blue-dark))]" />
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mx-auto max-w-3xl text-center"
          >
            <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-widest text-[hsl(var(--medical-teal))]">
              Dental Clinic Demo
            </span>
            <h1 className="mb-6 text-4xl font-extrabold leading-[1.1] tracking-tight text-white md:text-5xl">
              See the Dental Clinic Demo{" "}
              <span className="bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--medical-teal))] bg-clip-text text-transparent">
                in Action
              </span>
            </h1>
            <p className="mx-auto max-w-xl text-lg leading-relaxed text-white/60">
              Every screen below is from the live Clinexus dental clinic demo — this is what running your dental practice looks like.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Interactive Tour */}
      <section className="relative overflow-hidden py-16 md:py-24">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-secondary/40 via-background to-muted/30" />
        <div className="container relative z-10">
          {/* Tabs */}
          <div className="mb-10 flex flex-wrap justify-center gap-2">
            {screens.map((s, i) => (
              <button
                key={s.title}
                onClick={() => setActiveIdx(i)}
                className={`rounded-full px-4 py-2 text-xs font-semibold transition-all ${
                  i === activeIdx
                    ? "bg-primary text-primary-foreground shadow-md shadow-primary/20"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                {s.title}
              </button>
            ))}
          </div>

          {/* Screen Display */}
          <motion.div
            key={activeIdx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mx-auto max-w-5xl"
          >
            <div className="grid items-center gap-10 md:grid-cols-2">
              {/* Phone Mockup */}
              <div className="flex justify-center">
                <div className="relative mx-auto w-[280px] md:w-[320px]">
                  <div className="rounded-[2.5rem] border-[6px] border-foreground/10 bg-foreground/5 p-2 shadow-2xl shadow-primary/10">
                    <div className="overflow-hidden rounded-[2rem]">
                      <img
                        src={screens[activeIdx].src}
                        alt={screens[activeIdx].title}
                        className="w-full"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div>
                <span className="mb-2 inline-block text-xs font-semibold uppercase tracking-widest text-primary">
                  {activeIdx + 1} of {screens.length}
                </span>
                <h2 className="mb-4 text-2xl font-bold text-foreground md:text-3xl">
                  {screens[activeIdx].title}
                </h2>
                <p className="mb-8 text-base leading-relaxed text-muted-foreground md:text-lg">
                  {screens[activeIdx].description}
                </p>
                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setActiveIdx((p) => (p > 0 ? p - 1 : screens.length - 1))}
                    className="gap-2 rounded-full"
                  >
                    <ArrowLeft className="h-4 w-4" /> Previous
                  </Button>
                  <Button
                    size="sm"
                    onClick={() => setActiveIdx((p) => (p < screens.length - 1 ? p + 1 : 0))}
                    className="gap-2 rounded-full bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--medical-teal))] text-white"
                  >
                    Next <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* All Screens Grid */}
      <section className="relative overflow-hidden bg-muted/30 py-16 md:py-24">
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10 text-center"
          >
            <h2 className="mb-3 text-2xl font-bold text-foreground md:text-3xl">All Dental Clinic Demo Screens</h2>
            <p className="text-muted-foreground">Click any screen above to explore in detail</p>
          </motion.div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {screens.map((s, i) => (
              <motion.button
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                onClick={() => { setActiveIdx(i); window.scrollTo({ top: 0, behavior: "smooth" }); }}
                className={`group overflow-hidden rounded-2xl border bg-card p-3 text-left shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg ${
                  i === activeIdx ? "border-primary ring-2 ring-primary/20" : "border-border/50"
                }`}
              >
                <div className="mb-3 overflow-hidden rounded-xl">
                  <img src={s.src} alt={s.title} className="w-full transition-transform group-hover:scale-105" loading="lazy" />
                </div>
                <h3 className="text-sm font-semibold text-foreground">{s.title}</h3>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden py-20">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[hsl(var(--primary))]/10 via-transparent to-[hsl(var(--medical-teal))]/10" />
        <div className="container relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="mb-4 text-3xl font-bold text-foreground">Ready to Experience This?</h2>
            <p className="mx-auto mb-8 max-w-xl text-muted-foreground">
              Start your first month for just ₦10,000 and get access to every feature you just saw.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="https://app.clinexus.com.ng/">
                <Button size="lg" className="gap-2 rounded-full bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--medical-teal))] px-10 text-white shadow-lg shadow-primary/30 hover:opacity-90">
                  Get Started Free <ArrowRight className="h-4 w-4" />
                </Button>
              </a>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="gap-2 rounded-full">
                  Request a Demo
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Demo;
