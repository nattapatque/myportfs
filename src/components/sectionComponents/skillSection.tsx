"use client";

import { useState, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { useGLTF, Environment, Float, Html } from "@react-three/drei";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiNestjs,
  SiMongodb,
  SiFirebase,
  SiGit,
  SiGithub,
  SiVercel,
  SiFigma,
  SiAngular,
  SiFlutter,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { IconType } from "react-icons";

type Vector3 = [number, number, number];

interface Skill {
  name: string;
  pos: Vector3;
  color: string;
  icon: IconType;
}

interface SkillsData {
  [key: string]: Skill[];
}

const skillsData: SkillsData = {
  Frontend: [
    { name: "HTML", pos: [-120, -20, 0], color: "#E34F26", icon: SiHtml5 },
    { name: "CSS", pos: [-80, -40, 5], color: "#1572B6", icon: SiCss3 },
    {
      name: "JavaScript",
      pos: [-40, -10, -5],
      color: "#F7DF1E",
      icon: SiJavascript,
    },
    {
      name: "TypeScript",
      pos: [0, -30, 10],
      color: "#3178C6",
      icon: SiTypescript,
    },
    { name: "React", pos: [40, -10, -5], color: "#61DAFB", icon: SiReact },
    { name: "Next.js", pos: [80, -40, 5], color: "#000000", icon: SiNextdotjs },
    {
      name: "Tailwind",
      pos: [120, -20, 0],
      color: "#06B6D4",
      icon: SiTailwindcss,
    },
  ],
  Backend: [
    {
      name: "Node.js",
      pos: [-100, -20, 0],
      color: "#339933",
      icon: SiNodedotjs,
    },
    {
      name: "Express.js",
      pos: [-50, -40, 10],
      color: "#000000",
      icon: SiExpress,
    },
    { name: "NestJS", pos: [0, -10, -5], color: "#E0234E", icon: SiNestjs },
    { name: "MongoDB", pos: [50, -40, 10], color: "#47A248", icon: SiMongodb },
    {
      name: "Firebase",
      pos: [100, -20, 0],
      color: "#FFCA28",
      icon: SiFirebase,
    },
  ],
  Tools: [
    { name: "Git", pos: [-100, -25, 0], color: "#F05032", icon: SiGit },
    { name: "GitHub", pos: [-50, -10, 5], color: "#181717", icon: SiGithub },
    { name: "Vercel", pos: [-10, -40, -5], color: "#000000", icon: SiVercel },
    { name: "Figma", pos: [30, -15, 10], color: "#F24E1E", icon: SiFigma },
  ],
  Other: [
    { name: "Angular", pos: [-60, -20, 0], color: "#DD0031", icon: SiAngular },
    { name: "Flutter", pos: [0, -30, 10], color: "#02569B", icon: SiFlutter },
    { name: "Java", pos: [60, -20, 0], color: "#007396", icon: FaJava },
  ],
};

interface TechBubbleProps {
  name: string;
  pos: Vector3;
  color: string;
  icon: IconType;
}

function TechBubble({ name, pos, color, icon: Icon }: TechBubbleProps) {
  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={10}>
      <group position={pos}>
        <Html transform distanceFactor={100} center>
          <div
            className="
            flex items-center gap-3
            px-6 py-3 
            border border-yellow-1 
            rounded-xl 
            bg-black-3/80 backdrop-blur-md 
            text-white button-medium
            whitespace-nowrap cursor-pointer
           hover:scale-130 hover:shadow-[0_0_20px_rgba(255,195,0,0.6)]
            transition-all duration-300 ease-out
            shadow-[0_0_10px_rgba(255,195,0,0.2)]
          "
          >
            <Icon className="text-2xl" style={{ color: color }} />

            <span className="group-hover:text-black">{name}</span>
          </div>
        </Html>
      </group>
    </Float>
  );
}

interface StageWithBubblesProps {
  activeCategory: string;
}

function StageWithBubbles({ activeCategory }: StageWithBubblesProps) {
  const { scene } = useGLTF("/models/stage.glb");

  const currentSkills = skillsData[activeCategory] || [];

  return (
    <group>
      <primitive object={scene} scale={0.1} position={[0, -50, 0]} />

      {currentSkills.map((skill) => (
        <TechBubble
          key={skill.name}
          name={skill.name}
          pos={skill.pos}
          color={skill.color}
          icon={skill.icon}
        />
      ))}
    </group>
  );
}

export default function SkillSection() {
  const [activeTab, setActiveTab] = useState<string>("Frontend");
  const tabs: string[] = ["Frontend", "Backend", "Tools", "Other"];

  return (
    <div className="w-full h-screen flex flex-col items-center space-y-7 p-20">
      <div className="header-1">SKILLS</div>

      <div className="flex w-full h-[500px] overflow-hidden">
        <Canvas camera={{ position: [0, 0, 100], fov: 80 }}>
          <ambientLight intensity={0.5} />
          <spotLight
            position={[10, 50, 10]}
            angle={0.3}
            penumbra={1}
            intensity={2000}
          />
          <Environment preset="city" />

          <Suspense fallback={null}>
            <StageWithBubbles activeCategory={activeTab} />
          </Suspense>
        </Canvas>
      </div>

      <div className="flex flex-row space-x-8">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`
              button-medium px-8 py-3 border border-yellow-1 rounded-lg transition-all duration-300
              ${
                activeTab === tab
                  ? "bg-yellow-1 text-black font-bold scale-105 shadow-[0_0_15px_rgba(255,195,0,0.5)]"
                  : "text-white hover:bg-white/10"
              }
            `}
          >
            {tab}
          </button>
        ))}
      </div>
    </div>
  );
}
