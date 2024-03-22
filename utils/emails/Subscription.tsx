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

const Subscription = () => {
  return (
    <Html>
      <Head />
      <Preview>New Enquiry from the Contact Form</Preview>
      <Tailwind>
        <Body className="bg-gray-100 text-black">
          <Container>
            <Section className="bg-white my-10 px-10 py-4 rounded-md ">
              <Heading className="leading-tight">
                Thank You for subscribing
              </Heading>
              <Text>Hi,</Text>
              <Text>Click the link below to download the freebies.</Text>
              <Text>
                Best regards,
                <br />
                Arise Business Club Team
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default Subscription;
