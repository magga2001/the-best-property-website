import { HomeIcon } from "@sanity/icons";
import { defineArrayMember, defineField, defineType } from "sanity";

export const propertyType = defineType({
  name: "property",
  title: "Property",
  type: "document",
  icon: HomeIcon,
  description: "A property or development project (can have multiple house types)",
  fields: [
    defineField({
      name: "title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      type: "slug",
      options: {
        source: "title",
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      type: "text",
      rows: 4,
      description: "Short description of the property/project",
    }),
    defineField({
      name: "priceRange",
      type: "string",
      description: "Price range (e.g., '฿4.2M - ฿6.8M')",
    }),
    defineField({
      name: "location",
      type: "string",
      description: "Property location/address",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "propertyType",
      type: "string",
      title: "Property Type",
      options: {
        list: [
          { title: "Luxury Villa", value: "luxury-villa" },
          { title: "Modern Single House", value: "modern-single-house" },
          { title: "Modern Townhome", value: "modern-townhome" },
          { title: "Condo", value: "condo" },
          { title: "Mixed Development", value: "mixed" },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "status",
      type: "string",
      options: {
        list: [
          { title: "Available", value: "available" },
          { title: "Coming Soon", value: "coming-soon" },
          { title: "Sold Out", value: "sold-out" },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "featured",
      type: "boolean",
      description: "Show this property in featured sections",
      initialValue: false,
    }),
    defineField({
      name: "mainImage",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: "alt",
          type: "string",
          title: "Alternative text",
        }),
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "gallery",
      type: "array",
      of: [
        defineArrayMember({
          type: "image",
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: "alt",
              type: "string",
              title: "Alternative text",
            },
          ],
        }),
      ],
    }),
    defineField({
      name: "amenities",
      type: "array",
      of: [defineArrayMember({ type: "string" })],
      description: "Project amenities (e.g., Clubhouse, 24/7 Security, Swimming Pool)",
    }),
    defineField({
      name: "body",
      type: "blockContent",
      description: "Detailed property description",
    }),
    defineField({
      name: "mapUrl",
      type: "url",
      description: "Google Maps embed URL",
    }),
    defineField({
      name: "coordinates",
      type: "object",
      title: "Map Coordinates",
      fields: [
        { name: "lat", type: "number", title: "Latitude" },
        { name: "lng", type: "number", title: "Longitude" },
      ],
    }),
    defineField({
      name: "categories",
      type: "array",
      of: [defineArrayMember({ type: "reference", to: { type: "category" } })],
    }),
    defineField({
      name: "publishedAt",
      type: "datetime",
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "location",
      media: "mainImage",
      status: "status",
    },
    prepare(selection) {
      const { title, subtitle, media, status } = selection;
      return {
        title,
        subtitle: `${subtitle} - ${status}`,
        media,
      };
    },
  },
});
