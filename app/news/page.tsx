import React from "react";
import { client } from "@/src/sanity/lib/client";
import { newsPostsQuery, categoriesQuery } from "@/src/sanity/lib/queries";
import NewsPageClient from "@/components/news/NewsPageClient";

interface NewsPost {
  _id: string;
  title: string;
  subtitle?: string;
  slug: { current: string };
  excerpt?: string;
  mainImage?: any;
  publishedAt: string;
  tags?: string[];
  author?: {
    name: string;
    slug: { current: string };
    image?: any;
  };
  categories?: Array<{
    title: string;
    slug: { current: string };
  }>;
}

interface Category {
  _id: string;
  title: string;
  slug: { current: string };
  description?: string;
}

export const revalidate = 60; // Revalidate every 60 seconds

async function getData() {
  const [newsPosts, categories] = await Promise.all([
    client.fetch<NewsPost[]>(newsPostsQuery),
    client.fetch<Category[]>(categoriesQuery),
  ]);
  
  return { newsPosts, categories };
}

export default async function NewsPage() {
  const { newsPosts, categories } = await getData();

  return <NewsPageClient newsPosts={newsPosts} categories={categories} />;
}
