import React from "react";
import { contactUsText } from "../constants/constants";
import ContactForm from "../form/ContactForm";
import ContactCard from "./contact/ContactCard";

const Contact = () => {
  const { header, subHeader, body, contacts } = contactUsText;

  return (
    <section className="padding-y box">
      <div className="lg:grid lg:grid-cols-2 md:gap-x-16 lg:gap-x-8 justify-center items-center px-0 md:px-16 lg:px-0">
        <div className="flex items-start pt-5 pb-10 md:pt-10 flex-col gap-5">
          <h2 className="head-text text-center lg:text-left w-full">
            {header}
          </h2>
          <p className="sub-text text-center lg:text-left w-full">
            {subHeader}
          </p>

          <p className="info-text pb-5">{body}</p>

          {contacts.map((contact) => (
            <ContactCard
              key={contact.type}
              value={contact.value}
              name={contact.name}
              icon={contact.icon}
            />
          ))}
        </div>

        <ContactForm />
      </div>
    </section>
  );
};

export default Contact;
