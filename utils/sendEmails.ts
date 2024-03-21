import { Resend } from "resend";
import { EMAIL_TEMPLATE } from "./confirmationEmail";

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}

const USER_EMAIL = process.env.USER_EMAIL;
const SENDER = `"Arise Business Club" <${USER_EMAIL}>`;
const NOFICATION_RECIPIENTS = [
  // "info@arisebusinessclub.com",
  "ibiloyeolamide@gmail.com",
];

const resend = new Resend(process.env.RESEND_API_KEY);

const sendEmails = async (values: ContactFormData) => {
  const { firstName, lastName, email, message } = values;

  const notificationMailOptions = {
    from: SENDER,
    to: NOFICATION_RECIPIENTS,
    subject: "New Contact Form Submission",
    text: `New contact form submission:\n\nFirst Name: ${firstName}\nLastName: ${lastName}\nEmail: ${email}\nMessage: ${message}`,
  };

  const confirmationMailOptions = {
    from: SENDER,
    to: email,
    subject: "Thank you for your inquiry",
    html: EMAIL_TEMPLATE,
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
