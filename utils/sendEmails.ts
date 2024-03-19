import nodemailer from "nodemailer";
import { EMAIL_TEMPLATE } from "./confirmationEmail";

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

type EmailAddress = string | string[];

const user_email = process.env.USER_EMAIL;
const SENDER = `"Arise Business Club" <${user_email}>`;
const NOFICATION_RECIPIENT = [
  "ibiloyeolamide@gmail.com",
  "iyanuloluwao@gmail.com",
];

// Create a Nodemailer transporter using SMTP transport
let transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: user_email,
    pass: process.env.USER_PASS,
  },
});

// Function to send email notification to info@arisebusinessclub.com
const sendEmailNotification = async (values: ContactFormData) => {
  try {
    // Send mail with defined transport object
    let info = await transporter.sendMail({
      from: SENDER,
      to: NOFICATION_RECIPIENT, // List of receivers
      subject: "New Contact Form Submission", // Subject line
      text: `New contact form submission:\n\nName: ${values.name}\nEmail: ${values.email}\nMessage: ${values.message}`,
    });

    console.log("Email notification sent:", info.messageId);
  } catch (error) {
    console.error("Error sending email notification:", error);
  }
};

// Function to send confirmation/response email to sender
const sendConfirmationEmail = async (email: EmailAddress) => {
  try {
    // Send mail with defined transport object
    let info = await transporter.sendMail({
      from: SENDER,
      to: email,
      subject: "Thank you for your inquiry",
      html: EMAIL_TEMPLATE,
    });

    console.log("Confirmation email sent:", info.messageId);
  } catch (error) {
    console.error("Error sending confirmation email:", error);
  }
};

export { sendEmailNotification, sendConfirmationEmail };
