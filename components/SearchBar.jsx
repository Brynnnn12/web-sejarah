// src/components/SearchBar.jsx
"use client";
import { Search } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";

function SearchBar() {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query)}`);
    }
  };

  return (
    <form onSubmit={handleSearch} className="relative">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Cari sejarah..."
        className="px-4 py-2 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
      />
      <button type="submit" className="absolute right-3 top-2.5">
        <Search className="h-5 w-5 text-gray-400" />
      </button>
    </form>
  );
}

export default SearchBar;
