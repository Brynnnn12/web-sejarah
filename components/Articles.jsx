"use client";

import { articles } from "@/app/data/articles";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

function Articles() {
  return (
    <div className="container px-8 xl:px-0 mx-auto py-16">
      <motion.h2
        className="text-3xl font-bold text-gray-800 mb-8 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
      >
        Artikel Pilihan
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {articles.slice(0, 3).map((article, index) => (
          <motion.div
            key={article.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.3 }}
            viewport={{ once: true }}
          >
            <Link
              href={`/articles/${article.id}`}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <motion.div
                className="relative h-48"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: index * 0.3 }}
                viewport={{ once: true }}
              >
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                />
              </motion.div>
              <div className="p-6">
                <p className="text-sm text-gray-500 mb-2">{article.date}</p>
                <h3 className="text-xl text-gray-800 font-bold mb-2">
                  {article.title}
                </h3>
                <p className="text-gray-600 mb-4">{article.desc}</p>
                <span className="text-blue-600 hover:text-blue-800 font-medium">
                  Baca Selengkapnya →
                </span>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="mt-8 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <Link
          href="/articles"
          className="inline-block bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
        >
          Lihat Semua Artikel
        </Link>
      </motion.div>
    </div>
  );
}

export default Articles;
