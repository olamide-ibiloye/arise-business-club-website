import React from "react";
import CustomCarousel from "../components/carousel/CustomCarousel";
import Services from "../components/sections/Services";
import News from "../components/sections/News";
import Welcome from "../components/sections/Welcome";
import Description from "../components/sections/Description";
import Contact from "../components/sections/Contact";
import JoinNow from "../components/sections/JoinNow";
import FAQs from "../components/sections/FAQs";
import { Metadata } from "next";

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

    {/* <FAQs /> */}
  </div>
);

export default HomePage;
