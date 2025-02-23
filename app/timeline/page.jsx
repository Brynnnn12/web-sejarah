// src/app/timeline/page.jsx
"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

function TimelinePage() {
  const timelineEvents = [
    {
      year: "1602",
      event: "Berdirinya VOC",
      description:
        "Perusahaan dagang Belanda yang kemudian menguasai Nusantara",
    },
    {
      year: "1908",
      event: "Berdirinya Budi Utomo",
      description:
        "Organisasi pergerakan nasional pertama yang menandai kebangkitan nasional",
    },
    {
      year: "1928",
      event: "Sumpah Pemuda",
      description: "Momentum penting persatuan pemuda Indonesia",
    },
    {
      year: "1942-1945",
      event: "Pendudukan Jepang",
      description: "Masa pendudukan Jepang di Indonesia",
    },
    {
      year: "1945",
      event: "Proklamasi Kemerdekaan",
      description: "Indonesia menyatakan kemerdekaannya",
    },
    {
      year: "1949",
      event: "Pengakuan Kedaulatan",
      description: "Belanda mengakui kedaulatan Indonesia",
    },
    {
      year: "1955",
      event: "Konferensi Asia Afrika",
      description:
        "Indonesia menginisiasi pertemuan negara Asia-Afrika di Bandung",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <div className="container mx-auto py-16">
        <h1 className=" text-2xl xl:text-4xl text-gray-800 font-bold text-center mb-16">
          Timeline Sejarah Indonesia
        </h1>

        <div className="relative max-w-4xl mx-auto">
          {/* Garis vertikal */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200"></div>

          <div className="space-y-16 px-10">
            {timelineEvents.map((event, index) => (
              <motion.div
                key={index}
                className={`flex items-center ${
                  index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                }`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }} // Animasi hanya terjadi sekali saat elemen masuk layar
                transition={{
                  duration: 1.2,
                  delay: index * 0.3,
                  ease: "easeInOut",
                }} // Efek halus dengan delay bertahap
              >
                <div
                  className={`w-5/12 ${
                    index % 2 === 0 ? "text-right pr-8" : "text-left pl-8"
                  }`}
                >
                  <h3 className=" text-sm xl:text-2xl font-bold text-blue-900">
                    {event.year}
                  </h3>
                  <h4 className="text-sm xl:text-xl text-gray-800 font-semibold mb-2">
                    {event.event}
                  </h4>
                  <p className="text-sm xl:text-lg text-gray-600">
                    {event.description}
                  </p>
                </div>

                <div className="w-2/12 flex justify-center">
                  <div className="w-4 h-4 bg-blue-600 rounded-full relative z-10">
                    <div className="w-3 h-3 bg-white rounded-full absolute top-0.5 left-0.5"></div>
                  </div>
                </div>

                <div className="w-5/12"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default TimelinePage;
