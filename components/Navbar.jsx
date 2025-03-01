"use client";
import { useState } from "react";
import { Home, Book, Clock, Menu, X } from "lucide-react";
import SearchBar from "./SearchBar";
import Link from "next/link";

const menuItems = [
  { href: "/", label: "Beranda", icon: Home },
  { href: "/timeline", label: "Timeline", icon: Clock },
  { href: "/articles", label: "Artikel", icon: Book },
];

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
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center space-x-1 hover:text-slate-300"
            >
              <item.icon className="h-4 w-4" />
              <span>{item.label}</span>
            </Link>
          ))}
        </div>

        {/* Search Bar for Desktop */}
        <div className="hidden md:block w-64">
          <SearchBar />
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-4 bg-slate-800 p-4">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block py-2 hover:text-slate-300"
            >
              <item.icon className="h-4 w-4 inline" /> {item.label}
            </Link>
          ))}

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
