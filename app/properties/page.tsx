import React from "react";
import { client } from "@/src/sanity/lib/client";
import { propertiesQuery } from "@/src/sanity/lib/queries";
import PropertiesPageClient from "@/components/property/PropertiesPageClient";

interface Property {
  _id: string;
  title: string;
  slug: { current: string };
  description?: string;
  priceRange?: string;
  location?: string;
  propertyType?: string;
  status: string;
  featured?: boolean;
  mainImage?: any;
  amenities?: string[];
  publishedAt: string;
  categories?: Array<{
    title: string;
    slug: { current: string };
  }>;
}

export const revalidate = 60;

async function getData() {
  const properties = await client.fetch<Property[]>(propertiesQuery);
  return { properties };
}

export default async function PropertiesPage() {
  const { properties } = await getData();

  return <PropertiesPageClient properties={properties} />;
}
