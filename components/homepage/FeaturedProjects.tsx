"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/lib/i18n/LanguageContext";

interface Project {
  id: number;
  title: string;
  location: string;
  priceRange: string;
  type: string;
  gradient: string;
}

const FeaturedProjects: React.FC = () => {
  const { t } = useLanguage();

  const projects: Project[] = [
    {
      id: 1,
      title: "The Best Yuwittaya",
      location: "Yuwittaya Road, Bangkok",
      priceRange: "฿3.5M - ฿5.2M",
      type: t.projects.propertyTypes.modernHouse,
      gradient: "from-blue-500 to-cyan-600",
    },
    {
      id: 2,
      title: "The Best Masterpiece",
      location: "Lamlukka, Pathum Thani",
      priceRange: "฿4.2M - ฿6.8M",
      type: t.projects.propertyTypes.luxuryVilla,
      gradient: "from-purple-500 to-pink-600",
    },
    {
      id: 3,
      title: "The Best Courtyard",
      location: "Klong 8, Bangkok",
      priceRange: "฿2.8M - ฿4.5M",
      type: t.projects.propertyTypes.modernTownhome,
      gradient: "from-cyan-500 to-blue-600",
    },
    {
      id: 4,
      title: "The Best Lamlukka Klong 6",
      location: "Lamlukka Klong 6, Pathum Thani",
      priceRange: "฿3.2M - ฿5.0M",
      type: t.projects.propertyTypes.singleHouse,
      gradient: "from-orange-500 to-red-600",
    },
    {
      id: 5,
      title: "The Best Lamlukka Klong 8",
      location: "Lamlukka Klong 8, Pathum Thani",
      priceRange: "฿3.8M - ฿5.5M",
      type: t.projects.propertyTypes.modernLiving,
      gradient: "from-green-500 to-emerald-600",
    },
    {
      id: 6,
      title: "The Best Premium",
      location: "Central Bangkok",
      priceRange: "฿5.5M - ฿8.0M",
      type: t.projects.propertyTypes.exclusiveHouse,
      gradient: "from-indigo-500 to-purple-600",
    },
  ];

  return (
    <section className="relative py-32 bg-gradient-to-b from-white via-slate-50 to-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 glass px-6 py-3 rounded-full font-semibold mb-6 border border-blue-200/30">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
            <span className="gradient-text uppercase tracking-wider text-sm">{t.projects.badge}</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
            <span className="gradient-text">{t.projects.title}</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            {t.projects.description}
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Gradient Overlay Effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 z-10`}></div>
              
              {/* Corner Accent */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-white/0 to-white/10 rounded-bl-3xl z-20"></div>

              {/* Image Area with Pattern */}
              <div className="relative h-72 bg-gradient-to-br from-slate-100 via-slate-200 to-slate-100 overflow-hidden">
                {/* Animated Pattern Background */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute inset-0" style={{
                    backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 10px, currentColor 10px, currentColor 11px)`,
                  }}></div>
                </div>
                
                {/* Icon with Gradient */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className={`text-8xl opacity-30 group-hover:scale-110 transition-transform duration-500 bg-gradient-to-br ${project.gradient} bg-clip-text text-transparent`}>
                    🏠
                  </div>
                </div>

                {/* Property Type Badge */}
                <div className="absolute top-6 left-6 glass px-4 py-2 rounded-full text-sm font-semibold z-20 border border-white/30">
                  <span className="gradient-text">{project.type}</span>
                </div>

                {/* Price Tag */}
                <div className="absolute bottom-6 right-6 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg z-20">
                  <span className="text-lg font-bold gradient-text">{project.priceRange}</span>
                </div>
              </div>

              {/* Content */}
              <div className="relative p-8 z-20">
                <h3 
                  className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-cyan-600 group-hover:bg-clip-text transition-all duration-300"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {project.title}
                </h3>
                
                <div className="flex items-start text-slate-600 mb-6 group-hover:text-slate-700 transition-colors">
                  <svg
                    className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0 text-blue-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span className="text-sm leading-relaxed">{project.location}</span>
                </div>

                <Link
                  href={`/properties/${project.id}`}
                  className="relative block w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white text-center py-3.5 rounded-xl font-semibold overflow-hidden group/btn"
                >
                  <span className="relative z-10">View Details</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Link
            href="/properties"
            className="inline-flex items-center gap-3 glass px-10 py-5 rounded-xl font-semibold hover:shadow-xl transition-all duration-300 border border-blue-200/30 group hover:border-blue-300/50"
          >
            <span className="gradient-text text-lg">{t.projects.viewAll}</span>
            <svg
              className="w-5 h-5 text-blue-600 group-hover:translate-x-1 transition-transform"
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

export default FeaturedProjects;
