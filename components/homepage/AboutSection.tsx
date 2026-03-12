"use client";

import React from "react";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const AboutSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="py-32 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-30" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-100 rounded-full blur-3xl opacity-30" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full font-semibold text-sm tracking-wide">
              {t.about.badge}
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
              {t.about.title}
              <br />
              <span className="gradient-text">{t.about.titleHighlight}</span>
            </h2>
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p className="animate-slide-up" style={{ animationDelay: "0.1s" }}>
                {t.about.description1}
              </p>
              <p className="animate-slide-up" style={{ animationDelay: "0.2s" }}>
                {t.about.description2}
              </p>
              <p className="animate-slide-up" style={{ animationDelay: "0.3s" }}>
                {t.about.description3}
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8">
              {[
                { value: "20+", label: t.about.stats.years },
                { value: "10K+", label: t.about.stats.families },
                { value: "15+", label: t.about.stats.projects },
              ].map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="text-5xl font-bold gradient-text mb-2 group-hover:scale-110 transition-transform" style={{ fontFamily: "'Playfair Display', serif" }}>
                    {stat.value}
                  </div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Image Grid */}
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-6">
              <div className="relative h-64 bg-gradient-to-br from-blue-500 to-blue-700 rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500 group">
                <div className="absolute inset-0 flex items-center justify-center text-8xl opacity-20 group-hover:opacity-30 transition-opacity">
                  🏡
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-6 left-6 text-white">
                  <p className="text-sm font-semibold mb-1">Modern Design</p>
                  <p className="text-xs opacity-80">Contemporary Living</p>
                </div>
              </div>
              <div className="relative h-80 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500 group">
                <div className="absolute inset-0 flex items-center justify-center text-8xl opacity-20 group-hover:opacity-30 transition-opacity">
                  🏠
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-6 left-6 text-white">
                  <p className="text-sm font-semibold mb-1">Quality Build</p>
                  <p className="text-xs opacity-80">Premium Materials</p>
                </div>
              </div>
            </div>
            <div className="space-y-6 pt-12">
              <div className="relative h-80 bg-gradient-to-br from-purple-500 to-pink-600 rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500 group">
                <div className="absolute inset-0 flex items-center justify-center text-8xl opacity-20 group-hover:opacity-30 transition-opacity">
                  �️
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-6 left-6 text-white">
                  <p className="text-sm font-semibold mb-1">Prime Locations</p>
                  <p className="text-xs opacity-80">Best Areas</p>
                </div>
              </div>
              <div className="relative h-64 bg-gradient-to-br from-orange-500 to-red-600 rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500 group">
                <div className="absolute inset-0 flex items-center justify-center text-8xl opacity-20 group-hover:opacity-30 transition-opacity">
                  �
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-6 left-6 text-white">
                  <p className="text-sm font-semibold mb-1">Expert Team</p>
                  <p className="text-xs opacity-80">Professional Service</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
