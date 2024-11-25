import React from "react";
import Section from "../4_templates/Section";
import Link from "next/link";
import Image from "next/image";

const Project = () => {
  const projects = [
    {
      id: 1,
      href: "https://github.com/haikalbintang/tht_nutech",
      src: "/project/simsppob.png",
      title: "SIMS PPOB (Personal)",
    },
    {
      id: 1,
      href: "https://github.com/haikalbintang/TodoApp-We-Did",
      src: "/project/todoapp.png",
      title: "TodoApp-WeDid (Personal)",
    },
    {
      id: 1,
      href: "https://github.com/DewaSRY/yakuse_be",
      src: "/project/yakuse.png",
      title: "Yakuse (Group as BE)",
    },
    {
      id: 1,
      href: "https://github.com/haikalbintang/Masakin_FE",
      src: "/project/masakin.png",
      title: "Masakin (Group as FE)",
    },
    {
      id: 1,
      href: "https://github.com/amandasatya/Health-Hub",
      src: "/project/healthub.png",
      title: "HealtHub (Group as FE)",
    },
    {
      id: 1,
      href: "https://github.com/haikalbintang/quranesia",
      src: "/project/quranesia.png",
      title: "Quranesia (Personal)",
    },
  ];
  return (
    <>
      {" "}
      <p className="text-center font-bold tracking-widest text-white">~~~</p>
      <Section id="project">
        <h1 className="text-center text-2xl mb-4">Proyek-proyek</h1>
        <ul className="mb-16">
          <div className="grid grid-cols-2 grid-rows-3 mb-5 ">
            {projects.map((project) => (
              <li key={project.src} className="my-4 mx-auto">
                <Link href={project.href}>
                  <div className="flex flex-col justify-center">
                    <h3 className="text-lg my-1">{project.title}</h3>
                    <Image
                      src={project.src}
                      alt={project.title}
                      width={500}
                      height={250}
                      className="rounded-lg"
                    />
                  </div>
                </Link>
              </li>
            ))}
          </div>
        </ul>
      </Section>
      <p className="text-center font-bold tracking-widest text-white">
        ~~~ The End ~~~
      </p>
      <div className="h-20"></div>
    </>
  );
};

export default Project;
