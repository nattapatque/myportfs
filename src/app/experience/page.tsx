"use client";
import { useState } from "react";
import AyodiaCard from "@/src/components/experienceComponents/AyodiaCard";
import BotnoiCard from "@/src/components/experienceComponents/BotnoiCard";
import { motion } from "framer-motion";

export default function Page() {
  const [openCard, setOpenCard] = useState<string | null>(null);

  return (
    <div className="flex flex-col py-30 md:px-20 px-10 md:space-y-20 space-y-10">
      <div className="flex md:text-6xl text-4xl text-blue1 font-bold md:w-[400px] md:h-[100px] h-[62px] w-[250px] md:border-b-5 border-b-4">
        Experience
      </div>
      <div className="flex flex-col md:space-y-10 space-y-4">
        <AyodiaCard
          open={openCard === "ayodia"}
          onOpen={() => setOpenCard(openCard === "ayodia" ? null : "ayodia")}
        />

        <BotnoiCard
          open={openCard === "botnoi"}
          onOpen={() => setOpenCard(openCard === "botnoi" ? null : "botnoi")}
        />
      </div>
    </div>
  );
}
