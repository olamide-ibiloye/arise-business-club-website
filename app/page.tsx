import React from "react";
import Footer from "./components/footer/Footer";
import AppBar from "./components/appbar/AppBar";
import CustomCarousel from "./components/carousel/CustomCarousel";
import Services from "./components/body/Services";
import News from "./components/body/News";
import Welcome from "./components/body/Welcome";
import Description from "./components/body/Description";
import Box from "./components/box/Box";

const HomePage = () => (
  <Box>
    <CustomCarousel />

    <Welcome />

    <Description />

    <Services />

    <News />
  </Box>
);

export default HomePage;
