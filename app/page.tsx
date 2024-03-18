import React from "react";
import CustomCarousel from "../components/carousel/CustomCarousel";
import Services from "../components/sections/Services";
import News from "../components/sections/News";
import Welcome from "../components/sections/Welcome";
import Description from "../components/sections/Description";
import Contact from "../components/sections/Contact";
import JoinNow from "../components/sections/JoinNow";
import FAQs from "../components/sections/FAQs";
import PopUp from "../components/sections/PopUp";

const HomePage = () => (
  <>
    <CustomCarousel />

    <Welcome />

    <Description />

    <Services />

    <News />

    {/* <Contact /> */}

    {/* <JoinNow /> */}

    {/* <FAQs /> */}

    {/* <PopUp /> */}
  </>
);

export default HomePage;
