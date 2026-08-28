import { FileText, CalendarDays, Sparkles, Home } from "lucide-react";

const steps = [
  {
    id: "01",
    name: "Get Your Quote",
    description: "Tell us what you need cleaned.",
    icon: FileText,
  },
  {
    id: "02",
    name: "Choose Your Time",
    description: "Pick a convenient date and time.",
    icon: CalendarDays,
  },
  {
    id: "03",
    name: "We Clean",
    description: "Our professional team handles the rest.",
    icon: Sparkles,
  },
  {
    id: "04",
    name: "Enjoy Your Space",
    description: "Relax and enjoy a fresh, spotless space.",
    icon: Home,
  },
];

export default function HowItWorks() {
  return (
    <section className="py-24 bg-white relative overflow-hidden border-y border-gray-100">
      {/* Decorative lines */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <svg className="absolute left-1/2 top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-brand-navy [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]" aria-hidden="true">
          <defs>
            <pattern id="e813992c-7d03-4cc4-a2bd-151760b470a0" width="200" height="200" x="50%" y="-1" patternUnits="userSpaceOnUse">
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" strokeWidth="0" fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" />
        </svg>
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-brand-blue font-semibold tracking-wide uppercase text-sm mb-3">Our Process</h2>
          <h3 className="text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl mb-4">
            How It Works
          </h3>
          <p className="text-lg text-gray-600">
            A seamless experience from booking to a sparkling clean space.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connecting line for desktop */}
          <div className="hidden lg:block absolute top-12 left-[12.5%] right-[12.5%] h-0.5 bg-gray-200 -z-10"></div>
          
          {steps.map((step) => (
            <div key={step.id} className="relative text-center">
              <div className="mx-auto w-24 h-24 bg-white border-4 border-gray-100 rounded-full flex items-center justify-center mb-6 relative z-10 shadow-sm transition-colors hover:border-brand-blue hover:shadow-md group">
                <step.icon className="w-10 h-10 text-brand-blue" />
                <div className="absolute -top-3 -right-3 w-8 h-8 bg-brand-accent rounded-full flex items-center justify-center text-white font-bold text-sm shadow-md">
                  {step.id}
                </div>
              </div>
              <h4 className="text-xl font-bold text-brand-navy mb-3">{step.name}</h4>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
