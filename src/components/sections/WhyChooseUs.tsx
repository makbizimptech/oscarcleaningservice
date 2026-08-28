import { CheckCircle2 } from "lucide-react";

const benefits = [
  "Trained & Background-Checked Cleaners",
  "Flexible Scheduling",
  "Eco-Friendly Cleaning Options",
  "Transparent Pricing",
  "Satisfaction Guaranteed",
];

export default function WhyChooseUs() {
  return (
    <section id="about" className="py-24 overflow-hidden bg-white">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/5] lg:aspect-auto lg:h-[700px]">
              <img
                src="/why-choose-us.jpg"
                alt="Friendly, professional cleaning team holding supplies in a pristine home"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>
            
            {/* Experience Badge */}
            <div className="absolute -bottom-6 -right-6 bg-brand-accent text-white p-6 rounded-2xl shadow-xl flex flex-col items-center justify-center w-40 h-40 transform rotate-3 hover:rotate-0 transition-transform">
              <span className="text-4xl font-bold">7+</span>
              <span className="text-sm font-medium text-center leading-tight mt-1">Years of<br/>Excellence</span>
            </div>
          </div>
          
          <div>
            <h2 className="text-brand-blue font-semibold tracking-wide uppercase text-sm mb-3">Why Choose Us</h2>
            <h3 className="text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl mb-6">
              Why Customers Choose Oscar Cleaning Service
            </h3>
            <p className="text-lg text-gray-600 mb-10">
              We don't just clean your space; we care for it. Our team is dedicated to providing a reliable, trustworthy, and premium cleaning experience every single time.
            </p>
            
            <ul className="space-y-4 mb-10">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-brand-blue shrink-0 mr-3" />
                  <span className="text-gray-700 font-medium">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
