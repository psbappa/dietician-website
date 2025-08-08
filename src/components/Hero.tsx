export default function Hero() {
  return (
    <section className="bg-green-100 text-center py-16 px-4">
      <h1 className="text-4xl font-bold mb-4">Eat Well, Live Well</h1>
      <p className="text-lg mb-6">Personalized diet plans for a healthier you</p>
      <a
        href="/appointments"
        className="bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700"
      >
        Book an Appointment
      </a>
    </section>
  );
}
