"use client";

import React, { useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
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
  description: string;
  features: string[];
  specifications: {
    structure: string;
    floors: number;
    carParking: number;
    ceilingHeight: string;
  };
  floorPlans: {
    floor: string;
    rooms: string[];
  }[];
}

interface ProjectDetail {
  id: number;
  title: string;
  location: string;
  gradient: string;
  houseTypes: HouseType[];
}

export default function HouseTypeDetailPage() {
  const params = useParams();
  const { t } = useLanguage();
  const projectId = Number(params.id);
  const houseId = params.houseId as string;
  const [selectedImage, setSelectedImage] = useState(0);

  const projects: Record<number, ProjectDetail> = {
    1: {
      id: 1,
      title: "The Best Yuwittaya",
      location: "Yuwittaya Road, Bangkok",
      gradient: "from-blue-500 to-cyan-600",
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
          status: "Available",
          description: "Perfect starter home with efficient layout. This house type offers comfortable living spaces with modern design elements. Ideal for small to medium-sized families looking for quality and affordability.",
          features: [
            "Modern kitchen with built-in cabinets",
            "Master bedroom with ensuite bathroom",
            "Covered parking for 2 cars",
            "Private garden area",
            "Air conditioning in all bedrooms",
            "Hot water system",
            "Smart home ready wiring",
            "Premium ceramic tiles"
          ],
          specifications: {
            structure: "2-story single house",
            floors: 2,
            carParking: 2,
            ceilingHeight: "3.0 meters"
          },
          floorPlans: [
            {
              floor: "Ground Floor",
              rooms: ["Living Room", "Dining Room", "Kitchen", "Bathroom", "Maid's Room", "Parking"]
            },
            {
              floor: "Second Floor",
              rooms: ["Master Bedroom with Ensuite", "Bedroom 2", "Bedroom 3", "Shared Bathroom", "Balcony"]
            }
          ]
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
          status: "Available",
          description: "Enhanced living space with additional bathroom and larger rooms. This premium option provides more comfort and luxury with better finishes and spacious layouts for growing families.",
          features: [
            "Spacious modern kitchen",
            "Master bedroom with walk-in closet",
            "3 full bathrooms",
            "Large private garden",
            "Covered parking for 2 cars",
            "Air conditioning throughout",
            "Premium bathroom fixtures",
            "Built-in wardrobes in all bedrooms",
            "Smart home system compatible"
          ],
          specifications: {
            structure: "2-story single house",
            floors: 2,
            carParking: 2,
            ceilingHeight: "3.2 meters"
          },
          floorPlans: [
            {
              floor: "Ground Floor",
              rooms: ["Living Room", "Dining Room", "Modern Kitchen", "Bathroom", "Maid's Room with Bathroom", "Storage", "2-Car Parking"]
            },
            {
              floor: "Second Floor",
              rooms: ["Master Bedroom with Ensuite & Walk-in Closet", "Bedroom 2 with Ensuite", "Bedroom 3", "Shared Bathroom", "Family Living Area", "Balcony"]
            }
          ]
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
          status: "Available",
          description: "Premium family home with 4 bedrooms and maximum living space. This top-tier option offers the ultimate in comfort and luxury with spacious rooms, premium finishes, and extensive facilities.",
          features: [
            "Chef's kitchen with island",
            "Luxury master suite with jacuzzi",
            "4 spacious bedrooms",
            "3.5 bathrooms",
            "Large entertainment area",
            "Premium landscaped garden",
            "3-car covered parking",
            "Full smart home system",
            "Premium imported fixtures",
            "Built-in furniture throughout",
            "Separate utility room"
          ],
          specifications: {
            structure: "2-story single house",
            floors: 2,
            carParking: 3,
            ceilingHeight: "3.5 meters"
          },
          floorPlans: [
            {
              floor: "Ground Floor",
              rooms: ["Grand Living Room", "Formal Dining Room", "Chef's Kitchen with Island", "Guest Bathroom", "Maid's Room with Bathroom", "Utility Room", "Storage", "3-Car Parking", "Entertainment Area"]
            },
            {
              floor: "Second Floor",
              rooms: ["Master Bedroom Suite with Jacuzzi & Walk-in Closet", "Bedroom 2 with Ensuite", "Bedroom 3", "Bedroom 4", "Shared Bathroom", "Family Living Room", "Study Area", "Large Balcony"]
            }
          ]
        }
      ]
    },
    2: {
      id: 2,
      title: "The Best Masterpiece",
      location: "Lamlukka, Pathum Thani",
      gradient: "from-purple-500 to-pink-600",
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
          status: "Available",
          description: "Elegant villa with sophisticated design and premium finishes. Perfect for families seeking luxury living in a peaceful environment.",
          features: [
            "Luxury kitchen with premium appliances",
            "Master suite with spa bathroom",
            "Walk-in closets",
            "Private swimming pool ready",
            "Landscaped garden",
            "3-car garage",
            "Smart home automation",
            "High ceilings throughout"
          ],
          specifications: {
            structure: "2-story villa",
            floors: 2,
            carParking: 3,
            ceilingHeight: "3.5 meters"
          },
          floorPlans: [
            {
              floor: "Ground Floor",
              rooms: ["Grand Living Room", "Dining Area", "Western Kitchen", "Thai Kitchen", "Powder Room", "Storage", "3-Car Garage"]
            },
            {
              floor: "Second Floor",
              rooms: ["Master Suite with Spa Bath", "Bedroom 2 with Ensuite", "Bedroom 3 with Ensuite", "Family Area", "Balcony"]
            }
          ]
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
          status: "Available",
          description: "Luxurious villa with expansive spaces and resort-style amenities. Designed for those who appreciate the finer things in life.",
          features: [
            "Gourmet kitchen with butler's pantry",
            "Master suite with jacuzzi and steam room",
            "4 ensuite bedrooms",
            "Home theater ready",
            "Wine cellar",
            "Private pool area",
            "Outdoor living pavilion",
            "Full smart home system",
            "Premium security system"
          ],
          specifications: {
            structure: "2-story luxury villa",
            floors: 2,
            carParking: 4,
            ceilingHeight: "4.0 meters"
          },
          floorPlans: [
            {
              floor: "Ground Floor",
              rooms: ["Grand Living Room", "Formal Dining", "Gourmet Kitchen", "Butler's Pantry", "Thai Kitchen", "Guest Bedroom with Bath", "Powder Room", "Home Office", "4-Car Garage"]
            },
            {
              floor: "Second Floor",
              rooms: ["Master Suite with Jacuzzi & Steam Room", "Bedroom 2 Suite", "Bedroom 3 Suite", "Bedroom 4 Suite", "Family Living Room", "Home Theater Area", "Large Balcony"]
            }
          ]
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
          status: "Available",
          description: "Ultimate luxury villa with extraordinary features and premium quality throughout. The pinnacle of sophisticated living.",
          features: [
            "Professional chef's kitchen",
            "Master suite with private terrace",
            "All ensuite bedrooms",
            "Home theater room",
            "Private gym",
            "Infinity pool ready",
            "Rooftop terrace",
            "Wine cellar",
            "Full smart home automation",
            "Premium imported materials",
            "Elevator ready"
          ],
          specifications: {
            structure: "2-story luxury villa with rooftop",
            floors: 3,
            carParking: 4,
            ceilingHeight: "4.5 meters"
          },
          floorPlans: [
            {
              floor: "Ground Floor",
              rooms: ["Grand Living Room", "Formal Dining", "Chef's Kitchen", "Butler's Pantry", "Thai Kitchen", "Guest Suite", "Home Office", "Gym", "Wine Cellar", "4-Car Garage"]
            },
            {
              floor: "Second Floor",
              rooms: ["Master Suite with Private Terrace", "Master Bath with Jacuzzi", "Walk-in Closet", "Bedroom 2 Suite", "Bedroom 3 Suite", "Bedroom 4 Suite", "Family Room", "Home Theater"]
            },
            {
              floor: "Rooftop",
              rooms: ["Rooftop Terrace", "BBQ Area", "Sky Lounge", "Outdoor Kitchen"]
            }
          ]
        }
      ]
    },
    3: {
      id: 3,
      title: "The Best Courtyard",
      location: "Klong 8, Bangkok",
      gradient: "from-cyan-500 to-blue-600",
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
          status: "Available",
          description: "Compact and efficient townhome perfect for young couples or small families. Modern design with smart use of space.",
          features: [
            "Modern compact kitchen",
            "2 bedrooms with built-in wardrobes",
            "2 full bathrooms",
            "Living and dining area",
            "1-car parking",
            "Small private yard",
            "Air conditioning ready",
            "Water heater"
          ],
          specifications: {
            structure: "2-story townhome",
            floors: 2,
            carParking: 1,
            ceilingHeight: "3.0 meters"
          },
          floorPlans: [
            {
              floor: "Ground Floor",
              rooms: ["Living Room", "Dining Area", "Kitchen", "Bathroom", "Parking"]
            },
            {
              floor: "Second Floor",
              rooms: ["Master Bedroom", "Bedroom 2", "Bathroom", "Small Balcony"]
            }
          ]
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
          status: "Available",
          description: "Spacious townhome with 3 bedrooms, perfect for growing families. Excellent value with modern amenities.",
          features: [
            "Full-size modern kitchen",
            "3 comfortable bedrooms",
            "2.5 bathrooms",
            "Spacious living area",
            "2-car parking",
            "Private backyard",
            "Air conditioning in bedrooms",
            "Built-in storage",
            "Quality fixtures"
          ],
          specifications: {
            structure: "2-story townhome",
            floors: 2,
            carParking: 2,
            ceilingHeight: "3.0 meters"
          },
          floorPlans: [
            {
              floor: "Ground Floor",
              rooms: ["Living Room", "Dining Area", "Kitchen", "Powder Room", "Storage", "2-Car Parking"]
            },
            {
              floor: "Second Floor",
              rooms: ["Master Bedroom with Ensuite", "Bedroom 2", "Bedroom 3", "Shared Bathroom", "Balcony"]
            }
          ]
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
          status: "Available",
          description: "Premium townhome with maximum space and luxury finishes. The best option for families who want it all.",
          features: [
            "Premium kitchen with island",
            "3 ensuite bedrooms",
            "High-quality bathrooms",
            "Large living and dining areas",
            "2-car covered parking",
            "Generous backyard",
            "Full air conditioning",
            "Premium fixtures throughout",
            "Smart home ready"
          ],
          specifications: {
            structure: "2-story premium townhome",
            floors: 2,
            carParking: 2,
            ceilingHeight: "3.2 meters"
          },
          floorPlans: [
            {
              floor: "Ground Floor",
              rooms: ["Living Room", "Dining Room", "Kitchen with Island", "Powder Room", "Maid's Room", "Storage", "2-Car Covered Parking"]
            },
            {
              floor: "Second Floor",
              rooms: ["Master Suite with Walk-in Closet", "Bedroom 2 with Ensuite", "Bedroom 3 with Ensuite", "Family Area", "Large Balcony"]
            }
          ]
        }
      ]
    }
  };

  const project = projects[projectId];
  const houseType = project?.houseTypes.find((h) => h.id === houseId);

  if (!project || !houseType) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">House Type Not Found</h1>
          <p className="text-slate-600 mb-8">The house type you're looking for doesn't exist.</p>
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

  const galleryImages = [
    { id: 1, label: "Exterior View" },
    { id: 2, label: "Living Room" },
    { id: 3, label: "Kitchen" },
    { id: 4, label: "Master Bedroom" },
    { id: 5, label: "Bathroom" },
    { id: 6, label: "Garden" }
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-slate-300 mb-8">
            <Link href="/properties" className="hover:text-cyan-400 transition-colors">Properties</Link>
            <span>/</span>
            <Link href={`/properties/${projectId}`} className="hover:text-cyan-400 transition-colors">{project.title}</Link>
            <span>/</span>
            <span className="text-cyan-400">{houseType.name}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Info */}
            <div>
              <div className="glass px-4 py-2 rounded-full inline-block mb-4 border border-white/30">
                <span className="text-cyan-400 font-semibold">{houseType.status}</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                {houseType.name}
              </h1>
              
              <p className="text-xl text-slate-300 mb-6">{project.title}</p>
              
              <div className="flex items-center text-lg text-slate-300 mb-8">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {project.location}
              </div>

              <div className="text-5xl font-bold text-cyan-400 mb-8">
                {houseType.price}
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div className="glass p-4 rounded-xl border border-white/30 text-center">
                  <div className="text-3xl mb-2">🛏️</div>
                  <div className="text-sm text-slate-300">Bedrooms</div>
                  <div className="text-xl font-bold">{houseType.bedrooms}</div>
                </div>
                <div className="glass p-4 rounded-xl border border-white/30 text-center">
                  <div className="text-3xl mb-2">🚿</div>
                  <div className="text-sm text-slate-300">Bathrooms</div>
                  <div className="text-xl font-bold">{houseType.bathrooms}</div>
                </div>
                <div className="glass p-4 rounded-xl border border-white/30 text-center">
                  <div className="text-3xl mb-2">📐</div>
                  <div className="text-sm text-slate-300">Living Area</div>
                  <div className="text-xl font-bold">{houseType.area} m²</div>
                </div>
                <div className="glass p-4 rounded-xl border border-white/30 text-center">
                  <div className="text-3xl mb-2">🌳</div>
                  <div className="text-sm text-slate-300">Land Size</div>
                  <div className="text-xl font-bold">{houseType.landSize} sq.wa</div>
                </div>
              </div>
            </div>

            {/* Right: Image */}
            <div className={`relative h-[500px] bg-gradient-to-br ${houseType.gradient} rounded-3xl overflow-hidden shadow-2xl`}>
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                  backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 10px, currentColor 10px, currentColor 11px)`,
                }}></div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-9xl opacity-80">🏠</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center" style={{ fontFamily: "'Playfair Display', serif" }}>
            Photo <span className="gradient-text">Gallery</span>
          </h2>

          {/* Main Image */}
          <div className={`relative h-[600px] bg-gradient-to-br ${houseType.gradient} rounded-3xl overflow-hidden shadow-2xl mb-6`}>
            <div className="absolute inset-0 opacity-20">
              <div className="absolute inset-0" style={{
                backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 10px, currentColor 10px, currentColor 11px)`,
              }}></div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="text-9xl mb-4">📸</div>
                <p className="text-white text-2xl font-semibold">{galleryImages[selectedImage].label}</p>
              </div>
            </div>
          </div>

          {/* Thumbnails */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {galleryImages.map((img, index) => (
              <button
                key={img.id}
                onClick={() => setSelectedImage(index)}
                className={`relative h-24 rounded-xl overflow-hidden transition-all ${
                  selectedImage === index
                    ? "ring-4 ring-blue-500 scale-105"
                    : "hover:scale-105 opacity-70 hover:opacity-100"
                }`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${houseType.gradient}`}></div>
                <div className="absolute inset-0 flex items-center justify-center text-3xl">
                  📷
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Description */}
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                About This <span className="gradient-text">House Type</span>
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                {houseType.description}
              </p>

              {/* Specifications */}
              <div className="bg-white p-8 rounded-3xl shadow-lg">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Specifications</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center pb-4 border-b border-slate-200">
                    <span className="text-slate-600">Structure</span>
                    <span className="font-semibold text-slate-900">{houseType.specifications.structure}</span>
                  </div>
                  <div className="flex justify-between items-center pb-4 border-b border-slate-200">
                    <span className="text-slate-600">Number of Floors</span>
                    <span className="font-semibold text-slate-900">{houseType.specifications.floors}</span>
                  </div>
                  <div className="flex justify-between items-center pb-4 border-b border-slate-200">
                    <span className="text-slate-600">Car Parking</span>
                    <span className="font-semibold text-slate-900">{houseType.specifications.carParking} cars</span>
                  </div>
                  <div className="flex justify-between items-center pb-4 border-b border-slate-200">
                    <span className="text-slate-600">Ceiling Height</span>
                    <span className="font-semibold text-slate-900">{houseType.specifications.ceilingHeight}</span>
                  </div>
                  <div className="flex justify-between items-center pb-4 border-b border-slate-200">
                    <span className="text-slate-600">Living Area</span>
                    <span className="font-semibold text-slate-900">{houseType.area} m²</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-600">Land Size</span>
                    <span className="font-semibold text-slate-900">{houseType.landSize} sq.wa</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Features */}
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                Key <span className="gradient-text">Features</span>
              </h2>
              <div className="space-y-3">
                {houseType.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-4 bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-all">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-slate-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Floor Plans Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center" style={{ fontFamily: "'Playfair Display', serif" }}>
            Floor <span className="gradient-text">Plans</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {houseType.floorPlans.map((floor, index) => (
              <div key={index} className="bg-white rounded-3xl overflow-hidden shadow-lg border-2 border-slate-100 hover:shadow-xl transition-all">
                {/* Floor Image */}
                <div className={`relative h-64 bg-gradient-to-br ${houseType.gradient} overflow-hidden`}>
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0" style={{
                      backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 10px, currentColor 10px, currentColor 11px)`,
                    }}></div>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-8xl opacity-80">📐</div>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-white/95 backdrop-blur-sm px-4 py-2 rounded-xl">
                      <h3 className="text-xl font-bold gradient-text">{floor.floor}</h3>
                    </div>
                  </div>
                </div>

                {/* Room List */}
                <div className="p-6">
                  <h4 className="text-lg font-bold text-slate-900 mb-4">Room Layout</h4>
                  <ul className="space-y-2">
                    {floor.rooms.map((room, roomIndex) => (
                      <li key={roomIndex} className="flex items-center gap-2 text-slate-600">
                        <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600"></div>
                        <span className="text-sm">{room}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Similar House Types */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center" style={{ fontFamily: "'Playfair Display', serif" }}>
            Other <span className="gradient-text">House Types</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {project.houseTypes
              .filter((h) => h.id !== houseId)
              .map((house) => (
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
                    
                    <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full">
                      <span className="text-sm font-bold gradient-text">{house.status}</span>
                    </div>

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
                      <div className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-3 rounded-xl font-semibold group-hover:shadow-xl transition-all flex items-center justify-center gap-2">
                        View Details
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-cyan-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
            Ready to Make This Your Home?
          </h2>
          <p className="text-xl text-blue-100 mb-10">
            Schedule a site visit or contact us for more information about {houseType.name}.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold hover:shadow-2xl transition-all inline-flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Schedule a Visit
            </a>
            <a
              href={`tel:${CONTACT_INFO.phone}`}
              className="bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-bold border-2 border-white/30 hover:bg-white/30 transition-all inline-flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              {CONTACT_INFO.phone}
            </a>
            <Link
              href={`/properties/${projectId}`}
              className="bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-bold border-2 border-white/30 hover:bg-white/30 transition-all inline-flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Project
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
