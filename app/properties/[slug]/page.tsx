import React from "react";
import { client } from "@/src/sanity/lib/client";
import { propertyBySlugQuery, houseTypesByPropertyQuery } from "@/src/sanity/lib/queries";
import { urlFor } from "@/src/sanity/lib/image";
import Link from "next/link";
import Image from "next/image";
import { PortableTextRenderer } from "@/components/common/PortableTextRenderer";
import FloorPlanViewer from "@/components/property/FloorPlanViewer";
import { notFound } from "next/navigation";

interface Property {
  _id: string;
  title: string;
  slug: { current: string };
  description?: string;
  priceRange?: string;
  location?: string;
  propertyType?: string;
  status: string;
  mainImage?: any;
  gallery?: any[];
  floorPlans?: any[];
  amenities?: string[];
  body?: any;
  mapUrl?: string;
  publishedAt: string;
  categories?: Array<{
    title: string;
    slug: { current: string };
  }>;
}

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
  featured?: boolean;
  publishedAt: string;
}

export const revalidate = 60;

async function getProperty(slug: string) {
  const property = await client.fetch<Property>(propertyBySlugQuery, { slug });
  return property;
}

async function getHouseTypes(propertyId: string) {
  const houseTypes = await client.fetch<HouseType[]>(houseTypesByPropertyQuery, { propertyId });
  return houseTypes;
}

