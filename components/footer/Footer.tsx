import React, { ReactNode } from "react";
import NewsletterForm from "../form/NewsletterForm";
import { navs, servicesText } from "../constants/constants";
import Socials from "./Socials";
import BrandIcon from "../nav/BrandIcon";
import Link from "next/link";

interface FooterNavProps {
  title: string;
  children: ReactNode;
}

const FooterNav: React.FC<FooterNavProps> = ({ title, children }) => {
  return (
    <nav>
      <h6 className="footer-title">{title}</h6>
      {children}
    </nav>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="footer p-6 lg:p-10 bg-base-200 text-base-content box">
      <FooterNav title="">
        <BrandIcon size={150} style="-ml-8 md:ml-0" />
      </FooterNav>

      <FooterNav title="Services">
        {servicesText.services.map((service) => (
          <Link key={service.id} className="link link-hover" href="">
            {service.title}
          </Link>
        ))}
      </FooterNav>

      <FooterNav title="Company">
        {navs.map((nav) => (
          <Link key={nav.id} className="link link-hover" href="">
            {nav.name}
          </Link>
        ))}
      </FooterNav>

      <FooterNav title="Newsletter">
        <NewsletterForm />
      </FooterNav>
    </footer>
  );
};

export default Footer;
