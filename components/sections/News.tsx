import React from "react";
import { newsText } from "../constants/constants";

const News = () => {
  return (
    <section className="padding-y">
      <h2 className="text-5xl md:text-6xl font-bold tracking-tighter leading-tight mb-6 text-center">
        {newsText.header}
      </h2>

      <div className="text-lg leading-relaxed text-center">
        <p>{newsText.subHeader}</p>

        <p>{newsText.body}</p>
      </div>
    </section>
  );
};

export default News;
