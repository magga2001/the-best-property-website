"use client";

import React from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { CONTACT_INFO } from "@/lib/constants/app";

interface PropertyDetail {
  id: number;
  title: string;
  location: string;
  price: string;
  priceRange: string;
  type: string;
  bedrooms: number;
  bathrooms: number;
  area: number;
  landSize: number;
  status: string;
  description: string;
  features: string[];
  amenities: string[];
  gradient: string;
  coordinates: {
    lat: number;
    lng: number;
  };
}

export default function PropertyDetailPage() {
  const params = useParams();
  const { t } = useLanguage();
  const propertyId = Number(params.id);

  // Property database
  const properties: Record<number, PropertyDetail> = {
    1: {
      id: 1,
      title: "The Best Yuwittaya",
      location: "Yuwittaya Road, Bangkok",
      price: "฿4,200,000",
      priceRange: "฿3.5M - ฿5.2M",
      type: "Modern Single House",
      bedrooms: 3,
      bathrooms: 3,
      area: 180,
      landSize: 50,
      status: "Available",
      description: "Modern style single house designed for contemporary living. Features spacious living areas, modern kitchen, and beautiful garden space. Perfect for families looking for comfort and style in a prime Bangkok location.",
      features: [
        "Fully Air-Conditioned",
        "Modern Kitchen with Built-in Appliances",
        "Master Bedroom with En-suite",
        "Private Garden",
        "2 Parking Spaces",
        "Security System",
        "Smart Home Ready",
      ],
      amenities: [
        "24/7 Security",
        "CCTV Surveillance",
        "Community Park",
        "Children's Playground",
        "Fitness Center",
        "Swimming Pool",
      ],
      gradient: "from-blue-500 to-cyan-600",
      coordinates: {
        lat: 13.7563,
        lng: 100.5018,
      },
    },
    2: {
      id: 2,
      title: "The Best Masterpiece",
      location: "Lamlukka, Pathum Thani",
      price: "฿5,500,000",
      priceRange: "฿4.2M - ฿6.8M",
      type: "Luxury Villa",
      bedrooms: 4,
      bathrooms: 4,
      area: 250,
      landSize: 80,
      status: "Available",
      description: "Luxury villa with premium finishes and elegant design. Spacious layout with high ceilings, large windows for natural light, and beautifully landscaped garden. Located in a prestigious neighborhood with excellent facilities.",
      features: [
        "Premium Flooring Throughout",
        "Designer Kitchen with Island",
        "Walk-in Closets",
        "Private Pool",
        "Rooftop Terrace",
        "3 Parking Spaces",
        "Smart Home System",
        "Premium Security",
      ],
      amenities: [
        "Clubhouse",
        "Swimming Pool",
        "Fitness Center",
        "Tennis Court",
        "Children's Play Area",
        "Jogging Track",
        "24/7 Security",
      ],
      gradient: "from-purple-500 to-pink-600",
      coordinates: {
        lat: 14.0412,
        lng: 100.6534,
      },
    },
    3: {
      id: 3,
      title: "The Best Courtyard",
      location: "Klong 8, Bangkok",
      price: "฿3,600,000",
      priceRange: "฿2.8M - ฿4.5M",
      type: "Modern Townhome",
      bedrooms: 3,
      bathrooms: 2,
      area: 150,
      landSize: 30,
      status: "Available",
      description: "Modern townhome with efficient layout and contemporary design. Perfect for young families or first-time buyers. Features bright and airy spaces with quality finishes throughout.",
      features: [
        "Open Plan Living",
        "Modern Kitchen",
        "Private Terrace",
        "1 Parking Space",
        "Storage Room",
        "Ready to Move In",
      ],
      amenities: [
        "Security Guard",
        "Common Garden",
        "Children's Area",
        "Visitor Parking",
      ],
      gradient: "from-cyan-500 to-blue-600",
      coordinates: {
        lat: 13.8021,
        lng: 100.6190,
      },
    },
    4: {
      id: 4,
      title: "The Best Lamlukka Klong 6",
      location: "Lamlukka Klong 6, Pathum Thani",
      price: "฿4,100,000",
      priceRange: "฿3.2M - ฿5.0M",
      type: "Single House",
      bedrooms: 3,
      bathrooms: 3,
      area: 170,
      landSize: 55,
      status: "Available",
      description: "Well-designed single house in a peaceful neighborhood. Features practical layout with all essential amenities. Great location with easy access to main roads and public facilities.",
      features: [
        "Spacious Living Room",
        "Dining Area",
        "Modern Kitchen",
        "Garden Space",
        "2 Parking Spaces",
        "Storage Area",
      ],
      amenities: [
        "24/7 Security",
        "Community Park",
        "Playground",
        "Easy Highway Access",
      ],
      gradient: "from-orange-500 to-red-600",
      coordinates: {
        lat: 14.0356,
        lng: 100.6789,
      },
    },
    5: {
      id: 5,
      title: "The Best Lamlukka Klong 8",
      location: "Lamlukka Klong 8, Pathum Thani",
      price: "฿4,650,000",
      priceRange: "฿3.8M - ฿5.5M",
      type: "Modern Living",
      bedrooms: 3,
      bathrooms: 3,
      area: 190,
      landSize: 60,
      status: "Available",
      description: "Contemporary house with smart home features and modern amenities. Designed for comfortable living with spacious rooms and quality construction. Ideal for modern families seeking convenience and style.",
      features: [
        "Smart Home System",
        "Energy Efficient Design",
        "Modern Bathroom Fixtures",
        "Built-in Wardrobes",
        "Covered Carport",
        "Outdoor Living Space",
      ],
      amenities: [
        "Clubhouse",
        "Swimming Pool",
        "Fitness Room",
        "Security System",
        "Green Spaces",
      ],
      gradient: "from-green-500 to-emerald-600",
      coordinates: {
        lat: 14.0489,
        lng: 100.6912,
      },
    },
    6: {
      id: 6,
      title: "The Best Premium",
      location: "Central Bangkok",
      price: "฿6,750,000",
      priceRange: "฿5.5M - ฿8.0M",
      type: "Exclusive House",
      bedrooms: 4,
      bathrooms: 4,
      area: 280,
      landSize: 100,
      status: "Available",
      description: "Premium luxury house in the heart of Bangkok. Exceptional quality throughout with premium materials and finishes. Features spacious rooms, modern design, and exclusive facilities. Perfect for discerning buyers seeking the best.",
      features: [
        "Premium European Kitchen",
        "Marble Flooring",
        "Designer Bathrooms",
        "Private Swimming Pool",
        "Home Theater Room",
        "Wine Cellar",
        "4 Parking Spaces",
        "Complete Smart Home",
      ],
      amenities: [
        "Private Club",
        "Concierge Service",
        "Private Park",
        "Tennis Court",
        "Full Security",
        "Prime Location",
      ],
      gradient: "from-indigo-500 to-purple-600",
      coordinates: {
        lat: 13.7565,
        lng: 100.5231,
      },
    },
  };

  const property = properties[propertyId];

  if (!property) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Property Not Found</h1>
          <p className="text-slate-600 mb-8">The property you're looking for doesn't exist.</p>
          <Link
            href="/properties"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-xl transition-all"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Properties
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

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Back Button */}
          <Link
            href="/properties"
            className="inline-flex items-center gap-2 glass px-6 py-3 rounded-xl mb-8 hover:bg-white/20 transition-all border border-white/30"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Properties
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Image */}
            <div className="relative">
              <div className={`relative h-96 bg-gradient-to-br ${property.gradient} rounded-3xl overflow-hidden shadow-2xl`}>
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute inset-0" style={{
                    backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 10px, currentColor 10px, currentColor 11px)`,
                  }}></div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-9xl">🏠</div>
                </div>

                {/* Status Badge */}
                <div className="absolute top-6 left-6 glass px-6 py-3 rounded-full border border-white/30">
                  <span className="text-white font-bold">{property.status}</span>
                </div>
              </div>
            </div>

            {/* Right: Details */}
            <div>
              <div className="glass px-4 py-2 rounded-full inline-block mb-4 border border-white/30">
                <span className="text-cyan-400 font-semibold">{property.type}</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                {property.title}
              </h1>
              
              <div className="flex items-center text-xl text-slate-300 mb-6">
                <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {property.location}
              </div>

              <div className="text-5xl font-bold text-cyan-400 mb-8">
                {property.price}
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-4">
                <div className="glass p-4 rounded-xl border border-white/30">
                  <div className="text-3xl mb-2">🛏️</div>
                  <div className="text-sm text-slate-300">Bedrooms</div>
                  <div className="text-2xl font-bold">{property.bedrooms}</div>
                </div>
                <div className="glass p-4 rounded-xl border border-white/30">
                  <div className="text-3xl mb-2">🚿</div>
                  <div className="text-sm text-slate-300">Bathrooms</div>
                  <div className="text-2xl font-bold">{property.bathrooms}</div>
                </div>
                <div className="glass p-4 rounded-xl border border-white/30">
                  <div className="text-3xl mb-2">📐</div>
                  <div className="text-sm text-slate-300">Living Area</div>
                  <div className="text-2xl font-bold">{property.area} m²</div>
                </div>
                <div className="glass p-4 rounded-xl border border-white/30">
                  <div className="text-3xl mb-2">🌳</div>
                  <div className="text-sm text-slate-300">Land Size</div>
                  <div className="text-2xl font-bold">{property.landSize} sq.wa</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Description & Features */}
      <section className="py-20 bg-gradient-to-b from-white via-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Description */}
            <div className="lg:col-span-2">
              <h2 className="text-4xl font-bold text-slate-900 mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                About This Property
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-12">
                {property.description}
              </p>

              {/* Features */}
              <h3 className="text-3xl font-bold text-slate-900 mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                Property Features
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
                {property.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm border border-slate-200">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600"></div>
                    <span className="text-slate-700">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Amenities */}
              <h3 className="text-3xl font-bold text-slate-900 mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                Community Amenities
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {property.amenities.map((amenity, index) => (
                  <div key={index} className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm border border-slate-200">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-green-600 to-emerald-600"></div>
                    <span className="text-slate-700 text-sm">{amenity}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Card */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-3xl p-8 text-white shadow-2xl">
                <h3 className="text-3xl font-bold mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Interested?
                </h3>
                <p className="text-blue-100 mb-8">
                  Contact us today to schedule a viewing or get more information about this property.
                </p>

                {/* Contact Info */}
                <div className="space-y-6 mb-8">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm text-blue-100">Phone</div>
                      <a href={`tel:${CONTACT_INFO.phone}`} className="font-semibold hover:text-blue-100 transition-colors">
                        {CONTACT_INFO.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm text-blue-100">Email</div>
                      <a href={`mailto:${CONTACT_INFO.email}`} className="font-semibold hover:text-blue-100 transition-colors">
                        {CONTACT_INFO.email}
                      </a>
                    </div>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="space-y-4">
                  <a
                    href="/contact"
                    className="block w-full bg-white text-blue-600 text-center py-4 rounded-xl font-bold hover:shadow-xl transition-all"
                  >
                    Contact Us
                  </a>
                  <a
                    href={`tel:${CONTACT_INFO.phone}`}
                    className="block w-full bg-white/20 backdrop-blur-sm text-white text-center py-4 rounded-xl font-bold border border-white/30 hover:bg-white/30 transition-all"
                  >
                    Call Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location & Map */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center" style={{ fontFamily: "'Playfair Display', serif" }}>
            Location & <span className="gradient-text">Map</span>
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {/* Location Info */}
            <div className="lg:col-span-1">
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-3xl h-full">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Address</h3>
                    <p className="text-slate-600">{property.location}</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="text-2xl">🏪</div>
                    <div>
                      <div className="font-semibold text-slate-900">Nearby Shopping</div>
                      <div className="text-sm text-slate-600">Shopping malls within 5 km</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="text-2xl">🏫</div>
                    <div>
                      <div className="font-semibold text-slate-900">Schools</div>
                      <div className="text-sm text-slate-600">International schools nearby</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="text-2xl">🏥</div>
                    <div>
                      <div className="font-semibold text-slate-900">Healthcare</div>
                      <div className="text-sm text-slate-600">Hospitals within 10 km</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="text-2xl">🚇</div>
                    <div>
                      <div className="font-semibold text-slate-900">Transportation</div>
                      <div className="text-sm text-slate-600">Easy access to main roads</div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-blue-200">
                  <div className="text-sm text-slate-600 mb-2">Coordinates</div>
                  <div className="font-mono text-sm text-slate-800">
                    {property.coordinates.lat}, {property.coordinates.lng}
                  </div>
                </div>
              </div>
            </div>

            {/* Google Map */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-3xl overflow-hidden shadow-xl border border-slate-200 h-[500px]">
                <iframe
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  src={`https://www.google.com/maps/embed/v1/place?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || 'YOUR_GOOGLE_MAPS_API_KEY'}&q=${property.coordinates.lat},${property.coordinates.lng}&zoom=15`}
                ></iframe>
              </div>
              <div className="mt-6 flex gap-4">
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${property.coordinates.lat},${property.coordinates.lng}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-gradient-to-r from-blue-600 to-cyan-600 text-white text-center py-4 rounded-xl font-semibold hover:shadow-xl transition-all"
                >
                  Open in Google Maps
                </a>
                <a
                  href={`https://www.google.com/maps/dir/?api=1&destination=${property.coordinates.lat},${property.coordinates.lng}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-white text-blue-600 text-center py-4 rounded-xl font-semibold border-2 border-blue-600 hover:bg-blue-50 transition-all"
                >
                  Get Directions
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Similar Properties */}
      <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center" style={{ fontFamily: "'Playfair Display', serif" }}>
            Similar <span className="gradient-text">Properties</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {Object.values(properties)
              .filter((p) => p.id !== propertyId)
              .slice(0, 3)
              .map((similarProperty) => (
                <Link
                  key={similarProperty.id}
                  href={`/properties/${similarProperty.id}`}
                  className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3"
                >
                  <div className={`h-48 bg-gradient-to-br ${similarProperty.gradient} flex items-center justify-center relative`}>
                    <div className="text-6xl group-hover:scale-110 transition-transform">🏠</div>
                    <div className="absolute bottom-4 right-4 bg-white/95 px-4 py-2 rounded-full">
                      <span className="text-sm font-bold gradient-text">{similarProperty.priceRange}</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-cyan-600 group-hover:bg-clip-text transition-all">
                      {similarProperty.title}
                    </h3>
                    <p className="text-sm text-slate-600 mb-4">{similarProperty.location}</p>
                    <div className="flex gap-4 text-sm text-slate-600">
                      <span>🛏️ {similarProperty.bedrooms}</span>
                      <span>🚿 {similarProperty.bathrooms}</span>
                      <span>📐 {similarProperty.area}m²</span>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </main>
  );
}
