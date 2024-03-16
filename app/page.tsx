import React from "react";
import CustomCarousel from "../components/carousel/CustomCarousel";
import Services from "../components/body/Services";
import News from "../components/body/News";
import Welcome from "../components/body/Welcome";
import Description from "../components/body/Description";
import Box from "../components/ui/Box";
import Contact from "../components/body/Contact";
import JoinNow from "../components/body/JoinNow";
import FAQs from "../components/body/FAQs";
import PopUp from "../components/body/PopUp";

const HomePage = () => (
  <Box>
    <CustomCarousel />

    <Welcome />

    <Description />

    <Services />

    <News />

    {/* <Contact /> */}

    {/* <JoinNow /> */}

    {/* <FAQs /> */}

    {/* <PopUp /> */}
  </Box>
);

export default HomePage;
