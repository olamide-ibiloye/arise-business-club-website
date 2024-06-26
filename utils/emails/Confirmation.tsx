import React from "react";
import {
  Html,
  Body,
  Head,
  Heading,
  Container,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";
import { client } from "../sanity/client";
import { PortableText } from "@portabletext/react";

export const revalidate = 300;

const getContent = async () => {
  const CONTENT_QUERY = `*[_type == 'email_templates'][0] {
    confirmation
  }`;

  return await client.fetch(CONTENT_QUERY);
};

interface ConfirmationProps {
  firstName: string;
}

const Confirmation = async ({ firstName }: ConfirmationProps) => {
  const { confirmation } = await getContent();

  return (
    <Html>
      <Head />
      <Preview>New Enquiry from the Contact Form</Preview>
      <Tailwind>
        <Body className="bg-gray-100 text-black">
          <Container>
            <Section className="bg-white my-10 px-10 py-4 rounded-md ">
              <Heading className="leading-tight head-text">
                Thank You for Contacting Us!
              </Heading>
              <Text className="text-lg">Dear {firstName},</Text>
              <div className="prose text-left min-w-full text-black">
                <PortableText value={confirmation} />
              </div>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default Confirmation;
