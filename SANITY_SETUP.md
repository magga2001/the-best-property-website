# Sanity CMS Setup Guide

This project uses Sanity CMS for content management. Follow these steps to set up and configure Sanity.

## 🚀 Getting Started

### 1. Create a Sanity Project

If you don't have a Sanity account yet:

1. Go to [https://www.sanity.io](https://www.sanity.io)
2. Sign up for a free account
3. Create a new project from the Sanity dashboard

### 2. Get Your Project Credentials

1. Go to [https://www.sanity.io/manage](https://www.sanity.io/manage)
2. Select your project
3. Go to **Settings** → **API settings**
4. Note down your:
   - **Project ID**
   - **Dataset** (usually `production`)

### 3. Configure Environment Variables

1. Copy `.env.local.example` to `.env.local`:
   ```bash
   cp .env.local.example .env.local
   ```

2. Update the Sanity variables in `.env.local`:
   ```bash
   NEXT_PUBLIC_SANITY_PROJECT_ID=your_actual_project_id
   NEXT_PUBLIC_SANITY_DATASET=production
   NEXT_PUBLIC_SANITY_API_VERSION=2026-03-18
   ```

### 4. Configure CORS Origins

To allow your Next.js app to access Sanity:

1. Go to [https://www.sanity.io/manage](https://www.sanity.io/manage)
2. Select your project
3. Go to **Settings** → **API settings** → **CORS Origins**
4. Add these origins:
   - `http://localhost:3000` (for development)
   - Your production URL (e.g., `https://yoursite.com`)

### 5. Access Sanity Studio

Once configured, you can access Sanity Studio at:

**Development:** `http://localhost:3000/studio`
**Production:** `https://yoursite.com/studio`

## 📝 Content Types

The following content types are available:

### News Posts
- Title, subtitle, slug
- Author and categories
- Main image and body content
- Tags and excerpt
- Published date

### Properties
- Title, description, price
- Location and property type
- Bedrooms, bathrooms, area
- Status (for sale, for rent, sold, rented)
- Main image, gallery, and floor plans
- Amenities and detailed description
- Map URL for location
- Featured flag

### Authors
- Name, slug
- Profile image
- Bio

### Categories
- Title, slug
- Description

## 🔧 Sanity CLI Commands

Run these commands from the project root:

```bash
# Deploy Sanity Studio
npx sanity deploy

# Import data
npx sanity dataset import <file.tar.gz> <dataset>

# Export data
npx sanity dataset export <dataset>

# Manage documents
npx sanity documents list
npx sanity documents query "*[_type == 'property']"
```

## 📚 Querying Data

Example queries are available in `src/sanity/lib/queries.ts`:

```typescript
import { client } from '@/sanity/lib/client'
import { propertiesQuery } from '@/sanity/lib/queries'

// Fetch all properties
const properties = await client.fetch(propertiesQuery)
```

## 🖼️ Image Optimization

Use the `urlFor` helper to optimize images:

```typescript
import { urlFor } from '@/sanity/lib/image'

// Generate optimized image URL
const imageUrl = urlFor(property.mainImage)
  .width(800)
  .height(600)
  .url()
```

## 📖 Resources

- [Sanity Documentation](https://www.sanity.io/docs)
- [Next.js + Sanity](https://www.sanity.io/plugins/next-sanity)
- [GROQ Query Language](https://www.sanity.io/docs/groq)
- [Portable Text](https://www.sanity.io/docs/presenting-block-text)

## 🆘 Troubleshooting

### CORS Errors
Make sure you've added your development and production URLs to CORS origins in Sanity settings.

### Studio Not Loading
1. Check that environment variables are set correctly
2. Ensure the project ID and dataset match your Sanity project
3. Try clearing Next.js cache: `rm -rf .next`

### Missing Content
1. Ensure you've published documents in Sanity Studio (not just saved as drafts)
2. Check that the dataset name matches in both `.env.local` and Sanity settings
