import React from "react";
import ContactForm from "../form/ContactForm";
import ContactCard from "./contact/ContactCard";
import { getIcon } from "../constants/constants";

interface ContactCardProps {
  value: string;
  name: string;
  icon: string;
}

interface ContactProps {
  content: {
    header: string;
    subHeader: string;
    body: string;
    contacts: ContactCardProps[];
  };
}

const Contact = ({ content }: ContactProps) => {
  const { header, subHeader, body, contacts } = content;

  return (
    <section id="contact-us" className="padding-y box">
      <div className="lg:grid lg:grid-cols-2 md:gap-x-16 lg:gap-x-8 justify-center items-center px-0 md:px-16 lg:px-0">
        <div className="flex items-start pt-5 pb-10 md:pt-10 flex-col gap-5">
          <h2 className="head-text text-center lg:text-left w-full">
            {header}
          </h2>
          <p className="sub-text text-center lg:text-left w-full">
            {subHeader}
          </p>

          <p className="info-text pb-5">{body}</p>

          {contacts.map((contact: ContactCardProps) => (
            <ContactCard
              key={contact.name}
              value={contact.value}
              name={contact.name}
              icon={getIcon(contact.icon)}
            />
          ))}
        </div>

        <ContactForm />
      </div>
    </section>
  );
};

export default Contact;
