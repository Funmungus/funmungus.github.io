import React from "react";
import { NavLink } from "./NavLink";

const Experience: React.FC = () => {
  return (
    <div className="d-flex h-100 text-center text-white bg-primary-teal">
      <div className="container cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
        <h1 className="text-center mb-4">Experience</h1>
        <p className="px-3">
          Here is a list of all of my professional and freelance job experience.
          I have been working in the industry for a few years now, and I have
          had the opportunity to work with a variety of clients and teams.
        </p>
        <nav className="mt-3">
          <NavLink label="← Home" onClick={() => {}} />
        </nav>
      </div>
    </div>
  );
};

export default Experience;
