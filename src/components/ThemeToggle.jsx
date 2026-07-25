"use client";
import React, { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {

  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    try {
      const savedTheme = localStorage.getItem("theme");
      const hasDarkClass = document.documentElement.classList.contains("dark");

      if (savedTheme) {
        const dark = savedTheme === "dark";
        setIsDark(dark);
        if (dark && !hasDarkClass) document.documentElement.classList.add("dark");
        if (!dark && hasDarkClass) document.documentElement.classList.remove("dark");
      } else {
        setIsDark(hasDarkClass);
      }
    } catch (e) {
    }
  }, []);

  const toggleTheme = () => {
    try {
      const willBeDark = !document.documentElement.classList.contains("dark");
      document.documentElement.classList.toggle("dark", willBeDark);
      localStorage.setItem("theme", willBeDark ? "dark" : "light");
      setIsDark(willBeDark);
    } catch (e) {
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2.5 rounded-full border border-zinc-700 bg-zinc-800 text-amber-400 hover:scale-110 transition-all duration-200 cursor-pointer shadow-lg pointer-events-auto z-50"
      aria-label="Alternar Tema"
      type="button"
    >
      {isDark ? <Moon size={20} className="text-amber-400" /> : <Sun size={20} className="text-zinc-400" />}
    </button>
  );
}