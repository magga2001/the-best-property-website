"use client";

import React from "react";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function AboutPage() {
  const { t } = useLanguage();

  const timeline = [
    { year: "1995", title: "Company Founded", description: "Started our journey in real estate development" },
    { year: "2005", title: "Major Expansion", description: "Expanded operations across Bangkok and surrounding areas" },
    { year: "2015", title: "Award Recognition", description: "Received Excellence in Property Development Award" },
    { year: "2020", title: "Sustainable Focus", description: "Committed to eco-friendly and sustainable developments" },
    { year: "2025", title: "Digital Innovation", description: "Launched smart home technology in all new projects" },
  ];

  const team = [
    { name: "Somchai Rattanakorn", role: "CEO & Founder", gradient: "from-blue-500 to-cyan-600" },
    { name: "Nattaya Srisombat", role: "Chief Operating Officer", gradient: "from-purple-500 to-pink-600" },
    { name: "Wichai Thanasak", role: "Head of Development", gradient: "from-green-500 to-emerald-600" },
    { name: "Apinya Chaiwong", role: "Marketing Director", gradient: "from-orange-500 to-red-600" },
  ];

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
              <span className="text-cyan-400 uppercase tracking-wider text-sm">{t.pages.about.badge}</span>
            </div>
            
            <h1 className="text-6xl md:text-7xl font-bold mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
              <span className="text-transparent bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text">
                {t.pages.about.title}
              </span>
            </h1>
            
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              {t.pages.about.description}
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-32 bg-gradient-to-b from-white via-slate-50 to-white relative overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl animate-float"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Mission */}
            <div className="glass rounded-3xl p-12 border border-blue-200/30 hover:shadow-xl transition-all duration-500 group">
              <div className="text-6xl mb-6 group-hover:scale-110 transition-transform">🎯</div>
              <h2 className="text-4xl font-bold mb-6 gradient-text" style={{ fontFamily: "'Playfair Display', serif" }}>
                {t.pages.about.mission.title}
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                {t.pages.about.mission.description}
              </p>
            </div>

            {/* Vision */}
            <div className="glass rounded-3xl p-12 border border-blue-200/30 hover:shadow-xl transition-all duration-500 group">
              <div className="text-6xl mb-6 group-hover:scale-110 transition-transform">✨</div>
              <h2 className="text-4xl font-bold mb-6 gradient-text" style={{ fontFamily: "'Playfair Display', serif" }}>
                {t.pages.about.vision.title}
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                {t.pages.about.vision.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-32 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="w-full h-full" style={{
            backgroundImage: `linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
              {t.pages.about.timeline.title} <span className="text-cyan-400">{t.pages.about.timeline.titleHighlight}</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              {t.pages.about.timeline.description}
            </p>
          </div>

          <div className="space-y-8">
            {timeline.map((item, index) => (
              <div
                key={index}
                className="glass rounded-2xl p-8 border border-white/20 hover:border-white/40 transition-all duration-500 hover:shadow-xl hover:shadow-blue-500/20 group"
              >
                <div className="flex flex-col md:flex-row md:items-center gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <span className="text-3xl font-bold">{item.year}</span>
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-2xl font-bold mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                      {item.title}
                    </h3>
                    <p className="text-slate-300 text-lg">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-32 bg-gradient-to-b from-white via-slate-50 to-white relative overflow-hidden">
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl animate-float"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 gradient-text" style={{ fontFamily: "'Playfair Display', serif" }}>
              {t.pages.about.team.title}
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              {t.pages.about.team.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3"
              >
                <div className={`h-64 bg-gradient-to-br ${member.gradient} flex items-center justify-center relative overflow-hidden`}>
                  <div className="absolute inset-0 opacity-20">
                    <div className="absolute inset-0" style={{
                      backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 10px, currentColor 10px, currentColor 11px)`,
                    }}></div>
                  </div>
                  <div className="text-8xl group-hover:scale-110 transition-transform relative z-10">👤</div>
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-slate-900 mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                    {member.name}
                  </h3>
                  <p className="text-slate-600">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
