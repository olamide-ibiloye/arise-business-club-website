import EventCard from "@/components/card/EventCard";
import Contact from "@/components/sections/Contact";
import { client, urlFor } from "@/utils/sanity/client";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Events | Arise Business Club",
  description: "Register Now",
};

export const revalidate = 300;

const getContent = async () => {
  const CONTENT_QUERY = `{
    "events": *[_type == 'event'],
    "eventspage": *[_type == 'eventspage'][0]{
      banner
    },
    "contactData": *[_type == 'homepage'][0] {
      contact_us
    }
  }`;

  return await client.fetch(CONTENT_QUERY);
};

const EventsPage = async () => {
  const {
    events,
    contactData: { contact_us },
    eventspage: {
      banner: { asset },
    },
  } = await getContent();

  return (
    <div className="box">
      <div
        style={{
          backgroundImage: `url(${urlFor(asset).url()})`,
        }}
        className="h-[300px] w-full bg-cover bg-center rounded-lg mt-8"
      />

      <h1 className="head-text text-center mt-10 py-10">Upcoming Events</h1>

      {events.length !== 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-5 gap-8">
          {events.map(
            (event: {
              image: any;
              description: any;
              title: string;
              altText: string;
              datetime: string;
              slug: { current: string; _type: string };
            }) => {
              const {
                image: { asset },
                altText,
                title,
                slug,
                datetime,
              } = event;

              return (
                <EventCard
                  key={slug.current}
                  src={urlFor(asset).url()}
                  altText={altText}
                  title={title}
                  slug={slug}
                  datetime={datetime}
                />
              );
            },
          )}
        </div>
      )}

      <div>
        {events.length === 0 && (
          <h2 className="info-text w-full text-center">
            Currently, there are no events on the calendar. However, don&apos;t
            fret! Stay tuned and check back later for a chance to hop on board
            some thrilling happenings. We promise, the wait will be worth it!
          </h2>
        )}
      </div>

      <hr className="mt-20 py-5" />

      <Contact content={contact_us} />
    </div>
  );
};

export default EventsPage;
