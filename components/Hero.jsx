"use client";
import { motion } from "framer-motion";
import Link from "next/link";

function Hero() {
  return (
    <motion.div
      className="relative text-white py-32 bg-cover bg-center"
      style={{ backgroundImage: "url('/images/articles/hero.jpg')" }}
      initial={{ opacity: 0 }} // Mulai dari tidak terlihat
      animate={{ opacity: 1 }} // Langsung muncul tanpa scroll
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Overlay hitam untuk efek gelap */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Konten dalam hero section */}
      <div className="container mx-auto text-center relative z-10">
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          Jelajahi Sejarah Indonesia
        </motion.h1>

        <motion.p
          className="text-md px-6 xl:text-xl text-slate-300 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
        >
          Temukan perjalanan bangsa Indonesia dari masa ke masa
        </motion.p>

        <motion.button
          className="bg-blue-600 hover:bg-blue-700 text-white text-sm xl:text-lg px-8 py-3 rounded-lg font-medium"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
        >
          <Link href="/articles"> Mulai Eksplorasi</Link>
        </motion.button>
      </div>
    </motion.div>
  );
}

export default Hero;
