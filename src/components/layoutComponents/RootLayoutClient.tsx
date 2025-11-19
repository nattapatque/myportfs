"use client";

import { useState } from "react";
import Topmenu from "../topmenuComponents/Topmenu";
import Slidepage from "../topmenuComponents/Slidepage";

export default function RootLayoutClient({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSlideOpen, setIsSlideOpen] = useState(false);

  const toggleSlide = () => {
    setIsSlideOpen((prev) => !prev);
  };

  return (
    <>
      <Slidepage isOpen={isSlideOpen} onClose={() => setIsSlideOpen(false)}/>
      <Topmenu onBurgerClick={() => setIsSlideOpen(true)} />
      <div>{children}</div>
    </>
  );
}
