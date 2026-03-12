"use client";

import React, { useState } from "react";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import Link from "next/link";

interface NewsItem {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  gradient: string;
  readTime: string;
}

export default function NewsPage() {
  const { t } = useLanguage();
  const [filter, setFilter] = useState("all");

  const newsItems: NewsItem[] = [
    {
      id: 1,
      title: "New Project Launch: The Best Premium Collection",
      excerpt: "Introducing our latest luxury residential project in the heart of Bangkok. Modern design meets ultimate comfort with premium facilities.",
      date: "March 10, 2026",
      category: t.news.categories.projectLaunch,
      gradient: "from-blue-500 to-purple-600",
      readTime: "5 min read",
    },
    {
      id: 2,
      title: "Smart Home Features Now Standard",
      excerpt: "All new projects will include smart home technology as standard, bringing modern convenience to your fingertips.",
      date: "March 5, 2026",
      category: t.news.categories.innovation,
      gradient: "from-cyan-500 to-blue-600",
      readTime: "4 min read",
    },
    {
      id: 3,
      title: "Sustainable Living Initiative",
      excerpt: "Our commitment to eco-friendly construction and sustainable living practices in all future developments.",
      date: "February 28, 2026",
      category: t.news.categories.sustainability,
      gradient: "from-green-500 to-emerald-600",
      readTime: "6 min read",
    },
    {
      id: 4,
      title: "The Best Masterpiece Grand Opening",
      excerpt: "Join us for the grand opening of our newest luxury villa project in Lamlukka. Special launch prices available.",
      date: "February 20, 2026",
      category: t.news.categories.projectLaunch,
      gradient: "from-purple-500 to-pink-600",
      readTime: "3 min read",
    },
    {
      id: 5,
      title: "Innovation in Home Design",
      excerpt: "Discover how we're incorporating cutting-edge design trends and technology into our latest projects.",
      date: "February 15, 2026",
      category: t.news.categories.innovation,
      gradient: "from-orange-500 to-red-600",
      readTime: "5 min read",
    },
    {
      id: 6,
      title: "Green Building Certification Achieved",
      excerpt: "The Best Property Group receives prestigious green building certification for sustainable development practices.",
      date: "February 10, 2026",
      category: t.news.categories.sustainability,
      gradient: "from-teal-500 to-green-600",
      readTime: "4 min read",
    },
  ];

  const categories = [
    { key: "all", label: "All News" },
    { key: "projectLaunch", label: t.news.categories.projectLaunch },
    { key: "innovation", label: t.news.categories.innovation },
    { key: "sustainability", label: t.news.categories.sustainability },
  ];

  const filteredNews = filter === "all" 
    ? newsItems 
    : newsItems.filter(item => item.category === categories.find(c => c.key === filter)?.label);

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

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 glass px-6 py-3 rounded-full font-semibold mb-6 border border-white/30">
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
              <span className="text-cyan-400 uppercase tracking-wider text-sm">{t.news.badge}</span>
            </div>
            
            <h1 className="text-6xl md:text-7xl font-bold mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
              <span className="text-transparent bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text">
                {t.news.title}
              </span>
            </h1>
            
            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-12 leading-relaxed">
              {t.news.description}
            </p>

            {/* Category Filters */}
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category.key}
                  onClick={() => setFilter(category.key)}
                  className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    filter === category.key
                      ? "bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg shadow-blue-500/50"
                      : "glass border border-white/30 text-white hover:border-white/50"
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-32 bg-gradient-to-b from-white via-slate-50 to-white relative overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "3s" }}></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {filteredNews.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-xl text-slate-600">No news articles found in this category.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredNews.map((item, index) => (
                <article
                  key={item.id}
                  className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 z-10`}></div>
                  
                  {/* Corner Accent */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-white/0 to-white/10 rounded-bl-3xl z-20"></div>

                  {/* Image Area */}
                  <div className={`relative h-64 bg-gradient-to-br ${item.gradient} overflow-hidden`}>
                    {/* Pattern */}
                    <div className="absolute inset-0 opacity-20">
                      <div className="absolute inset-0" style={{
                        backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 10px, currentColor 10px, currentColor 11px)`,
                      }}></div>
                    </div>
                    
                    {/* Icon */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-8xl group-hover:scale-110 transition-transform duration-500 relative z-10">
                        📰
                      </div>
                    </div>

                    {/* Category Badge */}
                    <div className="absolute top-6 left-6 glass px-4 py-2 rounded-full text-sm font-semibold z-20 border border-white/30">
                      <span className="text-white">{item.category}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative p-8 z-20">
                    {/* Meta */}
                    <div className="flex items-center gap-4 text-sm text-slate-500 mb-4">
                      <span className="flex items-center gap-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        {item.date}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {item.readTime}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 
                      className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-cyan-600 group-hover:bg-clip-text transition-all leading-tight line-clamp-2"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      {item.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-slate-600 mb-6 leading-relaxed line-clamp-3">
                      {item.excerpt}
                    </p>

                    {/* Read More Link */}
                    <Link
                      href={`/news/${item.id}`}
                      className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:gap-4 transition-all duration-300 group/link"
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
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
