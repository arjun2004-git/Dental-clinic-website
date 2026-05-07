import AboutDoctor from "./AboutDoctor";
import clinicPic from "./assets/Clinic pic.jpeg"
import logo from "./assets/Logo.jpeg";
import Contact from "./contact";
import { useState } from "react";

function App() {
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
    <div className="w-full overflow-hidden">

      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

          <div className="flex items-center gap-3">
  <img
    src={logo}
    alt="Clinic Logo"
    className="w-12 h-12 object-contain rounded-full"
  />

  <h1 className="text-2xl font-bold text-black">
    Dr Surya's Multispeciality Dental Care
  </h1>
</div>

          <div className="hidden md:flex gap-8 font-medium">
            <a href="#home">Home</a>
            <a href="#services">Services</a>
            <a href="#about">About</a>
            <a href="#contact">Appointment</a>
            <a href="#footer-contact">Contact</a>
          </div>

        </div>
      </nav>


      {/* Hero Section */}
     <section
  id="home"
  className="h-screen bg-cover bg-center flex items-center justify-center"
  style={{
    backgroundImage:
      "url('https://images.unsplash.com/photo-1606811971618-4486d14f3f99?q=80&w=1600')",
  }}
>
  <div className="bg-black/60 p-10 rounded-3xl text-center text-white max-w-3xl">

    <h1 className="text-5xl md:text-7xl font-bold mb-6">
      Your Smile Matters
    </h1>

    <p className="text-xl mb-8">
      Advanced Dental Care With Modern Technology &
      Experienced Specialists
    </p>

   <a
  href="#appointment"
  className="inline-block bg-blue-600 hover:bg-blue-800 px-8 py-4 rounded-xl text-lg font-semibold transition"
>
  Book Appointment
</a>
  </div>
</section>
      <AboutDoctor />


      {/* Services */}
      <section id="services" className="py-24 px-6 bg-gray-100">

        <div className="max-w-7xl mx-auto">

          <h2 className="text-5xl font-bold text-center mb-16 text-blue-700">
            Our Services
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

  {[
    "Complete Dental Checkup",
    "Teeth Cleaning & Whitening",
    "Teeth Filling",
    "Teeth Extraction",
    "Root Canal Treatment",
    "Digital X-ray",
    "Full & Partial Dentures",
    "Braces & Aligners",
    "Crown & Bridges",
    "Veneers",
    "Dental Implant",
    "Cosmetic Dentistry",
    "Pediatric Dentistry",
    "Tooth Jewelry",
    "Smile Designing"
  ].map((service, index) => (

    <div
      key={index}
      className="bg-white p-8 rounded-3xl shadow-xl border border-blue-100 hover:scale-105 hover:bg-blue-700 hover:text-white transition duration-300"
    >

      <h3 className="text-2xl font-bold text-center">
        {service}
      </h3>

    </div>

  ))}

</div>

        </div>
      </section>


      {/* About */}
<section id="about" className="py-24 px-6 bg-white">

  <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

    {/* IMAGES */}
    <div className="flex flex-col gap-8">

      {/* IMAGE 1 */}
      <div className="overflow-hidden rounded-3xl shadow-2xl group">
        <img
          src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1200"
          className="
            w-full
            h-auto
            max-h-[500px]
            object-contain
            transition-transform
            duration-700
            group-hover:scale-110
          "
        />
      </div>

      {/* IMAGE 2 */}
      <div className="overflow-hidden rounded-3xl shadow-2xl group">
        <img
          src={clinicPic}
          className="
            w-full
            h-auto
            max-h-[500px]
            object-contain
            transition-transform
            duration-700
            group-hover:scale-110
          "
        />
      </div>

    </div>

    {/* CONTENT */}
    <div>

      <h2 className="text-5xl font-bold mb-10 text-blue-700">
        About Clinic
      </h2>

      <div className="space-y-6">

        <div className="bg-blue-50 p-5 rounded-2xl shadow-md">
          <p className="text-lg text-gray-700 leading-8">
            <span className="font-bold text-blue-700">
              Multi-speciality Excellence :
            </span>{" "}
            Access all dental specialists under one roof,
            from orthodontics to implants.
          </p>
        </div>

        <div className="bg-blue-50 p-5 rounded-2xl shadow-md">
          <p className="text-lg text-gray-700 leading-8">
            <span className="font-bold text-blue-700">
              Expert Leadership :
            </span>{" "}
            Led by Dr. Surya, focused on precision,
            ethics, and patient satisfaction.
          </p>
        </div>

        <div className="bg-blue-50 p-5 rounded-2xl shadow-md">
          <p className="text-lg text-gray-700 leading-8">
            <span className="font-bold text-blue-700">
              Modern Infrastructure :
            </span>{" "}
            Features state-of-the-art diagnostic tools
            and painless treatment technologies.
          </p>
        </div>

        <div className="bg-blue-50 p-5 rounded-2xl shadow-md">
          <p className="text-lg text-gray-700 leading-8">
            <span className="font-bold text-blue-700">
              Gold-Standard Hygiene :
            </span>{" "}
            Rigorous multi-step sterilization protocols
            for a safe clinical environment.
          </p>
        </div>

        <div className="bg-blue-50 p-5 rounded-2xl shadow-md">
          <p className="text-lg text-gray-700 leading-8">
            <span className="font-bold text-blue-700">
              Patient-Centric Care :
            </span>{" "}
            Warm, friendly staff trained to assist
            patients with dental anxiety.
          </p>
        </div>

        <div className="bg-blue-50 p-5 rounded-2xl shadow-md">
          <p className="text-lg text-gray-700 leading-8">
            <span className="font-bold text-blue-700">
              Customised Planning :
            </span>{" "}
            Every treatment plan is uniquely designed
            based on your specific health needs.
          </p>
        </div>

      </div>

    </div>

  </div>

</section>


      {/* Testimonials */}
      <section className="py-24 bg-blue-700 text-white px-6">

        <h2 className="text-5xl font-bold text-center mb-16">
          Patient Reviews
        </h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">

          <div className="bg-white text-black p-8 rounded-3xl">
            <p>
              “Excellent treatment and friendly doctors. Highly recommended.”
            </p>

            <h4 className="mt-6 font-bold">Rahul</h4>
          </div>

          <div className="bg-white text-black p-8 rounded-3xl">
            <p>
              “Very clean clinic and painless root canal treatment.”
            </p>

            <h4 className="mt-6 font-bold">Sneha</h4>
          </div>

          <div className="bg-white text-black p-8 rounded-3xl">
            <p>
              “Professional staff and modern equipment.”
            </p>

            <h4 className="mt-6 font-bold">Kiran</h4>
          </div>

        </div>
      </section>


      {/* Booking Form */}
<section id="contact" className="py-24 px-6 bg-gray-100">

  <div
    id="appointment"
    className="max-w-3xl mx-auto bg-white p-10 rounded-3xl shadow-2xl"
  >

    <h2 className="text-5xl font-bold text-center mb-10 text-blue-700">
      Book Appointment
    </h2>

   <form
  onSubmit={(e) => {
    e.preventDefault()

    const name = e.target.name.value
    const phone = e.target.phone.value
    const message = e.target.message.value
    const date = e.target.date.value
    const time = e.target.timeSlot.value

    const formattedDate = new Date(date)
      .toLocaleDateString("en-GB")

    const whatsappMessage =
      `New Appointment Booking:\n\n` +
      `Name: ${name}\n` +
      `Phone: ${phone}\n` +
      `Preferred Date: ${formattedDate}\n` +
      `Preferred Time: ${time}\n` +
      `Problem: ${message}`

    const whatsappURL =
      `https://wa.me/916363075954?text=${encodeURIComponent(whatsappMessage)}`

    window.open(whatsappURL, "_blank")
  }}
  className="space-y-6"
>

  {/* Full Name */}
  <input
    type="text"
    name="name"
    placeholder="Full Name"
    required
    minLength="3"
    className="w-full border-2 border-gray-300 p-4 rounded-xl focus:outline-none focus:border-blue-600"
  />

  {/* Phone */}
  <input
    type="tel"
    name="phone"
    placeholder="Phone Number"
    required
    pattern="[0-9]{10}"
    title="Please enter a valid 10 digit phone number"
    className="w-full border-2 border-gray-300 p-4 rounded-xl focus:outline-none focus:border-blue-600"
  />

 {/* Date */}
<div>
  <label className="block text-lg font-medium mb-3 text-gray-700">
    Date for an Appointment
  </label>

  <input
    type="date"
    name="date"
    value={formData.date}
    onChange={handleChange}
    min={new Date().toISOString().split("T")[0]}
    required
    className="w-full border-2 border-gray-300 p-4 rounded-xl focus:outline-none focus:border-blue-600"
  />
</div>

{/* Time Slot */}
<div>
  <label className="block text-lg font-medium mb-3 text-gray-700">
    Select Preferred Time Slot
  </label>

  <select
  name="timeSlot"
  value={formData.timeSlot}
  onChange={handleChange}
  required
  className="w-full border-2 border-gray-300 p-4 rounded-xl focus:outline-none focus:border-blue-600 bg-white"
>
  <option value="">Choose Time Slot</option>

  {availableSlots.length > 0 ? (
    availableSlots.map((slot, index) => (
      <option key={index} value={slot.label}>
        {slot.label}
      </option>
    ))
  ) : (
    <option disabled>No slots available</option>
  )}
</select>
</div>
  {/* Problem */}
  <textarea
    name="message"
    placeholder="Describe your reason for an appointment"
    rows="5"
    required
    minLength="5"
    className="w-full border-2 border-gray-300 p-4 rounded-xl focus:outline-none focus:border-blue-600"
  ></textarea>

  {/* Button */}
  <button
    type="submit"
    className="w-full bg-blue-700 hover:bg-blue-900 text-white py-4 rounded-xl text-lg font-semibold transition duration-300"
  >
    Book Appointment
  </button>

</form>

  </div>
</section>
<div id="footer-contact">
  <Contact />
</div>

      {/* Footer */}
      <footer className="bg-black text-white text-center py-6">
        © 2026 Dr Surya's Multispeciality Dental Care
      </footer>

    </div>
  )
}

export default App