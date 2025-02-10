"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedTheme = localStorage.getItem("theme") || "light";
      setTheme(storedTheme);
    }
  }, []);

  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-center text-lightText dark:text-darkText bg-gradient-to-r from-aqua-200 via-blue-100 to-blue-200 dark:from-gray-900 dark:via-black dark:to-gray-800 shadow-md transition-all duration-500
      ${theme === "light"
        // ? "bg-gradient-to-br from-gray-100 via-white to-gray-400"
        // : "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700"
      }`}
    >
      <h1 className="text-5xl font-bold text-center">Salman Arts Photography</h1>
      <p className="text-lg mt-4 text-center">I am a professional photographer based in Kisumu, Kenya. I capture your beautiful moments, telling your stories through beautiful shots.
      </p>

        <h2 className="text-3xl font-bold mb-4 text-lightText dark:text-darkText">Our Services</h2>
        <ul className="max-w-md mx-auto list-disc text-left text-xl text-lightText dark:text-darkText">
          <li>Personal Outdoor Photos</li>
          <li>Group Outdoor Photos</li>
          <li>Weddings</li>
          <li>Nyombo / Ruracio / Koito (Traditional Weddings)</li>
          <li>Birthdays</li>
          <li>Baby Showers</li>
          <li>Funerals</li>
          <li>Product Photography for Business</li>
        </ul>

      <div className="flex flex-wrap gap-4 mt-6">
          <a
            href="/gallery"
            className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all"
          >
            Explore
          </a>

          <a
            href="/booking"
            className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all"
          >
            Reserve
          </a>
      </div>

    </div>
  );
}
