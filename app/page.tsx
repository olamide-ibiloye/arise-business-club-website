import React from "react";
import { client } from "@/utils/sanity/client";
import CustomCarousel from "../components/carousel/CustomCarousel";
import Services from "../components/sections/Services";
import News from "../components/sections/News";
import Welcome from "../components/sections/Welcome";
import Description from "../components/sections/Description";
import Contact from "../components/sections/Contact";
import JoinNow from "../components/sections/JoinNow";
import { Metadata } from "next";

// Fetch content with GROQ
const getContent = async () => {
  const CONTENT_QUERY = `*[_type == "pricing"] {
  ...,
  plans[]->
}
`;
  const content = await client.fetch(CONTENT_QUERY);

  return content;
};

export const metadata: Metadata = {
  title: "Arise Business Club",
  description: "Welcome to Arise Business Club",
};

const HomePage = () => (
  <div>
    <CustomCarousel />

    <Welcome />

    <Description />

    <Services />

    <News />

    <Contact />

    <JoinNow />
  </div>
);

export default HomePage;
