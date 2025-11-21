"use client";
import IG from "../iconComponents/IG";
import Phone from "../iconComponents/Phone";
import Github from "../iconComponents/Github";
import Linkedin from "../iconComponents/Linkedin";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <div className="flex flex-col w-full h-screen">
      <div className="flex flex-wrap w-full h-full px-20 pt-20">
        <div className="flex flex-1 items-center justify-center">
          <motion.div
            initial={{ opacity: 0, x: -200 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="font-bold text-gray-900 border-l-7 p-5 border-blue1 md:leading-17 leading-14"
          >
            <span className="md:text-3xl text-2xl">Hello! I'm </span>
            <br />
            <span className="md:text-5xl text-4xl text-blue1">
              Nattapat Daengkongkaew
            </span>
            <br />
            <span className="md:text-3xl text-2xl text-gray-500">
              {" "}
              Frontend Developer
            </span>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex flex-col flex-1 hover:scale-110 duration-150 items-center justify-center"
        >
          <div className="relative md:w-90 md:h-90 w-75 h-75 overflow-hidden rounded-4xl shadow-2xl bg-blue3">
            <img
              className="absolute top-10 left-0 w-full"
              src="/images/Me/norway1.png"
              alt="QUE"
            />
          </div>
        </motion.div>
      </div>

      <div className="pb-10 px-20 w-full flex flex-col md:items-end items-center gap-5">
        <div className="text-blue2 md:text-xl text-lg flex">
          nattapat.daengkongkaew@gmail.com
        </div>
        <div className="text-blue1 flex flex-row gap-5">
          <IG></IG>
          <Phone></Phone>
          <Github></Github>
          <Linkedin></Linkedin>
        </div>
      </div>
    </div>
  );
}
