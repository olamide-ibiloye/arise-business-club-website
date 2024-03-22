import React from "react";
import { newsText } from "../constants/constants";

const News = () => {
  return (
    <section className="padding-y box text-center">
      <h2 className="head-text">{newsText.header}</h2>

      <div className="text-center">
        <p className="sub-text">{newsText.subHeader}</p>

        <p className="info-text">{newsText.body}</p>
      </div>
    </section>
  );
};

export default News;
