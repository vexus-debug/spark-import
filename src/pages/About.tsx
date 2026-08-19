import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { Shield, Zap, Heart, Lightbulb, CheckCircle2, ArrowRight, Target, Globe, Award, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const APP_URL = "https://app.clinexus.com.ng/";

const values = [
  { icon: Shield, title: "Security First", description: "Patient data is sacred. Enterprise-grade encryption, strict access controls, and full data isolation between clinics — non-negotiable." },
  { icon: Zap, title: "Reliability", description: "Your clinic can't afford downtime. 99.9% uptime with redundant infrastructure means Clinexus is there every shift, every day." },
  { icon: Lightbulb, title: "Innovation", description: "Healthcare evolves. So do we. We ship new features monthly, driven by real feedback from clinic owners across Nigeria." },
  { icon: Heart, title: "Healthcare Focus", description: "We're not a generic SaaS with a medical skin. Every feature, every workflow, every screen is designed for how clinics actually work." },
];

const stats = [
  { value: "500+", label: "Clinics Trust Us" },
  { value: "1.2M+", label: "Patients Managed" },
  { value: "99.9%", label: "Uptime Guarantee" },
  { value: "15+", label: "Specialties Supported" },
];

const pillars = [
  {
    icon: Target,
    title: "Our Mission",
    description: "To give every Nigerian clinic — from a solo practitioner to a multi-department facility — a single, powerful system that handles every aspect of their operations so they can focus on what matters most: patient care.",
  },
  {
    icon: Globe,
    title: "Our Vision",
    description: "A future where no clinic in Africa loses revenue, patient data, or precious time to administrative chaos. We are building the infrastructure that makes world-class healthcare management accessible to all.",
  },
  {
    icon: Award,
    title: "Our Commitment",
    description: "We are relentlessly committed to our users. Every feature is born from real conversations with clinic owners. Every update is tested against real workflows. We don't ship theory — we ship what works.",
  },
];

const whyUs = [
  "Purpose-built for Nigerian healthcare regulations and billing",
  "No complex setup — your clinic is live in under 24 hours",
  "Data never leaves Nigerian servers",
  "Dedicated onboarding and local support",
  "Continuous feature updates at no extra cost",
  "Scales from a solo practice to a multi-branch network",
];

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[hsl(var(--medical-blue-dark))] py-24 md:py-36">
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          {[700, 500, 300].map((size, i) => (
            <div key={i} className="absolute rounded-full border border-white/[0.04]" style={{ width: size, height: size }} />
          ))}
        </div>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[hsl(var(--medical-blue-dark))]" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(var(--primary)/0.12),transparent_60%)]" />

        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mx-auto max-w-3xl text-center"
          >
            <span className="mb-5 inline-block rounded-full border border-[hsl(var(--medical-teal))/30] bg-[hsl(var(--medical-teal))/10] px-4 py-1.5 text-sm font-semibold uppercase tracking-widest text-[hsl(var(--medical-teal))]">
              About Clinexus
            </span>
            <h1 className="mb-6 text-4xl font-extrabold leading-[1.1] tracking-tight text-white md:text-5xl lg:text-6xl">
              Built for the Business{" "}
              <span className="bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--medical-teal))] bg-clip-text text-transparent">
                of Healthcare
              </span>
            </h1>
            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-white/60">
              Clinexus is Nigeria's dedicated clinic management platform — engineered to eliminate administrative chaos and give healthcare professionals the tools to run a profitable, professional clinic.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="relative overflow-hidden py-24">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-secondary/40 via-background to-muted/30" />
        <div className="container relative z-10">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-widest text-primary">Our Story</span>
              <h2 className="mb-6 text-3xl font-bold text-foreground leading-tight">Born from Frustration.<br />Built with Purpose.</h2>
              <p className="mb-4 leading-relaxed text-muted-foreground">
                Clinexus started when our founders — a software engineer and a practicing physician — spent a weekend watching a busy clinic owner toggle between 6 different tools just to process a single patient visit. WhatsApp for reminders. Excel for billing. Paper files for records. A notebook for inventory.
              </p>
              <p className="mb-4 leading-relaxed text-muted-foreground">
                They asked a simple question: <strong className="text-foreground">Why isn't there ONE system that handles everything a clinic needs?</strong> Not a hospital system stripped down. Not a generic business tool with medical labels slapped on. Something purpose-built for how clinics actually work in Nigeria.
              </p>
              <p className="leading-relaxed text-muted-foreground">
                Today, Clinexus serves over 500 clinics across multiple specialties — helping them reduce admin overhead by 60%, cut no-shows by 40%, and reclaim hours every week that used to disappear into paperwork.
              </p>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <div className="rounded-2xl border border-border/60 bg-card p-8 shadow-sm">
                <h3 className="mb-6 text-lg font-bold text-foreground">Why Clinics Choose Clinexus</h3>
                <ul className="space-y-3">
                  {whyUs.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-8 border-t border-border pt-6">
                  <a href={APP_URL}>
                    <Button className="gap-2 rounded-xl bg-gradient-to-r from-primary to-[hsl(var(--medical-teal))] text-primary-foreground shadow hover:opacity-90">
                      See Clinexus in Action <ArrowRight className="h-4 w-4" />
                    </Button>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="relative overflow-hidden bg-[hsl(var(--medical-blue-dark))] py-16">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(var(--primary)/0.08),transparent_70%)]" />
        <div className="container relative z-10">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--medical-teal))] bg-clip-text text-5xl font-extrabold text-transparent">
                  {stat.value}
                </div>
                <div className="mt-2 text-sm font-medium text-white/50">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission / Vision / Commitment */}
      <section className="relative overflow-hidden py-24">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-secondary/40 via-background to-muted/30" />
        <div className="container relative z-10">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mb-14 text-center">
            <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-widest text-primary">What Drives Us</span>
            <h2 className="text-3xl font-bold text-foreground">Mission. Vision. Commitment.</h2>
          </motion.div>
          <div className="grid gap-6 md:grid-cols-3">
            {pillars.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative overflow-hidden rounded-2xl border border-border/50 bg-card p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/15 to-primary/5">
                  <p.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-3 text-lg font-bold text-foreground">{p.title}</h3>
                <p className="leading-relaxed text-muted-foreground text-sm">{p.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="relative overflow-hidden bg-[hsl(var(--medical-blue-dark))] py-24">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,hsl(var(--primary)/0.1),transparent_60%)]" />
        <div className="container relative z-10">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mb-14 text-center">
            <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-widest text-[hsl(var(--medical-teal))]">Our Values</span>
            <h2 className="text-3xl font-bold text-white">What We Stand For</h2>
          </motion.div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all hover:-translate-y-1 hover:border-white/20 hover:bg-white/8"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-[hsl(var(--primary))]/20 to-[hsl(var(--medical-teal))]/10">
                  <v.icon className="h-5 w-5 text-[hsl(var(--medical-teal))]" />
                </div>
                <h4 className="mb-2 font-semibold text-white">{v.title}</h4>
                <p className="text-sm leading-relaxed text-white/50">{v.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden py-24">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-secondary/40 via-background to-muted/30" />
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto max-w-2xl rounded-2xl border border-border bg-card p-12 text-center shadow-lg"
          >
            <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-widest text-primary">Get Started</span>
            <h2 className="mb-4 text-3xl font-extrabold text-foreground">Ready to Run a Smarter Clinic?</h2>
            <p className="mb-8 text-muted-foreground">
              Join 500+ clinics already using Clinexus to save time, reduce errors, and grow revenue. Your first month is just <strong className="text-foreground">₦10,000</strong> — full access, all features.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a href={APP_URL}>
                <Button size="lg" className="gap-2 rounded-full bg-gradient-to-r from-primary to-[hsl(var(--medical-teal))] px-8 text-primary-foreground shadow-md hover:opacity-90">
                  Get Started <ArrowRight className="h-4 w-4" />
                </Button>
              </a>
              <a href={APP_URL}>
                <Button size="lg" variant="outline" className="rounded-full px-8">
                  Book a Demo
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
