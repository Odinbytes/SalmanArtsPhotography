"use client";
import { useState, useEffect } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  const [theme, setTheme] = useState("light");

  // Load theme from localStorage & apply it
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") || "light";
    setTheme(storedTheme);
    document.documentElement.classList.add(storedTheme);
  }, []);

  // Apply theme class on state change
  useEffect(() => {
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased transition-colors duration-300 
        bg-lightBg dark:bg-darkBg text-lightText dark:text-darkText`}
      >
        <Navbar theme={theme} setTheme={setTheme} />
        <main className="items-center justify-center min-h-screen text-center bg-gradient-to-r from-aqua-200 via-blue-100 to-blue-200 dark:from-gray-900 dark:via-black dark:to-gray-800 shadow-md transition-all duration-500">
          {children}
        </main>
      </body>
    </html>
  );
}
