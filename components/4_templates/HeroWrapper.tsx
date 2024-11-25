import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
  id: string;
}

const HeroWrapper = ({ children, id }: Props) => {
  return (
    <section id={id} className="py-5">
      {children}
    </section>
  );
};

export default HeroWrapper;
