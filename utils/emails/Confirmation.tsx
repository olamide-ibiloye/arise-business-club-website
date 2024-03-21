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

interface ConfirmationProps {
  firstName: string;
}

const Confirmation = ({ firstName }: ConfirmationProps) => {
  return (
    <Html>
      <Head />
      <Preview>New Enquiry from the Contact Form</Preview>
      <Tailwind>
        <Body className="bg-gray-100 text-black">
          <Container>
            <Section className="bg-white my-10 px-10 py-4 rounded-md ">
              <Heading className="leading-tight">
                Thank You for Your Inquiry
              </Heading>
              <Text>Dear {firstName},</Text>
              <Text>
                We appreciate your interest and will get back to you as soon as
                possible.
              </Text>
              <Text>
                If you have any further questions or concerns, please don&apos;t
                hesitate to contact us.
              </Text>
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

export default Confirmation;
