"use client";

import { articles } from "@/app/data/articles";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function SearchComponent() {
  const searchParams = useSearchParams();
  const [query, setQuery] = useState("");

  useEffect(() => {
    setQuery(searchParams.get("q") || "");
  }, [searchParams]);

  // Filter artikel berdasarkan pencarian
  const searchResults = query
    ? articles.filter(
        (article) =>
          article.title.toLowerCase().includes(query.toLowerCase()) ||
          article.desc.toLowerCase().includes(query.toLowerCase()) ||
          article.content.toLowerCase().includes(query.toLowerCase())
      )
    : articles; // Jika query kosong, tampilkan semua artikel

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-xl xl:text-3xl text-gray-800 font-bold mb-8">
          {query ? `Hasil pencarian untuk "${query}"` : "Semua Artikel"}
        </h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {searchResults.map((article) => (
            <Link
              href={`/articles/${article.id}`}
              key={article.id}
              className="bg-white rounded-lg shadow-md hover:shadow-xl transition-transform duration-300 transform hover:scale-105 overflow-hidden"
            >
              <div className="relative w-full h-48">
                <Image
                  src={article.image}
                  alt={article.title}
                  layout="fill"
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <p className="text-xs text-gray-500 mb-1">{article.date}</p>
                <h2 className="text-lg font-semibold text-gray-800 mb-1">
                  {article.title}
                </h2>
                <p className="text-sm text-gray-600 line-clamp-2">
                  {article.desc}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* Tampilkan pesan jika hasil pencarian kosong */}
        {searchResults.length === 0 && (
          <div className="text-center text-gray-600 py-32">
            <p>Tidak ada hasil yang ditemukan untuk "{query}"</p>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}
