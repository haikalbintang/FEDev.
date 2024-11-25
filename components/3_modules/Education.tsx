import React from "react";
import Image from "next/image";
import { ProgressBar } from "../2_widgets/ProgressBar";
import Section from "../4_templates/Section";

const Education = () => {
  return (
    <Section id="education">
      <div className={`grayscale-component`}>
        <h2 className="text-center text-2xl mb-4">Pendidikan</h2>
        <ol className="grid grid-cols-6 grid-rows-1 mb-5">
          <li className="flex flex-col justify-center items-center text-center gap-2">
            <div className="relative w-28 h-28">
              <Image
                src={"/education/tk.png"}
                alt=""
                width={112}
                height={112}
                priority={false}
              />
            </div>
            <h3>TK Nurul Iman</h3>
          </li>
          <li className="flex flex-col justify-center items-center text-center gap-2">
            <div className="relative w-28 h-28">
              <Image
                src={"/education/sd.png"}
                alt=""
                width={112}
                height={112}
                priority={false}
              />
            </div>
            <h3>SD Putra Jaya</h3>
          </li>
          <li className="flex flex-col justify-center items-center text-center gap-2">
            <div className="relative w-28 h-28">
              <Image
                src={"/education/bangor.png"}
                alt=""
                width={112}
                height={112}
              />
            </div>
            <h3>SMPN 2 Depok</h3>
          </li>
          <li className="flex flex-col justify-center items-center text-center gap-2">
            <div className="relative w-28 h-28">
              <Image
                src={"/education/smansa.png"}
                alt=""
                width={112}
                height={112}
              />
            </div>
            <h3>SMAN 1 Depok</h3>
          </li>
          <li className="flex flex-col justify-center items-center text-center gap-2">
            <div className="relative w-28 h-28">
              <Image
                src={"/education/UI.png"}
                alt=""
                width={112}
                height={112}
              />
            </div>
            <h3>Fakultas Kedokteran UI</h3>
          </li>
          <li className="flex flex-col justify-center items-center text-center gap-1">
            <div className="relative w-28 h-28">
              <Image
                src={"/education/revou.png"}
                alt=""
                width={112}
                height={112}
              />
            </div>
            <h3>
              RevoU Full-Stack <br /> Software Engineering
            </h3>
          </li>
        </ol>
        <ProgressBar />
      </div>
    </Section>
  );
};

export default Education;
