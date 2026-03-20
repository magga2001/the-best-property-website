"use client";

import React, { useState } from "react";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/src/sanity/lib/image";

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

interface Props {
  properties: Property[];
}

const gradients = [
  "from-blue-500 to-cyan-600",
  "from-purple-500 to-pink-600",
  "from-cyan-500 to-blue-600",
  "from-green-500 to-emerald-600",
  "from-orange-500 to-red-600",
  "from-teal-500 to-green-600",
];

export default function PropertiesPageClient({ properties }: Props) {
  const { t } = useLanguage();
  const [filter, setFilter] = useState("all");

  const filteredProperties = filter === "all" 
    ? properties 
    : properties.filter(property => property.status === filter);

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
              <button
                onClick={() => setFilter("all")}
                className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  filter === "all"
                    ? "bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg shadow-blue-500/50"
                    : "glass border border-white/30 text-white hover:border-white/50"
                }`}
              >
                {t.pages.properties.filters.all}
              </button>
              <button
                onClick={() => setFilter("for-sale")}
                className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  filter === "for-sale"
                    ? "bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg shadow-blue-500/50"
                    : "glass border border-white/30 text-white hover:border-white/50"
                }`}
              >
                For Sale
              </button>
              <button
                onClick={() => setFilter("for-rent")}
                className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  filter === "for-rent"
                    ? "bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg shadow-blue-500/50"
                    : "glass border border-white/30 text-white hover:border-white/50"
                }`}
              >
                For Rent
              </button>
              <button
                onClick={() => setFilter("sold")}
                className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  filter === "sold"
                    ? "bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg shadow-blue-500/50"
                    : "glass border border-white/30 text-white hover:border-white/50"
                }`}
              >
                Sold
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Properties Grid */}
      <section className="py-32 bg-gradient-to-b from-white via-slate-50 to-white relative overflow-hidden">
        {/* Background Blobs */}
        <div className="absolute w-full h-full pointer-events-none">
          <div className="absolute top-40 left-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-40 right-10 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "3s" }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {filteredProperties.length === 0 ? (
            <div className="text-center py-20">
              <div className="mb-6">
                <svg className="w-24 h-24 mx-auto text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
                {filter === "all" ? "No Properties Available" : `No ${filter.replace('-', ' ')} Properties`}
              </h3>
              <p className="text-lg text-slate-600 mb-6">
                {filter === "all" 
                  ? "We're currently updating our listings. Please check back soon for new properties."
                  : "Try selecting a different filter to view available properties."
                }
              </p>
              {filter !== "all" && (
                <button
                  onClick={() => setFilter("all")}
                  className="inline-block px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-xl hover:shadow-lg transition-all"
                >
                  View All Properties
                </button>
              )}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProperties.map((property, index) => {
                const gradient = gradients[index % gradients.length];
                
                return (
                  <div
                    key={property._id}
                    className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {/* Gradient Overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 z-10`}></div>
                    
                    {/* Corner Accent */}
                    <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-white/0 to-white/10 rounded-bl-3xl z-20"></div>

                    {/* Image Area */}
                    <div className={`relative h-64 bg-gradient-to-br ${gradient} overflow-hidden`}>
                      {property.mainImage ? (
                        <Image
                          src={urlFor(property.mainImage).width(600).height(400).url()}
                          alt={property.mainImage.alt || property.title}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      ) : (
                        <>
                          {/* Pattern */}
                          <div className="absolute inset-0 opacity-20">
                            <div className="absolute inset-0" style={{
                              backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 10px, currentColor 10px, currentColor 11px)`,
                            }}></div>
                          </div>
                          
                          {/* Icon */}
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="text-8xl group-hover:scale-110 transition-transform duration-500 relative z-10">
                              🏠
                            </div>
                          </div>
                        </>
                      )}

                      {/* Status Badge */}
                      <div className="absolute top-6 left-6 glass px-4 py-2 rounded-full text-sm font-semibold z-20 border border-white/30">
                        <span className="text-white capitalize">{property.status.replace('-', ' ')}</span>
                      </div>

                      {property.featured && (
                        <div className="absolute top-6 right-6 glass px-4 py-2 rounded-full text-sm font-semibold z-20 border border-white/30">
                          <span className="text-yellow-300">⭐ Featured</span>
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="relative p-8 z-20">
                      {/* Title */}
                      <h3 
                        className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-cyan-600 group-hover:bg-clip-text transition-all leading-tight"
                        style={{ fontFamily: "'Playfair Display', serif" }}
                      >
                        {property.title}
                      </h3>

                      {/* Location */}
                      {property.location && (
                        <p className="text-slate-600 mb-4 flex items-center gap-2">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          {property.location}
                        </p>
                      )}

                      {/* Price */}
                      <div className="text-3xl font-bold text-blue-600 mb-6">
                        {property.priceRange || "Contact for price"}
                      </div>

                      {/* Property Type */}
                      {property.propertyType && (
                        <p className="text-sm text-slate-500 mb-6 capitalize">{property.propertyType}</p>
                      )}

                      {/* View Details Button */}
                      <Link
                        href={`/properties/${property.slug.current}`}
                        className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:gap-4 transition-all duration-300 group/link"
                      >
                        <span>View Details</span>
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
          )}
        </div>
      </section>
    </main>
  );
}
