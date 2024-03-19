import React from "react";
import { contactUsText } from "../constants/constants";
import ContactForm from "../form/ContactForm";
import ContactCard from "../contact/ContactCard";

const Contact = () => {
  const { header, subHeader, contacts } = contactUsText;

  return (
    <section className="padding-y">
      <h2 className="text-5xl md:text-6xl font-bold tracking-tighter leading-tight mb-6 text-center">
        {header}
      </h2>

      <p className="text-lg mb-5 leading-relaxed text-center">{subHeader}</p>

      <div className="flex justify-around  pt-5 pb-10 md:pt-10 flex-col md:flex-row gap-4">
        {contacts.map((contact) => (
          <ContactCard
            key={contact.type}
            type={contact.type}
            value={contact.value}
            name={contact.name}
          />
        ))}
      </div>

      <ContactForm />
    </section>
  );
};

export default Contact;
