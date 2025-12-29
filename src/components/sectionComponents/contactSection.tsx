"use client";

import Wave from "react-wavify";
import { FaGithub, FaInstagram, FaLinkedinIn, FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function ContactSection() {
  
  const contacts = [
    { icon: FaGithub, link: "https://github.com/nattapatque", label: "GitHub" },
    { icon: FaLinkedinIn, link: "https://www.linkedin.com/in/n-q-83a86b287/", label: "LinkedIn" },
    { icon: FaInstagram, link: "https://www.instagram.com/que__nd?igsh=bnFjNmppMXgwa3Fh&utm_source=qr", label: "Instagram" },
    { icon: MdEmail, link: "mailto:nattapat.daengkongkaew@gmail.com", label: "Email" },
    { icon: FaPhoneAlt, link: "tel:+66991905115", label: "Call" },
  ];

  return (
    <div className="relative w-full h-[400px] overflow-hidden md:mt-0 mt-10">
      
      <div className="absolute bottom-0 w-full h-full">
        <Wave
          fill="#ffc300" 
          paused={false}
          options={{
            height: 20,
            amplitude: 30,
            speed: 0.5,
            points: 50,
          }}
          className="h-full w-full"
        />
      </div>

      <div className="absolute inset-0 z-10 flex flex-col items-center justify-end pb-20">
        
        <h2 className="header-2 text-black mb-8 font-bold">
          Get In Touch
        </h2>

        <div className="flex gap-2 md:gap-8">
          {contacts.map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noreferrer"
              aria-label={item.label}
              className="
                group relative
                flex items-center justify-center
                w-14 h-14 md:w-16 md:h-16
                bg-black text-yellow-1
                rounded-full
                shadow-xl
                transition-all duration-300
                hover:-translate-y-2 hover:bg-white hover:text-black hover:scale-110
              "
            >
              <item.icon className="text-2xl md:text-3xl" />
              
              <span className="
                absolute -top-10 opacity-0 group-hover:opacity-100
                text-sm font-bold bg-white text-black px-2 py-1 rounded
                transition-opacity duration-300 pointer-events-none whitespace-nowrap
              ">
                {item.label}
              </span>
            </a>
          ))}
        </div>

        <p className="mt-8 text-black-1/60 text-16">
          © 2025 Nattapat Que. All rights reserved.
        </p>

      </div>
    </div>
  );
}