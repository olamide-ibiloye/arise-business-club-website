import { client, urlFor } from "@/utils/sanity/client";
import { PortableText } from "@portabletext/react";
import { Metadata } from "next";
import Image from "next/image";
import React from "react";

export const metadata: Metadata = {
  title: "Events | Arise Business Club",
  description: "register Now",
};

export const revalidate = 300;

const getContent = async (id: string) => {
  const CONTENT_QUERY = `*[_type == "event" && slug.current == '${id}'][0]`;

  return await client.fetch(CONTENT_QUERY);
};

interface ParamsProps {
  "event-id": string;
}

const EventTemplate: React.FC<{ params: ParamsProps }> = async ({ params }) => {
  const {
    title,
    description,
    image: image,
    altText,
  } = await getContent(params["event-id"]);

  return (
    <div>
      <Image
        src={urlFor(image).url()}
        alt={altText}
        className="object-cover h-auto w-auto"
        height={500}
        width={500}
        priority
      />
      <div className="prose text-center md:text-left info-text min-w-full">
        <PortableText value={description} />
      </div>
    </div>
  );
};

export default EventTemplate;
