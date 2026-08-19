import Layout from "@/components/Layout";
import HeroSection from "@/components/home/HeroSection";
import SolutionSection from "@/components/home/SolutionSection";
import FeaturesOverviewSection from "@/components/home/FeaturesOverviewSection";
import AnalyzeSection from "@/components/home/AnalyzeSection";
import HowItWorksSection from "@/components/home/HowItWorksSection";
import CollaborateSection from "@/components/home/CollaborateSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import FAQSection from "@/components/home/FAQSection";
import CTASection from "@/components/home/CTASection";
import DashboardShowcaseSection from "@/components/home/DashboardShowcaseSection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <SolutionSection />
      <FeaturesOverviewSection />
      <DashboardShowcaseSection />
      <AnalyzeSection />
      <HowItWorksSection />
      <CollaborateSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
