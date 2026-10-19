import { Phone } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="bg-brand-gray py-24">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="bg-brand-navy rounded-3xl p-8 sm:p-12 lg:p-16 max-w-6xl mx-auto shadow-2xl relative overflow-hidden">
          {/* Subtle background glow effect */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-brand-blue/30 blur-3xl pointer-events-none"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center relative z-10">
            {/* Left Column: Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/3] bg-brand-navy/50">
              <img
                src="/slide.jpeg"
                alt="Oscar Cleaning Service van"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Right Column: Content & Mobile Number */}
            <div className="flex flex-col text-center lg:text-left">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-4">
                Ready for a Cleaner, Brighter Property?
              </h2>
              <p className="text-base sm:text-lg text-blue-100 mb-8 leading-relaxed">
                Contact us today for a free, no-obligation estimate. Our team is ready to deliver premium cleaning services tailored to your needs.
              </p>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 sm:p-6 lg:p-8 border border-white/20 shadow-xl w-full max-w-md mx-auto lg:mx-0">
                <a href="tel:2017254580" className="flex items-center justify-center lg:justify-start gap-4 sm:gap-5 group">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-brand-accent rounded-full flex items-center justify-center shrink-0 shadow-lg shadow-brand-accent/20 group-hover:scale-110 transition-transform duration-300">
                    <Phone className="w-5 h-5 sm:w-7 sm:h-7 text-brand-navy" />
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="text-[11px] sm:text-xs font-bold text-blue-200 uppercase tracking-widest mb-0.5 sm:mb-1">Call Us Directly</span>
                    <span className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white group-hover:text-brand-accent transition-colors whitespace-nowrap tracking-tight">
                      (201) 725-4580
                    </span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
