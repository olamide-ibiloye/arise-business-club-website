import Link from "next/link";
import React from "react";

interface JoinNowProps {
  content: {
    header: string;
    subHeader: string;
    body: string;
    buttonName: string;
  };
}

const JoinNow = ({ content }: JoinNowProps) => {
  const { header, subHeader, body, buttonName } = content;

  return (
    <section className="padding-y box text-center">
      <h2 className="head-text">{header}</h2>

      <hr className="pb-4" />

      <div className="leading-relaxed text-center">
        <p className="sub-text">{subHeader}</p>

        <p className="info-text">{body}</p>

        <Link className="arise-button w-[200px] my-10" href="#contact-us">
          {buttonName}
        </Link>
      </div>
    </section>
  );
};

export default JoinNow;
