import React from "react";
import { client } from "@/src/sanity/lib/client";
import { urlFor } from "@/src/sanity/lib/image";
import Link from "next/link";
import Image from "next/image";
import { PortableTextRenderer } from "@/components/common/PortableTextRenderer";
import { notFound } from "next/navigation";
import { groq } from "next-sanity";

interface HouseType {
  _id: string;
  name: string;
  slug: { current: string };
  price?: string;
  bedrooms?: number;
  bathrooms?: number;
  area?: number;
  landSize?: number;
  floors?: number;
  carParking?: number;
  ceilingHeight?: string;
  status?: string;
  description?: string;
  features?: string[];
  mainImage?: any;
  gallery?: any[];
  floorPlans?: any[];
  body?: any;
  property?: {
    _id: string;
    title: string;
    slug: { current: string };
    location?: string;
  };
  publishedAt: string;
}

export const revalidate = 60;

const houseTypeBySlugQuery = groq`*[_type == "houseType" && slug.current == $houseTypeSlug][0] {
  _id,
  name,
  slug,
  price,
  bedrooms,
  bathrooms,
  area,
  landSize,
  floors,
  carParking,
  ceilingHeight,
  status,
  description,
  features,
  mainImage {
    asset->{
      _id,
      url
    },
    alt
  },
  gallery[] {
    asset->{
      _id,
      url
    },
    alt
  },
  floorPlans[] {
    asset->{
      _id,
      url
    },
    alt,
    title
  },
  body,
  "property": property->{
    _id,
    title,
    slug,
    location
  },
  publishedAt
}`;

async function getHouseType(houseTypeSlug: string) {
  const houseType = await client.fetch<HouseType>(houseTypeBySlugQuery, { houseTypeSlug });
  return houseType;
}

