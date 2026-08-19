import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Users, CalendarCheck, Receipt, CreditCard, ShieldCheck,
  Package, BarChart3, FileUp, ArrowRight, Lock, Bell,
  Stethoscope, ClipboardList, Globe, Smartphone,
  UserCog, FileText, Pill, FlaskConical,
  MessageSquare, Workflow, LayoutDashboard, Star,
  Clock, ShoppingBag, Settings, ScrollText, Activity,
  DollarSign, TrendingUp, Truck, ShoppingCart, BookOpen
} from "lucide-react";

const categories = [
  {
    name: "Overview",
    modules: [
      { icon: LayoutDashboard, title: "Dashboard Home", description: "Walk in every morning and know exactly where your clinic stands — who's coming in, how much you've made, and what needs your attention right now.", benefits: ["See today's appointments at a glance", "Track revenue as it comes in", "Catch what needs action fast", "Jump straight to what matters"] },
    ],
  },
  {
    name: "Patient Care",
    modules: [
      { icon: Users, title: "Patient Management", description: "Pull up any patient's full history in seconds — no more digging through paper files or asking patients to repeat their story.", benefits: ["Full history in one place", "Find any patient instantly", "No more duplicate records", "Link family members together"] },
      { icon: FileText, title: "Patient Profiles", description: "Everything about a patient — treatments, bills, prescriptions, files — on one screen, so you never miss a detail during a visit.", benefits: ["One page, full patient story", "See the whole treatment journey", "Bills and payments in view", "Photos and documents on hand"] },
      { icon: CalendarCheck, title: "Appointments", description: "Fill your chairs and stop losing money to no-shows. Book, move, and manage appointments in a few taps, and let reminders bring patients back.", benefits: ["Book and reschedule in seconds", "Handle walk-ins without chaos", "Automatic reminders cut no-shows", "Assign the right room or chair"] },
      { icon: ClipboardList, title: "Waiting List", description: "Keep your waiting room calm and organized. Know who's next, how long they've waited, and who needs to be seen first.", benefits: ["Always know who's next", "Flag urgent cases instantly", "Give patients a real wait time", "Turn walk-ins into bookings"] },
      { icon: Clock, title: "Schedules", description: "Set each staff member's working hours once, and let the system stop double-bookings and awkward gaps automatically.", benefits: ["Set hours for every provider", "Block off breaks and days out", "No more double-booking", "See everyone's schedule at once"] },
      { icon: Star, title: "Patient Reviews", description: "Find out what patients really think before it costs you business, and use it to keep improving.", benefits: ["Collect ratings easily", "Read honest feedback", "Spot problems early", "See how each provider is doing"] },
    ],
  },
  {
    name: "Clinical",
    modules: [
      { icon: Stethoscope, title: "Clinical Charts", description: "Chart conditions and procedures the way your specialty actually works — dental clinics get a full tooth-by-tooth chart tied straight to billing.", benefits: ["Chart the way you're used to", "Record findings by area", "See procedure history at a glance", "Charts connect straight to billing"] },
      { icon: ScrollText, title: "Treatments", description: "Price your treatments once and bill consistently every time, with every material used automatically accounted for.", benefits: ["Set your prices once", "Log treatments per patient", "Charts, bills and treatments stay linked", "Know the cost of materials used"] },
      { icon: Pill, title: "Prescriptions", description: "Write clean, professional prescriptions in moments and keep a full record for every patient, every time.", benefits: ["Write prescriptions fast", "Dosage and duration built in", "Full history per patient", "Ready to print instantly"] },
      { icon: FileUp, title: "Consent Forms", description: "Protect your clinic with signed consent on file for every procedure — no more chasing paperwork or worrying about disputes.", benefits: ["Reusable form templates", "Signed consent per patient", "Dated and time-stamped", "Ready if you're ever questioned"] },
    ],
  },
  {
    name: "Lab Management",
    modules: [
      { icon: FlaskConical, title: "Lab Work (External)", description: "Send cases out to external labs and know exactly where they stand, instead of chasing phone calls for updates.", benefits: ["Send orders with full case details", "Track every case's status", "Attach everything the lab needs", "Know when it's coming back"] },
      { icon: Activity, title: "Lab Dashboard", description: "See your whole lab operation at a glance — what's active, what's pending, and who's carrying the workload.", benefits: ["See every active case at once", "Spot overloaded technicians", "Track what's finished", "Measure lab performance"] },
      { icon: FlaskConical, title: "Lab Cases", description: "Manage every lab job from start to finish — shade, material, urgency, and fees — so nothing falls through the cracks.", benefits: ["Match shade and material precisely", "Flag urgent cases", "Know the fee for every case", "Follow each job to completion"] },
      { icon: UserCog, title: "Lab Technicians", description: "Know who's doing what in your lab, and hold every technician accountable for their output.", benefits: ["A profile for every technician", "See who's assigned to what", "Track specializations", "Measure output over time"] },
      { icon: Receipt, title: "Lab Billing", description: "Keep lab money separate from clinical income so you always know your true lab margins.", benefits: ["Lab invoices kept separate", "See real costs and margins", "Know what's been paid", "Rolls up into overall finances"] },
      { icon: Settings, title: "Lab Settings", description: "Set your lab's work types, materials and standard prices once, then let the system apply them every time.", benefits: ["Define your work types", "Keep a materials catalog", "Set default pricing", "Manage shade guides"] },
    ],
  },
  {
    name: "Finance",
    modules: [
      { icon: Receipt, title: "Billing & Invoices", description: "Get paid faster and stop losing money to forgotten bills. Create clear invoices, chase outstanding balances, and issue receipts in one place.", benefits: ["Clean, itemized invoices", "Discounts and tax handled", "See who still owes you", "Automatic payment reminders"] },
      { icon: DollarSign, title: "Treatment Estimates", description: "Give patients an honest price before treatment starts, so there's no awkward conversation about cost after the fact.", benefits: ["Clear cost breakdown upfront", "Turn an estimate into an invoice", "Easy for patients to understand", "Price out full treatment plans"] },
      { icon: CreditCard, title: "Payment Plans", description: "Let patients pay in installments so cost is never the reason they walk away from treatment — while you keep track of every naira owed.", benefits: ["Set up installment plans", "Tied directly to invoices", "See what's still outstanding", "Automatic payment reminders"] },
      { icon: TrendingUp, title: "Expenses", description: "See exactly where your money is going every month, so you can cut waste and protect your margins.", benefits: ["Track spending by category", "Know who you're paying and why", "Filter by any date range", "Clear expense reports"] },
      { icon: DollarSign, title: "Commission Payouts", description: "Pay your staff accurately and on time, without spending hours doing the maths by hand every month.", benefits: ["Commissions calculated for you", "See what each staff member earns", "Track what's still owed", "Tied directly to treatments done"] },
      { icon: BarChart3, title: "Revenue Allocation", description: "Know exactly which services are actually making you money, so you can double down on what works.", benefits: ["Split revenue by category", "See where money really comes from", "Clear visual breakdowns", "Set your own rules"] },
      { icon: TrendingUp, title: "Profitability", description: "Stop guessing which treatments and providers are actually profitable — see it clearly and make decisions with confidence.", benefits: ["Revenue vs. cost, side by side", "Profit by treatment type", "Profit by provider", "Spot trends over time"] },
    ],
  },
  {
    name: "Reports & Analytics",
    modules: [
      { icon: BarChart3, title: "Reports", description: "Get the answers you need for smarter decisions — which rooms are busiest, which patients are most valuable, and which treatments actually pay.", benefits: ["Room usage at a glance", "Know your most valuable patients", "See revenue trends clearly", "Export to PDF or CSV anytime"] },
      { icon: BarChart3, title: "Advanced Analytics", description: "Look beyond the day-to-day and spot the trends that shape your clinic's future, on your own timeline.", benefits: ["Spot patterns before they cost you", "Compare any two periods", "Pick your own date ranges", "Make decisions with real data"] },
    ],
  },
  {
    name: "Inventory & Supply Chain",
    modules: [
      { icon: Package, title: "Inventory", description: "Never run out of what you need mid-procedure again. Know your stock levels in real time and get warned before things run low or expire.", benefits: ["Real-time stock counts", "Alerts before you run out", "Know what's about to expire", "Scan items in and out"] },
      { icon: DollarSign, title: "Inventory Costs", description: "See what your supplies are really costing you over time, so buying decisions get easier.", benefits: ["Track cost per item", "See how fast things are used", "Watch cost trends over time", "Know the impact on your budget"] },
      { icon: ScrollText, title: "Treatment Materials", description: "Know exactly how much each procedure really costs you in materials, automatically, every single time.", benefits: ["Materials tied to treatments", "Usage tracked automatically", "Real cost per procedure", "Reorder before you run dry"] },
      { icon: Truck, title: "Suppliers", description: "Keep every supplier's contact, terms and order history in one place, so restocking is never a scramble.", benefits: ["All suppliers in one directory", "Contacts always on hand", "Know your payment terms", "Full order history"] },
      { icon: ShoppingCart, title: "Purchase Orders", description: "Order supplies with confidence and know exactly what's arrived and what's still on the way.", benefits: ["Create orders in minutes", "Track deliveries", "Stock updates itself on arrival", "Order straight from your suppliers"] },
    ],
  },
  {
    name: "Administration",
    modules: [
      { icon: UserCog, title: "Staff Management", description: "Give every staff member the right access — no more, no less — and manage schedules and performance without the guesswork.", benefits: ["9 ready-made role types", "Control who sees what", "Manage everyone's schedule", "Track performance over time"] },
      { icon: FileText, title: "Documents", description: "Keep licenses, certificates and contracts safe and easy to find, so you're never scrambling before an inspection.", benefits: ["All documents in one place", "Organized by category", "Find anything in seconds", "Ready for any audit"] },
      { icon: ShieldCheck, title: "Audit Log", description: "Know exactly who did what and when in your clinic — protect yourself and your patients with a full record of every action.", benefits: ["Every action recorded", "Know exactly who did what", "Time-stamped for accuracy", "Search history anytime"] },
      { icon: Workflow, title: "Automation", description: "Stop doing the same manual follow-ups every day — set it up once and let reminders and messages send themselves.", benefits: ["Set triggers once", "Reminders sent automatically", "Follow-up messages on autopilot", "Reach patients by SMS or email"] },
      { icon: Globe, title: "Website Settings", description: "Give your clinic a professional online presence patients can trust, without hiring a web designer.", benefits: ["Your own branded clinic page", "List your services", "Introduce your team", "Show your contact info and location"] },
      { icon: ShoppingBag, title: "Shop Management", description: "Turn your product sales into another revenue stream, with everything tracked automatically.", benefits: ["Build your product catalog", "Set your own prices", "Track every order", "Sell directly from your clinic page"] },
      { icon: Settings, title: "Clinic Settings", description: "Set your clinic's name, logo, hours and preferences once, and have it reflected everywhere automatically.", benefits: ["Your branding, everywhere", "Contact details in one place", "Set your operating hours", "Preferences that stick"] },
    ],
  },
  {
    name: "Communication",
    modules: [
      { icon: MessageSquare, title: "Messages", description: "Get your team off scattered WhatsApp chats and keep every clinic conversation organized in one place.", benefits: ["Team chat built in", "Share files instantly", "Know when messages are read", "Full conversation history"] },
      { icon: Bell, title: "Notifications", description: "Never miss a payment, a lab result, or an appointment change again — get alerted the moment it matters.", benefits: ["Instant alerts as things happen", "Never miss an unread update", "Alerts for every key event", "Choose what you get notified about"] },
      { icon: BookOpen, title: "Tutorials", description: "Get new staff up and running fast, without you having to train them on the system yourself.", benefits: ["Simple step-by-step guides", "Guides matched to each role", "Walkthroughs for every feature", "Help available whenever it's needed"] },
      { icon: Smartphone, title: "My Profile", description: "Every staff member controls their own details and notification settings, so you don't have to.", benefits: ["Update your own details", "Choose your notifications", "Manage your password", "See your own activity"] },
    ],
  },
  {
    name: "Public-Facing",
    modules: [
      { icon: Globe, title: "Public Clinic Site", description: "Get found online and let patients book you directly, with a professional page that's ready in minutes.", benefits: ["Your own branded website", "Show off your services", "Patients book online directly", "Built to be found on Google"] },
      { icon: ShoppingBag, title: "Public Shop", description: "Sell products online without extra work — your storefront and stock stay perfectly in sync.", benefits: ["Sell products online", "Stock updates automatically", "Patients order anytime", "Payments handled for you"] },
      { icon: ShoppingCart, title: "Product Pages", description: "Give every product its own page with photos and pricing, so patients can buy with confidence.", benefits: ["Clear product details", "Photos that sell", "Prices shown upfront", "Add to cart with one tap"] },
    ],
  },
];

