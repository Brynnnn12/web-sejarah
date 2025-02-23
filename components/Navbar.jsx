// src/components/Navbar.jsx
"use client";
import { useState } from "react";
import { Home, Book, Clock, Menu, X } from "lucide-react";
import SearchBar from "./SearchBar";
import Link from "next/link";

function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-slate-900 text-white p-4">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Book className="h-6 w-6" />
          <span className="text-xl font-bold">Sejarah Indonesia</span>
        </Link>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMobileMenu} aria-label="Toggle Menu">
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6">
          <Link
            href="/"
            className="flex items-center space-x-1 hover:text-slate-300"
          >
            <Home className="h-4 w-4" />
            <span>Beranda</span>
          </Link>
          <Link
            href="/timeline"
            className="flex items-center space-x-1 hover:text-slate-300"
          >
            <Clock className="h-4 w-4" />
            <span>Timeline</span>
          </Link>
          <Link
            href="/articles"
            className="flex items-center space-x-1 hover:text-slate-300"
          >
            <Book className="h-4 w-4" />
            <span>Artikel</span>
          </Link>
        </div>

        {/* Search Bar for Desktop */}
        <div className="hidden md:block w-64">
          <SearchBar />
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-4 bg-slate-800 p-4">
          <Link href="/" className="block py-2 hover:text-slate-300">
            <Home className="h-4 w-4 inline" /> Beranda
          </Link>
          <Link href="/timeline" className="block py-2 hover:text-slate-300">
            <Clock className="h-4 w-4 inline" /> Timeline
          </Link>
          <Link href="/articles" className="block py-2 hover:text-slate-300">
            <Book className="h-4 w-4 inline" /> Artikel
          </Link>

          {/* Search Bar for Mobile */}
          <div className="mt-4">
            <SearchBar />
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
