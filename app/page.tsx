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

export const revalidate = 300;

const getContent = async () => {
  const CONTENT_QUERY = `*[_type == 'homepage'][0] {
    carousel,
    welcome,
    about_us,
    our_services,
    news,
    contact_us,
    join_now
  }`;

  return await client.fetch(CONTENT_QUERY);
};

export const metadata: Metadata = {
  title: "Arise Business Club",
  description: "Welcome to Arise Business Club",
};

const HomePage = async () => {
  const {
    carousel: { images },
    welcome,
    about_us,
    our_services,
    news,
    contact_us,
    join_now,
  } = await getContent();

  return (
    <div>
      <CustomCarousel images={images} />

      <Welcome content={welcome} />

      <Description content={about_us} />

      <Services content={our_services} />

      <News content={news} />

      <Contact content={contact_us} />

      <JoinNow content={join_now} />
    </div>
  );
};

export default HomePage;
