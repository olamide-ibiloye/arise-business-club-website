import { Resend } from "resend";
import { EMAIL_TEMPLATE } from "./confirmationEmail";

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}

type EmailAddress = string | string[];

const USER_EMAIL = process.env.USER_EMAIL;
const resend = new Resend(process.env.RESEND_API_KEY);

const SENDER = `"Arise Business Club" <${USER_EMAIL}>`;
const NOFICATION_RECIPIENT = [
  "info@arisebusinessclub.com",
  "ibiloyeolamide@gmail.com",
];

// Function to send email notification to info@arisebusinessclub.com
const sendEmailNotification = async (values: ContactFormData) => {
  const mailOptions = {
    from: SENDER,
    to: NOFICATION_RECIPIENT, // List of receivers
    subject: "New Contact Form Submission", // Subject line
    text: `New contact form submission:\n\nFirst Name: ${values.firstName}\nLastName: ${values.lastName}\nEmail: ${values.email}\nMessage: ${values.message}`,
  };

  try {
    const data = await resend.emails.send(mailOptions);

    return Response.json(data);
  } catch (error) {
    return Response.json({ error });
  }
};

// Function to send confirmation/response email to sender
const sendConfirmationEmail = async (email: EmailAddress) => {
  const mailOptions = {
    from: SENDER,
    to: email,
    subject: "Thank you for your inquiry",
    html: EMAIL_TEMPLATE,
  };

  try {
    const data = await resend.emails.send(mailOptions);

    return Response.json(data);
  } catch (error) {
    return Response.json({ error });
  }
};

export { sendEmailNotification, sendConfirmationEmail };
