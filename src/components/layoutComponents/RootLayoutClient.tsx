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
      <Topmenu onBurgerClick={() => setIsSlideOpen(true)} />
      <Slidepage isOpen={isSlideOpen} onClose={() => setIsSlideOpen(false)}/>
      <div>{children}</div>
    </>
  );
}
