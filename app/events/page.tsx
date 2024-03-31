import { client } from "@/utils/sanity/client";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Events | Arise Business Club",
  description: "Register Now",
};

export const revalidate = 300;

const getContent = async () => {
  const CONTENT_QUERY = `*[_type == "event"]`;

  return await client.fetch(CONTENT_QUERY);
};

const EventsPage = async () => {
  const events = await getContent();

  return <div>EventsPage</div>;
};

export default EventsPage;
