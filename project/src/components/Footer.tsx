import React from "react";

interface FooterProps {}

export const Footer: React.FC<FooterProps> = ({}) => {
  return (
    <footer className="mt-auto text-white-50">
      <p className="lead">
        Attributes:
        <ul className="list-group bg-dark text-white">
          <li className="list-group-item bg-dark text-white">
            favicon:{" "}
            <a
              href="https://www.flaticon.com/free-icons/spider-web"
              title="spider web icons"
              className="text-white"
            >
              Spider web icons created by Freepik - Flaticon
            </a>
          </li>
        </ul>
      </p>
    </footer>
  );
};

export default Footer;
