"use client";

import React, { useEffect, useState } from "react";
import HeroWrapper from "../4_templates/HeroWrapper";
import Image from "next/image";
import styles from "./Hero.module.css";
import { Anta } from "next/font/google";

const anta = Anta({
  subsets: ["latin"],
  weight: "400",
});

const Hero = () => {
  const [roleColor, setRoleColor] = useState("hover:text-white");
  const colors = [
    "hover:text-white",
    "hover:text-orange-500",
    "hover:text-blue-500",
    "hover:text-yellow-500",
    "hover:text-violet-500",
    "hover:text-emerald-500",
    "hover:text-red-500",
    "hover:text-black",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleColor((prevColor) => {
        const nextIndex = (colors.indexOf(prevColor) + 1) % colors.length;
        return colors[nextIndex];
      });
    }, 750);
    return () => clearInterval(interval);
  }, []);

  return (
    <HeroWrapper id="hero">
      <p className="text-center font-bold tracking-widest text-white mt-24">
        ~ Meet me ~
      </p>
      <div className="flex justify-around gap-16 items-center min-h-screen -mt-24 -mb-20">
        <div className="cursor-default flex flex-col justify-around items h-full gap-20">
          <div>
            <h1 className={`${anta.className} text-5xl mb-10`}>
              <span
                className={`text-white text-6xl tracking-widest ${styles["text-shadow-white"]}`}
              >
                Muhammad
              </span>{" "}
              <br />
              <span className="text-yellow-800 text-8xl">Haikal</span>{" "}
              <span className="text-yellow-500 text-8xl">Bintang</span>
            </h1>
            <div className="flex justify-between items-center">
              <h3 className="self-start mt-1">
                <span className="italic text-xl">
                  <span className="text-stone-600">I</span>{" "}
                  <span className="text-stone-500">don{"'"}t</span>{" "}
                  <span className="text-stone-400">know</span>{" "}
                  <span className="text-stone-300">what I do,</span>{" "}
                  <span className="text-white">currently exploring</span>
                </span>{" "}
              </h3>
              <h3 className="text-7xl flex">
                <span className={`text-cyan-500`}>FE</span>
                <br />
                <span className={`${roleColor} transition-colors`}>Dev.</span>
                {/* <span className="text-2xl"> 🤔</span> */}
              </h3>
            </div>
          </div>
          <div className="flex justify-between items-center mb-4 mt-10">
            <h3 className="text-xl mr-2">
              <span className="text-stone-600">Berbasis di</span>{" "}
              <span className="text-orange-400">Depok</span>
              <span className="text-stone-600">,</span>{" "}
              <span className="text-blue-500">Jawa Barat</span>
            </h3>
            <button className="transition-all bg-yellow-500 text-white text-xl py-3 px-6 rounded-lg shadow-lg hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-700 focus:ring-opacity-50 hover:shadow-[0px_0px_15px_rgba(255,255,255,0.8),0px_0px_20px_rgba(255,255,255,0.6)]">
              Colek Saya
            </button>
            <button className="transition-all bg-white text-yellow-500 text-xl py-3 px-6 rounded-lg shadow-lg hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-700 focus:ring-opacity-50 hover:shadow-[0px_0px_15px_rgba(255,255,255,0.8),0px_0px_20px_rgba(255,255,255,0.6)]">
              Kolaborasi
            </button>
          </div>
        </div>
        <div className="rounded-lg h-[500px] w-[350px] overflow-hidden">
          <Image
            src="/hero/final.jpg"
            alt=""
            width={500}
            height={700}
            className="rounded-lg object-cover transform transition duration-500 ease-in-out hover:scale-125"
          />
        </div>
      </div>
    </HeroWrapper>
  );
};

export default Hero;
