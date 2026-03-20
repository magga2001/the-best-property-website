"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/lib/i18n/LanguageContext";

interface NewsPost {
  _id: string;
  title: string;
  slug: { current: string };
  excerpt?: string;
  publishedAt: string;
  mainImage?: any;
  author?: {
    name: string;
  };
  categories?: Array<{
    title: string;
    slug: { current: string };
  }>;
}

interface NewsSectionProps {
  newsPosts: NewsPost[];
}

const gradients = [
  "from-blue-500 to-purple-600",
  "from-cyan-500 to-blue-600",
  "from-green-500 to-emerald-600",
];

const NewsSection: React.FC<NewsSectionProps> = ({ newsPosts }) => {
  const { t } = useLanguage();

  // Don't render the section if there are no news posts
  if (!newsPosts || newsPosts.length === 0) {
    return null;
  }

  // Limit to 3 news posts for homepage
  const displayPosts = newsPosts.slice(0, 3);

  return (
    <section className="relative py-32 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "3s" }}></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(to right, white 1px, transparent 1px),
              linear-gradient(to bottom, white 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 glass px-6 py-3 rounded-full font-semibold mb-6 border border-white/20">
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
            <span className="text-cyan-400 uppercase tracking-wider text-sm">{t.news.badge}</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
            {t.news.title}
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            {t.news.description}
          </p>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {displayPosts.map((post, index) => {
            const gradient = gradients[index % gradients.length];
            const category = post.categories?.[0]?.title || "News";
            const formattedDate = new Date(post.publishedAt).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            });

            return (
              <div
                key={post._id}
                className="group relative bg-slate-800/50 backdrop-blur-sm rounded-3xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:shadow-blue-500/20"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>

                {/* Corner Accent */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-white/0 to-white/5 rounded-bl-3xl"></div>

                {/* Image Area with Gradient Icon */}
                <div className={`relative h-56 bg-gradient-to-br ${gradient} flex items-center justify-center overflow-hidden`}>
                  {/* Animated Pattern */}
                  <div className="absolute inset-0 opacity-20">
                    <div className="absolute inset-0" style={{
                      backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 10px, currentColor 10px, currentColor 11px)`,
                    }}></div>
                  </div>
                  
                  {/* Icon */}
                  <div className="text-8xl group-hover:scale-110 transition-transform duration-500 relative z-10">
                    📰
                  </div>
                </div>

                {/* Content */}
                <div className="relative p-8 z-10">
                  {/* Category & Date */}
                  <div className="flex items-center gap-3 mb-4">
                    <span className={`glass px-4 py-1.5 rounded-full text-xs font-semibold border border-white/20 bg-gradient-to-r ${gradient} bg-clip-text text-transparent`}>
                      {category}
                    </span>
                    <span className="text-slate-400 text-sm">{formattedDate}</span>
                  </div>

                  {/* Title */}
                  <h3 
                    className="text-xl font-bold mb-4 group-hover:text-cyan-400 transition-colors leading-tight"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  {post.excerpt && (
                    <p className="text-slate-400 mb-6 line-clamp-3 leading-relaxed">
                      {post.excerpt}
                    </p>
                  )}

                  {/* Read More Link */}
                  <Link
                    href={`/news/${post.slug.current}`}
                    className="inline-flex items-center gap-2 text-cyan-400 font-semibold hover:gap-4 transition-all duration-300 group/link"
                  >
                    <span>Read More</span>
                    <svg
                      className="w-4 h-4 group-hover/link:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Link
            href="/news"
            className="inline-flex items-center gap-3 glass px-10 py-5 rounded-xl font-semibold hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300 border border-white/20 group hover:border-white/30"
          >
            <span className="text-lg text-white">{t.news.viewAll}</span>
            <svg
              className="w-5 h-5 text-cyan-400 group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
