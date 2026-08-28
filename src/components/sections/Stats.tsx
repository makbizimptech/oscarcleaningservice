import React from 'react';

const stats = [
  {
    id: 1,
    name: "Happy Customers",
    value: "500+",
    image: "/service-rug.jpg"
  },
  {
    id: 2,
    name: "Spaces Cleaned",
    value: "1,000+",
    image: "/service-heavy.jpg"
  },
  {
    id: 3,
    name: "Customer Rating",
    value: "5★",
    image: "/service-window.jpg"
  },
  {
    id: 4,
    name: "Satisfaction Focused",
    value: "100%",
    image: "/why-choose-us.jpg"
  },
];

export default function Stats() {
  return (
    <section className="bg-brand-gray py-16 sm:py-24 relative z-20">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 max-w-5xl mx-auto">
          {stats.map((stat) => (
            <div key={stat.id} className="flex flex-col items-center justify-center">
              <div className="relative w-40 h-40 sm:w-48 sm:h-48 rounded-full overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.12)] border-4 border-white flex flex-col items-center justify-center group">
                <img 
                  src={stat.image} 
                  alt={stat.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-brand-navy/70 mix-blend-multiply"></div>
                <div className="relative z-10 text-center flex flex-col items-center justify-center p-4">
                  <span className="text-3xl sm:text-4xl font-extrabold text-white mb-1 drop-shadow-md">
                    {stat.value}
                  </span>
                  <span className="text-[10px] sm:text-xs font-bold text-brand-accent uppercase tracking-wider drop-shadow-md text-center">
                    {stat.name}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
