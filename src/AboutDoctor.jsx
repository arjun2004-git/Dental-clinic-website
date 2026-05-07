import React from "react";
import { motion } from "framer-motion";
import doctor from "./assets/Dr Surya Pic.jpeg";

function AboutDoctor() {
  return (
    <section className="bg-[#07152f] text-white py-24 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <img
            src={doctor}
            alt="Doctor"
            className="rounded-3xl shadow-2xl w-full"
          />

          <div className="absolute bottom-6 left-6 bg-[#142544]/90 p-6 rounded-3xl">
            <h2 className="text-4xl font-bold text-cyan-400">
              2+ Years
            </h2>

            <p className="text-gray-300 mt-2">
              of Dental Excellence
            </p>
          </div>
        </motion.div>

        {/* CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="tracking-[5px] text-yellow-400 font-semibold mb-5">
            ABOUT DOCTOR
          </p>

          <h1 className="text-5xl font-bold leading-tight mb-10">
            Meet{" "}
            <span className="text-cyan-400">
              Dr Surya S Gupta
            </span>
          </h1>

          <div className="space-y-8 text-gray-300 text-lg leading-9">

            <div className="bg-[#142544] p-6 rounded-3xl border border-cyan-500/20 shadow-lg hover:scale-105 transition duration-300">
              <p>
                • Dr. Surya S. Gupta, B.D.S., is an expert clinician
                specializing in General Dentistry and Endodontics,
                with foundational training from the Rajiv Gandhi
                Institute of Health Sciences and residency at
                Sharavathi Dental College and Hospital.
              </p>
            </div>

            <div className="bg-[#142544] p-6 rounded-3xl border border-cyan-500/20 shadow-lg hover:scale-105 transition duration-300">
              <p>
                • He is widely recognized for his advanced skills in
                painless root canal treatments, utilizing specialized
                techniques and precision to ensure maximum patient
                comfort during complex endodontic procedures.
              </p>
            </div>

            <div className="bg-[#142544] p-6 rounded-3xl border border-cyan-500/20 shadow-lg hover:scale-105 transition duration-300">
              <p>
                • His practice integrates minimally invasive techniques
                and digital diagnostic protocols, supported by over
                100+ hours of postdoctoral education annually to stay
                at the forefront of dental innovation.
              </p>
            </div>

            <div className="bg-[#142544] p-6 rounded-3xl border border-cyan-500/20 shadow-lg hover:scale-105 transition duration-300">
              <p>
                • Dr. Surya maintains the highest standards for
                sterilization and diagnostic accuracy, providing
                patients with a functional, durable, and biologically
                sound oral foundation through expert clinical
                intervention.
              </p>
            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}

export default AboutDoctor;