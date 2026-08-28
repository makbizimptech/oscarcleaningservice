import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import ServiceCards from "@/components/sections/ServiceCards";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import HowItWorks from "@/components/sections/HowItWorks";
import WhatsIncluded from "@/components/sections/WhatsIncluded";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <ServiceCards />
      <WhyChooseUs />
      <HowItWorks />
      <WhatsIncluded />
      <Testimonials />
      <Contact />
    </>
  );
}
