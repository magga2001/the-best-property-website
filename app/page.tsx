import Hero from "@/components/homepage/Hero";
import Features from "@/components/homepage/Features";
import AboutSection from "@/components/homepage/AboutSection";
import FeaturedProjects from "@/components/homepage/FeaturedProjects";
import NewsSection from "@/components/homepage/NewsSection";
import ContactSection from "@/components/homepage/ContactSection";
import { client } from "@/src/sanity/lib/client";
import { featuredPropertiesQuery, featuredNewsPostsQuery } from "@/src/sanity/lib/queries";

export const revalidate = 60;

async function getData() {
  const [properties, newsPosts] = await Promise.all([
    client.fetch(featuredPropertiesQuery),
    client.fetch(featuredNewsPostsQuery),
  ]);
  
  return { properties, newsPosts };
}

export default async function Home() {
  const { properties, newsPosts } = await getData();

  return (
    <main>
      <Hero />
      <AboutSection />
      <Features />
      <FeaturedProjects properties={properties} />
      <NewsSection newsPosts={newsPosts} />
      <ContactSection />
    </main>
  );
}
