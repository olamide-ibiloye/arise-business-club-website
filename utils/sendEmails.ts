import nodemailer from "nodemailer";
import { google } from "googleapis";
import { EMAIL_TEMPLATE } from "./confirmationEmail";
import SMTPTransport from "nodemailer/lib/smtp-transport";

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}

type EmailAddress = string | string[];

const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
const REFRESH_TOKEN = process.env.REFRESH_TOKEN;
const REDIRECT_URI = process.env.REDIRECT_URI;
const USER_EMAIL = process.env.USER_EMAIL;
const ACCESS_TOKEN = process.env.ACCESS_TOKEN;

const SENDER = `"Arise Business Club" <${USER_EMAIL}>`;
const NOFICATION_RECIPIENT = [
  "ibiloyeolamide@gmail.com",
  "iyanuloluwao@gmail.com",
];

let oAuth2Client = new google.auth.OAuth2(
  CLIENT_ID,
  CLIENT_SECRET,
  REDIRECT_URI,
);

oAuth2Client.setCredentials({
  access_token: ACCESS_TOKEN,
});

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    type: "OAuth2",
    user: USER_EMAIL,
    clientId: CLIENT_ID,
    clientSecret: CLIENT_SECRET,
    refreshToken: REFRESH_TOKEN,
    accessToken: oAuth2Client.credentials.access_token,
  },
  tls: {
    rejectUnauthorized: true,
  },
} as SMTPTransport.Options);

// Function to send email notification to info@arisebusinessclub.com
const sendEmailNotification = async (values: ContactFormData) => {
  if (!oAuth2Client) {
    oAuth2Client = oAuth2Client;
  }

  // Check if access token is expired
  if (!oAuth2Client.credentials) {
    // Refresh the access token using the refresh token
    const { credentials } = await oAuth2Client.refreshAccessToken();
    oAuth2Client.setCredentials(credentials);
  }

  const mailOptions = {
    from: SENDER,
    to: NOFICATION_RECIPIENT, // List of receivers
    subject: "New Contact Form Submission", // Subject line
    text: `New contact form submission:\n\nFirst Name: ${values.firstName}\nLastName: ${values.lastName}\nEmail: ${values.email}\nMessage: ${values.message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error occurred:", error);
    } else {
      console.log("Email sent:", info.response);
    }
  });
};

// Function to send confirmation/response email to sender
const sendConfirmationEmail = async (email: EmailAddress) => {
  if (!oAuth2Client) {
    oAuth2Client = oAuth2Client;
  }

  // Check if access token is expired
  if (!oAuth2Client.credentials) {
    // Refresh the access token using the refresh token
    const { credentials } = await oAuth2Client.refreshAccessToken();
    oAuth2Client.setCredentials(credentials);
  }

  const mailOptions = {
    from: SENDER,
    to: email,
    subject: "Thank you for your inquiry",
    html: EMAIL_TEMPLATE,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error occurred:", error);
    } else {
      console.log("Email sent:", info.response);
    }
  });
};

export { sendEmailNotification, sendConfirmationEmail };
