import React from "react";
import Service from "./Service";
import { servicesText } from "../constants/constants";

const Services = () => {
  return (
    <section className="padding-y">
      <h2 className="text-5xl md:text-6xl font-bold tracking-tighter leading-tight mb-6 text-center">
        {servicesText.header}
      </h2>

      <div className="text-lg leading-relaxed mb-12 text-center">
        <p>{servicesText.subHeader}</p>
      </div>

      <div className="md:grid md:grid-cols-3 md:gap-x-16 lg:gap-x-8">
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