export default async function PropertyDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const property = await getProperty(slug);

  if (!property) {
    notFound();
  }

  const houseTypes = await getHouseTypes(property._id);

  const gradient = "from-blue-500 to-cyan-600";

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
            href="/properties"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-8 transition-colors group"
          >
            <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span>Back to Properties</span>
          </Link>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <div className="inline-flex items-center gap-2 glass px-6 py-3 rounded-full font-semibold mb-6 border border-white/30">
                <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                <span className="text-cyan-400 uppercase tracking-wider text-sm capitalize">{property.status.replace('-', ' ')}</span>
              </div>

              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
                {property.title}
              </h1>

              {property.location && (
                <p className="text-xl text-slate-300 mb-4 flex items-center gap-3">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {property.location}
                </p>
              )}

              {property.propertyType && (
                <p className="text-lg text-slate-300 mb-6 capitalize">{property.propertyType}</p>
              )}

              <div className="text-4xl font-bold text-cyan-400 mb-8">
                {property.priceRange || "Contact for price"}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Image */}
      {property.mainImage && (
        <section className="relative -mt-20 mb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src={urlFor(property.mainImage).width(1400).height(900).url()}
                alt={property.mainImage.alt || property.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </section>
      )}

      {/* Property Details */}
      <section className="py-20 bg-gradient-to-b from-white via-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-4xl font-bold text-slate-900 mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                Property Description
              </h2>

              {property.description && (
                <p className="text-lg text-slate-700 mb-8 leading-relaxed">
                  {property.description}
                </p>
              )}

              {property.body && (
                <div className="prose prose-lg prose-slate max-w-none mb-12">
                  <PortableTextRenderer value={property.body} />
                </div>
              )}

              {property.amenities && property.amenities.length > 0 && (
                <div className="mb-12">
                  <h3 className="text-2xl font-bold text-slate-900 mb-6">Amenities</h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {property.amenities.map((amenity, index) => (
                      <div key={index} className="flex items-center gap-3 text-slate-700">
                        <svg className="w-5 h-5 text-green-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{amenity}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* House Types Section */}
              {houseTypes && houseTypes.length > 0 && (
                <div className="mb-12">
                  <h3 className="text-3xl font-bold text-slate-900 mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                    Available House Types
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-6">
                    {houseTypes.map((houseType, index) => (
                      <div
                        key={houseType._id}
                        className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-slate-200"
                      >
                        {/* House Type Image */}
                        <div className="relative h-48 bg-gradient-to-br from-blue-500 to-cyan-600 overflow-hidden">
                          {houseType.mainImage ? (
                            <Image
                              src={urlFor(houseType.mainImage).width(600).height(400).url()}
                              alt={houseType.mainImage.alt || houseType.name}
                              fill
                              className="object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                          ) : (
                            <div className="absolute inset-0 flex items-center justify-center">
                              <div className="text-6xl">🏠</div>
                            </div>
                          )}
                          {houseType.featured && (
                            <div className="absolute top-4 right-4 glass px-3 py-1 rounded-full text-xs font-semibold border border-white/30">
                              <span className="text-yellow-300">⭐ Featured</span>
                            </div>
                          )}
                        </div>

                        {/* House Type Details */}
                        <div className="p-6">
                          <h4 className="text-xl font-bold text-slate-900 mb-2">{houseType.name}</h4>
                          
                          {houseType.price && (
                            <div className="text-2xl font-bold text-blue-600 mb-4">
                              {houseType.price}
                            </div>
                          )}

                          {houseType.description && (
                            <p className="text-sm text-slate-600 mb-4 line-clamp-2">
                              {houseType.description}
                            </p>
                          )}

                          {/* Specs Grid */}
                          <div className="grid grid-cols-3 gap-3 mb-4 text-center">
                            {houseType.bedrooms && (
                              <div className="bg-slate-50 rounded-lg p-2">
                                <div className="text-lg font-bold text-slate-900">{houseType.bedrooms}</div>
                                <div className="text-xs text-slate-600">Bed</div>
                              </div>
                            )}
                            {houseType.bathrooms && (
                              <div className="bg-slate-50 rounded-lg p-2">
                                <div className="text-lg font-bold text-slate-900">{houseType.bathrooms}</div>
                                <div className="text-xs text-slate-600">Bath</div>
                              </div>
                            )}
                            {houseType.area && (
                              <div className="bg-slate-50 rounded-lg p-2">
                                <div className="text-lg font-bold text-slate-900">{houseType.area}</div>
                                <div className="text-xs text-slate-600">m²</div>
                              </div>
                            )}
                          </div>

                          {/* Additional Info */}
                          {(houseType.landSize || houseType.floors || houseType.carParking) && (
                            <div className="flex flex-wrap gap-2 mb-4 text-xs text-slate-600">
                              {houseType.landSize && (
                                <span className="bg-slate-100 px-2 py-1 rounded">
                                  🏞️ {houseType.landSize} sq.w
                                </span>
                              )}
                              {houseType.floors && (
                                <span className="bg-slate-100 px-2 py-1 rounded">
                                  🏢 {houseType.floors} floors
                                </span>
                              )}
                              {houseType.carParking && (
                                <span className="bg-slate-100 px-2 py-1 rounded">
                                  🚗 {houseType.carParking} parking
                                </span>
                              )}
                            </div>
                          )}

                          {/* Status Badge */}
                          {houseType.status && (
                            <div className="mb-4">
                              <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                                houseType.status === 'available' 
                                  ? 'bg-green-100 text-green-700' 
                                  : houseType.status === 'sold-out'
                                  ? 'bg-red-100 text-red-700'
                                  : 'bg-yellow-100 text-yellow-700'
                              }`}>
                                {houseType.status.replace('-', ' ').toUpperCase()}
                              </span>
                            </div>
                          )}

                          {/* View Details Link */}
                          <Link
                            href={`/properties/${property.slug.current}/house-types/${houseType.slug.current}`}
                            className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:gap-4 transition-all duration-300 group/link"
                          >
                            <span>View Details</span>
                            <svg
                              className="w-4 h-4 group-hover/link:translate-x-1 transition-transform"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 5l7 7-7 7"
                              />
                            </svg>
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {property.gallery && property.gallery.length > 0 && (
                <div className="mb-12">
                  <h3 className="text-2xl font-bold text-slate-900 mb-6">Gallery</h3>
                  <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {property.gallery.map((image, index) => (
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

              {property.floorPlans && property.floorPlans.length > 0 && (
                <FloorPlanViewer floorPlans={property.floorPlans} />
              )}
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-8 space-y-6">
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-8 border border-blue-200">
                  <h3 className="text-2xl font-bold text-slate-900 mb-6">Contact Us</h3>
                  <p className="text-slate-700 mb-6">
                    Interested in this property? Get in touch with us for more information or to schedule a viewing.
                  </p>
                  <Link
                    href="/contact"
                    className="block w-full text-center px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-xl hover:shadow-lg transition-all"
                  >
                    Contact Us
                  </Link>
                </div>

                {property.categories && property.categories.length > 0 && (
                  <div className="bg-white rounded-3xl p-8 border border-slate-200">
                    <h3 className="text-xl font-bold text-slate-900 mb-4">Categories</h3>
                    <div className="flex flex-wrap gap-2">
                      {property.categories.map((category) => (
                        <span
                          key={category.slug.current}
                          className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium"
                        >
                          {category.title}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {property.mapUrl && (
            <div className="mt-20">
              <h3 className="text-3xl font-bold text-slate-900 mb-8" style={{ fontFamily: "'Playfair Display', serif" }}>
                Location
              </h3>
              <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-xl">
                <iframe
                  src={property.mapUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
