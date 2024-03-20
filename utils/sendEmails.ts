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
  tls: {
    ciphers: "SSLv3",
  },
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
    const mailData = {
      from: SENDER,
      to: NOFICATION_RECIPIENT, // List of receivers
      subject: "New Contact Form Submission", // Subject line
      text: `New contact form submission:\n\nName: ${values.name}\nEmail: ${values.email}\nMessage: ${values.message}`,
    };

    // Send mail with defined transport object
    let info = await new Promise((resolve, reject) => {
      transporter.sendMail(mailData, (err, info) => {
        if (err) {
          console.error(err);
          reject(err);
        } else {
          resolve(info);
        }
      });
    });

    console.log("Email notification sent");
  } catch (error) {
    console.error("Error sending email notification:", error);
  }
};

// Function to send confirmation/response email to sender
const sendConfirmationEmail = async (email: EmailAddress) => {
  try {
    const mailData = {
      from: SENDER,
      to: email,
      subject: "Thank you for your inquiry",
      html: EMAIL_TEMPLATE,
    };

    // Send mail with defined transport object
    let info = await new Promise((resolve, reject) => {
      transporter.sendMail(mailData, (err, info) => {
        if (err) {
          console.error(err);
          reject(err);
        } else {
          resolve(info);
        }
      });
    });

    console.log("Confirmation email sent");
  } catch (error) {
    console.error("Error sending confirmation email:", error);
  }
};

export { sendEmailNotification, sendConfirmationEmail };
