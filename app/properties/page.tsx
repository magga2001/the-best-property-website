"use client";

import React, { useState } from "react";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import Link from "next/link";

interface Property {
  id: number;
  title: string;
  location: string;
  priceRange: string;
  type: string;
  bedrooms: number;
  bathrooms: number;
  area: number;
  status: string;
  gradient: string;
}

export default function PropertiesPage() {
  const { t } = useLanguage();
  const [filter, setFilter] = useState("all");

  const properties: Property[] = [
    {
      id: 1,
      title: "The Best Yuwittaya",
      location: "Yuwittaya Road, Bangkok",
      priceRange: "฿3.5M - ฿5.2M",
      type: "Modern Single House",
      bedrooms: 3,
      bathrooms: 3,
      area: 180,
      status: "available",
      gradient: "from-blue-500 to-cyan-600",
    },
    {
      id: 2,
      title: "The Best Masterpiece",
      location: "Lamlukka, Pathum Thani",
      priceRange: "฿4.2M - ฿6.8M",
      type: "Luxury Villa",
      bedrooms: 4,
      bathrooms: 4,
      area: 250,
      status: "available",
      gradient: "from-purple-500 to-pink-600",
    },
    {
      id: 3,
      title: "The Best Courtyard",
      location: "Klong 8, Bangkok",
      priceRange: "฿2.8M - ฿4.5M",
      type: "Modern Townhome",
      bedrooms: 3,
      bathrooms: 2,
      area: 150,
      status: "available",
      gradient: "from-cyan-500 to-blue-600",
    },
    {
      id: 4,
      title: "The Best Lamlukka Klong 6",
      location: "Lamlukka Klong 6, Pathum Thani",
      priceRange: "฿3.2M - ฿5.0M",
      type: "Single House",
      bedrooms: 3,
      bathrooms: 3,
      area: 170,
      status: "available",
      gradient: "from-orange-500 to-red-600",
    },
    {
      id: 5,
      title: "The Best Lamlukka Klong 8",
      location: "Lamlukka Klong 8, Pathum Thani",
      priceRange: "฿3.8M - ฿5.5M",
      type: "Modern Living",
      bedrooms: 3,
      bathrooms: 3,
      area: 190,
      status: "available",
      gradient: "from-green-500 to-emerald-600",
    },
    {
      id: 6,
      title: "The Best Premium",
      location: "Central Bangkok",
      priceRange: "฿5.5M - ฿8.0M",
      type: "Exclusive House",
      bedrooms: 4,
      bathrooms: 4,
      area: 280,
      status: "available",
      gradient: "from-indigo-500 to-purple-600",
    },
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }}></div>
        </div>

        {/* Grid Pattern */}
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
          <div className="text-center">
            <div className="inline-flex items-center gap-2 glass px-6 py-3 rounded-full font-semibold mb-6 border border-white/30">
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
              <span className="text-cyan-400 uppercase tracking-wider text-sm">{t.pages.properties.badge}</span>
            </div>
            
            <h1 
              className="text-6xl md:text-7xl font-bold mb-6 leading-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              {t.pages.properties.title}{" "}
              <span className="text-transparent bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text">
                {t.pages.properties.titleHighlight}
              </span>
            </h1>
            
            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-12 leading-relaxed">
              {t.pages.properties.description}
            </p>

            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-4">
              {["all", "available", "sold"].map((status) => (
                <button
                  key={status}
                  onClick={() => setFilter(status)}
                  className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    filter === status
                      ? "bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg shadow-blue-500/50"
                      : "glass border border-white/30 text-white hover:border-white/50"
                  }`}
                >
                  {t.pages.properties.filters[status as keyof typeof t.pages.properties.filters]}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Properties Grid */}
      <section className="py-32 bg-gradient-to-b from-white via-slate-50 to-white">
        {/* Background Blobs */}
        <div className="absolute w-full h-full pointer-events-none">
          <div className="absolute top-40 left-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-40 right-10 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "3s" }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {properties.map((property, index) => (
              <div
                key={property.id}
                className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${property.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 z-10`}></div>
                
                {/* Corner Accent */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-white/0 to-white/10 rounded-bl-3xl z-20"></div>

                {/* Image Area */}
                <div className="relative h-72 bg-gradient-to-br from-slate-100 via-slate-200 to-slate-100 overflow-hidden">
                  {/* Pattern */}
                  <div className="absolute inset-0 opacity-5">
                    <div className="absolute inset-0" style={{
                      backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 10px, currentColor 10px, currentColor 11px)`,
                    }}></div>
                  </div>
                  
                  {/* Icon */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className={`text-8xl opacity-30 group-hover:scale-110 transition-transform duration-500 bg-gradient-to-br ${property.gradient} bg-clip-text text-transparent`}>
                      🏠
                    </div>
                  </div>

                  {/* Status Badge */}
                  <div className="absolute top-6 left-6 glass px-4 py-2 rounded-full text-sm font-semibold z-20 border border-white/30">
                    <span className="gradient-text">{property.type}</span>
                  </div>

                  {/* Price */}
                  <div className="absolute bottom-6 right-6 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg z-20">
                    <span className="text-lg font-bold gradient-text">{property.priceRange}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="relative p-8 z-20">
                  <h3 
                    className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-cyan-600 group-hover:bg-clip-text transition-all duration-300"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {property.title}
                  </h3>
                  
                  {/* Location */}
                  <div className="flex items-start text-slate-600 mb-6">
                    <svg className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="text-sm">{property.location}</span>
                  </div>

                  {/* Features */}
                  <div className="grid grid-cols-3 gap-4 mb-6 pb-6 border-b border-slate-200">
                    <div className="text-center">
                      <div className="text-2xl mb-1">🛏️</div>
                      <div className="text-sm text-slate-600">{property.bedrooms} {t.pages.properties.details.beds}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl mb-1">🚿</div>
                      <div className="text-sm text-slate-600">{property.bathrooms} {t.pages.properties.details.baths}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl mb-1">📐</div>
                      <div className="text-sm text-slate-600">{property.area} {t.pages.properties.details.area}</div>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <Link
                    href={`/properties/${property.id}`}
                    className="relative block w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white text-center py-3.5 rounded-xl font-semibold overflow-hidden group/btn"
                  >
                    <span className="relative z-10">View Details</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
