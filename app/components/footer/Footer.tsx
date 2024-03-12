import React, { ReactNode } from "react";
import { services } from "../body/Services";
import { navs } from "../appbar/AppBar";
import BrandIcon from "../appbar/BrandIcon";

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
    <footer className="footer p-6 lg:p-10 bg-base-200 text-base-content">
      {/* <FooterNav title="">
        <BrandIcon size={150} />
      </FooterNav> */}

      <FooterNav title="Services">
        {services.map((service) => (
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
          <fieldset className="form-control">
            <label className="label">
              <span className="label-text">Enter your email address</span>
            </label>
            <div className="flex flex-col sm:flex-row">
              <input
                type="text"
                placeholder="username@site.com"
                className="input input-bordered mb-2 sm:mr-2"
              />
              <button className="btn bg-accent outline-none text-white">
                Subscribe
              </button>
            </div>
          </fieldset>
        </FooterNav>
      </form>
    </footer>
  );
};

export default Footer;