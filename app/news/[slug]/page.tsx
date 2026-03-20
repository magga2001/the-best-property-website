import React from "react";
import { client } from "@/src/sanity/lib/client";
import { newsPostBySlugQuery } from "@/src/sanity/lib/queries";
import { urlFor } from "@/src/sanity/lib/image";
import Link from "next/link";
import Image from "next/image";
import { PortableTextRenderer } from "@/components/common/PortableTextRenderer";
import { notFound } from "next/navigation";

interface NewsPost {
  _id: string;
  title: string;
  subtitle?: string;
  slug: { current: string };
  excerpt?: string;
  mainImage?: any;
  publishedAt: string;
  tags?: string[];
  body?: any;
  author?: {
    name: string;
    slug: { current: string };
    image?: any;
    bio?: any;
  };
  categories?: Array<{
    title: string;
    slug: { current: string };
  }>;
}

export const revalidate = 60;

async function getPost(slug: string) {
  const post = await client.fetch<NewsPost>(newsPostBySlugQuery, { slug });
  return post;
}

export default async function NewsArticlePage({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getPost(params.slug);

  if (!post) {
    notFound();
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const category = post.categories?.[0]?.title || "News";

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }}></div>
        </div>

        <div className="absolute inset-0 opacity-5">
          <div className="w-full h-full" style={{
            backgroundImage: `linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Back Button */}
          <Link
            href="/news"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-8 transition-colors group"
          >
            <svg
              className="w-5 h-5 group-hover:-translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            <span>Back to News</span>
          </Link>

          {/* Category Badge */}
          <div className="inline-flex items-center gap-2 glass px-6 py-3 rounded-full font-semibold mb-6 border border-white/30">
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
            <span className="text-cyan-400 uppercase tracking-wider text-sm">{category}</span>
          </div>

          {/* Title */}
          <h1
            className="text-5xl md:text-6xl font-bold mb-6 leading-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            {post.title}
          </h1>

          {/* Subtitle */}
          {post.subtitle && (
            <p className="text-2xl text-slate-300 mb-8 leading-relaxed">
              {post.subtitle}
            </p>
          )}

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-6 text-slate-300">
            {post.author && (
              <div className="flex items-center gap-3">
                {post.author.image && (
                  <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-white/30">
                    <Image
                      src={urlFor(post.author.image).width(48).height(48).url()}
                      alt={post.author.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
                <div>
                  <div className="font-semibold text-white">{post.author.name}</div>
                  <div className="text-sm">Author</div>
                </div>
              </div>
            )}

            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span>{formatDate(post.publishedAt)}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      {post.mainImage && (
        <section className="relative -mt-20 mb-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src={urlFor(post.mainImage).width(1200).height(800).url()}
                alt={post.mainImage.alt || post.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </section>
      )}

      {/* Article Content */}
      <section className="py-20 bg-gradient-to-b from-white via-slate-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <article className="prose prose-lg prose-slate max-w-none">
            {post.body ? (
              <PortableTextRenderer value={post.body} />
            ) : (
              <p>No content available yet.</p>
            )}
          </article>

          {/* Tags */}
          {post.tags && post.tags.length > 0 && (
            <div className="mt-12 pt-12 border-t border-slate-200">
              <h3 className="text-lg font-semibold text-slate-900 mb-4">Tags</h3>
              <div className="flex flex-wrap gap-3">
                {post.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Author Bio */}
          {post.author?.bio && (
            <div className="mt-12 p-8 bg-gradient-to-br from-slate-50 to-blue-50 rounded-3xl border border-slate-200">
              <div className="flex items-start gap-6">
                {post.author.image && (
                  <div className="relative w-20 h-20 rounded-full overflow-hidden flex-shrink-0">
                    <Image
                      src={urlFor(post.author.image).width(80).height(80).url()}
                      alt={post.author.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">
                    About {post.author.name}
                  </h3>
                  <div className="prose prose-slate">
                    <PortableTextRenderer value={post.author.bio} />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Back to News */}
          <div className="mt-16 text-center">
            <Link
              href="/news"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-xl hover:shadow-lg transition-all group"
            >
              <svg
                className="w-5 h-5 group-hover:-translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              <span>Back to All News</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
