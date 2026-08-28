const services = [
  {
    title: "Rug and Upholstery",
    description: "Revitalize your furniture and delicate rugs with our specialized deep-cleaning and stain removal techniques.",
    image: "/service-rug.jpg",
    href: "#contact",
  },
  {
    title: "Carpet Cleaning",
    description: "Professional steam cleaning and hot water extraction to remove deep dirt, allergens, and tough stains.",
    image: "/service-carpet.jpg",
    href: "#contact",
  },
  {
    title: "Gutter Cleaning",
    description: "Protect your property from water damage with our thorough and safe professional gutter clearing service.",
    image: "/service-gutter.jpg",
    href: "#contact",
  },
  {
    title: "Window Washing",
    description: "Streak-free interior and exterior window cleaning that lets the natural light shine into your space.",
    image: "/service-window.jpg",
    href: "#contact",
  },
  {
    title: "Heavy Duty Cleaning",
    description: "Intensive cleaning for neglected spaces, post-construction sites, or extreme situations requiring a deep reset.",
    image: "/service-heavy.jpg",
    href: "#contact",
  },
  {
    title: "Janitorial Service",
    description: "Reliable, recurring commercial cleaning to keep your office or facility spotless, safe, and professional.",
    image: "/service-janitorial.jpg",
    href: "#contact",
  },
];

export default function ServiceCards() {
  return (
    <section id="services" className="py-24 bg-brand-gray">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-brand-blue font-semibold tracking-wide uppercase text-sm mb-3">Our Services</h2>
          <h3 className="text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl mb-4">
            Cleaning Services Made Simple
          </h3>
          <p className="text-lg text-gray-600">
            Professional cleaning solutions for homes, offices, and everything in between.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.title} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col h-full">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-brand-navy/10 group-hover:bg-transparent transition-colors duration-300" />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h4 className="text-xl font-bold text-brand-navy mb-2">{service.title}</h4>
                <p className="text-gray-600 mb-2 flex-grow">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
