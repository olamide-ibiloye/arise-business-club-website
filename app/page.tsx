import React from "react";
import Footer from "./components/footer/Footer";
import AppBar from "./components/appbar/AppBar";
import CustomCarousel from "./components/carousel/CustomCarousel";
import Services from "./components/body/Services";
import News from "./components/body/News";
import Welcome from "./components/body/Welcome";
import Description from "./components/body/Description";

const HomePage = () => (
  <main className="flex min-h-screen flex-col items-center justify-between  px-5 lg:px-24">
    <AppBar />

    <CustomCarousel />

    <Welcome />

    <Description />

    <Services />

    <News />

    <Footer />
  </main>
);

export default HomePage;
