"use client"; // Tambahkan ini agar bisa dijalankan di Client Component

import { motion } from "framer-motion";

function Timeline() {
  const timelineEvents = [
    { year: "17 Agustus 1945", event: "Proklamasi Kemerdekaan Indonesia" },
    { year: "27 Desember 1949", event: "Pengakuan Kedaulatan Indonesia" },
    { year: "18-24 April 1955", event: "Konferensi Asia Afrika" },
  ];

  return (
    <div className="bg-slate-100 px-10 py-16">
      <div className="container text-black mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Timeline Sejarah
        </h2>
        <div className="relative">
          {/* Garis Tengah */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-slate-300"></div>

          <div className="space-y-12">
            {timelineEvents.map((item, index) => (
              <motion.div
                key={index}
                className="flex items-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2 * index }}
                viewport={{ once: true }} // Tambahkan viewport agar tidak berkedip terus-menerus
              >
                {/* Tahun */}
                <div className="w-1/2 pr-8 text-right">
                  <h3 className="text-md xl:text-xl font-bold">{item.year}</h3>
                </div>

                {/* Titik di tengah timeline */}
                <div className="w-4 h-4 bg-blue-600 rounded-full relative z-10">
                  <div className="w-3 h-3 bg-white rounded-full absolute top-0.5 left-0.5"></div>
                </div>

                {/* Deskripsi */}
                <div className="w-1/2 pl-8">
                  <p className="text-md">{item.event}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Timeline;
