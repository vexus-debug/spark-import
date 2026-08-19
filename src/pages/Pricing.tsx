import { useState } from "react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight, Zap, TrendingUp, Crown, Star } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const WHATSAPP_NUMBER = "2349117970629";

const plans = [
  {
    name: "Starter",
    emoji: "🟢",
    icon: Zap,
    monthlyPrice: 5000,
    tagline: "For small clinics that want structure and professionalism",
    popular: false,
    accent: "from-emerald-500/10 to-emerald-500/5",
    border: "border-emerald-200",
    badge: null,
    sections: [
      { label: "Overview", items: ["Dashboard Home"] },
      { label: "Patient Care", items: ["Patients", "Patient Profile", "Appointments", "Waiting List", "Schedules"] },
      { label: "Clinical", items: ["Dental Charts", "Treatments", "Prescriptions", "Consent Forms"] },
      { label: "Finance", items: ["Billing / Invoices", "Estimates"] },
      { label: "Administration", items: ["Staff Management (basic roles)", "Clinic Settings", "Tutorials", "My Profile"] },
      { label: "Communication", items: ["Notifications"] },
      { label: "Public Presence", items: ["Public Clinic Website", "Website Customization"] },
    ],
  },
  {
    name: "Growth",
    emoji: "🔵",
    icon: TrendingUp,
    monthlyPrice: 10000,
    tagline: "For clinics that want financial control and operational efficiency",
    popular: true,
    accent: "from-primary/10 to-primary/5",
    border: "border-primary",
    badge: "Most Popular",
    sections: [
      { label: "Everything in Starter, PLUS:", items: [] },
      { label: "Finance & Revenue Control", items: ["Payment Plans", "Expenses Tracking", "Commission Payouts", "Revenue Allocation", "Profitability Analysis"] },
      { label: "Inventory & Supply Chain", items: ["Inventory Management", "Inventory Cost Tracking", "Treatment Material Tracking", "Suppliers Management", "Purchase Orders"] },
      { label: "Reports & Monitoring", items: ["Standard Reports"] },
      { label: "Staff & Operations", items: ["Audit Log", "Internal Messaging"] },
      { label: "Patient Experience", items: ["Patient Reviews"] },
      { label: "Public Sales", items: ["Shop Management", "Public Product Storefront", "Product Pages"] },
    ],
  },
  {
    name: "Pro",
    emoji: "🟣",
    icon: Crown,
    monthlyPrice: 20000,
    tagline: "For advanced clinics that want automation, analytics, and full control",
    popular: false,
    accent: "from-purple-500/10 to-purple-500/5",
    border: "border-purple-300",
    badge: "Full Power",
    sections: [
      { label: "Everything in Growth, PLUS:", items: [] },
      { label: "Automation & Intelligence", items: ["Workflow Automation", "Advanced Analytics"] },
      { label: "Full Lab Management System", items: ["Lab Work Orders", "Lab Dashboard", "Lab Case Management", "Lab Technician Management", "Lab Billing", "Lab Settings"] },
      { label: "Advanced Administration", items: ["Document Management", "Full Role Permission System"] },
    ],
  },
];

const faqs = [
  { q: "Is there a free trial?", a: "We don't offer a free trial — instead, your first month is just ₦10,000 flat, giving you full access to all features across every plan. From month two, you choose the plan that fits your clinic best." },
  { q: "What happens after the first month?", a: "After your first month, you pick the plan that best matches your clinic's needs — Starter at ₦5,000/month, Growth at ₦10,000/month, or Pro at ₦20,000/month. No surprises." },
  { q: "Can I change plans later?", a: "Absolutely. You can upgrade or downgrade your plan at any time from your account settings." },
  { q: "Is my data secure?", a: "Yes. We use 256-bit encryption, role-based access controls, and fully isolated multi-tenant architecture to keep your data safe." },
  { q: "Do you offer discounts for annual billing?", a: "Yes! Annual billing saves you 20% compared to monthly billing on all plans." },
  { q: "How many staff accounts do I get?", a: "Starter supports basic staff roles. Growth and Pro plans support expanded team management with full audit logs and permission controls." },
];

const formatPrice = (amount: number) => `₦${amount.toLocaleString()}`;

