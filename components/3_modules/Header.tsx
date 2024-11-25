import Image from "next/image";
import React from "react";
import { Separator } from "@/components/ui/separator";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import Link from "next/link";

const Header = () => {
  return (
    <div className="w-full fixed top-0 bg-white z-50">
      <header className="flex justify-between items-center py-2 px-20">
        <Link href={"/test-flashlight"}>
          <Image
            src={"/HBLogo.png"}
            alt=""
            width={100}
            height={100}
            className="h-auto w-auto"
          />
        </Link>
        <div className="flex w-full max-w-80 ml-60 items-center space-x-2">
          <Input type="text" placeholder="Cari di sini..." />
          <Button type="submit">Cari</Button>
        </div>
        <nav className="flex justify-center items-center h-8 space-x-4 ml-2">
          <Link href={"#hero"}>Kenalan denganku</Link>
          <Separator className="w-[2px]" orientation="vertical" />
          <Link href={"#education"}>Pendidikan</Link>
          <Separator className="w-[2px]" orientation="vertical" />
          <Link href={"#techStack"}>Teknologi</Link>
          <Separator className="w-[2px]" orientation="vertical" />
          <Link href={"#project"}>Proyek-proyek</Link>
        </nav>
      </header>
      <Separator className="h-[2px]" />
    </div>
  );
};

export default Header;
