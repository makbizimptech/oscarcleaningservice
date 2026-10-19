"use client";

import { useState } from "react";
import { ZoomIn, X, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";

const galleryImages = [
  {
    src: "/gallery/truck.jpg",
    title: "Service Van Fleet",
    category: "Equipment & Fleet",
  },
  {
    src: "/gallery/truck1.jpg",
    title: "Oscar Cleaning Mobile Unit",
    category: "Equipment & Fleet",
  },
  {
    src: "/gallery/work4.png",
    title: "Residential Carpet Care",
    category: "Carpet & Rugs",
  },
  {
    src: "/gallery/truck2.jpg",
    title: "Window Cleaning & Safety Setup",
    category: "Window Cleaning",
  },
  {
    src: "/gallery/work5.jpg",
    title: "Dedicated Service Truck",
    category: "Equipment & Fleet",
  },
];

export default function Gallery() {
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIdx !== null) {
      setSelectedIdx((selectedIdx - 1 + galleryImages.length) % galleryImages.length);
    }
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIdx !== null) {
      setSelectedIdx((selectedIdx + 1) % galleryImages.length);
    }
  };

  return (
    <section id="gallery" className="py-24 bg-brand-gray relative">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-blue/10 text-brand-blue text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Photo Gallery
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl mb-4">
            Our Work in Action
          </h2>
          <p className="text-lg text-gray-600">
            A look at our professional equipment, certified team, and real results across New Jersey & New York.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 max-w-6xl mx-auto">
          {galleryImages.map((item, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedIdx(idx)}
              className="group relative aspect-square rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer border border-gray-100"
            >
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-brand-navy/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 text-white">
                <span className="text-[10px] sm:text-xs font-semibold text-brand-accent uppercase tracking-wider">
                  {item.category}
                </span>
                <h3 className="text-xs sm:text-sm font-bold line-clamp-1">
                  {item.title}
                </h3>
                <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white">
                  <ZoomIn className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedIdx !== null && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setSelectedIdx(null)}
        >
          <button
            onClick={() => setSelectedIdx(null)}
            className="absolute top-6 right-6 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors z-20"
            aria-label="Close"
          >
            <X className="w-6 h-6" />
          </button>

          <button
            onClick={handlePrev}
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors z-20"
            aria-label="Previous"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors z-20"
            aria-label="Next"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div
            className="relative max-w-2xl max-h-[85vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={galleryImages[selectedIdx].src}
              alt={galleryImages[selectedIdx].title}
              className="max-w-full max-h-[70vh] rounded-2xl object-contain shadow-2xl"
            />
            <div className="text-center mt-4 text-white">
              <span className="text-xs font-semibold text-brand-accent uppercase tracking-wider block">
                {galleryImages[selectedIdx].category}
              </span>
              <h3 className="text-lg font-bold">
                {galleryImages[selectedIdx].title}
              </h3>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
