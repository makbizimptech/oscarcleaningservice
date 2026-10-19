"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Bell } from "lucide-react";
import { Button } from "@/components/ui/Button";

const navigation = [
  { name: "Home", href: "#home" },
  { name: "About Us", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Gallery", href: "#gallery" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Contact", href: "#contact" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex flex-col shadow-md">
      {/* Top Tier - Desktop Only */}
      <div className="hidden lg:flex items-center justify-between px-6 lg:px-8 bg-white h-24">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <img src="/logo.jpg" alt="Oscar Cleaning Service Logo" className="w-12 h-12 object-contain" />
          <div className="flex flex-col">
            <span className="text-xl xl:text-2xl font-black tracking-tight text-brand-navy leading-none">Oscar Cleaning Service</span>
            <span className="text-xs font-bold text-brand-blue uppercase tracking-widest mt-1">Since 2006</span>
          </div>
        </Link>

        {/* Tagline */}
        <div className="hidden xl:flex text-sm font-bold text-gray-500 uppercase tracking-widest">
          Residential & Commercial Cleaning Experts
        </div>

        {/* Contact & CTA */}
        <div className="flex items-center gap-8">
          <div className="flex flex-col text-right">
            <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Call Us On:</span>
            <a href="tel:2017254580" className="text-xl font-extrabold text-brand-navy hover:text-brand-blue transition-colors">
              (201) 725-4580
            </a>
          </div>
          <Link href="#contact">
            <Button className="bg-brand-accent hover:bg-brand-accent/90 text-brand-navy font-bold rounded-md px-6 h-12 flex items-center gap-2">
              <Bell className="w-4 h-4" />
              GET A QUOTE
            </Button>
          </Link>
        </div>
      </div>

      {/* Mobile Top Bar */}
      <div className="flex lg:hidden items-center justify-between px-6 bg-white h-20 border-b border-gray-100">
        <Link href="/" className="flex items-center gap-2.5">
          <img src="/logo.jpg" alt="Oscar Cleaning Service Logo" className="w-10 h-10 object-contain" />
          <div className="flex flex-col">
            <span className="text-base sm:text-lg font-black tracking-tight text-brand-navy leading-tight">Oscar Cleaning Service</span>
            <span className="text-[10px] sm:text-xs font-bold text-brand-blue uppercase tracking-wider">Since 2006</span>
          </div>
        </Link>
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-gray-700"
          onClick={() => setMobileMenuOpen(true)}
        >
          <span className="sr-only">Open main menu</span>
          <Menu className="h-7 w-7" aria-hidden="true" />
        </button>
      </div>

      {/* Bottom Tier - Desktop Navigation */}
      <div className="hidden lg:block bg-brand-navy">
        <nav className="container mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-x-8 h-14">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-semibold text-gray-200 hover:text-white transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </nav>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden role-dialog" aria-modal="true">
          <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm" onClick={() => setMobileMenuOpen(false)} />
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-brand-navy px-6 py-6 sm:max-w-sm">
            <div className="flex items-center justify-between mb-8">
              <Link href="/" className="flex items-center gap-2.5 bg-white rounded-lg p-1.5 pr-3" onClick={() => setMobileMenuOpen(false)}>
                <img src="/logo.jpg" alt="Oscar Cleaning Service Logo" className="w-8 h-8 object-contain" />
                <div className="flex flex-col">
                  <span className="text-sm font-black tracking-tight text-brand-navy leading-tight">Oscar Cleaning Service</span>
                  <span className="text-[10px] font-bold text-brand-blue uppercase tracking-wider">Since 2006</span>
                </div>
              </Link>
              <button
                type="button"
                className="rounded-md p-2 text-white"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <X className="h-7 w-7" aria-hidden="true" />
              </button>
            </div>
            
            <div className="space-y-2 mb-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block rounded-lg px-3 py-3 text-base font-semibold text-white hover:bg-white/10"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
            
            <div className="pt-8 border-t border-white/10">
              <div className="mb-6">
                <span className="block text-sm font-medium text-gray-400 uppercase tracking-wider mb-1">Call Us On:</span>
                <a href="tel:2017254580" className="text-2xl font-extrabold text-white">
                  (201) 725-4580
                </a>
              </div>
              <Link
                href="#contact"
                className="block"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Button className="w-full bg-brand-accent hover:bg-brand-accent/90 text-brand-navy font-bold flex items-center justify-center gap-2 h-14 text-lg">
                  <Bell className="w-5 h-5" />
                  GET A QUOTE
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
