import React, { ReactNode } from "react";
import Form from "../sections/Form";
import { navs, servicesText } from "../constants/constants";

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

      {/* <FooterNav title="Legal">
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </FooterNav> */}

      <form>
        <FooterNav title="Newsletter">
          <Form title="Enter your email address" />
        </FooterNav>
      </form>
    </footer>
  );
};

export default Footer;
