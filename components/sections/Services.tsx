import React from "react";
import Service from "./services/Service";
import { servicesText } from "../constants/constants";

interface ServicesProps {
  content: { header: string; subHeader: string; services: any };
}

const Services = ({ content }: ServicesProps) => {
  return (
    <section className="padding-y box text-center">
      <h2 className="head-text">{content.header}</h2>

      <div className=" mb-12 text-center">
        <p className="sub-text">{content.subHeader}</p>
      </div>

      <div className="lg:grid px-0 md:px-16 lg:px-0 lg:grid-cols-3 md:gap-x-16 lg:gap-x-8">
        {content.services.map(
          (service: { icon: string; id: any; body: string; title: string }) => (
            <Service
              key={service.id.current}
              title={service.title}
              icon={service.icon}
              body={service.body}
            />
          ),
        )}
      </div>
    </section>
  );
};

export default Services;
