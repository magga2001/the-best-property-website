import Hero from "@/components/homepage/Hero";
import Features from "@/components/homepage/Features";
import AboutSection from "@/components/homepage/AboutSection";
import FeaturedProjects from "@/components/homepage/FeaturedProjects";
import NewsSection from "@/components/homepage/NewsSection";
import ContactSection from "@/components/homepage/ContactSection";

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutSection />
      <Features />
      <FeaturedProjects />
      <NewsSection />
      <ContactSection />
    </main>
  );
}
