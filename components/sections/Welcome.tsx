import React from "react";
import { welcomeText } from "../constants/constants";

const Welcome = () => {
  return (
    <section className="padding-y text-center">
      <h1 className="text-5xl md:text-6xl font-bold tracking-tighter leading-tight mb-6">
        {welcomeText.header}
      </h1>

      <div className="text-lg leading-relaxed text-slate-500">
        <p>{welcomeText.body}</p>
      </div>
    </section>
  );
};

export default Welcome;
