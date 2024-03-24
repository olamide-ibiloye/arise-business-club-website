import React from "react";
import {
  CurrencyExchange,
  Hub,
  CandlestickChart,
  LinkedIn,
  Instagram,
  Facebook,
  Email,
  Phone,
} from "@mui/icons-material";

const iconStyle = { color: "white", fontSize: { xs: 15, md: 20 } };

const contactIconStyle = { color: "white", fontSize: { xs: 20, md: 30 } };

export interface SubNavItem {
  id: string;
  name: string;
}

export interface NavItem {
  id: string;
  name: string;
  subNavs: boolean;
  subNavLinks?: SubNavItem[];
}

export const navs: NavItem[] = [
  { id: "about-us", name: "About Us", subNavs: false },
  {
    id: "services",
    name: "Services",
    subNavs: true,
    subNavLinks: [
      {
        id: "financial-education",
        name: "Financial Education",
      },
      { id: "networking-events", name: "Networking Events" },
      {
        id: "investment-opportunities",
        name: "Investment Opportunities",
      },
    ],
  },
  { id: "testimonials", name: "Testimonials", subNavs: false },
  { id: "news", name: "News", subNavs: false },
];

export const images = [
  { src: "/picture-m-1.jpg", alt: "Arise Cover 1" },
  { src: "/picture-m-2.jpg", alt: "Arise Cover 2" },
  { src: "/picture-m-3.jpg", alt: "Arise Cover 3" },
];

export const welcomeText = {
  header: "Welcome to Arise Business Club",
  body: "Arise Business Club is more than just a community; it's a movement fueled by integrity, innovation, and an unwavering commitment to success. With a vision to uplift individuals from the depths of adversity and stagnation, we empower you to rise to new heights and reclaim control over your life and destiny. This is Arise Business Club where Making a difference starts with you!",
};

export const descriptionText = {
  header: "About Us",
  blockOne:
    "At Arise Business Club, we believe in more than just business success; we believe in making a meaningful difference in the world. That's why we've created a unique platform that combines business networking with philanthropic initiatives, bringing together like-minded individuals who are passionate about both professional growth and social impact. Our club serves as a hub for entrepreneurs, business leaders, and changemakers who are committed to using their skills, resources, and influence to drive positive change in their communities and beyond. Through a series of curated events, workshops, and projects, we aim to harness the collective power of our members to address pressing social issues, support charitable causes, and create lasting impact.",
  blockTwo:
    "By linking philanthropic activities with our business community, we not only strengthen our connections and collaborations but also amplify our collective ability to make a difference. Whether it's through fundraising efforts, volunteer initiatives, or strategic partnerships, we empower our members to contribute their time, expertise, and resources to causes they care about, while also building meaningful relationships and expanding their professional networks. Join us at Arise Business Club and be part of a community that not only celebrates business success but also values social responsibility and civic engagement. Together, we can leverage our collective talents and passions to create a brighter, more inclusive future for all.",
};

export const servicesText = {
  header: "Services",
  subHeader: "Discover a world of opportunities with Arise Business Club:",
  services: [
    {
      id: "financial-education",
      title: "Financial Education",
      icon: <CurrencyExchange className="icon-class" />,
      body: "Gain valuable insights and knowledge through webinars, tutorials, and market analysis",
    },
    {
      id: "networking-events",
      title: "Networking Events",
      icon: <Hub className="icon-class" />,
      body: "Connect with like-minded individuals, attend workshops, and participate in community forums to expand your network and grow your wealth.",
    },
    {
      id: "investment-opportunities",
      title: "Investment Opportunities",
      icon: <CandlestickChart className="icon-class" />,
      body: "Explore diverse investment options, including forex trading, real estate, and more.",
    },
  ],
};

export const newsText = {
  header: "News",
  subHeader: "Stay informed and inspired:",
  body: "Read our latest blog posts covering finance, investment strategies, market trends, and success stories. Stay up-to-date with relevant news articles and industry updates to make informed investment decisions.",
};

export const contactUsText = {
  header: "Contact Us",
  subHeader: "Get in touch with us today:",
  body: "Get more information about events, make enquiries about partnerships & investments.",
  contacts: [
    {
      type: "email",
      name: "Email",
      value: "info@arisebusinessclub.com",
      icon: <Email sx={contactIconStyle} />,
    },
    {
      type: "phone",
      name: "Phone",
      value: "+(44) 745 946 7863",
      icon: <Phone sx={contactIconStyle} />,
    },
  ],
  socials: "Follow us on social media:",
};

export const formFields = [
  {
    type: "firstName",
    label: "First Name*",
    placeholder: "first name",
  },
  {
    type: "lastName",
    label: "Last Name*",
    placeholder: "last name",
  },
  {
    type: "email",
    label: "Email*",
    placeholder: "email",
  },
  {
    type: "message",
    label: "Message*",
    placeholder: "type your message",
  },
];

export const joinNowText = {
  header: "Join Now",
  subHeader: "Ready to take the next step?",
  bodyOne:
    "Become a member of Arise Business Club and unlock exclusive benefits, resources, and opportunities.",
  bodyTwo: "Sign up now and start your journey towards financial success!",
  buttonName: "Get Started",
};

export const socials = [
  {
    name: "LinkedIn",
    icon: <LinkedIn sx={iconStyle} />,
    url: "",
  },

  {
    name: "Instagram",
    icon: <Instagram sx={iconStyle} />,
    url: "https://www.instagram.com/arisebusinessclub?igsh=MTJhMjd1NmRuOHQ2Mw==",
  },
  {
    name: "Facebook",
    icon: <Facebook sx={iconStyle} />,
    url: "https://m.facebook.com/groups/384520050968771/",
  },
];
