"use client";

import React from "react";
import { useLanguage } from "@/lib/i18n/LanguageContext";

interface Feature {
  icon: string;
  title: string;
  description: string;
}

const Features: React.FC = () => {
  const { t } = useLanguage();

  const features: Feature[] = [
    {
      icon: "🏠",
      title: t.features.items.selection.title,
      description: t.features.items.selection.description,
    },
    {
      icon: "💼",
      title: t.features.items.guidance.title,
      description: t.features.items.guidance.description,
    },
    {
      icon: "🔒",
      title: t.features.items.secure.title,
      description: t.features.items.secure.description,
    },
    {
      icon: "📊",
      title: t.features.items.insights.title,
      description: t.features.items.insights.description,
    },
    {
      icon: "⚡",
      title: t.features.items.processing.title,
      description: t.features.items.processing.description,
    },
    {
      icon: "🌟",
      title: t.features.items.service.title,
      description: t.features.items.service.description,
    },
  ];

  return (
    <section className="py-32 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%232563eb' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
            {t.features.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t.features.description}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-gray-100"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Content */}
              <div className="relative z-10">
                <div className="text-6xl mb-6 group-hover:scale-125 transition-transform duration-500 inline-block">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 group-hover:text-white mb-4 transition-colors duration-500">
                  {feature.title}
                </h3>
                <p className="text-gray-600 group-hover:text-white/90 leading-relaxed transition-colors duration-500">
                  {feature.description}
                </p>
              </div>

              {/* Corner accent */}
              <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
