import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="relative overflow-hidden py-24">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-secondary/30 via-background to-muted/10" />
      <div className="pointer-events-none absolute left-1/2 bottom-0 h-[400px] w-[600px] -translate-x-1/2 translate-y-1/2 rounded-full bg-primary/5 blur-3xl" />
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
            Your Clinic Could Look Like This Tomorrow
          </h2>
          <p className="mb-8 text-lg text-muted-foreground">
            Imagine knowing exactly what your clinic made today. Appointments running on time. Staff doing their jobs without you chasing anyone. That's Clinexus, from day one.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a href="https://app.clinexus.com.ng/">
              <Button size="lg" className="gap-2 rounded-full bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--medical-teal))] px-8 text-white shadow-lg hover:opacity-90">
                Start Your First Month <ArrowRight className="h-4 w-4" />
              </Button>
            </a>
            <a href="https://app.clinexus.com.ng/">
              <Button
                size="lg"
                variant="outline"
                className="rounded-full px-8"
              >
                See It in Action First
              </Button>
            </a>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">First month: full access. No commitment.</p>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
