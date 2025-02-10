"use client";

import { useState, useEffect } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedTheme = localStorage.getItem("theme") || "light";
      setTheme(storedTheme);
      document.documentElement.classList.add(storedTheme);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(newTheme);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-gradient-to-r from-aqua-200 via-blue-100 to-blue-200 dark:from-gray-900 dark:via-black dark:to-gray-800 shadow-md transition-all duration-500">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* LOGO */}
        <a href="/" className="text-2xl font-bold text-gray-900 dark:text-white">
          Salman Photography
        </a>

        {/* NAV LINKS (DESKTOP) */}
        <div className="hidden md:flex space-x-6">
          <a href="/" className="hover:text-blue-500 transition-all">
            Home
          </a>
          <a href="/gallery" className="hover:text-blue-500 transition-all">
            Gallery
          </a>
          <a href="/booking" className="hover:text-blue-500 transition-all">
            Booking
          </a>
          <a href="/blog" className="hover:text-blue-500 transition-all">
            Blog
          </a>
          <a href="/testimonials" className="hover:text-blue-500 transition-all">
            Testimonials
          </a>
          <a href="/contacts" className="hover:text-blue-500 transition-all">
            Contacts
          </a>
        </div>

        {/* HAMBURGER MENU (MOBILE) */}
        <div className="ml-auto md:hidden">
          <button onClick={toggleMenu} className="p-2 rounded-md focus:outline-none">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* THEME TOGGLE */}
        <button onClick={toggleTheme} className="p-2 rounded-md focus:outline-none">
          {theme === "light" ? <Moon size={24} /> : <Sun size={24} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <div
        className={`absolute top-16 left-0 w-full bg-white dark:bg-gray-900 transform ${
          isOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        } transition-all duration-300 ease-in-out md:hidden`}
        >
          <a href="/" className="block px-6 py-3 border-b hover:text-blue-500">
            Home
          </a>
          <a href="/gallery" className="block px-6 py-3 border-b hover:text-blue-500">
            Gallery
          </a>
          <a href="/booking" className="block px-6 py-3 border-b hover:text-blue-500">
            Booking
          </a>
          <a href="/blog" className="block px-6 py-3 border-b hover:text-blue-500">
            Blog
          </a>
          <a href="/testimonials" className="block px-6 py-3 border-b hover:text-blue-500">
            Testimonials
          </a>
          <a href="/contacts" className="block px-6 py-3 border-b hover:text-blue-500">
            Contacts
          </a>
        </div>
      )}
    </nav>
  );
}
