"use client";

import React from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { useLanguage } from "@/lib/i18n/LanguageContext";

interface NewsArticle {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  gradient: string;
  readTime: string;
  author: string;
  content: string[];
}

export default function NewsArticlePage() {
  const params = useParams();
  const { t } = useLanguage();
  const articleId = Number(params.id);

  const articles: Record<number, NewsArticle> = {
    1: {
      id: 1,
      title: "New Project Launch: The Best Premium Collection",
      excerpt: "Introducing our latest luxury residential project in the heart of Bangkok. Modern design meets ultimate comfort with premium facilities.",
      date: "March 10, 2026",
      category: "Project Launch",
      gradient: "from-blue-500 to-purple-600",
      readTime: "5 min read",
      author: "Marketing Team",
      content: [
        "We are thrilled to announce the launch of The Best Premium Collection, our most ambitious residential project to date. Located in the prestigious heart of Central Bangkok, this exclusive development represents the pinnacle of luxury living.",
        "The Best Premium Collection features 50 exclusive units, each meticulously designed to provide the ultimate in comfort, style, and functionality. With spacious layouts ranging from 250 to 350 square meters, every residence offers generous living spaces, premium finishes, and state-of-the-art amenities.",
        "Key features of The Best Premium Collection include:",
        "• Premium European-style kitchens with high-end appliances\n• Marble flooring throughout\n• Smart home automation systems\n• Private swimming pools\n• Dedicated parking for 4 vehicles\n• 24/7 concierge service\n• Private clubhouse and fitness center",
        "The project is strategically located with excellent connectivity to major business districts, international schools, and premium shopping centers. Residents will enjoy easy access to the best that Bangkok has to offer while residing in a peaceful, secure environment.",
        "Special launch prices are available for early buyers. Visit our sales gallery to experience the luxury firsthand and secure your dream home today.",
      ],
    },
    2: {
      id: 2,
      title: "Smart Home Features Now Standard",
      excerpt: "All new projects will include smart home technology as standard, bringing modern convenience to your fingertips.",
      date: "March 5, 2026",
      category: "Innovation",
      gradient: "from-cyan-500 to-blue-600",
      readTime: "4 min read",
      author: "Technology Team",
      content: [
        "In our continuous effort to provide the best living experience for our customers, The Best Property Group is proud to announce that all new residential projects will now include comprehensive smart home technology as a standard feature.",
        "This significant upgrade reflects our commitment to innovation and our understanding of modern homeowners' needs. Smart home technology not only adds convenience but also enhances security, energy efficiency, and overall quality of life.",
        "Standard Smart Home Features:",
        "• Automated lighting control with voice commands\n• Smart climate control systems\n• Security cameras and smart door locks\n• Motion sensors and alarm systems\n• Energy monitoring and management\n• Integration with mobile devices\n• Voice assistant compatibility",
        "The smart home system is designed to be user-friendly, with intuitive controls accessible via smartphone apps. Homeowners can manage their entire home environment from anywhere, whether they're at work, on vacation, or relaxing in another room.",
        "Energy efficiency is a major benefit of our smart home systems. Automated temperature controls, lighting schedules, and energy monitoring help reduce utility costs while minimizing environmental impact.",
        "All systems come with comprehensive training and 24/7 technical support to ensure our homeowners can make the most of their smart home features.",
      ],
    },
    3: {
      id: 3,
      title: "Sustainable Living Initiative",
      excerpt: "Our commitment to eco-friendly construction and sustainable living practices in all future developments.",
      date: "February 28, 2026",
      category: "Sustainability",
      gradient: "from-green-500 to-emerald-600",
      readTime: "6 min read",
      author: "Sustainability Team",
      content: [
        "The Best Property Group is taking a bold step forward in environmental responsibility with our comprehensive Sustainable Living Initiative. This program demonstrates our commitment to creating homes that are not only beautiful and functional but also environmentally responsible.",
        "As global awareness of climate change grows, we recognize our responsibility as a property developer to minimize our environmental footprint and create sustainable communities for future generations.",
        "Our Sustainable Living Initiative includes:",
        "Green Building Practices:\n• Use of eco-friendly building materials\n• Energy-efficient construction methods\n• Reduced waste during construction\n• Local material sourcing to reduce transportation emissions",
        "Energy Efficiency:\n• Solar panel installations on all new projects\n• LED lighting throughout\n• High-efficiency HVAC systems\n• Smart energy management systems\n• Natural ventilation designs",
        "Water Conservation:\n• Rainwater harvesting systems\n• Water-efficient fixtures and appliances\n• Greywater recycling for landscaping\n• Drought-resistant landscaping",
        "Community Features:\n• Extensive green spaces and parks\n• Community gardens\n• Bicycle storage and electric vehicle charging stations\n• Recycling facilities\n• Educational programs on sustainable living",
        "We're proud to announce that our upcoming projects are targeting LEED certification, demonstrating our commitment to internationally recognized sustainability standards.",
      ],
    },
    4: {
      id: 4,
      title: "The Best Masterpiece Grand Opening",
      excerpt: "Join us for the grand opening of our newest luxury villa project in Lamlukka. Special launch prices available.",
      date: "February 20, 2026",
      category: "Project Launch",
      gradient: "from-purple-500 to-pink-600",
      readTime: "3 min read",
      author: "Events Team",
      content: [
        "Mark your calendars! The Best Property Group is excited to invite you to the grand opening of The Best Masterpiece, our stunning new luxury villa project in Lamlukka, Pathum Thani.",
        "Event Details:\nDate: March 15-17, 2026\nTime: 10:00 AM - 6:00 PM\nLocation: Lamlukka, Pathum Thani\nFree admission and refreshments",
        "The Best Masterpiece represents the perfect blend of luxury and practicality. Each villa features 4 spacious bedrooms, 4 bathrooms, and over 250 square meters of living space on generous 80 square wah plots.",
        "Grand Opening Special Offers:\n• Special launch prices available only during the event\n• Free premium upgrade packages worth ฿500,000\n• Extended payment terms\n• Complimentary furniture packages for early buyers\n• Lucky draw with exciting prizes",
        "Experience the luxury firsthand with guided tours of our beautifully furnished show units. Our sales team will be available to discuss financing options, customization possibilities, and answer all your questions.",
        "Don't miss this opportunity to own your dream villa at an exceptional price. Register now to receive exclusive early-bird benefits!",
      ],
    },
    5: {
      id: 5,
      title: "Innovation in Home Design",
      excerpt: "Discover how we're incorporating cutting-edge design trends and technology into our latest projects.",
      date: "February 15, 2026",
      category: "Innovation",
      gradient: "from-orange-500 to-red-600",
      readTime: "5 min read",
      author: "Design Team",
      content: [
        "At The Best Property Group, innovation is at the heart of everything we do. Our design team continuously researches and incorporates the latest trends and technologies to create homes that are not just houses, but living spaces that enhance quality of life.",
        "Current Design Innovations:",
        "Open-Concept Living:\nModern families value connection and flexibility. Our new designs feature expansive open-plan living areas that seamlessly blend kitchen, dining, and living spaces, perfect for both family time and entertaining.",
        "Indoor-Outdoor Integration:\nLarge sliding glass doors, covered terraces, and thoughtful landscaping blur the boundaries between indoor and outdoor living, expanding usable space and connecting residents with nature.",
        "Multi-Functional Spaces:\nWith remote work becoming increasingly common, our designs include versatile spaces that can serve as home offices, study areas, or hobby rooms, adapting to residents' changing needs.",
        "Natural Light Optimization:\nStrategic window placement, skylights, and light wells ensure every space is bathed in natural light, reducing energy consumption while creating healthier, more pleasant living environments.",
        "Sustainable Materials:\nWe're incorporating innovative eco-friendly materials that are both beautiful and sustainable, including recycled wood, low-VOC paints, and energy-efficient glass.",
        "Technology Integration:\nBeyond smart home features, we're designing homes with infrastructure for future technologies, ensuring our properties remain cutting-edge for years to come.",
      ],
    },
    6: {
      id: 6,
      title: "Green Building Certification Achieved",
      excerpt: "The Best Property Group receives prestigious green building certification for sustainable development practices.",
      date: "February 10, 2026",
      category: "Sustainability",
      gradient: "from-teal-500 to-green-600",
      readTime: "4 min read",
      author: "Corporate Communications",
      content: [
        "We are proud to announce that The Best Property Group has achieved Green Building Certification from the Thailand Green Building Institute (TGBI), recognizing our commitment to sustainable development and environmental responsibility.",
        "This certification is a significant milestone in our journey toward more sustainable real estate development. It validates our efforts to minimize environmental impact while creating superior living spaces for our customers.",
        "What This Certification Means:",
        "The Green Building Certification evaluates projects across multiple criteria including energy efficiency, water conservation, material selection, indoor environmental quality, and sustainable site development. Our projects have met or exceeded requirements in all categories.",
        "Key Achievements:\n• 40% reduction in energy consumption compared to conventional buildings\n• 30% reduction in water usage through efficient fixtures and rainwater harvesting\n• 60% of construction waste recycled\n• 100% use of low-VOC materials for better indoor air quality\n• 30% of site area dedicated to green spaces",
        "Benefits for Our Customers:",
        "Certified green buildings offer numerous advantages for residents, including lower utility bills, healthier indoor environments, and the satisfaction of living sustainably. Properties with green certification also tend to maintain higher resale values.",
        "Our Commitment Moving Forward:",
        "This certification is not the end but the beginning of our green building journey. We are committed to pursuing even higher levels of certification for our future projects and continuously improving our sustainability practices.",
        "We thank our customers for their support and trust as we work together to create a more sustainable future for Thailand.",
      ],
    },
  };

  const article = articles[articleId];

  if (!article) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Article Not Found</h1>
          <p className="text-slate-600 mb-8">The article you're looking for doesn't exist.</p>
          <Link
            href="/news"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-xl transition-all"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to News
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }}></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Back Button */}
          <Link
            href="/news"
            className="inline-flex items-center gap-2 glass px-6 py-3 rounded-xl mb-8 hover:bg-white/20 transition-all border border-white/30"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to News
          </Link>

          {/* Category Badge */}
          <div className="glass px-4 py-2 rounded-full inline-block mb-6 border border-white/30">
            <span className="text-cyan-400 font-semibold">{article.category}</span>
          </div>

          {/* Title */}
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
            {article.title}
          </h1>

          {/* Meta Information */}
          <div className="flex flex-wrap items-center gap-6 text-slate-300">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <span>{article.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span>{article.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>{article.readTime}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="relative -mt-20 mb-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`relative h-96 bg-gradient-to-br ${article.gradient} rounded-3xl overflow-hidden shadow-2xl`}>
            <div className="absolute inset-0 opacity-20">
              <div className="absolute inset-0" style={{
                backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 10px, currentColor 10px, currentColor 11px)`,
              }}></div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-9xl">📰</div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <article className="prose prose-lg max-w-none">
            {article.content.map((paragraph, index) => (
              <p key={index} className="text-lg text-slate-700 leading-relaxed mb-6" style={{ whiteSpace: 'pre-line' }}>
                {paragraph}
              </p>
            ))}
          </article>

          {/* Share Section */}
          <div className="mt-16 pt-8 border-t border-slate-200">
            <h3 className="text-xl font-bold text-slate-900 mb-4">Share this article</h3>
            <div className="flex gap-4">
              <button className="p-3 rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </button>
              <button className="p-3 rounded-xl bg-sky-500 text-white hover:bg-sky-600 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </button>
              <button className="p-3 rounded-xl bg-green-600 text-white hover:bg-green-700 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center" style={{ fontFamily: "'Playfair Display', serif" }}>
            Related <span className="gradient-text">Articles</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {Object.values(articles)
              .filter((a) => a.id !== articleId && a.category === article.category)
              .slice(0, 3)
              .map((relatedArticle) => (
                <Link
                  key={relatedArticle.id}
                  href={`/news/${relatedArticle.id}`}
                  className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3"
                >
                  <div className={`h-48 bg-gradient-to-br ${relatedArticle.gradient} flex items-center justify-center relative`}>
                    <div className="text-6xl group-hover:scale-110 transition-transform">📰</div>
                  </div>
                  <div className="p-6">
                    <div className="text-sm text-slate-500 mb-2">{relatedArticle.date}</div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-cyan-600 group-hover:bg-clip-text transition-all line-clamp-2">
                      {relatedArticle.title}
                    </h3>
                    <p className="text-sm text-slate-600 line-clamp-2">{relatedArticle.excerpt}</p>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </main>
  );
}
