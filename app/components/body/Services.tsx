import React from "react";
import Service from "./Service";

export const services = [
  {
    id: "financial-education",
    title: "Financial Education",
    body: "Gain valuable insights and knowledge through webinars, tutorials, and market analysis",
  },
  {
    id: "networking-events",
    title: "Networking Events",
    body: "Connect with like-minded individuals, attend workshops, and participate in community forums to expand your network and grow your wealth.",
  },
  {
    id: "investment-opportunities",
    title: "Investment Opportunities",
    body: "Explore diverse investment options, including forex trading, real estate, and more.",
  },
];

const Services = () => {
  return (
    <div className="mt-20 pt-20">
      <h2 className="text-5xl md:text-6xl font-bold tracking-tighter leading-tight mb-6 text-center">
        Services
      </h2>

      <div className="text-lg leading-relaxed mb-12 text-center">
        <p>Discover a world of opportunities with Arise Business Club:</p>
      </div>

      <div className="md:grid md:grid-cols-3 md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28">
        {services.map((service) => (
          <Service key={service.id} title={service.title} body={service.body} />
        ))}
      </div>
    </div>
  );
};

export default Services;
