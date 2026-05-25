import React from "react";

interface HeaderProps {
  onNavigateHome: () => void;
  onNavigateAbout: () => void;
  onNavigateContact: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  onNavigateHome,
  onNavigateAbout,
  onNavigateContact,
}) => {
  return (
    <header className="mb-auto">
      <div>
        <h3 className="float-md-start mb-0">Jonathan Pelletier</h3>
        <nav className="nav nav-masthead justify-content-center float-md-end">
          <a
            href="#"
            aria-current="page"
            className="nav-link active"
            onClick={(e) => {
              e.preventDefault();
              onNavigateHome();
            }}
          >
            Home
          </a>
          <a
            href="#"
            className="nav-link"
            onClick={(e) => {
              e.preventDefault();
              onNavigateAbout();
            }}
          >
            About
          </a>
          <a
            href="#"
            className="nav-link"
            onClick={(e) => {
              e.preventDefault();
              onNavigateContact();
            }}
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
