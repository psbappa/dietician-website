import ServiceCard from "../../components/ServiceCard";
import { services } from "../../data/services";

export default function ServicesPage() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8 text-center">Our Services</h1>
      <div className="grid gap-6 md:grid-cols-3">
        {services.map((service, index) => (
          <ServiceCard key={index} title={service.title} desc={service.desc} />
        ))}
      </div>
    </section>
  );
}


// export default function ServicesPage() {
//   return (
//     <section className="max-w-5xl mx-auto px-4 py-12">
//       <h1 className="text-3xl font-bold mb-6">Services</h1>
//       <ul className="list-disc pl-6 space-y-2">
//         <li>Custom Weight Loss Plans</li>
//         <li>Sports Nutrition</li>
//         <li>Diabetes and Heart Health Diets</li>
//         <li>Pregnancy Nutrition</li>
//       </ul>
//     </section>
//   );
// }
