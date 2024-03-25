import React from "react";

interface WelcomeProps {
  content: { header: string; body: string };
}

const Welcome = ({ content }: WelcomeProps) => {
  return (
    <section className="padding-y text-center box">
      <h1 className="head-text">{content.header}</h1>

      <div className="info-text">
        <p>{content.body}</p>
      </div>
    </section>
  );
};

export default Welcome;
