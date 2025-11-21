"use client";
import { useState } from "react";

interface ExperienceCardProps {
  open: boolean;
  onOpen: () => void;
}

export default function AyodiaCard({ open, onOpen }: ExperienceCardProps) {

  return (
    <div
      onClick={onOpen}
      className={`
        flex flex-row flex-wrap duration-300 rounded-2xl shadow-xl p-10 hover:cursor-pointer hover:scale-105 space-y-4 overflow-hidden
        ${
          open
            ? "w-full bg-blue1 text-white scale-105"
            : "max-w-[1000px] bg-white text-black"
        }
      `}
    >
      <div className="flex flex-col max-w-[500px] space-y-4">
        <div className="flex md:text-4xl text-2xl font-semibold">
          PROGRAMMER - Ayodia
        </div>
        {open && (
          <div className="flex flex-col space-y-4 animate-fadeIn">
            <div className="w-full flex flex-row items-center space-x-4">
              <div className="w-2 h-2 bg-yellow1 rounded-xl"></div>
              <div className="font-semibold md:text-[16px] text-[14px]">
                June 2024 - July 2024
                <span className="ml-2 inline-block mix-w-32 text-center md:text-[16px] text-[14px] font-medium bg-blue3 text-white rounded-xl px-4">
                  Internship
                </span>
              </div>
            </div>
            <div className="w-full flex flex-row items-center space-x-4">
              <div className="md:text-[16px] text-[14px]">
                I developed the web platform using Angular and the mobile
                application using Flutter. My work focused on implementing
                Bluetooth auto-connection, device communication, and real-time
                vital-sign data visualization. I also handled testing on real
                Android devices and optimized the workflow to ensure smooth
                interaction between the medical device and the app.
              </div>
            </div>
            <div className="flex flex-row flex-wrap justify-end">
              <div className="w-12 h-12 md:w-16 md:h-16">
                <img
                  className="w-full h-full"
                  src="/images/icons/dart.png"
                  alt="Dart"
                />
              </div>
              <div className="w-12 h-12 md:w-16 md:h-16">
                <img
                  className="w-full h-full"
                  src="/images/icons/angular.png"
                  alt="Angular"
                />
              </div>
              <div className="w-12 h-12 md:w-16 md:h-16">
                <img
                  className="w-full h-full"
                  src="/images/icons/bluetooth.png"
                  alt="Bluetooth"
                />
              </div>
            </div>
          </div>
        )}
      </div>

      {open && (
        <div className="flex flex-grow justify-center animate-fadeIn overflow-auto">
          <div className="flex md:w-[400px] w-[300px]">
            <img
              className="w-full h-full shadow-2xl"
              src="/images/Experience/VitalSign.png"
              alt="VitalSign"
            />
          </div>
        </div>
      )}
    </div>
  );
}
