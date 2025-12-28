"use client";
import Link from "next/link";

export default function Topmenu() {
  const menuItems = [
    { name: "Home", href: "#hero" }, 
    { name: "Skills", href: "#skills" }, 
    { name: "Experience", href: "#experience" }, 
    { name: "Projects", href: "#projects" }, 
    { name: "Contact", href: "#contact"},
  ];
  return (
    <nav className="absolute top-0 flex items-center justify-center space-x-6 bg-linear-to-b from-purple-1 to-purple-1/0 w-full h-[80px]">
      {menuItems.map((item) => (
        <Link 
          key={item.name} 
          href={item.href}
          className="px-6 py-3 button-small text-white rounded-lg hover:text-yellow-1 hover:scale-130 duration-150 cursor-pointer"
        >
          {item.name}
        </Link>
      ))}
    </nav>
  );
}
