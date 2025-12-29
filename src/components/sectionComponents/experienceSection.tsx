"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const experiences = [
  {
    company: "Botnoi",
    role: "Data Scientist (Internship)",
    date: "June - July 2025",
    url: "https://botnoigroup.com/",
    duties: [
      "Engineered tagging flows using Google Tag Manager (GTM) and GA4, collaborating with UX/UI and Dev teams to optimize tracking accuracy and user behavior analysis.",
      "Applied Machine Learning, segmentation, and recommendation systems to build predictive models for the Sleep Health Analysis project.",
      "Defined product requirements and led market research for the Nakumanager application during the Bolt Hackathon, bridging technical solutions with business needs.",
    ],
  },
  {
    company: "Ayodia",
    role: "Programmer (Internship)",
    date: "June - July 2024",
    url: "https://www.ayodiacompany.com/",
    duties: [
      "Developed a remote Vital Sign monitoring app using Flutter, integrating Bluetooth Low Energy (BLE) to stream and visualize real-time health data from medical devices.",
      "Overcame emulator limitations by establishing a rigorous physical device testing workflow, ensuring reliable communication between the app and medical hardware.",
      "Mastered Flutter and Bluetooth protocols from scratch within a tight timeframe to deliver a functional solution for remote patient monitoring.",
    ],
  },
];

export default function ExperienceSection() {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-center md:space-y-7 space-y-5 md:p-0 p-4">
      <div>
        <div className="flex items-start gap-4 mb-20 md:header-1 header-2">EXPERIENCE</div>

        <div className="flex flex-col md:flex-row gap-8">
          <div className="relative flex md:flex-col overflow-x-auto md:overflow-visible border-l-2 md:border-l-2 border-white/10 md:min-w-[200px]">
            {experiences.map((exp, index) => (
              <button
                key={index}
                onClick={() => setSelectedTab(index)}
                className={`
                    relative px-5 py-3 text-left md:button-medium button-small transition-all duration-300
                    whitespace-nowrap
                    ${
                      selectedTab === index
                        ? "text-yellow-1 bg-white/5"
                        : "text-gray-400 hover:text-white hover:bg-white/5"
                    }
                `}
              >
                {selectedTab === index && (
                  <motion.div
                    layoutId="activeTabIndicator"
                    className="absolute bg-yellow-1
                        bottom-0 left-0 h-[2px] w-full 
                        md:bottom-auto md:top-0 md:left-[-2px] md:h-full md:w-[2px]"
                  />
                )}
                {exp.company}
              </button>
            ))}
          </div>

          <div className="flex-1 min-h-[300px] max-w-[532px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="md:header-3 header-4 mb-1">
                  {experiences[selectedTab].role}{" "}
                  <span className="text-yellow-1">
                    @{" "}
                    <a
                      href={experiences[selectedTab].url}
                      target="_blank"
                      rel="noreferrer"
                      className="hover:underline offset-4"
                    >
                      {experiences[selectedTab].company}
                    </a>
                  </span>
                </h3>

                <p className="md:text-16 text-14 mb-6">{experiences[selectedTab].date}</p>

                <ul className="space-y-4">
                  {experiences[selectedTab].duties.map((duty, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-gray-300 leading-relaxed"
                    >
                      <span className="text-yellow-1 mt-1.5 text-xs">▹</span>
                      <span className="md:text-16 text-14">{duty}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
