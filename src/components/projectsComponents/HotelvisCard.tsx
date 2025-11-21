"use client"

import { motion } from "framer-motion";

export default function HotelvisCard() {
  return (
    <div className="flex flex-col bg-white max-w-[600px] p-10 rounded-2xl shadow-xl md:space-y-10 space-y-5 relative hover:scale-105 duration-150">
      <div className="absolute right-10">
        <span className="flex justify-center w-45 text-[16px] font-medium bg-blue3 text-white rounded-xl shadow-xl">
          University Project
        </span>
      </div>

      <div className="overflow-auto">
        <img src="/images/projects/hotelvis.png" alt="Hotelvis" />
      </div>

      <div className="flex flex-col space-y-4">
        <div className="flex md:text-4xl text-2xl w-full justify-center font-bold">
          Hotelvis
        </div>
        <div className="flex w-full items-center text-gray-700">
          Hotelvis is a hotel reservation web app developed as a first-year
          Software Engineering team project. It features hotel listings from a
          database with basic search and detail pages. I contributed to the UI
          and database integration using React, Next.js, Node.js, and MongoDB.
          The project helped me practice Git-based teamwork and Agile workflows.
          Through it, I gained early experience in building a full software
          development cycle from planning to delivery.
        </div>
      </div>
      <div className="flex flex-row flex-wrap space-x-4 space-y-4 md:justify-end justify-center">
            <div className="h-12 md:h-16">
            <img
                className="w-full h-full"
                src="/images/icons/react2.png"
                alt="React"
            />
            </div>
            <div className="h-12 md:h-16">
            <img
                className="w-full h-full"
                src="/images/icons/nextjs.png"
                alt="Next.js"
            />
            </div>
            <div className="max-w-16 md:max-w-20 h-12 md:h-16">
            <img
                className="w-full h-full"
                src="/images/icons/tailwind.png"
                alt="Tailwind"
            />
            </div>
            <div className="h-12 md:h-16">
            <img
                className="w-full h-full"
                src="/images/icons/nodejs.png"
                alt="NodeJS"
            />
            </div>
            <div className="h-12 md:h-16">
            <img
                className="w-full h-full"
                src="/images/icons/mongoDB.png"
                alt="MongoDB"
            />
            </div>
        </div>
    </div>
  );
}
