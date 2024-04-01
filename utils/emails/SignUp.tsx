import React from "react";
import {
  Html,
  Body,
  Head,
  Container,
  Preview,
  Section,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";
import { client } from "../sanity/client";
import { PortableText } from "@portabletext/react";

export const revalidate = 300;

const getContent = async () => {
  const CONTENT_QUERY = `*[_type == 'email_templates'][0] {
    signup
  }`;

  return await client.fetch(CONTENT_QUERY);
};

const SignUp = async () => {
  const { signup } = await getContent();

  return (
    <Html>
      <Head />
      <Preview>New Event signup</Preview>
      <Tailwind>
        <Body className="bg-gray-100 text-black">
          <Container>
            <Section className="bg-white my-10 px-10 py-4 rounded-md ">
              <div className="prose text-left min-w-full text-black">
                <PortableText value={signup} />
              </div>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default SignUp;
