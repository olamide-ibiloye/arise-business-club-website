import React from "react";
import Service from "./services/Service";
import { servicesText } from "../constants/constants";

const Services = () => {
  return (
    <section className="padding-y box text-center">
      <h2 className="head-text">{servicesText.header}</h2>

      <div className=" mb-12 text-center">
        <p className="sub-text">{servicesText.subHeader}</p>
      </div>

      <div className="lg:grid px-0 md:px-16 lg:px-0 lg:grid-cols-3 md:gap-x-16 lg:gap-x-8">
        {servicesText.services.map((service) => (
          <Service
            key={service.id}
            title={service.title}
            icon={service.icon}
            body={service.body}
          />
        ))}
      </div>
    </section>
  );
};

export default Services;
