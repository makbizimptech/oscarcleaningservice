import { CheckCircle2 } from "lucide-react";

const rooms = [
  {
    name: "Kitchens",
    items: [
      "Wipe exterior of all appliances",
      "Clean microwave inside and out",
      "Scrub and sanitize sinks",
      "Wipe cabinet doors and handles",
      "Clean countertops and backsplashes",
      "Vacuum and mop floors",
    ],
  },
  {
    name: "Bathrooms",
    items: [
      "Scrub and sanitize toilets",
      "Clean showers, tubs, and grout",
      "Wipe down mirrors and glass",
      "Clean and sanitize sinks and counters",
      "Wipe cabinet exteriors",
      "Empty trash and mop floors",
    ],
  },
  {
    name: "Bedrooms",
    items: [
      "Dust all accessible surfaces",
      "Make beds (change linens if left out)",
      "Wipe down mirrors and glass",
      "Dust window sills and ledges",
      "Tidy up and organize",
      "Vacuum carpets and mop floors",
    ],
  },
  {
    name: "Living Areas",
    items: [
      "Dust furniture, shelves, and decor",
      "Wipe down electronics",
      "Dust ceiling fans and light fixtures",
      "Clean baseboards and trim",
      "Fluff pillows and fold blankets",
      "Vacuum and mop all floors",
    ],
  },
];

export default function WhatsIncluded() {
  return (
    <section className="py-24 bg-brand-gray border-y border-gray-200">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-brand-blue font-semibold tracking-wide uppercase text-sm mb-3">What's Included</h2>
          <h3 className="text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl mb-4">
            Our Cleaning Checklist
          </h3>
          <p className="text-lg text-gray-600">
            We don't cut corners, we clean them. Here is a breakdown of what our standard service includes for every room in your home.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {rooms.map((room) => (
            <div key={room.name} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <h4 className="text-xl font-bold text-brand-navy mb-6 pb-4 border-b border-gray-100">
                {room.name}
              </h4>
              <ul className="space-y-4">
                {room.items.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-brand-accent shrink-0 mr-3 mt-0.5" />
                    <span className="text-gray-600 text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