const Features = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[hsl(var(--medical-blue-dark))] py-24 md:py-32">
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          {[600, 450, 300].map((size, i) => (
            <div key={i} className="absolute rounded-full border border-white/[0.05]" style={{ width: size, height: size }} />
          ))}
        </div>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent to-[hsl(var(--medical-blue-dark))]" />

        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mx-auto max-w-3xl text-center"
          >
            <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-widest text-[hsl(var(--medical-teal))]">
              44 Modules · 10 Categories
            </span>
            <h1 className="mb-6 text-4xl font-extrabold leading-[1.1] tracking-tight text-white md:text-5xl">
              Everything You Need to{" "}
              <span className="bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--medical-teal))] bg-clip-text text-transparent">
                Run a Clinic That Runs Itself
              </span>
            </h1>
            <p className="mx-auto max-w-xl text-lg leading-relaxed text-white/60">
              You didn't go into healthcare to spend your nights on spreadsheets. Clinexus handles the admin so you can go home on time and focus on your patients.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features by Category */}
      <section className="relative overflow-hidden py-24">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-secondary/40 via-background to-muted/30" />

        <div className="container relative z-10">
          {categories.map((cat, catIdx) => (
            <div key={cat.name} className="mb-16 last:mb-0">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="mb-6 flex items-center gap-3"
              >
                <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/8 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-primary">
                  {cat.name}
                </span>
                <div className="h-px flex-1 bg-border/50" />
              </motion.div>
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {cat.modules.map((mod, i) => (
                  <motion.div
                    key={mod.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.03 }}
                    className="group rounded-2xl border border-border/50 bg-card/80 p-6 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5"
                  >
                    <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-primary/15 to-primary/5">
                      <mod.icon className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="mb-2 text-base font-semibold text-foreground">{mod.title}</h3>
                    <p className="mb-4 text-sm leading-relaxed text-muted-foreground">{mod.description}</p>
                    <ul className="space-y-1.5">
                      {mod.benefits.map((b) => (
                        <li key={b} className="flex items-start gap-2 text-xs text-muted-foreground">
                          <ArrowRight className="mt-0.5 h-3 w-3 shrink-0 text-primary/70" /> {b}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Security Trust Signal */}
      <section className="relative overflow-hidden bg-[hsl(var(--medical-blue-dark))] py-20">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent" />
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto max-w-2xl rounded-2xl border border-white/10 bg-white/5 p-10 text-center backdrop-blur-sm"
          >
            <Lock className="mx-auto mb-4 h-10 w-10 text-[hsl(var(--medical-teal))]" />
            <h3 className="mb-3 text-xl font-bold text-white">9 Roles · Row-Level Security · Full Audit Trail</h3>
            <p className="text-white/60">
              Owner, Admin, Dentist, Receptionist, Hygienist, Assistant, Accountant, Lab Technician, Lab Assistant — everyone sees only what they need. Every action is logged, so you always know who did what.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden py-20">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[hsl(var(--primary))]/10 via-transparent to-[hsl(var(--medical-teal))]/10" />
        <div className="container relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-4 text-3xl font-bold text-foreground">
              Stop Losing Revenue to Broken Processes
            </h2>
            <p className="mx-auto mb-8 max-w-xl text-muted-foreground">
              Every day without a proper system costs you patients, money, and peace of mind. Start your free trial today.
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

export default Features;
