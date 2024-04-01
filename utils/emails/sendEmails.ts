import React from "react";
import { Resend } from "resend";
import Notification from "./Notification";
import Confirmation from "./Confirmation";
import Subscription from "./Subscription";
import { NextResponse } from "next/server";
import SignUp from "./SignUp";

export interface ContactFormData {
  firstName?: string;
  lastName?: string;
  email: string;
  message?: string;
  type?: string;
}

const CONTACT_EMAIL = "contact@arisebusinessclub.com";
const SENDER = `"Arise Business Club" <${CONTACT_EMAIL}>`;
const NOFICATION_RECIPIENT = "info@arisebusinessclub.com";

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

const sendEmails = async (values: ContactFormData) => {
  try {
    if (values.type === "contact") {
      const { firstName, lastName, email, message } = values;

      const notificationMailOptions = {
        from: SENDER,
        to: NOFICATION_RECIPIENT,
        subject: "New Contact Form Submission",
        react: React.createElement(Notification, {
          firstName: firstName || "",
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
          firstName: firstName || "",
        }),
      };

      const notificationData = await resend.emails.send(
        notificationMailOptions,
      );

      const confirmationData = await resend.emails.send(
        confirmationMailOptions,
      );

      return new NextResponse(
        JSON.stringify({ notificationData, confirmationData }),
      );
    } else if (values.type === "sign-up") {
      const { email } = values;

      const signupMailOptions = {
        from: SENDER,
        to: email,
        subject: "Thank you for signing up",
        react: React.createElement(SignUp),
      };

      const subscriptionData = await resend.emails.send(signupMailOptions);

      return new NextResponse(JSON.stringify({ subscriptionData }));
    } else {
      const { email } = values;

      const subscriptionMailOptions = {
        from: SENDER,
        to: email,
        subject: "Thank you for your subscribing",
        react: React.createElement(Subscription),
      };

      const subscriptionData = await resend.emails.send(
        subscriptionMailOptions,
      );

      return new NextResponse(JSON.stringify({ subscriptionData }));
    }
  } catch (error) {
    return Response.json({ error });
  }
};

export { sendEmails };
