interface ServiceCardProps {
  title: string;
  desc: string;
}

export default function ServiceCard({ title, desc }: ServiceCardProps) {
  return (
    <div className="bg-white shadow-md p-6 rounded-lg hover:shadow-lg transition">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p>{desc}</p>
    </div>
  );
}
