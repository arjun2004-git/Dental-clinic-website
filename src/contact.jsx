import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    date: "",
    timeSlot: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const today = new Date();

const isToday =
  formData.date === today.toISOString().split("T")[0];

  const allTimeSlots = [
  { label: "10:00 AM - 11:00 AM", hour: 10, minute: 0 },
  { label: "11:00 AM - 12:00 PM", hour: 11, minute: 0 },
  { label: "12:00 PM - 1:00 PM", hour: 12, minute: 0 },
  { label: "1:00 PM - 2:00 PM", hour: 13, minute: 0 },
  { label: "2:00 PM - 3:00 PM", hour: 14, minute: 0 },
  { label: "3:00 PM - 4:00 PM", hour: 15, minute: 0 },
  { label: "4:00 PM - 5:00 PM", hour: 16, minute: 0 },
  { label: "5:00 PM - 6:00 PM", hour: 17, minute: 0 },
  { label: "6:00 PM - 7:00 PM", hour: 18, minute: 0 },
];

const availableSlots = allTimeSlots.filter((slot) => {
  // If future date → show all slots
  if (!isToday) return true;

  // Current time in minutes
  const currentMinutes =
    today.getHours() * 60 + today.getMinutes();

  // Slot start time in minutes
  const slotMinutes =
    slot.hour * 60 + slot.minute;

  // Show only future slots
  return slotMinutes > currentMinutes;
});
  return (
    <section className="bg-[#071133] text-white py-24 px-6">

      {/* Heading */}
      <div className="text-center mb-20">

        <p className="text-yellow-400 tracking-[6px] uppercase mb-4 font-semibold">
          Get In Touch
        </p>

        <h2 className="text-6xl font-bold mb-6">
          Contact <span className="text-cyan-400">Us</span>
        </h2>

        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
          Have questions? Reach out through any of these channels and
          we'll get back to you promptly.
        </p>

      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto">

        {/* Visit Us */}
        <a
          href="https://maps.app.goo.gl/tsGFz6QLy3nxZhBZ7"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#111c44] border border-cyan-900 rounded-[30px] p-12 text-center shadow-2xl hover:-translate-y-3 hover:shadow-cyan-500/20 transition duration-500 block"
        >

          <div className="bg-[#0d2b4d] w-24 h-24 rounded-3xl flex items-center justify-center mx-auto mb-10 text-5xl shadow-lg">
            📍
          </div>

          <h3 className="text-4xl font-bold mb-8">
            Visit Us
          </h3>

          <p className="text-gray-400 text-xl leading-10">
            Opp to APMC Main Gate,<br />
            BH Road, Arsikere,<br />
            Karnataka 573103
          </p>

          <p className="text-cyan-400 mt-8 text-lg font-semibold">
            Open In Google Maps →
          </p>

        </a>

        {/* Call Us */}
        <div className="bg-[#111c44] border border-cyan-900 rounded-[30px] p-12 text-center shadow-2xl hover:-translate-y-3 hover:shadow-cyan-500/20 transition duration-500">

          <div className="bg-[#0d2b4d] w-24 h-24 rounded-3xl flex items-center justify-center mx-auto mb-10 text-5xl shadow-lg">
            📞
          </div>

          <h3 className="text-4xl font-bold mb-8">
            Call Us
          </h3>

          <p className="text-cyan-400 text-3xl font-semibold mb-4">
            +91 6363075954
          </p>

          <p className="text-gray-400 text-xl">
            Mon - Sat, 8 AM - 10 PM
          </p>

        </div>

        {/* WhatsApp */}
        <div className="bg-[#111c44] border border-cyan-900 rounded-[30px] p-12 text-center shadow-2xl hover:-translate-y-3 hover:shadow-cyan-500/20 transition duration-500">

          <div className="bg-[#0d2b4d] w-24 h-24 rounded-3xl flex items-center justify-center mx-auto mb-10 text-5xl shadow-lg">
            💬
          </div>

          <h3 className="text-4xl font-bold mb-8">
            WhatsApp
          </h3>

          <a
            href="https://wa.me/916363075954"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-400 text-2xl hover:underline"
          >
            Chat With Us
          </a>

          <p className="text-gray-400 mt-6 text-xl">
            Quick responses guaranteed
          </p>

        </div>

      </div>

      {/* Floating WhatsApp */}
      <a
        href="https://wa.me/916363075954"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 w-16 h-16 rounded-full flex items-center justify-center text-3xl shadow-2xl hover:scale-110 transition duration-300 z-50"
      >
        💬
      </a>

    </section>
  );
}

export default Contact;