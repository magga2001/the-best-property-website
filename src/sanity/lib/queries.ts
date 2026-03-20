import { groq } from "next-sanity";

// Get all news posts with author and category details
export const newsPostsQuery = groq`*[_type == "newsPost" && defined(slug.current)] | order(publishedAt desc) {
  _id,
  title,
  subtitle,
  slug,
  excerpt,
  mainImage,
  publishedAt,
  tags,
  "author": author->{
    name,
    slug,
    image
  },
  "categories": categories[]->{
    title,
    slug
  }
}`;

// Get a single news post by slug
export const newsPostBySlugQuery = groq`*[_type == "newsPost" && slug.current == $slug][0] {
  _id,
  title,
  subtitle,
  slug,
  excerpt,
  mainImage,
  publishedAt,
  tags,
  body,
  "author": author->{
    name,
    slug,
    image,
    bio
  },
  "categories": categories[]->{
    title,
    slug
  }
}`;

// Get featured news posts (limit to 3)
export const featuredNewsPostsQuery = groq`*[_type == "newsPost" && defined(slug.current)] | order(publishedAt desc) [0...3] {
  _id,
  title,
  subtitle,
  slug,
  excerpt,
  mainImage,
  publishedAt,
  "author": author->{
    name
  }
}`;

// Get all properties with category details
export const propertiesQuery = groq`*[_type == "property" && defined(slug.current)] | order(publishedAt desc) {
  _id,
  title,
  slug,
  description,
  priceRange,
  location,
  propertyType,
  status,
  featured,
  mainImage {
    asset->{
      _id,
      url
    },
    alt
  },
  amenities,
  publishedAt,
  "categories": categories[]->{
    title,
    slug
  }
}`;

// Get featured properties
export const featuredPropertiesQuery = groq`*[_type == "property" && defined(slug.current) && featured == true] | order(publishedAt desc) {
  _id,
  title,
  slug,
  description,
  price,
  priceLabel,
  location,
  propertyType,
  status,
  bedrooms,
  bathrooms,
  area,
  mainImage,
  publishedAt
}`;

// Get a single property by slug
export const propertyBySlugQuery = groq`*[_type == "property" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  description,
  price,
  priceLabel,
  location,
  propertyType,
  status,
  bedrooms,
  bathrooms,
  area,
  mainImage {
    asset->{
      _id,
      url
    },
    alt
  },
  gallery[] {
    asset->{
      _id,
      url
    },
    alt
  },
  floorPlans[] {
    asset->{
      _id,
      url
    },
    alt,
    title
  },
  amenities,
  body,
  mapUrl,
  publishedAt,
  "categories": categories[]->{
    title,
    slug
  }
}`;

// Get properties by status
export const propertiesByStatusQuery = groq`*[_type == "property" && defined(slug.current) && status == $status] | order(publishedAt desc) {
  _id,
  title,
  slug,
  description,
  price,
  priceLabel,
  location,
  propertyType,
  status,
  bedrooms,
  bathrooms,
  area,
  mainImage,
  publishedAt
}`;

// Get properties by type
export const propertiesByTypeQuery = groq`*[_type == "property" && defined(slug.current) && propertyType == $type] | order(publishedAt desc) {
  _id,
  title,
  slug,
  description,
  price,
  priceLabel,
  location,
  propertyType,
  status,
  bedrooms,
  bathrooms,
  area,
  mainImage,
  publishedAt
}`;

// Get all categories
export const categoriesQuery = groq`*[_type == "category"] | order(title asc) {
  _id,
  title,
  slug,
  description
}`;

// Get all authors
export const authorsQuery = groq`*[_type == "author"] | order(name asc) {
  _id,
  name,
  slug,
  image,
  bio
}`;

// Get related properties (same category, exclude current property)
export const relatedPropertiesQuery = groq`*[_type == "property" && defined(slug.current) && _id != $propertyId && count((categories[]->slug.current)[@ in $categories]) > 0] | order(publishedAt desc) [0...3] {
  _id,
  title,
  slug,
  description,
  price,
  priceLabel,
  location,
  propertyType,
  status,
  bedrooms,
  bathrooms,
  area,
  mainImage,
  publishedAt
}`;

// Get all house types for a property
export const houseTypesByPropertyQuery = groq`*[_type == "houseType" && property._ref == $propertyId] | order(name asc) {
  _id,
  name,
  slug,
  price,
  bedrooms,
  bathrooms,
  area,
  landSize,
  floors,
  carParking,
  ceilingHeight,
  status,
  description,
  features,
  mainImage {
    asset->{
      _id,
      url
    },
    alt
  },
  gallery[] {
    asset->{
      _id,
      url
    },
    alt
  },
  floorPlans[] {
    asset->{
      _id,
      url
    },
    alt,
    title
  },
  featured,
  publishedAt
}`;
