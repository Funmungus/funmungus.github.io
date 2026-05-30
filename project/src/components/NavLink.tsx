import React from "react";

interface NavLinkProps {
  label: string;
  onClick: () => void;
  active?: boolean;
}

export const NavLink: React.FC<NavLinkProps> = ({ label, onClick, active }) => {
  return (
    <a
      href="#"
      className={`nav-link ${active ? "active" : ""}`}
      onClick={(e) => {
        e.preventDefault();
        onClick();
      }}
    >
      {label}
    </a>
  );
};

export default NavLink;
