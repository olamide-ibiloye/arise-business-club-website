import React from "react";
import { PortableText } from "@portabletext/react";

interface DescriptionProps {
  content: { header: string; body: any };
}

const Description = ({ content }: DescriptionProps) => {
  const { header, body } = content;

  return (
    <section className="padding bg-base-200 text-base-content box text-center">
      <h2 className="head-text">{header}</h2>

      <div className="prose text-center md:text-left info-text min-w-full">
        <PortableText value={body} />
      </div>
    </section>
  );
};

export default Description;
