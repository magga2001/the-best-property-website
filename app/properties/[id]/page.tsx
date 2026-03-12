"use client";

import React from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { CONTACT_INFO } from "@/lib/constants/app";

interface HouseType {
  id: string;
  name: string;
  price: string;
  bedrooms: number;
  bathrooms: number;
  area: number;
  landSize: number;
  gradient: string;
  status: string;
}

interface ProjectDetail {
  id: number;
  title: string;
  location: string;
  priceRange: string;
  type: string;
  status: string;
  description: string;
  gradient: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  houseTypes: HouseType[];
  amenities: string[];
  clubhouse: {
    name: string;
    description: string;
    facilities: string[];
    image: string;
  };
}

export default function ProjectOverviewPage() {
  const params = useParams();
  const { t } = useLanguage();
  const projectId = Number(params.id);

  const projects: Record<number, ProjectDetail> = {
    1: {
      id: 1,
      title: "The Best Yuwittaya",
      location: "Yuwittaya Road, Bangkok",
      priceRange: "฿3.5M - ฿5.2M",
      type: "Modern Single House",
      status: "Available",
      description: "Modern single house project in prime Bangkok location. Designed for contemporary living with smart home features and elegant design. Multiple house types available to suit different family needs.",
      gradient: "from-blue-500 to-cyan-600",
      coordinates: {
        lat: 13.7563,
        lng: 100.5018,
      },
      houseTypes: [
        {
          id: "type-a",
          name: "House Type A",
          price: "฿3,800,000",
          bedrooms: 3,
          bathrooms: 2,
          area: 150,
          landSize: 40,
          gradient: "from-blue-400 to-cyan-500",
          status: "Available"
        },
        {
          id: "type-b",
          name: "House Type B",
          price: "฿4,200,000",
          bedrooms: 3,
          bathrooms: 3,
          area: 180,
          landSize: 50,
          gradient: "from-blue-500 to-cyan-600",
          status: "Available"
        },
        {
          id: "type-c",
          name: "House Type C",
          price: "฿4,800,000",
          bedrooms: 4,
          bathrooms: 3,
          area: 200,
          landSize: 55,
          gradient: "from-blue-600 to-cyan-700",
          status: "Available"
        }
      ],
      amenities: [
        "24/7 Security",
        "CCTV Surveillance",
        "Community Park",
        "Children's Playground",
        "Fitness Center",
        "Swimming Pool",
        "Jogging Track",
        "Co-working Space"
      ],
      clubhouse: {
        name: "The Best Yuwittaya Clubhouse",
        description: "Modern community center featuring state-of-the-art facilities for residents. Perfect for relaxation, fitness, and social gatherings.",
        facilities: [
          "Swimming Pool & Kids Pool",
          "Fully-equipped Fitness Center",
          "Multi-purpose Function Room",
          "Co-working Space",
          "Children's Play Area",
          "Sauna & Steam Room",
          "Rooftop Garden",
          "24/7 Security Office"
        ],
        image: "clubhouse"
      }
    },
    2: {
      id: 2,
      title: "The Best Masterpiece",
      location: "Lamlukka, Pathum Thani",
      priceRange: "฿4.2M - ฿6.8M",
      type: "Luxury Villa",
      status: "Available",
      description: "Premium villa project offering luxurious living spaces with elegant design. Each villa features high-end finishes, spacious layouts, and premium facilities for discerning homeowners.",
      gradient: "from-purple-500 to-pink-600",
      coordinates: {
        lat: 14.0412,
        lng: 100.6534,
      },
      houseTypes: [
        {
          id: "type-a",
          name: "Villa Type A",
          price: "฿4,500,000",
          bedrooms: 3,
          bathrooms: 3,
          area: 220,
          landSize: 70,
          gradient: "from-purple-400 to-pink-500",
          status: "Available"
        },
        {
          id: "type-b",
          name: "Villa Type B",
          price: "฿5,500,000",
          bedrooms: 4,
          bathrooms: 4,
          area: 250,
          landSize: 80,
          gradient: "from-purple-500 to-pink-600",
          status: "Available"
        },
        {
          id: "type-c",
          name: "Villa Type C",
          price: "฿6,200,000",
          bedrooms: 4,
          bathrooms: 4,
          area: 280,
          landSize: 90,
          gradient: "from-purple-600 to-pink-700",
          status: "Available"
        }
      ],
      amenities: [
        "Clubhouse",
        "Swimming Pool",
        "Fitness Center",
        "Tennis Court",
        "Children's Play Area",
        "Jogging Track",
        "24/7 Security",
        "Landscaped Gardens",
        "BBQ Area",
        "Library"
      ],
      clubhouse: {
        name: "The Best Masterpiece Clubhouse",
        description: "Exclusive clubhouse with resort-style amenities. Designed for luxury living and community engagement.",
        facilities: [
          "Olympic-size Swimming Pool",
          "Professional Gym & Yoga Studio",
          "Grand Function Hall",
          "Private Dining Rooms",
          "Business Center",
          "Kids Club",
          "Tennis Court",
          "Spa & Massage Rooms",
          "Rooftop Lounge",
          "Concierge Service"
        ],
        image: "clubhouse"
      }
    },
    3: {
      id: 3,
      title: "The Best Courtyard",
      location: "Klong 8, Bangkok",
      priceRange: "฿2.8M - ฿4.5M",
      type: "Modern Townhome",
      status: "Available",
      description: "Contemporary townhome project designed for modern urban living. Efficient layouts with stylish interiors, perfect for young families and first-time homeowners.",
      gradient: "from-cyan-500 to-blue-600",
      coordinates: {
        lat: 13.8021,
        lng: 100.6190,
      },
      houseTypes: [
        {
          id: "type-a",
          name: "Townhome Type A",
          price: "฿2,900,000",
          bedrooms: 2,
          bathrooms: 2,
          area: 120,
          landSize: 25,
          gradient: "from-cyan-400 to-blue-500",
          status: "Available"
        },
        {
          id: "type-b",
          name: "Townhome Type B",
          price: "฿3,600,000",
          bedrooms: 3,
          bathrooms: 2,
          area: 150,
          landSize: 30,
          gradient: "from-cyan-500 to-blue-600",
          status: "Available"
        },
        {
          id: "type-c",
          name: "Townhome Type C",
          price: "฿4,200,000",
          bedrooms: 3,
          bathrooms: 3,
          area: 170,
          landSize: 35,
          gradient: "from-cyan-600 to-blue-700",
          status: "Available"
        }
      ],
      amenities: [
        "Security Guard",
        "Common Garden",
        "Children's Play Area",
        "Visitor Parking",
        "CCTV System",
        "Mail Room",
        "Bike Storage"
      ],
      clubhouse: {
        name: "The Best Courtyard Community Center",
        description: "Modern community space for residents to relax, exercise, and socialize. Compact yet complete with essential facilities.",
        facilities: [
          "Swimming Pool",
          "Fitness Room",
          "Community Lounge",
          "Children's Playroom",
          "Outdoor BBQ Area",
          "Landscaped Garden",
          "Package Room",
          "Security Office"
        ],
        image: "clubhouse"
      }
    }
  };

  const project = projects[projectId];

  if (!project) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Project Not Found</h1>
          <p className="text-slate-600 mb-8">The project you're looking for doesn't exist.</p>
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

          <div className="text-center">
            <div className="glass px-4 py-2 rounded-full inline-block mb-4 border border-white/30">
              <span className="text-cyan-400 font-semibold">{project.type}</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              {project.title}
            </h1>
            
            <div className="flex items-center justify-center text-xl text-slate-300 mb-6">
              <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              {project.location}
            </div>

            <div className="text-4xl font-bold text-cyan-400 mb-6">
              {project.priceRange}
            </div>

            <p className="text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
              {project.description}
            </p>
          </div>
        </div>
      </section>

      {/* House Types Section */}
      <section className="py-20 bg-gradient-to-b from-white via-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              Available <span className="gradient-text">House Types</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Choose from our carefully designed house types, each offering unique features and layouts to match your lifestyle.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {project.houseTypes.map((house) => (
              <Link
                key={house.id}
                href={`/properties/${projectId}/${house.id}`}
                className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3"
              >
                {/* Image Area */}
                <div className={`relative h-64 bg-gradient-to-br ${house.gradient} overflow-hidden`}>
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0" style={{
                      backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 10px, currentColor 10px, currentColor 11px)`,
                    }}></div>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-9xl opacity-80 group-hover:scale-110 transition-transform">🏠</div>
                  </div>
                  
                  {/* Status Badge */}
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full">
                    <span className="text-sm font-bold gradient-text">{house.status}</span>
                  </div>

                  {/* Price Badge */}
                  <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-sm px-4 py-3 rounded-full shadow-lg">
                    <span className="text-lg font-bold gradient-text">{house.price}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-cyan-600 group-hover:bg-clip-text transition-all" style={{ fontFamily: "'Playfair Display', serif" }}>
                    {house.name}
                  </h3>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-3 bg-slate-50 rounded-xl">
                      <div className="text-2xl mb-1">🛏️</div>
                      <div className="text-sm text-slate-600">Bedrooms</div>
                      <div className="font-bold text-slate-900">{house.bedrooms}</div>
                    </div>
                    <div className="text-center p-3 bg-slate-50 rounded-xl">
                      <div className="text-2xl mb-1">🚿</div>
                      <div className="text-sm text-slate-600">Bathrooms</div>
                      <div className="font-bold text-slate-900">{house.bathrooms}</div>
                    </div>
                    <div className="text-center p-3 bg-slate-50 rounded-xl">
                      <div className="text-2xl mb-1">📐</div>
                      <div className="text-sm text-slate-600">Living Area</div>
                      <div className="font-bold text-slate-900">{house.area} m²</div>
                    </div>
                    <div className="text-center p-3 bg-slate-50 rounded-xl">
                      <div className="text-2xl mb-1">🌳</div>
                      <div className="text-sm text-slate-600">Land Size</div>
                      <div className="font-bold text-slate-900">{house.landSize} sq.wa</div>
                    </div>
                  </div>

                  <div className="mt-6">
                    <button className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-3 rounded-xl font-semibold group-hover:shadow-xl transition-all flex items-center justify-center gap-2">
                      View Details
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Clubhouse Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Clubhouse Image */}
            <div className={`relative h-96 bg-gradient-to-br ${project.gradient} rounded-3xl overflow-hidden shadow-2xl`}>
              <div className="absolute inset-0 opacity-20">
                <div className="absolute inset-0" style={{
                  backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 10px, currentColor 10px, currentColor 11px)`,
                }}></div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-9xl">🏛️</div>
              </div>
            </div>

            {/* Clubhouse Info */}
            <div>
              <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-4 border border-blue-200">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                <span className="gradient-text font-semibold text-sm uppercase tracking-wider">Community Center</span>
              </div>
              
              <h2 className="text-4xl font-bold text-slate-900 mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                {project.clubhouse.name}
              </h2>
              
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                {project.clubhouse.description}
              </p>

              <h3 className="text-2xl font-bold text-slate-900 mb-4">Facilities</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {project.clubhouse.facilities.map((facility, index) => (
                  <div key={index} className="flex items-center gap-3 bg-slate-50 p-3 rounded-xl">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600"></div>
                    <span className="text-slate-700 text-sm">{facility}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Amenities */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              Project <span className="gradient-text">Amenities</span>
            </h2>
            <p className="text-lg text-slate-600">Enjoy world-class amenities designed for your comfort and convenience</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {project.amenities.map((amenity, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-all text-center">
                <div className="text-4xl mb-3">✨</div>
                <div className="text-slate-700 font-medium">{amenity}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location & Map */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center" style={{ fontFamily: "'Playfair Display', serif" }}>
            Location & <span className="gradient-text">Map</span>
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
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
                    <p className="text-slate-600">{project.location}</p>
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
                    {project.coordinates.lat}, {project.coordinates.lng}
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
                  src={`https://www.google.com/maps/embed/v1/place?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || 'YOUR_GOOGLE_MAPS_API_KEY'}&q=${project.coordinates.lat},${project.coordinates.lng}&zoom=15`}
                ></iframe>
              </div>
              <div className="mt-6 flex gap-4">
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${project.coordinates.lat},${project.coordinates.lng}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-gradient-to-r from-blue-600 to-cyan-600 text-white text-center py-4 rounded-xl font-semibold hover:shadow-xl transition-all"
                >
                  Open in Google Maps
                </a>
                <a
                  href={`https://www.google.com/maps/dir/?api=1&destination=${project.coordinates.lat},${project.coordinates.lng}`}
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

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-cyan-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
            Interested in {project.title}?
          </h2>
          <p className="text-xl text-blue-100 mb-10">
            Contact us today to schedule a site visit or get more information about available house types.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold hover:shadow-2xl transition-all inline-flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Contact Us
            </a>
            <a
              href={`tel:${CONTACT_INFO.phone}`}
              className="bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-bold border-2 border-white/30 hover:bg-white/30 transition-all inline-flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call Now
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
