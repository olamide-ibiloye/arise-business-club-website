import React from "react";

interface NewsProps {
  content: { header: string; subHeader: string; body: string };
}

const News = ({ content }: NewsProps) => {
  return (
    <section id="news" className="padding-y box text-center">
      <h2 className="head-text">{content.header}</h2>

      <div className="text-center">
        <p className="sub-text">{content.subHeader}</p>

        <p className="info-text">{content.body}</p>
      </div>
    </section>
  );
};

export default News;
