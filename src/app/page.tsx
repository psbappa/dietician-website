import Hero from "../components/Hero";
import ServiceCard from "../components/ServiceCard";
import {services} from "../data/services";

export default function HomePage() {

  return (
    <>
      <Hero />
      <section className="max-w-6xl mx-auto px-4 py-12 grid gap-6 md:grid-cols-3">
        {services.map((service, index) => (
          <ServiceCard key={index} title={service.title} desc={service.desc} />
        ))}
      </section>
    </>
  );
}