const getWhatsAppLink = (planName: string, price: string, billing: string) => {
  const message = encodeURIComponent(
    `Hi! I'm interested in the ClineXus *${planName}* plan (${price}/${billing}). I'd like to get started.`
  );
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
};

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);

  const getPrice = (monthlyPrice: number) => {
    if (isYearly) {
      const yearlyTotal = monthlyPrice * 12;
      const discounted = Math.round(yearlyTotal * 0.8); // 20% off
      return discounted;
    }
    return monthlyPrice;
  };

  const getOriginalYearlyPrice = (monthlyPrice: number) => monthlyPrice * 12;

  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-secondary via-background to-secondary py-24">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(var(--primary)/0.08),transparent_60%)]" />
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
              💸 Simple, Transparent Pricing
            </span>
            <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-foreground md:text-5xl lg:text-6xl">
              Pick Your Plan.<br className="hidden md:block" /> Run a Smarter Clinic.
            </h1>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground">
              No hidden fees. No surprises. Just powerful tools built for Nigerian healthcare professionals — from solo practitioners to multi-department clinics.
            </p>

            {/* Billing Toggle */}
            <div className="mb-8 flex items-center justify-center gap-4">
              <span className={`text-sm font-semibold ${!isYearly ? "text-foreground" : "text-muted-foreground"}`}>Monthly</span>
              <button
                onClick={() => setIsYearly(!isYearly)}
                className={`relative inline-flex h-8 w-14 items-center rounded-full transition-colors ${
                  isYearly ? "bg-primary" : "bg-muted-foreground/30"
                }`}
              >
                <span
                  className={`inline-block h-6 w-6 transform rounded-full bg-white shadow-md transition-transform ${
                    isYearly ? "translate-x-7" : "translate-x-1"
                  }`}
                />
              </button>
              <span className={`text-sm font-semibold ${isYearly ? "text-foreground" : "text-muted-foreground"}`}>
                Yearly
              </span>
              {isYearly && (
                <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-bold text-green-700 dark:bg-green-900/30 dark:text-green-400">
                  Save 20%
                </span>
              )}
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3">
              <a href={getWhatsAppLink("ClineXus", "", "")}>
                <Button size="lg" className="gap-2 rounded-full bg-gradient-to-r from-primary to-medical-teal px-8 text-primary-foreground shadow-lg hover:opacity-90">
                  Get Started Now <ArrowRight className="h-4 w-4" />
                </Button>
              </a>
              <a href={getWhatsAppLink("ClineXus", "Demo Request", "")}>
                <Button size="lg" variant="outline" className="rounded-full px-8">
                  Request a Demo
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* First Month Offer Banner */}
      <section className="py-8">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="relative overflow-hidden rounded-2xl border-2 border-amber-400 bg-gradient-to-r from-amber-50 via-yellow-50 to-amber-50 px-8 py-7 shadow-lg dark:from-amber-950/30 dark:via-yellow-950/20 dark:to-amber-950/30"
          >
            <div className="pointer-events-none absolute -right-8 -top-8 h-40 w-40 rounded-full bg-amber-300/20" />
            <div className="pointer-events-none absolute -bottom-8 -left-8 h-32 w-32 rounded-full bg-yellow-300/20" />
            <div className="relative flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-amber-400/30 text-3xl shadow-inner">
                  🎁
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="rounded-full bg-amber-400 px-3 py-0.5 text-xs font-black uppercase tracking-wider text-amber-900">
                      Special Offer
                    </span>
                    <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                  </div>
                  <h2 className="mt-1 text-xl font-extrabold text-amber-900 dark:text-amber-300 md:text-2xl">
                    First Month: <span className="text-amber-600">₦10,000 Flat</span> — All Features, Every Plan
                  </h2>
                  <p className="mt-1 max-w-xl text-sm text-amber-800/80 dark:text-amber-400/80">
                    Your first month unlocks the <strong>full ClineXus experience</strong> — every feature, every module, no restrictions.
                    From <strong>Month 2</strong>, simply choose the plan that fits your clinic. No pressure, no hidden fees.
                  </p>
                </div>
              </div>
              <a href={getWhatsAppLink("ClineXus", "₦10,000 First Month", "first month")} className="shrink-0">
                <Button className="gap-2 rounded-xl bg-amber-500 px-6 py-5 text-base font-bold text-white shadow-md hover:bg-amber-600">
                  Start for ₦10,000 <ArrowRight className="h-4 w-4" />
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Plans */}
      <section className="py-12">
        <div className="container">
          <p className="mb-10 text-center text-sm font-semibold text-muted-foreground">
            <span className="rounded-full bg-primary/10 px-4 py-1.5 text-primary">
              Pricing below applies from Month 2 — pick the plan that fits your clinic
            </span>
          </p>
          <div className="grid gap-8 lg:grid-cols-3">
            {plans.map((plan, index) => {
              const displayPrice = getPrice(plan.monthlyPrice);
              const billingLabel = isYearly ? "year" : "month";
              const whatsAppUrl = getWhatsAppLink(plan.name, formatPrice(displayPrice), billingLabel);

              return (
                <motion.div
                  key={plan.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative flex flex-col rounded-2xl border-2 bg-card shadow-sm transition-shadow hover:shadow-lg ${
                    plan.popular ? `${plan.border} ring-2 ring-primary/30 shadow-md` : plan.border
                  }`}
                >
                  {/* Top gradient strip */}
                  <div className={`rounded-t-2xl bg-gradient-to-br ${plan.accent} px-8 pb-6 pt-8`}>
                    {plan.badge && (
                      <span className={`mb-3 inline-block rounded-full px-3 py-1 text-xs font-bold ${
                        plan.popular ? "bg-primary text-primary-foreground" : "bg-purple-500 text-white"
                      }`}>
                        {plan.badge}
                      </span>
                    )}
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">{plan.emoji}</span>
                      <h3 className="text-xl font-extrabold text-foreground">{plan.name}</h3>
                    </div>
                    <div className="mt-3 flex items-baseline gap-1">
                      <span className="text-5xl font-extrabold text-foreground">
                        {formatPrice(displayPrice)}
                      </span>
                      <span className="text-muted-foreground">/{billingLabel}</span>
                    </div>
                    {isYearly && (
                      <div className="mt-1 flex items-center gap-2">
                        <span className="text-sm text-muted-foreground line-through">
                          {formatPrice(getOriginalYearlyPrice(plan.monthlyPrice))}
                        </span>
                        <span className="rounded-full bg-green-100 px-2 py-0.5 text-xs font-bold text-green-700 dark:bg-green-900/30 dark:text-green-400">
                          Save {formatPrice(getOriginalYearlyPrice(plan.monthlyPrice) - displayPrice)}
                        </span>
                      </div>
                    )}
                    <p className="mt-2 text-sm text-muted-foreground">{plan.tagline}</p>
                  </div>

                  {/* Features */}
                  <div className="flex flex-1 flex-col px-8 pb-8 pt-6">
                    <div className="flex-1 space-y-5">
                      {plan.sections.map((section) => (
                        <div key={section.label}>
                          <p className={`mb-2 text-xs font-bold uppercase tracking-widest ${
                            section.label.includes("PLUS") ? "text-primary" : "text-muted-foreground"
                          }`}>
                            {section.label}
                          </p>
                          <ul className="space-y-1.5">
                            {section.items.map((item) => (
                              <li key={item} className="flex items-start gap-2 text-sm text-card-foreground">
                                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>

                    <a href={whatsAppUrl} target="_blank" rel="noopener noreferrer" className="mt-8 block">
                      <Button
                        className={`w-full gap-2 rounded-xl py-5 text-base font-semibold ${
                          plan.popular
                            ? "bg-gradient-to-r from-primary to-medical-teal text-primary-foreground shadow-md hover:opacity-90"
                            : ""
                        }`}
                        variant={plan.popular ? "default" : "outline"}
                      >
                        Get Started <ArrowRight className="h-4 w-4" />
                      </Button>
                    </a>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Trust strip */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 flex flex-wrap items-center justify-center gap-8 text-center"
          >
            {["No credit card required", "Cancel anytime", "Nigerian-built & hosted", "256-bit encryption"].map((item) => (
              <div key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                {item}
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-muted/30 py-20">
        <div className="container">
          <SectionHeading badge="FAQ" title="Frequently Asked Questions" />
          <div className="mx-auto max-w-2xl">
            <Accordion type="single" collapsible className="space-y-2">
              {faqs.map((faq, i) => (
                <AccordionItem key={i} value={`faq-${i}`} className="rounded-xl border border-border bg-card px-6">
                  <AccordionTrigger className="text-left font-semibold text-card-foreground">{faq.q}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">{faq.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-gradient-to-r from-primary to-medical-teal py-16">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="mb-3 text-3xl font-extrabold text-primary-foreground">Ready to Transform Your Clinic?</h2>
            <p className="mx-auto mb-8 max-w-xl text-primary-foreground/80">
              Book a live demo and see exactly how ClineXus works for your practice — no commitment needed.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a href={getWhatsAppLink("ClineXus", "Demo Request", "")} target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="secondary" className="gap-2 rounded-full px-8 font-semibold">
                  Book a Demo <ArrowRight className="h-4 w-4" />
                </Button>
              </a>
              <a href={getWhatsAppLink("ClineXus", "", "")} target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" className="gap-2 rounded-full border-primary-foreground/60 bg-transparent px-8 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground">
                  Get Started Now
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Pricing;
