"use client";
import { FieldTimeOutlined, LinkOutlined } from "@ant-design/icons";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "KruMaYung",
    type: "Academic Projects",
    year: "2025",
    image: "/images/projects/krumayungLogo.png",
    techStacks: [
      "React",
      "Next.js",
      "TailwindCSS",
      "ESP32",
      "Firebase",
      "EdgeAI",
    ],
    duties: [
      "Engineered ESP32 firmware to transmit real-time environmental telemetry via MQTT.",
      "Developed a Firebase-powered dashboard to visualize live sensor trends and device health.",
      "Implemented a frontend panel displaying Edge AI face recognition logs for smart classroom management.",
    ],
    url: "https://kru-ma-yung-dashboard.vercel.app/",
  },
  {
    title: "HotelVis",
    type: "Academic Projects",
    year: "2023",
    image: "/images/projects/hotelvisLogo.jpeg",
    techStacks: ["React", "Next.js", "TailwindCSS", "Node.js", "MongoDB"],
    duties: [
      "Co-developed a responsive hotel reservation web application using Next.js and React, managing dynamic data display from a MongoDB database.",
      "Bridged the Frontend and Backend by implementing seamless API integration, enabling real-time hotel listings and filtering features.",
      "Executed the project within a software engineering team using Agile methodologies and Git for version control, simulating a real-world SDLC environment.",
    ],
    url: null,
  },
  {
    title: "SimPort (In-Progress)",
    type: "Capstone Projects",
    year: "2025",
    image: "/images/projects/simport.png",
    techStacks: [
      "React",
      "Next.js",
      "TailwindCSS",
      "NestJS",
      "MongoDB",
      "FinnomenaAPI",
    ],
    duties: [
      "Developing a comprehensive Investment Portfolio Simulator (Capstone Project) that empowers users to backtest strategies using real-world market conditions.",
      "Engineered a robust integration with the Finnomena API to fetch and visualize live market data, ensuring accurate, dynamic performance tracking for users.",
      "Orchestrating the development of interactive financial dashboards and data visualization tools within a collaborative Agile environment.",
    ],
    url: null,
  },
];

export default function ProjectsSection() {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center space-y-7">
      <div>
        <div className="flex items-start gap-4 mb-20 header-1">PROJECTS</div>
        <div className="flex flex-row gap-3 flex-wrap justify-center">
          <table className="min-w-[300px]">
            <thead>
              <tr className="mb-3 border-b-2 border-white flex flex-row h-11 text-14">
                <th className="ml-4">#</th>
                <th className="ml-4 flex-grow text-start">Title</th>
                <th className="mr-4 w-[35px]">
                  <FieldTimeOutlined></FieldTimeOutlined>
                </th>
              </tr>
            </thead>

            <tbody>
              {projects.map((item, index) => (
                <tr
                  key={index}
                  onClick={() => setSelectedTab(index)}
                  className="flex flex-row h-12 items-center text-14 hover:bg-white/10"
                >
                  <td
                    className={`ml-4 ${
                      selectedTab === index ? "text-yellow-1" : "text-black-4"
                    }`}
                  >
                    {index + 1}
                  </td>
                  <td className="ml-4 flex-grow text-start">
                    <div className="flex flex-row items-center space-x-2.5">
                      <div className="w-8 h-8 bg-white relative">
                        <Image
                          src={item.image}
                          alt={item.title}
                          width={4000}
                          height={4000}
                          className="w-full h-full overflow-hidden object-left object-cover"
                        />
                      </div>
                      <div className="flex flex-col">
                        <span
                          className={`${
                            selectedTab === index
                              ? "text-yellow-1"
                              : "text-white"
                          }`}
                        >
                          {item.title}
                        </span>
                        <span className="text-black-4 uppercase">
                          {item.type}
                        </span>
                      </div>
                    </div>
                  </td>
                  <td className="mr-4 w-[35px] text-black-4">{item.year}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div
            key={selectedTab}
            className="flex lg:flex-row flex-col max-h-[400px] max-w-[300px] lg:max-w-[730px] gap-10 rounded-3xl border-1 border-yellow-5 shadow-[0_0_15px_rgba(255,195,0,0.5)] p-5 overflow-auto no-scrollbar"
          >
            <div className="text-14">
              <div className="flex mb-[18px] gap-2 items-cente">
                {projects[selectedTab].type}
                {projects[selectedTab].url &&(
                  <a href={projects[selectedTab].url} className="hover:text-yellow-1 hover:scale-125 active:scale-65 duration-150">
                    <LinkOutlined />
                  </a>
                )}
              </div>
              <div className="w-[260px] lg:w-[205px] aspect-square bg-white mb-[18px]">
                <Image
                  src={projects[selectedTab].image}
                  alt={projects[selectedTab].title}
                  width={4000}
                  height={4000}
                  className="w-full h-full overflow-hidden object-left object-cover"
                />
              </div>
              <div className="header-4">{projects[selectedTab].title}</div>
              <div className="uppercase text-black-4">
                {projects[selectedTab].type}
              </div>
            </div>
            <div className="">
              <div className="flex flex-row flex-wrap gap-2.5 mb-2.5">
                {projects[selectedTab].techStacks.map((item, index) => (
                  <div
                    key={index}
                    className="py-[3px] px-2.5 bg-purple-5/30 hover:bg-purple-5/80 rounded-xl"
                  >
                    {item}
                  </div>
                ))}
              </div>
              <ul className="space-y-4">
                {projects[selectedTab].duties.map((duty, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-gray-300 leading-relaxed"
                  >
                    <span className="text-yellow-1 mt-1.5 text-xs">▹</span>
                    <span className="lg:text-16 text-14">{duty}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
