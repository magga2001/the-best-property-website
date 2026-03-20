import { HomeIcon } from "@sanity/icons";
import { defineArrayMember, defineField, defineType } from "sanity";

export const houseTypeType = defineType({
  name: "houseType",
  title: "House Type",
  type: "document",
  icon: HomeIcon,
  fields: [
    defineField({
      name: "name",
      type: "string",
      title: "House Type Name",
      description: "e.g., 'Villa Type A', 'Townhome Type B'",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      type: "slug",
      options: {
        source: "name",
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "property",
      type: "reference",
      to: [{ type: "property" }],
      title: "Parent Property",
      description: "Which property/project does this house type belong to?",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "price",
      type: "string",
      title: "Price",
      description: "e.g., '฿4,500,000'",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "bedrooms",
      type: "number",
      validation: (Rule) => Rule.required().min(0),
    }),
    defineField({
      name: "bathrooms",
      type: "number",
      validation: (Rule) => Rule.required().min(0),
    }),
    defineField({
      name: "area",
      type: "number",
      title: "Living Area (m²)",
      description: "Living area in square meters",
      validation: (Rule) => Rule.required().min(0),
    }),
    defineField({
      name: "landSize",
      type: "number",
      title: "Land Size (sq.w)",
      description: "Land size in square wah (ตารางวา)",
    }),
    defineField({
      name: "floors",
      type: "number",
      title: "Number of Floors",
      description: "e.g., 2 for 2-story house",
    }),
    defineField({
      name: "carParking",
      type: "number",
      title: "Car Parking Spaces",
      description: "Number of car parking spaces",
    }),
    defineField({
      name: "ceilingHeight",
      type: "string",
      title: "Ceiling Height",
      description: "e.g., '3.5 meters'",
    }),
    defineField({
      name: "status",
      type: "string",
      options: {
        list: [
          { title: "Available", value: "available" },
          { title: "Limited Units", value: "limited" },
          { title: "Sold Out", value: "sold-out" },
        ],
      },
      initialValue: "available",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      type: "text",
      title: "Description",
      rows: 4,
      description: "Detailed description of this house type",
    }),
    defineField({
      name: "features",
      type: "array",
      title: "Key Features",
      of: [{ type: "string" }],
      description: "Key features of this house type (e.g., 'Master suite with jacuzzi')",
    }),
    defineField({
      name: "mainImage",
      type: "image",
      title: "Main Image",
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
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "gallery",
      type: "array",
      title: "Gallery",
      of: [
        {
          type: "image",
          options: { hotspot: true },
          fields: [
            { name: "alt", type: "string", title: "Alt text" },
            { name: "caption", type: "string", title: "Caption" },
          ],
        },
      ],
    }),
    defineField({
      name: "floorPlans",
      type: "array",
      title: "Floor Plans",
      of: [
        {
          type: "image",
          fields: [
            { name: "alt", type: "string", title: "Alt text" },
            { name: "floor", type: "string", title: "Floor name (e.g., Ground Floor, Second Floor)" },
            { 
              name: "rooms", 
              type: "array", 
              title: "Rooms on this floor",
              of: [{ type: "string" }],
              description: "List of rooms (e.g., 'Living Room', 'Master Bedroom')"
            },
          ],
        },
      ],
    }),
    defineField({
      name: "body",
      type: "blockContent",
      title: "Detailed Description",
      description: "Rich text content for this house type",
    }),
    defineField({
      name: "featured",
      type: "boolean",
      description: "Feature this house type",
      initialValue: false,
    }),
    defineField({
      name: "publishedAt",
      type: "datetime",
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: "name",
      price: "price",
      bedrooms: "bedrooms",
      bathrooms: "bathrooms",
      area: "area",
      media: "mainImage",
      propertyTitle: "property.title",
    },
    prepare({ title, price, bedrooms, bathrooms, area, media, propertyTitle }) {
      return {
        title: title,
        subtitle: `${propertyTitle} • ${price} • ${bedrooms}BR ${bathrooms}BA • ${area}m²`,
        media,
      };
    },
  },
});
