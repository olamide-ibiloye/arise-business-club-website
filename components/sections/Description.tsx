import React from "react";
import { descriptionText } from "../constants/constants";

const Description = () => {
  return (
    <section className="padding bg-base-200 text-base-content">
      <h2 className="text-5xl md:text-6xl font-bold tracking-tighter leading-tight mb-6 text-center">
        {descriptionText.header}
      </h2>

      <div className="md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 text-center md:text-left">
        <div className="text-lg leading-relaxed">
          <p>{descriptionText.blockOne}</p>
        </div>

        <div className="text-lg leading-relaxed">
          <p>{descriptionText.blockTwo}</p>
        </div>
      </div>
    </section>
  );
};

export default Description;