import React from "react";
import { Resend } from "resend";
import Notification from "./Notification";
import Confirmation from "./Confirmation";
import Subscription from "./Subscription";

export interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
  type?: string;
}

const CONTACT_EMAIL = "contact@arisebusinessclub.com";
const SENDER = `"Arise Business Club" <${CONTACT_EMAIL}>`;
const NOFICATION_RECIPIENT = "info@arisebusinessclub.com";

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

const sendEmails = async (values: ContactFormData) => {
  const { firstName, lastName, email, message, type } = values;

  const notificationMailOptions = {
    from: SENDER,
    to: NOFICATION_RECIPIENT,
    subject: "New Contact Form Submission",
    react: React.createElement(Notification, {
      firstName,
      lastName,
      email,
      message,
    }),
  };

  const confirmationMailOptions = {
    from: SENDER,
    to: email,
    reply_to: NOFICATION_RECIPIENT,
    subject: "Thank you for your inquiry",
    react: React.createElement(Confirmation, {
      firstName,
    }),
  };

  const subscriptionMailOptions = {
    from: SENDER,
    to: email,
    subject: "Thank you for your subscribing",
    react: React.createElement(Subscription),
  };

  try {
    if (type === "contact") {
      const notificationData = await resend.emails.send(
        notificationMailOptions,
      );
      const confirmationData = await resend.emails.send(
        confirmationMailOptions,
      );

      return Response.json({ notificationData, confirmationData });
    } else {
      const subscriptionData = await resend.emails.send(
        subscriptionMailOptions,
      );

      return Response.json({ subscriptionData });
    }
  } catch (error) {
    return Response.json({ error });
  }
};

export { sendEmails };
