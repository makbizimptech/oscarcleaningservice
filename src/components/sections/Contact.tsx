import { Phone } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="bg-brand-gray py-24">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="bg-brand-navy rounded-3xl p-8 sm:p-16 text-center max-w-5xl mx-auto shadow-2xl relative overflow-hidden">
          {/* Subtle background glow effect */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-brand-blue/30 blur-3xl pointer-events-none"></div>
          
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-4 relative z-10">
            Ready for a Cleaner, Brighter Property?
          </h2>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto mb-12 relative z-10">
            Contact us today for a free, no-obligation estimate. Our team is ready to deliver premium cleaning services tailored to your needs.
          </p>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-sm mx-auto border border-white/20 shadow-xl relative z-10">
            <a href="tel:2017254580" className="flex flex-col items-center group">
              <div className="w-16 h-16 bg-brand-accent rounded-full flex items-center justify-center mb-6 shadow-lg shadow-brand-accent/20 group-hover:scale-110 transition-transform duration-300">
                <Phone className="w-7 h-7 text-brand-navy" />
              </div>
              <span className="text-xs font-bold text-blue-200 uppercase tracking-widest mb-2">Call Us Directly</span>
              <span className="text-3xl font-extrabold text-white group-hover:text-brand-accent transition-colors">
                (201) 725-4580
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
