"use client";
import Link from "next/link";

import { PlayCircleOutlined } from "@ant-design/icons";

export default function HeroSection() {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center space-y-7">
      <span className="header-1">Hello</span>
      <span className="header-1">
        I'm{" "}
        <span className="text-purple-1 hover:text-yellow-1 duration-150">
          Nattapat
        </span>
        , a Full-Stack Developer.
      </span>
      <div className="max-w-[700px] text-24 text-center">
        a third-year Computer Engineering student passionate about building
        clean, user-focused web applications with. Always learning. Always
        creating.
      </div>

      <Link href="#skills" className="flex items-center justify-center px-10 py-6 border-2 border-yellow-1 rounded-xl cursor-pointer hover:scale-120 duration-150 hover:shadow-[0_0_15px_rgba(255,195,0,0.5)] bg-transparent active:bg-yellow-1 active:scale-90">
        <div className="flex flex-row items-center justify-center space-x-3">
          <PlayCircleOutlined className="text-[32px] !text-yellow-1"/>
          <div className="button-medium">Meet Your Next Favorite</div>
        </div>
      </Link>
    </div>
  );
}
