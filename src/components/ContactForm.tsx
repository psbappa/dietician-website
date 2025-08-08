"use client";
import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(form),
    });
    const data = await res.json();
    alert(data.message);
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <input
        name="name"
        placeholder="Your Name"
        className="border p-2 w-full rounded"
        value={form.name}
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Your Email"
        className="border p-2 w-full rounded"
        value={form.email}
        onChange={handleChange}
        required
      />
      <textarea
        name="message"
        placeholder="Your Message"
        className="border p-2 w-full rounded"
        rows={4}
        value={form.message}
        onChange={handleChange}
        required
      />
      <button className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700">
        Send Message
      </button>
    </form>
  );
}
