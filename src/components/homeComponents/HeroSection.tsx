"use client";
import Envelope from "../iconComponents/envelope";
import IG from "../iconComponents/IG";
import Phone from "../iconComponents/Phone";
import Github from "../iconComponents/Github";
import Linkedin from "../iconComponents/Linkedin";
import { motion } from "framer-motion";
import Link from "next/link";

export default function HeroSection() {
  return (
    <div className="flex flex-col w-full h-screen">
      <div className="flex flex-wrap w-full h-full md:px-20 px-5 pt-20">
        <div className="flex flex-1 items-center justify-center">
          <motion.div
            initial={{ opacity: 0, x: -200 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-gray-900 border-l-7 p-5 border-blue1 md:leading-17 leading-14"
          >
            <span className="md:text-3xl text-2xl font-bold">Hello! I'm </span>
            <br />
            <span className="lg:text-6xl md:text-5xl text-4xl text-blue1 font-bold">
              Nattapat Daengkongkaew
            </span>
            <br />
            <div className="md:text-xl text-2lg text-gray-500 leading-8">
              {" "}
              a third-year Computer Engineering student passionate about
              building clean, user-focused web applications with. Always
              learning. Always creating.
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex-col flex-1 items-center justify-center hidden md:flex"
        >
          <div className="relative lg:w-90 lg:h-90 w-60 h-60 overflow-hidden rounded-4xl shadow-2xl bg-blue3 hover:scale-110 duration-150">
            <img
              className="absolute top-10 left-0 w-full hover:scale-115 duration-150"
              src="/images/Me/norway1.png"
              alt="QUE"
            />
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
        className="pb-10 md:pr-10 pr-0 w-full flex flex-row items-center"
      >
        <div className="h-1.5 w-full bg-blue3"></div>
        <div className="text-blue1 flex flex-row gap-5 px-10">
          <Link
            href={"mailto:nattapat.daengkongkaew@gmail.com"}
            className="hover:scale-150 duration-150"
          >
            <Envelope></Envelope>
          </Link>
          <Link
            href={
              "https://www.instagram.com/que__nd?igsh=bnFjNmppMXgwa3Fh&utm_source=qr"
            }
            className="hover:scale-150 duration-150"
          >
            <IG></IG>
          </Link>
          <Link
            href={"tel:+66991905115"}
            className="hover:scale-150 duration-150"
          >
            <Phone></Phone>
          </Link>
          <Link
            href={"https://github.com/nattapatque"}
            className="hover:scale-150 duration-150"
          >
            <Github></Github>
          </Link>
          {/* <Linkedin></Linkedin> */}
        </div>
      </motion.div>
    </div>
  );
}
