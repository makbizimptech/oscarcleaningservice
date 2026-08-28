import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Jenkins",
    location: "Hoboken, NJ",
    rating: 5,
    text: "Oscar Cleaning Service has been amazing. They arrived on time, were professional, and our home looked incredible. Highly recommend their deep cleaning service!",
  },
  {
    name: "Michael Chen",
    location: "Jersey City, NJ",
    rating: 5,
    text: "I've tried several cleaning services before, but none compare to the attention to detail these guys provide. My apartment has never looked better.",
  },
  {
    name: "Emily Rodriguez",
    location: "Manhattan, NY",
    rating: 5,
    text: "Reliable, thorough, and incredibly polite. They make scheduling so easy and always leave my place spotless. A lifesaver for my busy schedule.",
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-brand-blue font-semibold tracking-wide uppercase text-sm mb-3">Testimonials</h2>
          <h3 className="text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl mb-4">
            What Our Customers Say
          </h3>
          <p className="text-lg text-gray-600">
            Don't just take our word for it. Hear from our satisfied clients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-brand-gray rounded-2xl p-8 border border-gray-100 shadow-sm relative">
              <div className="flex text-yellow-400 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <blockquote className="text-gray-700 leading-relaxed mb-6">
                "{testimonial.text}"
              </blockquote>
              <div className="flex items-center gap-4 mt-auto">
                <div className="w-10 h-10 rounded-full bg-brand-navy text-white flex items-center justify-center font-bold">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-brand-navy text-sm">{testimonial.name}</p>
                  <p className="text-xs text-gray-500">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
