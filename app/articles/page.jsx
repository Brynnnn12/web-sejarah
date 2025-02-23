// src/app/articles/page.jsx
"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { articles } from "@/app/data/articles";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

function ArticlesPage() {
  const [selectedCategory, setSelectedCategory] = useState("Semua");

  const categories = [
    "Semua",
    "Pra-Kemerdekaan",
    "Masa Kemerdekaan",
    "Era Modern",
  ];

  // Filter artikel berdasarkan kategori yang dipilih
  const filteredArticles =
    selectedCategory === "Semua"
      ? articles
      : articles.filter((article) => article.category === selectedCategory);

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <div className="container mx-auto py-16">
        <h1 className="text-4xl font-bold text-gray-800 text-center mb-8">
          Artikel Sejarah
        </h1>

        {/* Filter Kategori dengan Animasi Halus */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { duration: 1, ease: "easeOut", staggerChildren: 0.3 },
          }}
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full transition-all ${
                category === selectedCategory
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {category}
              {category === selectedCategory && (
                <span className="ml-2 text-sm">
                  (
                  {category === "Semua"
                    ? articles.length
                    : articles.filter((a) => a.category === category).length}
                  )
                </span>
              )}
            </motion.button>
          ))}
        </motion.div>

        {/* Grid Artikel dengan Animasi Lebih Halus dan Gambar Muncul Satu per Satu */}
        <motion.div
          className=" px-8  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.5,
                duration: 1,
                ease: "easeOut",
              },
            },
          }}
        >
          {filteredArticles.map((article) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { duration: 1, ease: "easeOut" },
              }}
            >
              <Link
                href={`/articles/${article.id}`}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <motion.div
                  className="relative h-56"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: { duration: 1.5, ease: "easeOut" },
                  }}
                >
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover"
                    priority
                  />
                </motion.div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-sm text-gray-500">{article.date}</p>
                    <span
                      className={`px-3 py-1 rounded-full text-sm ${
                        article.category === "Pra-Kemerdekaan"
                          ? "bg-yellow-100 text-yellow-800"
                          : article.category === "Masa Kemerdekaan"
                          ? "bg-blue-100 text-blue-800"
                          : "bg-green-100 text-green-800"
                      }`}
                    >
                      {article.category}
                    </span>
                  </div>
                  <h3 className="text-xl text-gray-800 font-bold mb-2">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{article.desc}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-blue-600 hover:text-blue-800 font-medium">
                      Baca Selengkapnya →
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {filteredArticles.length === 0 && (
          <motion.div
            className="text-center text-gray-600 mt-8"
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { duration: 1, ease: "easeOut" },
            }}
          >
            <p>Tidak ada artikel dalam kategori ini.</p>
          </motion.div>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default ArticlesPage;
