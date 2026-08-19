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
      { icon: LayoutDashboard, title: "Dashboard Home", description: "KPIs at a glance — today's appointments, revenue snapshot, recent activity summary, and actionable alerts.", benefits: ["Real-time KPI cards", "Today's appointment overview", "Recent activity feed", "Quick-action shortcuts"] },
    ],
  },
  {
    name: "Patient Care",
    modules: [
      { icon: Users, title: "Patient Management", description: "Register, edit, and search patient records — demographics, medical history, allergies, emergency contacts, and family linking. Find any patient in seconds.", benefits: ["Complete medical & visit history", "Smart search with instant results", "Automated duplicate detection", "Family & group linking"] },
      { icon: FileText, title: "Patient Profiles", description: "Detailed per-patient view with full treatment history, clinical charts, invoices, prescriptions, uploaded files, and appointment logs.", benefits: ["360° patient overview", "Treatment timeline", "Linked invoices & payments", "Document & image gallery"] },
      { icon: CalendarCheck, title: "Appointments", description: "Schedule, reschedule, and cancel appointments with drag-and-drop ease. Support walk-ins, assign rooms or chairs, and send automated reminders to cut no-shows.", benefits: ["Drag-and-drop scheduling", "Walk-in & waitlist support", "SMS & email reminders", "Room/chair assignment per provider"] },
      { icon: ClipboardList, title: "Waiting List", description: "Manage walk-in patients and queues digitally. Track wait times, prioritize urgent cases, and keep patients informed.", benefits: ["Real-time queue management", "Priority flagging", "Estimated wait times", "Walk-in to appointment conversion"] },
      { icon: Clock, title: "Schedules", description: "Define each provider's weekly availability — working days, start/end times, break periods. Feeds directly into appointment booking.", benefits: ["Per-provider availability", "Break & off-day management", "Automatic booking slot generation", "Multi-provider views"] },
      { icon: Star, title: "Patient Reviews", description: "Collect and track patient ratings and feedback. Understand satisfaction trends and identify areas for improvement.", benefits: ["Star rating collection", "Written feedback tracking", "Satisfaction trend analytics", "Per-provider feedback"] },
    ],
  },
  {
    name: "Clinical",
    modules: [
      { icon: Stethoscope, title: "Clinical Charts", description: "Condition and procedure charting with specialty-level detail. For dental clinics, this includes a full tooth-by-tooth diagram — fully integrated with treatments and billing.", benefits: ["Interactive charting interface", "Surface-level condition recording", "Procedure history per area", "Auto-links to treatment records"] },
      { icon: ScrollText, title: "Treatments", description: "Maintain a treatment catalog with pricing. Record patient treatments linked to clinical charts, invoices, and materials used.", benefits: ["Treatment catalog management", "Per-patient treatment records", "Linked to charts & billing", "Material cost tracking"] },
      { icon: Pill, title: "Prescriptions", description: "Generate professional prescriptions with medication name, dosage, frequency, and duration. Full prescription history per patient.", benefits: ["Digital prescription creation", "Dosage & frequency fields", "Prescription history", "Print-ready formatting"] },
      { icon: FileUp, title: "Consent Forms", description: "Create reusable consent form templates. Track signed consents per patient with timestamps for compliance.", benefits: ["Template builder", "Per-patient consent tracking", "Date & signature logging", "Compliance-ready records"] },
    ],
  },
  {
    name: "Lab Management",
    modules: [
      { icon: FlaskConical, title: "Lab Work (External)", description: "Send lab orders to external labs with all case details. Track status from submission to delivery.", benefits: ["External lab order management", "Status tracking", "Case detail attachments", "Delivery tracking"] },
      { icon: Activity, title: "Lab Dashboard", description: "Internal lab overview — see all active cases, pending work, completed jobs, and technician workloads at a glance.", benefits: ["Active case overview", "Workload visualization", "Completion tracking", "Performance metrics"] },
      { icon: FlaskConical, title: "Lab Cases", description: "Full case management — work type, shade, material, urgency, fees, and assigned technician. The complete lifecycle of every lab job.", benefits: ["Work type & shade matching", "Material specification", "Urgency flagging", "Fee tracking per case"] },
      { icon: UserCog, title: "Lab Technicians", description: "Manage staff assigned to lab roles. Track assignments, specializations, and output.", benefits: ["Technician profiles", "Case assignment tracking", "Specialization tagging", "Output & performance metrics"] },
      { icon: Receipt, title: "Lab Billing", description: "Lab-specific invoicing separate from clinical billing. Track costs, margins, and payments for lab operations.", benefits: ["Lab-specific invoices", "Cost & margin tracking", "Payment status", "Integrated with main finance"] },
      { icon: Settings, title: "Lab Settings", description: "Configure lab-specific options — work types, materials catalog, shade guides, and default pricing.", benefits: ["Work type configuration", "Materials catalog", "Default pricing rules", "Shade guide management"] },
    ],
  },
  {
    name: "Finance",
    modules: [
      { icon: Receipt, title: "Billing & Invoices", description: "Create detailed invoices with line items, discounts, and tax. Track payment status, send reminders, and generate receipts.", benefits: ["Line-item invoicing", "Discount & tax support", "Payment status tracking", "Automated reminders"] },
      { icon: DollarSign, title: "Treatment Estimates", description: "Generate cost estimates before treatment begins. Patients know what to expect, and you have a clear path to invoicing.", benefits: ["Pre-treatment cost breakdown", "Convert estimate to invoice", "Patient-facing format", "Treatment plan pricing"] },
      { icon: CreditCard, title: "Payment Plans", description: "Offer installment-based payment plans linked to invoices. Track payments received, outstanding balances, and due dates.", benefits: ["Installment scheduling", "Linked to invoices", "Outstanding balance tracking", "Payment reminder automation"] },
      { icon: TrendingUp, title: "Expenses", description: "Track clinic expenses by category, vendor, and date. Understand where money goes to control costs.", benefits: ["Category-based tracking", "Vendor management", "Date range filtering", "Expense reports"] },
      { icon: DollarSign, title: "Commission Payouts", description: "Automatically calculate staff commissions based on treatments performed. Track payouts and outstanding amounts.", benefits: ["Rule-based commission calculation", "Per-staff payout tracking", "Outstanding commission reports", "Linked to treatments"] },
      { icon: BarChart3, title: "Revenue Allocation", description: "Define rules to distribute revenue by treatment category. Know exactly where your money is coming from and going.", benefits: ["Rule-based allocation", "Category-level distribution", "Visual breakdowns", "Configurable rules"] },
      { icon: TrendingUp, title: "Profitability", description: "Revenue vs. cost analysis per treatment, per provider, and per period. Make data-driven decisions about your practice.", benefits: ["Revenue vs. cost dashboards", "Per-treatment profitability", "Per-provider analysis", "Trend visualization"] },
    ],
  },
  {
    name: "Reports & Analytics",
    modules: [
      { icon: BarChart3, title: "Reports", description: "Standard reports for room utilization, patient lifetime value, most profitable treatments, revenue trends, and more.", benefits: ["Room utilization reports", "Patient LTV analysis", "Revenue trend charts", "Exportable PDF & CSV"] },
      { icon: BarChart3, title: "Advanced Analytics", description: "Deeper data analysis with trend detection, comparative periods, and custom date ranges for strategic decision-making.", benefits: ["Trend detection", "Period-over-period comparison", "Custom date ranges", "Strategic insights"] },
    ],
  },
  {
    name: "Inventory & Supply Chain",
    modules: [
      { icon: Package, title: "Inventory", description: "Track every supply, medication, and material in real time. Get alerts before stock runs out and manage expiry dates.", benefits: ["Real-time stock levels", "Min-stock alerts", "Expiry date tracking", "Barcode/SKU support"] },
      { icon: DollarSign, title: "Inventory Costs", description: "Cost analysis per inventory item — purchase price, usage rates, and cost trends over time.", benefits: ["Per-item cost tracking", "Usage rate analysis", "Cost trend charts", "Budget impact reports"] },
      { icon: ScrollText, title: "Treatment Materials", description: "Link materials and inventory items to specific treatments. Automatically track consumption and costs per procedure.", benefits: ["Material-to-treatment linking", "Auto consumption tracking", "Cost-per-procedure calculation", "Reorder triggers"] },
      { icon: Truck, title: "Suppliers", description: "Maintain a supplier directory with contact details, payment terms, and order history.", benefits: ["Supplier directory", "Contact management", "Payment term tracking", "Order history"] },
      { icon: ShoppingCart, title: "Purchase Orders", description: "Create and track purchase orders with line items. Monitor delivery status and reconcile with inventory.", benefits: ["PO creation with line items", "Delivery tracking", "Auto inventory reconciliation", "Supplier-linked ordering"] },
    ],
  },
  {
    name: "Administration",
    modules: [
      { icon: UserCog, title: "Staff Management", description: "Add and edit staff, assign one of 9 role types. Manage schedules, permissions, and performance.", benefits: ["9 built-in role types", "Permission management", "Schedule assignment", "Performance tracking"] },
      { icon: FileText, title: "Documents", description: "Store clinic-level documents — licenses, certificates, contracts, and compliance paperwork. Organized and always accessible.", benefits: ["Centralized document storage", "Category organization", "Quick search & access", "Compliance-ready"] },
      { icon: ShieldCheck, title: "Audit Log", description: "Complete activity tracking — who did what, when, and where. Essential for compliance and accountability.", benefits: ["Action-level logging", "User attribution", "Timestamp tracking", "Filterable history"] },
      { icon: Workflow, title: "Automation", description: "Set up workflow automation — appointment reminders, follow-up messages, and custom triggers. Reduce manual work.", benefits: ["Configurable triggers", "Reminder automation", "Follow-up sequences", "Multi-channel delivery"] },
      { icon: Globe, title: "Website Settings", description: "Configure your clinic's public website — branding, services, team bios, and contact information.", benefits: ["Branded clinic page", "Service listing", "Team profiles", "Contact & location info"] },
      { icon: ShoppingBag, title: "Shop Management", description: "Manage a product catalog for your public-facing shop. Add products, set pricing, and track orders.", benefits: ["Product catalog", "Pricing management", "Order tracking", "Public storefront integration"] },
      { icon: Settings, title: "Clinic Settings", description: "Organization-level configuration — clinic name, logo, contact info, operating hours, and preferences.", benefits: ["Org-level branding", "Contact configuration", "Operating hours", "System preferences"] },
    ],
  },
  {
    name: "Communication",
    modules: [
      { icon: MessageSquare, title: "Messages", description: "Internal team messaging with file attachments and read receipts. Keep clinic communication organized and off WhatsApp.", benefits: ["Team messaging", "File attachments", "Read receipts", "Conversation history"] },
      { icon: Bell, title: "Notifications", description: "Real-time alerts for appointments, lab results, payments, and system events. Never miss what matters.", benefits: ["Real-time alerts", "Unread badges", "Multi-category notifications", "Configurable preferences"] },
      { icon: BookOpen, title: "Tutorials", description: "Built-in onboarding guides and help documentation. Get your team up to speed fast.", benefits: ["Step-by-step guides", "Role-specific tutorials", "Feature walkthroughs", "Always accessible"] },
      { icon: Smartphone, title: "My Profile", description: "Personal profile management — update your info, notification preferences, and account settings.", benefits: ["Profile customization", "Notification preferences", "Password management", "Activity history"] },
    ],
  },
  {
    name: "Public-Facing",
    modules: [
      { icon: Globe, title: "Public Clinic Site", description: "Each clinic gets a branded landing page at their own URL. Showcase services, team, and let patients book online.", benefits: ["Branded clinic website", "Service showcase", "Online booking integration", "SEO-friendly pages"] },
      { icon: ShoppingBag, title: "Public Shop", description: "E-commerce storefront for clinic products. Integrated with inventory.", benefits: ["Product storefront", "Inventory-linked stock", "Online ordering", "Payment integration"] },
      { icon: ShoppingCart, title: "Product Pages", description: "Individual product detail pages with descriptions, images, pricing, and add-to-cart functionality.", benefits: ["Rich product details", "Image galleries", "Pricing display", "Shopping cart integration"] },
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
              Every Tool to{" "}
              <span className="bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--medical-teal))] bg-clip-text text-transparent">
                Run a Profitable Clinical Practice
              </span>
            </h1>
            <p className="mx-auto max-w-xl text-lg leading-relaxed text-white/60">
              You didn't go into healthcare to spend your nights on spreadsheets. Clinexus handles the admin so you can focus on what matters — your patients.
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
              Owner, Admin, Dentist, Receptionist, Hygienist, Assistant, Accountant, Lab Technician, Lab Assistant — each role sees only what they need. Every action is logged. Every table is secured with row-level policies.
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
