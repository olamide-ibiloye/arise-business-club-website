import React from "react";
import { joinNowText } from "../constants/constants";

const JoinNow = () => {
  return (
    <section className="padding-y box text-center">
      <h2 className="head-text">{joinNowText.header}</h2>

      <hr className="pb-4" />

      <div className="leading-relaxed text-center">
        <p className="sub-text">{joinNowText.subHeader}</p>

        <p className="info-text">{joinNowText.bodyOne}</p>

        <p className="info-text">{joinNowText.bodyTwo}</p>

        <button className="arise-button w-[200px] my-10">
          {joinNowText.buttonName}
        </button>
      </div>
    </section>
  );
};

export default JoinNow;
