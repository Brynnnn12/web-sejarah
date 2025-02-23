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

  const searchResults = articles.filter(
    (article) =>
      article.title.toLowerCase().includes(query.toLowerCase()) ||
      article.desc.toLowerCase().includes(query.toLowerCase()) ||
      article.content.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-xl xl:text-3xl text-gray-800 font-bold mb-8">
          Hasil pencarian untuk "{query}"
        </h1>

        <div className="grid grid-cols-1 gap-8">
          {searchResults.map((article) => (
            <Link
              href={`/articles/${article.id}`}
              key={article.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden flex hover:shadow-xl transition-shadow transform hover:scale-105 duration-300"
            >
              <div className="w-48 h-48 relative overflow-hidden">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="p-4 flex-1">
                <p className="text-xs xl:text-sm text-gray-500 mb-2">
                  {article.date}
                </p>
                <h2 className="text-sm xl:text-xl font-bold text-gray-800 mb-2">
                  {article.title}
                </h2>
                <p className="text-sm xl:text-xl text-gray-600">
                  {article.desc}
                </p>
              </div>
            </Link>
          ))}
          {searchResults.length === 0 && (
            <p className="text-center text-gray-600">
              Tidak ada hasil yang ditemukan untuk "{query}"
            </p>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}
