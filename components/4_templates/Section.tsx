import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
  id: string;
}

const Section = ({ children, id }: Props) => {
  return (
    <section id={id} className="pt-24 relative text-white">
      {children}
    </section>
  );
};

export default Section;
