"use client";
import Link from "next/link";

import { PlayCircleOutlined } from "@ant-design/icons";

export default function HeroSection() {
  return (
    <div className="w-full h-screen md:p-0 p-4 flex flex-col md:items-center items-start justify-center md:space-y-7 space-y-5">
      <span className="md:header-1 header-2">Hello</span>
      <span className="md:header-1 header-2">
        I'm{" "}
        <span className="text-purple-1 hover:text-yellow-1 duration-150">
          Nattapat
        </span>
        , a Full-Stack Developer.
      </span>
      <div className="max-w-[700px] md:text-24 text-20 md:text-center text-start">
        a third-year Computer Engineering student passionate about building
        clean, user-focused web applications with. Always learning. Always
        creating.
      </div>

      <Link
        href="#skills"
        className="flex items-center justify-center md:px-10 px-8 md:py-6 py-4 border-2 border-yellow-1 rounded-xl cursor-pointer md:hover:scale-120 hover:scale-100 duration-150 hover:shadow-[0_0_15px_rgba(255,195,0,0.5)] bg-transparent active:bg-yellow-1 active:scale-90"
      >
        <div className="flex flex-row items-center justify-center space-x-3">
          <PlayCircleOutlined className="text-[32px] !text-yellow-1" />
          <div className="button-medium">Meet Your Next Favorite</div>
        </div>
      </Link>
    </div>
  );
}
