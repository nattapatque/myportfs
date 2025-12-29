"use client";
import { useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Topmenu() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "Home", href: "#hero" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`
      fixed top-0 left-0 w-full z-50 transition-all duration-300 
      ${
        isOpen
          ? "md:bg-gradient-to-b md:from-purple-1 md:via-purple-1/20 md:to-transparent bg-gradient-to-b from-purple-1/20 to-purple-1/20"
          : "bg-gradient-to-b from-purple-1 via-purple-1/20 to-transparent"
      }
    `}
    >
      <div
        className={`max-w-7xl mx-auto px-6 h-[80px] flex items-center justify-between md:justify-center ${
          isOpen
            ? "backdrop-blur-lg border-b-2 border-purple-5 md:backdrop-blur-none md:border-0"
            : ""
        }`}
      >
        <div className="md:hidden button-medium text-xl text-yellow-1">
          Nattapat.
        </div>

        <div className="hidden md:flex items-center space-x-6">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="px-4 py-2 text-white hover:text-yellow-1 hover:scale-110 duration-150 transition-all"
            >
              {item.name}
            </Link>
          ))}

          <a
            href="/Resume.pdf"
            target="_blank"
            className="ml-4 px-5 py-2 border border-yellow-1 text-yellow-1 rounded-md 
              hover:bg-yellow-1 hover:text-black font-bold transition-all duration-300
              hover:shadow-[0_0_15px_rgba(255,195,0,0.5)] backdrop-blur-lg"
          >
            Resume
          </a>
        </div>

        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white text-2xl focus:outline-none hover:text-yellow-1 transition-colors"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      <div
        className={`
        md:hidden absolute top-[80px] left-0 w-full bg-purple-1/20 backdrop-blur-lg border-b border-white/10
        transition-all duration-300 ease-in-out overflow-hidden
        ${isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}
      `}
      >
        <div className="flex flex-col items-center space-y-6 py-8">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="text-xl text-white hover:text-yellow-1 font-medium transition-colors"
            >
              {item.name}
            </Link>
          ))}

          <a
            href="/Resume.pdf"
            target="_blank"
            onClick={() => setIsOpen(false)}
            className="px-8 py-3 border border-yellow-1 text-yellow-1 rounded-md 
              hover:bg-yellow-1 hover:text-black font-bold transition-all"
          >
            Resume
          </a>
        </div>
      </div>
    </nav>
  );
}
