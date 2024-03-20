import React from "react";
import CustomCarousel from "../components/carousel/CustomCarousel";
import Services from "../components/providers/sections/Services";
import News from "../components/providers/sections/News";
import Welcome from "../components/providers/sections/Welcome";
import Description from "../components/providers/sections/Description";
import Contact from "../components/providers/sections/Contact";
import JoinNow from "../components/providers/sections/JoinNow";
import FAQs from "../components/providers/sections/FAQs";
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

    {/* <JoinNow /> */}

    {/* <FAQs /> */}

    {/* <PopUp /> */}
  </div>
);

export default HomePage;
