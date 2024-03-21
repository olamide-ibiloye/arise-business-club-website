import React from "react";
import { Resend } from "resend";
import Notification from "./Notification";
import Confirmation from "./Confirmation";

export interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}

const USER_EMAIL = "contact@arisebusinessclub.com";
const SENDER = `"Arise Business Club" <${USER_EMAIL}>`;
const REPLY_TO = "info@arisebusinessclub.com";
const NOFICATION_RECIPIENTS = [
  "info@arisebusinessclub.com",
  "ibiloyeolamide@gmail.com",
];

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

const sendEmails = async (values: ContactFormData) => {
  const { firstName, lastName, email, message } = values;

  const notificationMailOptions = {
    from: SENDER,
    to: NOFICATION_RECIPIENTS,
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
    reply_to: REPLY_TO,
    subject: "Thank you for your inquiry",
    react: React.createElement(Confirmation, {
      firstName,
    }),
  };

  try {
    const notificationData = await resend.emails.send(notificationMailOptions);
    const confirmationData = await resend.emails.send(confirmationMailOptions);

    return Response.json({ notificationData, confirmationData });
  } catch (error) {
    return Response.json({ error });
  }
};

export { sendEmails };
