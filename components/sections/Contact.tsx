import { Box, Grid } from "@radix-ui/themes";
import React from "react";
import { contactUsText } from "../constants/constants";

const Contact = () => {
  const { header, subHeader, contacts, socials } = contactUsText;

  return (
    <section className="padding-y">
      <h2 className="text-5xl md:text-6xl font-bold tracking-tighter leading-tight mb-6 text-center">
        {header}
      </h2>

      <p className="text-lg mb-5 leading-relaxed text-center">{subHeader}</p>

      <Grid columns="3" gap="3" width="auto">
        <p>Email: {contacts.email}</p>

        <p>Phone: {contacts.phone}</p>

        <p>{socials.header}</p>

        <p>{socials.ig}</p>

        <p>{socials.linkedIn}</p>

        <p>{socials.twitter}</p>
      </Grid>
    </section>
  );
};

export default Contact;
