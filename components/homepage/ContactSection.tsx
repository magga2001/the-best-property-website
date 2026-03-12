"use client";

import React, { useState } from "react";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { CONTACT_INFO } from "@/lib/constants/app";

const ContactSection: React.FC = () => {
  const { t } = useLanguage();
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
    alert("Thank you for your inquiry! We will contact you soon.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="relative py-32 bg-gradient-to-br from-blue-600 via-cyan-600 to-blue-700 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full opacity-30">
          <div className="absolute top-20 right-20 w-96 h-96 bg-white/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-cyan-300/30 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }}></div>
        </div>
        
        {/* Pattern Overlay */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `
                linear-gradient(to right, white 1px, transparent 1px),
                linear-gradient(to bottom, white 1px, transparent 1px)
              `,
              backgroundSize: "60px 60px",
            }}
          ></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="text-white">
            <div className="inline-flex items-center gap-2 glass px-6 py-3 rounded-full font-semibold mb-6 border border-white/30">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
              <span className="text-white uppercase tracking-wider text-sm">{t.contact.badge}</span>
            </div>
            
            <h2 className="text-5xl md:text-6xl font-bold mb-4 leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
              {t.contact.title}
              <br />
              <span className="text-cyan-200">{t.contact.titleHighlight}</span>
            </h2>
            
            <p className="text-xl text-blue-100 mb-12 leading-relaxed">
              {t.contact.description}
            </p>

            {/* Contact Info Cards */}
            <div className="space-y-6">
              {/* Phone */}
              <div className="glass rounded-2xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 hover:shadow-lg group">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <svg
                      className="w-7 h-7"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <div className="font-bold text-lg mb-2">{t.contact.phone}</div>
                    <a href={`tel:${CONTACT_INFO.phone}`} className="text-blue-100 hover:text-white transition-colors block mb-1">
                      {CONTACT_INFO.phone}
                    </a>
                    <a href={`tel:${CONTACT_INFO.mobile}`} className="text-blue-100 hover:text-white transition-colors block">
                      {CONTACT_INFO.mobile}
                    </a>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="glass rounded-2xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 hover:shadow-lg group">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <svg
                      className="w-7 h-7"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <div className="font-bold text-lg mb-2">{t.contact.email}</div>
                    <a href={`mailto:${CONTACT_INFO.email}`} className="text-blue-100 hover:text-white transition-colors">
                      {CONTACT_INFO.email}
                    </a>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="glass rounded-2xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 hover:shadow-lg group">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <svg
                      className="w-7 h-7"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <div className="font-bold text-lg mb-2">{t.contact.businessHours}</div>
                    <div className="text-blue-100 mb-1">{t.contact.hours.weekday}</div>
                    <div className="text-blue-100">{t.contact.hours.weekend}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Contact Form */}
          <div className="glass rounded-3xl p-10 shadow-2xl border border-white/30 backdrop-blur-md">
            <h3 
              className="text-3xl font-bold text-white mb-8" 
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              {t.contact.form.title}
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Input */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-white mb-2"
                >
                  {t.contact.form.name}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-5 py-4 rounded-xl border border-white/30 bg-white/10 backdrop-blur-sm text-white placeholder-white/60 focus:ring-2 focus:ring-white/50 focus:border-transparent outline-none transition-all"
                  placeholder="John Doe"
                />
              </div>

              {/* Email Input */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-white mb-2"
                >
                  {t.contact.form.email}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-5 py-4 rounded-xl border border-white/30 bg-white/10 backdrop-blur-sm text-white placeholder-white/60 focus:ring-2 focus:ring-white/50 focus:border-transparent outline-none transition-all"
                  placeholder="john@example.com"
                />
              </div>

              {/* Phone Input */}
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-semibold text-white mb-2"
                >
                  {t.contact.form.phone}
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-5 py-4 rounded-xl border border-white/30 bg-white/10 backdrop-blur-sm text-white placeholder-white/60 focus:ring-2 focus:ring-white/50 focus:border-transparent outline-none transition-all"
                  placeholder="02-XXX-XXXX"
                />
              </div>

              {/* Message Textarea */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-white mb-2"
                >
                  {t.contact.form.message}
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-5 py-4 rounded-xl border border-white/30 bg-white/10 backdrop-blur-sm text-white placeholder-white/60 focus:ring-2 focus:ring-white/50 focus:border-transparent outline-none transition-all resize-none"
                  placeholder={t.contact.form.messagePlaceholder}
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="relative w-full bg-white text-blue-600 py-5 rounded-xl font-bold text-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
              >
                <span className="relative z-10">{t.contact.form.submit}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-50 to-blue-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
