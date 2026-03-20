"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { urlFor } from "@/src/sanity/lib/image";

interface FloorPlan {
  asset: {
    _id: string;
    url: string;
  };
  alt?: string;
  title?: string;
}

interface FloorPlanViewerProps {
  floorPlans: FloorPlan[];
}

export default function FloorPlanViewer({ floorPlans }: FloorPlanViewerProps) {
  const [selectedPlan, setSelectedPlan] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [scale, setScale] = useState(1);

  if (!floorPlans || floorPlans.length === 0) return null;

  const currentPlan = floorPlans[selectedPlan];

  const handleZoomIn = () => {
    setScale((prev) => Math.min(prev + 0.5, 3));
  };

  const handleZoomOut = () => {
    setScale((prev) => Math.max(prev - 0.5, 1));
  };

  const handleReset = () => {
    setScale(1);
  };

  return (
    <div className="mb-12">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-2xl font-bold text-slate-900">Floor Plans</h3>
        <div className="flex items-center gap-2 text-sm text-slate-600">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
          </svg>
          Click image to view full size
        </div>
      </div>

      {/* Tabs for multiple floor plans */}
      {floorPlans.length > 1 && (
        <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
          {floorPlans.map((plan, index) => (
            <button
              key={index}
              onClick={() => setSelectedPlan(index)}
              className={`px-6 py-3 rounded-xl font-semibold whitespace-nowrap transition-all ${
                selectedPlan === index
                  ? "bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              {plan.title || `Floor Plan ${index + 1}`}
            </button>
          ))}
        </div>
      )}

      {/* Main Floor Plan Display */}
      <div className="relative rounded-2xl overflow-hidden bg-white shadow-xl border border-slate-200">
        {/* Header */}
        {currentPlan.title && (
          <div className="p-6 bg-gradient-to-r from-blue-50 to-cyan-50 border-b border-slate-200">
            <h4 className="text-xl font-bold text-slate-900">{currentPlan.title}</h4>
          </div>
        )}

        {/* Interactive Floor Plan */}
        <div 
          className="relative bg-slate-50 cursor-pointer group overflow-hidden"
          onClick={() => setIsLightboxOpen(true)}
        >
          <div className="relative h-[500px] overflow-auto">
            <div 
              className="relative w-full h-full transition-transform duration-300"
              style={{ transform: `scale(${scale})`, transformOrigin: 'center' }}
            >
              <Image
                src={urlFor(currentPlan).width(1600).height(1200).url()}
                alt={currentPlan.alt || currentPlan.title || `Floor plan ${selectedPlan + 1}`}
                fill
                className="object-contain p-6"
              />
            </div>
          </div>

          {/* Overlay with instructions */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            <div className="absolute bottom-6 left-0 right-0 text-center text-white">
              <div className="flex items-center justify-center gap-2 mb-2">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                </svg>
                <span className="text-lg font-semibold">Click to view full size</span>
              </div>
            </div>
          </div>
        </div>

        {/* Control Bar */}
        <div className="p-4 bg-slate-100 border-t border-slate-200 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleZoomOut();
              }}
              disabled={scale <= 1}
              className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg hover:bg-slate-50 transition-colors shadow-sm border border-slate-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM13 10H7" />
              </svg>
              <span className="text-sm font-medium">Zoom Out</span>
            </button>

            {scale > 1 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleReset();
                }}
                className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg hover:bg-slate-50 transition-colors shadow-sm border border-slate-200"
              >
                <span className="text-sm font-medium">Reset ({Math.round(scale * 100)}%)</span>
              </button>
            )}

            <button
              onClick={(e) => {
                e.stopPropagation();
                handleZoomIn();
              }}
              disabled={scale >= 3}
              className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg hover:bg-slate-50 transition-colors shadow-sm border border-slate-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
              </svg>
              <span className="text-sm font-medium">Zoom In</span>
            </button>

            <button
              onClick={() => setIsLightboxOpen(true)}
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-sm"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
              </svg>
              <span className="text-sm font-medium">Full Screen</span>
            </button>
          </div>

          {floorPlans.length > 1 && (
            <div className="text-sm text-slate-600">
              {selectedPlan + 1} / {floorPlans.length}
            </div>
          )}
        </div>
      </div>

      {/* Lightbox Modal */}
      {isLightboxOpen && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={() => setIsLightboxOpen(false)}
        >
          {/* Close button */}
          <button
            onClick={() => setIsLightboxOpen(false)}
            className="absolute top-4 right-4 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors z-10"
            aria-label="Close"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Image container */}
          <div 
            className="relative w-full max-w-7xl" 
            style={{ height: '85vh' }}
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={urlFor(currentPlan).width(2400).height(1800).url()}
              alt={currentPlan.alt || currentPlan.title || `Floor plan ${selectedPlan + 1}`}
              fill
              className="object-contain"
              priority
            />
          </div>

          {/* Navigation arrows for multiple plans */}
          {floorPlans.length > 1 && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedPlan((prev) => (prev > 0 ? prev - 1 : floorPlans.length - 1));
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedPlan((prev) => (prev < floorPlans.length - 1 ? prev + 1 : 0));
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </>
          )}

          {/* Plan title in lightbox */}
          {currentPlan.title && (
            <div className="absolute bottom-4 left-0 right-0 text-center text-white">
              <div className="inline-block bg-black/50 px-6 py-3 rounded-full backdrop-blur-sm">
                <h4 className="text-lg font-semibold">{currentPlan.title}</h4>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
