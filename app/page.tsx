"use client";

import { useEffect, useState } from "react";

import Education from "@/components/3_modules/Education";
import Hero from "@/components/3_modules/Hero";
import Project from "@/components/3_modules/Project";
import TechStack from "@/components/3_modules/TechStack";
import Main from "@/components/4_templates/Main";
import classNames from "classnames";

export default function TestFlashLight() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [flashlightSize, setFlashlightSize] = useState(150);

  const MAX_WIDTH = 1280;

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX + window.scrollX - 20,
        y: e.clientY + window.scrollY - 30,
      });
    };

    const handleResize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth > MAX_WIDTH) {
        const newSize = (screenWidth / MAX_WIDTH) * 150;
        setFlashlightSize(newSize);
      } else {
        setFlashlightSize(150);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="flex items-center justify-center min-h-screen bg-zinc-800">
      <div className="relative w-full overflow-hidden mx-auto">
        {/* Grayscale Content */}
        <div
          className={classNames(
            "absolute inset-0 z-10 filter grayscale pointer-events-none"
          )}
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}px ${
              mousePosition.y
            }px, transparent ${flashlightSize}px, rgba(0, 0, 0, 1) ${
              flashlightSize + 30
            }px)`,
            maskImage: `radial-gradient(circle at ${mousePosition.x}px ${
              mousePosition.y
            }px, transparent ${flashlightSize}px, rgba(0, 0, 0, 1) ${
              flashlightSize + 30
            }px)`,
            WebkitMaskImage: `radial-gradient(circle at ${mousePosition.x}px ${
              mousePosition.y
            }px, transparent ${flashlightSize}px, rgba(0, 0, 0, 1) ${
              flashlightSize + 30
            }px)`,
          }}
        >
          <div className="max-w-[1200px] mx-auto">
            <Main>
              <Hero />
              <Education />
              <TechStack />
              <Project />
            </Main>
          </div>
        </div>

        {/* Colored Content */}
        <div className="relative z-0 bg-zinc-700">
          <div className="max-w-[1200px] mx-auto">
            <Main>
              <Hero />
              <Education />
              <TechStack />
              <Project />
            </Main>
          </div>
        </div>
      </div>
    </div>
  );
}
