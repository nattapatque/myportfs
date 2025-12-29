"use client";

import { useState, Suspense, useEffect } from "react";
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
    { name: "HTML", pos: [-50, 20, 0], color: "#E34F26", icon: SiHtml5 },
    { name: "CSS", pos: [0, 30, 5], color: "#1572B6", icon: SiCss3 },
    {
      name: "JavaScript",
      pos: [50, 20, 0],
      color: "#F7DF1E",
      icon: SiJavascript,
    },
    {
      name: "TypeScript",
      pos: [0, 0, 5],
      color: "#3178C6",
      icon: SiTypescript,
    },
    { name: "React", pos: [-50, -30, 5], color: "#61DAFB", icon: SiReact },
    { name: "Next.js", pos: [0, -40, 0], color: "#ffffff", icon: SiNextdotjs },
    {
      name: "Tailwind",
      pos: [40, -20, 5],
      color: "#06B6D4",
      icon: SiTailwindcss,
    },
  ],
  Backend: [
    {
      name: "Node.js",
      pos: [-50, 20, 0],
      color: "#339933",
      icon: SiNodedotjs,
    },
    { name: "Express.js", pos: [0, 0, 5], color: "#ffffff", icon: SiExpress },
    { name: "NestJS", pos: [50, 20, 0], color: "#E0234E", icon: SiNestjs },
    {
      name: "MongoDB",
      pos: [-50, -30, 5],
      color: "#47A248",
      icon: SiMongodb,
    },
    {
      name: "Firebase",
      pos: [40, -20, 5],
      color: "#FFCA28",
      icon: SiFirebase,
    },
  ],
  Tools: [
    { name: "Git", pos: [-30, 20, 0], color: "#F05032", icon: SiGit },
    { name: "GitHub", pos: [15, 0, 5], color: "#ffffff", icon: SiGithub },
    { name: "Vercel", pos: [-30, -35, 5], color: "#ffffff", icon: SiVercel },
    { name: "Figma", pos: [30, -35, 0], color: "#F24E1E", icon: SiFigma },
  ],
  Other: [
    { name: "Angular", pos: [-30, 10, 0], color: "#DD0031", icon: SiAngular },
    { name: "Flutter", pos: [30, 0, 5], color: "#02569B", icon: SiFlutter },
    { name: "Java", pos: [0, -35, 0], color: "#007396", icon: FaJava },
  ],
};

interface TechBubbleProps {
  name: string;
  pos: Vector3;
  color: string;
  icon: IconType;
  isMobile: boolean;
}

function TechBubble({
  name,
  pos,
  color,
  icon: Icon,
  isMobile,
}: TechBubbleProps) {
  const adjustedPos: Vector3 = isMobile ? [pos[0] * 0.6, pos[1], pos[2]] : pos;

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={10}>
      <group position={pos}>
        <Html transform distanceFactor={isMobile ? 90 : 100} center>
          <div
            className="
            flex items-center gap-3
            md:px-6 px-4 md:py-3 py-2 
            border border-yellow-1 
            rounded-xl 
            bg-black-1/80 backdrop-blur-md 
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
  isMobile: boolean;
}

function StageWithBubbles({ activeCategory, isMobile }: StageWithBubblesProps) {
  const { scene } = useGLTF("/models/stage.glb");

  const currentSkills = skillsData[activeCategory] || [];

  return (
    <group>
      <primitive
        object={scene}
        scale={isMobile ? 0.08 : 0.1}
        position={[0, -50, 0]}
      />

      {currentSkills.map((skill) => (
        <TechBubble
          key={skill.name}
          name={skill.name}
          pos={skill.pos}
          color={skill.color}
          icon={skill.icon}
          isMobile={isMobile}
        />
      ))}
    </group>
  );
}

export default function SkillSection() {
  const [activeTab, setActiveTab] = useState<string>("Frontend");
  const tabs: string[] = ["Frontend", "Backend", "Tools", "Other"];

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="w-full min-h-screen flex flex-col items-center md:space-y-7 space-y-5 md:p-20 p-10">
      <div className="md:header-1 header-2">SKILLS</div>

      <div className="flex w-full md:h-[500px] h-[400px] overflow-hidden">
        <Canvas camera={{ position: [0, 0, 100], fov: isMobile ? 110 : 80 }}>
          <ambientLight intensity={0.5} />
          <spotLight
            position={[10, 50, 10]}
            angle={0.3}
            penumbra={1}
            intensity={2000}
          />
          <Environment preset="city" />

          <Suspense fallback={null}>
            <StageWithBubbles activeCategory={activeTab} isMobile={isMobile} />
          </Suspense>
        </Canvas>
      </div>

      <div className="flex flex-row flex-wrap justify-center md:gap-8 gap-3 w-full">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`
              button-medium md:px-8 px-5 md:py-3 py-2 border border-yellow-1 rounded-lg transition-all duration-300
              ${
                activeTab === tab
                  ? "bg-yellow-1 text-black-1 button-medium hover:scale-105 shadow-[0_0_15px_rgba(255,195,0,0.5)]"
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
