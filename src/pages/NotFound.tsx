import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Home } from "lucide-react";
import Layout from "@/components/Layout";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <Layout>
      <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden bg-[hsl(var(--medical-blue-dark))]">
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          {[500, 350, 200].map((size, i) => (
            <div key={i} className="absolute rounded-full border border-white/[0.05]" style={{ width: size, height: size }} />
          ))}
        </div>

        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mx-auto max-w-lg text-center"
          >
            <div className="mb-6 bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--medical-teal))] bg-clip-text text-8xl font-extrabold text-transparent">
              404
            </div>
            <h1 className="mb-4 text-2xl font-bold text-white">Page Not Found</h1>
            <p className="mb-8 text-white/60">
              Looks like this page took an unscheduled break. Let's get you back to where you need to be.
            </p>
            <Link to="/">
              <Button size="lg" className="gap-2 rounded-full bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--medical-teal))] px-10 text-white shadow-lg hover:opacity-90">
                <Home className="h-4 w-4" /> Back to Home
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default NotFound;
