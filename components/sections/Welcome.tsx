import React from "react";
import { welcomeText } from "../constants/constants";

const Welcome = () => {
  return (
    <section className="padding-y text-center box">
      <h1 className="head-text">{welcomeText.header}</h1>

      <div className="info-text">
        <p>{welcomeText.body}</p>
      </div>
    </section>
  );
};

export default Welcome;
