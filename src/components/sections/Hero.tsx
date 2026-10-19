"use client";

import { useState, useEffect } from "react";
import { Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const backgroundImages = [
  { src: "/hero-1.jpg", position: "object-top" },
  { src: "/hero-2.jpg", position: "object-[center_15%]" },
  { src: "/hero-3.jpg", position: "object-[70%_25%] lg:object-center" }
];

const headlinePhrases = [
  "Fresh & Spotless",
  "Bright & Beautiful",
  "Clean & Comfortable",
  "Fresh & Inviting"
];

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);

  useEffect(() => {
    const imageInterval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 3000);
    
    const phraseInterval = setInterval(() => {
      setCurrentPhraseIndex((prev) => (prev + 1) % headlinePhrases.length);
    }, 3000);
    
    return () => {
      clearInterval(imageInterval);
      clearInterval(phraseInterval);
    };
  }, []);

  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-24 overflow-hidden min-h-[700px] flex items-center">
      {/* Background Slider */}
      {backgroundImages.map((item, index) => (
        <div
          key={item.src}
          className={cn(
            "absolute inset-x-0 bottom-0 top-20 lg:top-[152px] transition-opacity duration-1000 ease-in-out",
            index === currentImageIndex ? "opacity-100" : "opacity-0"
          )}
        >
          <img
            src={item.src}
            alt={`Cleaning background ${index + 1}`}
            className={cn("w-full h-full object-cover", item.position)}
          />
          {/* Overlay to make text readable */}
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
      ))}

      <div className="container mx-auto px-6 lg:px-8 relative z-10 flex justify-center">
        <div className="max-w-4xl text-white text-center flex flex-col items-center">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm text-xs font-semibold tracking-wider uppercase mb-8 text-gray-200">
             Premium Cleaning Services
          </div>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-7xl mb-6 leading-[1.1] w-full px-4">
            <span className="block mb-2">We Make Your Space Feel</span>
            <div className="h-[2.4em] sm:h-[1.2em] relative flex justify-center w-full mt-2">
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentPhraseIndex}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="absolute text-brand-accent block w-full"
                >
                  {headlinePhrases[currentPhraseIndex]}
                </motion.span>
              </AnimatePresence>
            </div>
          </h1>
          <p className="text-lg leading-8 text-gray-200 mb-10 max-w-2xl">
            Reliable residential and commercial cleaning services designed around your schedule. We bring the sparkle so you can focus on what matters.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
            
            <div className="flex items-center gap-4 text-left">
              <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-brand-accent shrink-0 shadow-lg cursor-pointer hover:scale-105 transition-transform">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-300">Call Us Anytime</p>
                <a href="tel:2017254580" className="text-lg font-bold text-brand-accent hover:text-white transition-colors">(201) 725-4580</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
