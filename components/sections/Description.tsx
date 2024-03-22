import React from "react";
import { descriptionText } from "../constants/constants";

const Description = () => {
  return (
    <section className="padding bg-base-200 text-base-content box text-center">
      <h2 className="head-text">{descriptionText.header}</h2>

      <div className="md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 text-center md:text-left info-text">
        <div>
          <p>{descriptionText.blockOne}</p>
        </div>

        <div>
          <p>{descriptionText.blockTwo}</p>
        </div>
      </div>
    </section>
  );
};

export default Description;
