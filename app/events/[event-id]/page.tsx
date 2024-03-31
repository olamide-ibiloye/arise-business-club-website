import SignUpForm from "@/components/form/SignUpForm";
import { convertTimeDate } from "@/utils/convertTimeDate";
import { client, urlFor } from "@/utils/sanity/client";
import { PortableText } from "@portabletext/react";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Events | Arise Business Club",
  description: "Register Now",
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
    datetime,
  } = await getContent(params["event-id"]);

  const {
    date,
    time: { WAT, BST },
  } = convertTimeDate(datetime);

  return (
    <div className="lg:max-w-7xl lg:w-full">
      <div className="flex flex-col">
        <h1 className="mt-20">
          <span className="block text-base text-accent text-center font-semibold tracking-wide uppercase">
            ARISE BUSINESS CLUB - EVENTS
          </span>

          <span className="mt-2 block text-3xl text-center leading-8 font-bold tracking-tight sm:text-4xl">
            {title}
          </span>
        </h1>

        <p className="text-center mt-3 py-5 text-lg">
          <span> Sign up to join us on </span>
          <span className="font-semibold">{date}</span>
          {" at "}
          <span className="font-semibold">{WAT}</span>
          {` | `}
          <span className="font-semibold">{BST}</span>.
        </p>

        <button className="arise-button w-[150px] mx-auto mt-4">
          Sign up now
        </button>
      </div>

      <div
        style={{ backgroundImage: `url(${urlFor(image).url()})` }}
        className="h-[300px] w-full bg-cover rounded-lg mt-8"
      />

      <div className="block md:grid md:grid-cols-2 items-center max-lg:px-4 py-[70px] gap-8">
        <div className="prose  dark:prose-invert prose-headings:font-inter text-center md:text-left info-text min-w-full  max-lg:mb-8">
          <PortableText value={description} />
        </div>

        <SignUpForm />
      </div>
    </div>
  );
};

export default EventTemplate;
