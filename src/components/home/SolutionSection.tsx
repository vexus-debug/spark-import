import { motion } from "framer-motion";
import { ArrowRight, Clock, TrendingUp, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const results = [
  {
    icon: Clock,
    label: "Fewer Empty Chairs",
    value: "40%",
    sub: "Fewer no-shows — patients get reminded automatically so they actually show up",
    color: "from-[hsl(var(--primary))] to-[hsl(var(--medical-teal))]",
  },
  {
    icon: TrendingUp,
    label: "Revenue You Can See",
    value: "100%",
    sub: "Know exactly what you earned, what's owed, and who's making you the most money",
    color: "from-[hsl(var(--primary))] to-[hsl(var(--primary))]/60",
  },
  {
    icon: ShieldCheck,
    label: "A Team That Stays in Their Lane",
    value: "9 Roles",
    sub: "Every staff member sees only what they need — no more, no less",
    color: "from-[hsl(var(--medical-teal))] to-[hsl(var(--primary))]",
  },
];

const SolutionSection = () => {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-secondary/40 via-background to-muted/30" />
      <div className="pointer-events-none absolute -right-20 top-1/3 h-[500px] w-[500px] rounded-full bg-primary/5 blur-3xl" />
      <div className="pointer-events-none absolute -left-20 bottom-1/4 h-[400px] w-[400px] rounded-full bg-primary/5 blur-3xl" />

      <div className="container relative z-10">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-widest text-primary">
              The Problem We Solve
            </span>
            <h2 className="mb-5 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
              You Didn't Go to Medical School{" "}
              <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                to Manage Spreadsheets
              </span>
            </h2>
            <p className="mb-8 max-w-md text-base leading-relaxed text-muted-foreground">
              Most clinic owners lose 3–4 hours a day to admin — chasing payments, fixing records, counting stock, managing staff. That's time stolen from patients, from growth, from your family. Clinexus hands it back.
            </p>
            <Link to="/features">
              <Button className="gap-2 rounded-full bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--medical-teal))] px-8 text-white shadow-md hover:opacity-90">
                See How We Do It <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </motion.div>

          <div className="relative flex flex-col items-end gap-5">
            {results.map((result, i) => (
              <motion.div
                key={result.label}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="w-full max-w-xs rounded-2xl border border-border/50 bg-card/60 p-6 shadow-lg backdrop-blur-sm"
                style={{ marginRight: i === 1 ? 40 : 0 }}
              >
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary/10 to-primary/5">
                  <result.icon className="h-5 w-5 text-primary" />
                </div>
                <div className="mb-1 text-sm text-muted-foreground">{result.label}</div>
                <div className={`bg-gradient-to-r ${result.color} bg-clip-text text-4xl font-extrabold text-transparent`}>
                  {result.value}
                </div>
                <div className="mt-1 text-xs text-muted-foreground">{result.sub}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
