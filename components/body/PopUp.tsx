import React from "react";
import Form from "./Form";

const PopUp = () => {
  return (
    <section className="max-w-2xl lg:w-full">
      <div className="bg-accent" style={{ height: 200, width: "100%" }}></div>
      <Form title="Sign up to qualify for GROWTH free gift" />
    </section>
  );
};

export default PopUp;
