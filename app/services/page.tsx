"use client";

import React from "react";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function ServicesPage() {
  const { t } = useLanguage();

  const services = [
    {
      icon: "🏘️",
      title: "Property Development",
      description: "End-to-end property development services from concept to completion, delivering quality residential projects.",
      features: ["Site Selection", "Design & Planning", "Construction Management", "Quality Assurance"],
      gradient: "from-blue-500 to-cyan-600",
    },
    {
      icon: "🏡",
      title: "Property Sales",
      description: "Expert guidance in buying and selling properties with transparent processes and professional support.",
      features: ["Market Analysis", "Property Valuation", "Sales Negotiation", "Legal Assistance"],
      gradient: "from-purple-500 to-pink-600",
    },
    {
      icon: "🏗️",
      title: "Custom Home Building",
      description: "Personalized home construction services tailored to your unique vision and lifestyle requirements.",
      features: ["Custom Design", "Material Selection", "Project Management", "Interior Design"],
      gradient: "from-green-500 to-emerald-600",
    },
    {
      icon: "💼",
      title: "Investment Consulting",
      description: "Strategic real estate investment advice to maximize returns and minimize risks in property markets.",
      features: ["Market Research", "ROI Analysis", "Portfolio Management", "Risk Assessment"],
      gradient: "from-orange-500 to-red-600",
    },
    {
      icon: "🔧",
      title: "Property Management",
      description: "Comprehensive property management services ensuring your investment is well-maintained and profitable.",
      features: ["Tenant Management", "Maintenance Services", "Rent Collection", "Property Inspection"],
      gradient: "from-cyan-500 to-blue-600",
    },
    {
      icon: "📋",
      title: "Legal & Documentation",
      description: "Complete legal support and documentation services for smooth and secure property transactions.",
      features: ["Contract Review", "Title Transfer", "Compliance Check", "Registration Services"],
      gradient: "from-indigo-500 to-purple-600",
    },
  ];

  const process = [
    { step: "01", title: "Consultation", description: "Initial meeting to understand your needs and requirements" },
    { step: "02", title: "Planning", description: "Detailed planning and project design based on your vision" },
    { step: "03", title: "Execution", description: "Professional implementation with quality control" },
    { step: "04", title: "Delivery", description: "Final handover with complete documentation and support" },
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
              <span className="text-cyan-400 uppercase tracking-wider text-sm">{t.pages.services.badge}</span>
            </div>
            
            <h1 className="text-6xl md:text-7xl font-bold mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
              {t.pages.services.title}{" "}
              <span className="text-transparent bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text">
                {t.pages.services.titleHighlight}
              </span>
            </h1>
            
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              {t.pages.services.description}
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-32 bg-gradient-to-b from-white via-slate-50 to-white relative overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "3s" }}></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3"
              >
                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                
                {/* Corner Accent */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-white/0 to-white/10 rounded-bl-3xl"></div>

                {/* Content */}
                <div className="relative p-8">
                  {/* Icon */}
                  <div className="w-20 h-20 mb-6 rounded-2xl bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center text-4xl group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>

                  {/* Title */}
                  <h3 
                    className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-cyan-600 group-hover:bg-clip-text transition-all"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-slate-600">
                        <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
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
              {t.pages.services.process.title} <span className="text-cyan-400">{t.pages.services.process.titleHighlight}</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              {t.pages.services.process.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <div
                key={index}
                className="glass rounded-3xl p-8 border border-white/20 hover:border-white/40 transition-all duration-500 hover:shadow-xl hover:shadow-blue-500/20 text-center group"
              >
                <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center text-3xl font-bold group-hover:scale-110 transition-transform">
                  {item.step}
                </div>
                <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                  {item.title}
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-gradient-to-b from-white via-slate-50 to-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="glass rounded-3xl p-16 border border-blue-200/30 text-center">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 gradient-text" style={{ fontFamily: "'Playfair Display', serif" }}>
              {t.pages.services.cta.title}
            </h2>
            <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
              {t.pages.services.cta.description}
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-12 py-5 rounded-xl font-bold text-lg hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 group"
            >
              <span>{t.pages.services.cta.button}</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