export default async function HouseTypeDetailPage({
  params,
}: {
  params: Promise<{ slug: string; houseTypeSlug: string }>;
}) {
  const { slug, houseTypeSlug } = await params;
  const houseType = await getHouseType(houseTypeSlug);

  if (!houseType) {
    notFound();
  }

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
          <Link
            href={`/properties/${houseType.property?.slug.current}`}
            className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-8 transition-colors group"
          >
            <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span>Back to {houseType.property?.title}</span>
          </Link>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              {houseType.status && (
                <div className="inline-flex items-center gap-2 glass px-6 py-3 rounded-full font-semibold mb-6 border border-white/30">
                  <div className={`w-2 h-2 rounded-full animate-pulse ${
                    houseType.status === 'available' ? 'bg-green-400' : 
                    houseType.status === 'sold-out' ? 'bg-red-400' : 'bg-yellow-400'
                  }`}></div>
                  <span className="uppercase tracking-wider text-sm capitalize">{houseType.status.replace('-', ' ')}</span>
                </div>
              )}

              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
                {houseType.name}
              </h1>

              {houseType.property && (
                <p className="text-xl text-slate-300 mb-4 flex items-center gap-3">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                  {houseType.property.title}
                  {houseType.property.location && ` • ${houseType.property.location}`}
                </p>
              )}

              {houseType.price && (
                <div className="text-4xl font-bold text-cyan-400 mb-8">
                  {houseType.price}
                </div>
              )}
            </div>

            {/* Specs Cards */}
            <div className="grid grid-cols-2 gap-4">
              {houseType.bedrooms && (
                <div className="glass p-6 rounded-2xl border border-white/30">
                  <svg className="w-8 h-8 mb-3 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                  <div className="text-3xl font-bold mb-1">{houseType.bedrooms}</div>
                  <div className="text-sm text-slate-300">Bedrooms</div>
                </div>
              )}
              {houseType.bathrooms && (
                <div className="glass p-6 rounded-2xl border border-white/30">
                  <svg className="w-8 h-8 mb-3 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                  </svg>
                  <div className="text-3xl font-bold mb-1">{houseType.bathrooms}</div>
                  <div className="text-sm text-slate-300">Bathrooms</div>
                </div>
              )}
              {houseType.area && (
                <div className="glass p-6 rounded-2xl border border-white/30">
                  <svg className="w-8 h-8 mb-3 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                  </svg>
                  <div className="text-3xl font-bold mb-1">{houseType.area}</div>
                  <div className="text-sm text-slate-300">Living Area (m²)</div>
                </div>
              )}
              {houseType.landSize && (
                <div className="glass p-6 rounded-2xl border border-white/30">
                  <svg className="w-8 h-8 mb-3 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
                  </svg>
                  <div className="text-3xl font-bold mb-1">{houseType.landSize}</div>
                  <div className="text-sm text-slate-300">Land Size (sq.w)</div>
                </div>
              )}
              {houseType.floors && (
                <div className="glass p-6 rounded-2xl border border-white/30">
                  <div className="text-3xl mb-3">🏢</div>
                  <div className="text-3xl font-bold mb-1">{houseType.floors}</div>
                  <div className="text-sm text-slate-300">Floors</div>
                </div>
              )}
              {houseType.carParking && (
                <div className="glass p-6 rounded-2xl border border-white/30">
                  <div className="text-3xl mb-3">🚗</div>
                  <div className="text-3xl font-bold mb-1">{houseType.carParking}</div>
                  <div className="text-sm text-slate-300">Parking Spaces</div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Main Image */}
      {houseType.mainImage && (
        <section className="relative -mt-20 mb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src={urlFor(houseType.mainImage).width(1400).height(900).url()}
                alt={houseType.mainImage.alt || houseType.name}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </section>
      )}

      {/* Details Section */}
      <section className="py-20 bg-gradient-to-b from-white via-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-4xl font-bold text-slate-900 mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                House Type Details
              </h2>

              {houseType.description && (
                <p className="text-lg text-slate-700 mb-8 leading-relaxed">
                  {houseType.description}
                </p>
              )}

              {houseType.body && (
                <div className="prose prose-lg prose-slate max-w-none mb-12">
                  <PortableTextRenderer value={houseType.body} />
                </div>
              )}

              {/* Features */}
              {houseType.features && houseType.features.length > 0 && (
                <div className="mb-12">
                  <h3 className="text-2xl font-bold text-slate-900 mb-6">Key Features</h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {houseType.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-3 text-slate-700">
                        <svg className="w-5 h-5 text-green-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Gallery */}
              {houseType.gallery && houseType.gallery.length > 0 && (
                <div className="mb-12">
                  <h3 className="text-2xl font-bold text-slate-900 mb-6">Gallery</h3>
                  <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {houseType.gallery.map((image, index) => (
                      <div key={index} className="relative h-64 rounded-xl overflow-hidden">
                        <Image
                          src={urlFor(image).width(600).height(400).url()}
                          alt={image.alt || `Gallery image ${index + 1}`}
                          fill
                          className="object-cover hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Floor Plans */}
              {houseType.floorPlans && houseType.floorPlans.length > 0 && (
                <div className="mb-12">
                  <h3 className="text-2xl font-bold text-slate-900 mb-6">Floor Plans</h3>
                  <div className="space-y-6">
                    {houseType.floorPlans.map((plan, index) => (
                      <div key={index} className="relative rounded-xl overflow-hidden bg-white shadow-lg">
                        {plan.title && (
                          <div className="p-4 bg-slate-100 border-b border-slate-200">
                            <h4 className="font-semibold text-slate-900">{plan.title}</h4>
                          </div>
                        )}
                        <div className="relative h-96">
                          <Image
                            src={urlFor(plan).width(1200).height(800).url()}
                            alt={plan.alt || plan.title || `Floor plan ${index + 1}`}
                            fill
                            className="object-contain p-4"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-8 space-y-6">
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-8 border border-blue-200">
                  <h3 className="text-2xl font-bold text-slate-900 mb-6">Interested?</h3>
                  <p className="text-slate-700 mb-6">
                    Contact us to schedule a viewing or get more information about this house type.
                  </p>
                  <Link
                    href="/contact"
                    className="block w-full text-center px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-xl hover:shadow-lg transition-all"
                  >
                    Contact Us
                  </Link>
                </div>

                {/* Additional Specs */}
                {houseType.ceilingHeight && (
                  <div className="bg-white rounded-3xl p-8 border border-slate-200">
                    <h3 className="text-xl font-bold text-slate-900 mb-4">Additional Info</h3>
                    <div className="space-y-3 text-slate-700">
                      <div className="flex justify-between">
                        <span className="text-slate-600">Ceiling Height:</span>
                        <span className="font-semibold">{houseType.ceilingHeight}</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
