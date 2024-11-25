import React from "react";
import Section from "../4_templates/Section";
import Image from "next/image";
import { Separator } from "../ui/separator";

const TechStack = () => {
  const category1 = [
    {
      id: 1,
      src: "/techstack/html5.svg",
      label: "HTML",
    },
    {
      id: 1,
      src: "/techstack/css3.svg",
      label: "CSS",
    },
    {
      id: 3,
      src: "/techstack/js.svg",
      label: "JavaScript",
    },
    {
      id: 4,
      src: "/techstack/typescript/typescript.svg",
      label: "TypeScript",
    },
    {
      id: 1,
      src: "/techstack/reactjs/reactjs.svg",
      label: "React",
    },
    {
      id: 1,
      src: "/techstack/vitejs/vitejs.svg",
      label: "Vite",
    },
    {
      id: 2,
      src: "/techstack/nextjs2/nextjs2.svg",
      label: "NEXT.js",
    },
    {
      id: 1,
      src: "/techstack/tailwindcss/tailwindcss.svg",
      label: "Tailwind CSS",
    },
    {
      id: 1,
      src: "/techstack/nodejs/nodejs.svg",
      label: "Node.js",
    },
    {
      id: 1,
      src: "/techstack/npm2/npm2.svg",
      label: "NPM",
    },
    {
      id: 1,
      src: "/techstack/shadcnui/shadcnui.svg",
      label: "shadcn",
    },
    {
      id: 1,
      src: "/techstack/reactrouter/reactrouter.svg",
      label: "React Router",
    },
    {
      id: 1,
      src: "/techstack/redux/redux.svg",
      label: "Redux",
    },
    {
      id: 1,
      src: "/techstack/python/python.svg",
      label: "Python",
    },
    {
      id: 1,
      src: "/techstack/postman/postman.svg",
      label: "Postman",
    },
    {
      id: 1,
      src: "/techstack/supabase/supabase.svg",
      label: "Supabase",
    },
  ];

  const category2 = [
    {
      id: 1,
      src: "/techstack/vscode/vscode.svg",
      label: "VS Code",
    },
    {
      id: 1,
      src: "/techstack/prettier/prettier.svg",
      label: "Prettier",
    },
    {
      id: 1,
      src: "/techstack/chrome/chrome.svg",
      label: "Chrome",
    },
    {
      id: 1,
      src: "/techstack/edge.svg",
      label: "Edge",
    },
    {
      id: 1,
      src: "/techstack/git.svg",
      label: "Git",
    },
    {
      id: 1,
      src: "/techstack/github.svg",
      label: "GitHub",
    },
    {
      id: 1,
      src: "/techstack/figma.svg",
      label: "Figma",
    },
    {
      id: 1,
      src: "/techstack/canva/canva.svg",
      label: "Canva",
    },
    {
      id: 1,
      src: "/techstack/markdown/markdown.svg",
      label: "Markdown",
    },
    {
      id: 1,
      src: "/techstack/openai/openai.svg",
      label: "OpenAI",
    },
    {
      id: 1,
      src: "/techstack/insomnia.svg",
      label: "Insomnia",
    },
    {
      id: 1,
      src: "/techstack/swagger/swagger.svg",
      label: "Swagger",
    },
    {
      id: 1,
      src: "/techstack/netlify2/netlify2.svg",
      label: "Netlify",
    },
    {
      id: 1,
      src: "/techstack/jira.svg",
      label: "Jira",
    },
    {
      id: 1,
      src: "/techstack//miro/miro.svg",
      label: "Miro",
    },
    {
      id: 1,
      src: "/techstack/slack/slack.svg",
      label: "Slack",
    },
  ];

  const category3 = [
    {
      id: 1,
      src: "/techstack/docker.svg",
      label: "Docker",
    },
    {
      id: 1,
      src: "/techstack/electron.svg",
      label: "Electron.js",
    },
    {
      id: 1,
      src: "/techstack/flask.svg",
      label: "Flask",
    },
    {
      id: 1,
      src: "/techstack/jest.svg",
      label: "Jest",
    },
    {
      id: 1,
      src: "/techstack/mongodb/mongodb.svg",
      label: "MongoDB",
    },
    {
      id: 1,
      src: "/techstack/mysql/mysql.svg",
      label: "MySQL",
    },
    {
      id: 1,
      src: "/techstack/php/php.svg",
      label: "PHP",
    },
    {
      id: 1,
      src: "/techstack/postgresql/postgresql.svg",
      label: "PostgreSQL",
    },
    {
      id: 1,
      src: "/techstack/reactquery/reactquery.svg",
      label: "React Query",
    },
    {
      id: 1,
      src: "/techstack/sass/sass.svg",
      label: "SASS",
    },
    {
      id: 1,
      src: "/techstack/threejs/threejs.svg",
      label: "Three.js",
    },
    {
      id: 1,
      src: "/techstack/zod/zod.svg",
      label: "Zod",
    },
  ];

  return (
    <>
      {/* <Section id={"techStack2"}>
        <h1 className="text-center text-2xl">Teknologi</h1>
        <h2>Proficient: Vercel, Axios, RESTful API</h2>
        <h2>Familiar: FastAPI, Poetry, pytest</h2>
        <h2>Others: GIMP</h2>
      </Section> */}
      <p className="text-center font-bold tracking-widest text-white">~~~</p>
      <Section id={"techStack"}>
        <h2 className="text-center text-2xl my-2">Teknologi</h2>
        <h3 className="text-center text-xl my-2 pt-8">Mahir</h3>
        <div className="flex w-full">
          <div className="flex flex-col w-1/2">
            <h4 className="text-center text-lg my-2">Utama</h4>
            <ul className="flex flex-wrap">
              {category1.map((item) => (
                <li
                  key={item.label}
                  className="flex flex-col w-1/4 justify-center items-center gap-2 my-2"
                >
                  <Image
                    src={item.src}
                    alt={item.label}
                    width={60}
                    height={60}
                    className=""
                  />
                  <p>{item.label}</p>
                </li>
              ))}
            </ul>
          </div>
          <Separator
            orientation="vertical"
            className="w-[2px] h-[416px] mt-12 mx-2"
          />
          <div className="flex flex-col w-1/2">
            <h4 className="text-center text-lg my-2">Lainnya</h4>
            <ul className="flex flex-wrap">
              {category2.map((item) => (
                <li
                  key={item.label}
                  className="flex flex-col w-1/4 justify-center items-center gap-2 my-2"
                >
                  <Image
                    src={item.src}
                    alt={item.label}
                    width={60}
                    height={60}
                    className=""
                  />
                  <p>{item.label}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <h3 className="text-center text-xl my-2 pt-8">Familiar</h3>
        <div className="flex w-full">
          <div className="w-1/6"></div>
          <div className="flex flex-col w-2/3">
            <ul className="flex flex-wrap">
              {category3.map((item) => (
                <li
                  key={item.label}
                  className="flex flex-col w-1/6 justify-center items-center gap-2 my-2"
                >
                  <Image
                    src={item.src}
                    alt={item.label}
                    width={60}
                    height={60}
                    className=""
                  />
                  <p>{item.label}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-1/6"></div>
        </div>
      </Section>
      <div className="h-20"></div>
    </>
  );
};

export default TechStack;
