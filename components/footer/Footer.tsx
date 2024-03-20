import React, { ReactNode } from "react";
import NewsletterForm from "../form/NewsletterForm";
import { navs, servicesText } from "../constants/constants";
import Socials from "./Socials";
import BrandIcon from "../nav/BrandIcon";

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
    <footer className="footer p-6 lg:p-10 bg-base-200 text-base-content lg:max-w-7xl lg:w-full">
      <FooterNav title="">
        <BrandIcon size={150} style="-ml-8 md:ml-0" />
      </FooterNav>

      <FooterNav title="Services">
        {servicesText.services.map((service) => (
          <a key={service.id} className="link link-hover">
            {service.title}
          </a>
        ))}
      </FooterNav>

      <FooterNav title="Company">
        {navs.map((nav) => (
          <a key={nav.id} className="link link-hover">
            {nav.name}
          </a>
        ))}
      </FooterNav>

      <form>
        <FooterNav title="Newsletter">
          <NewsletterForm />

          <Socials />
        </FooterNav>
      </form>
    </footer>
  );
};

export default Footer;
