import React from "react";

import { NavLink } from "./NavLink";

const Projects: React.FC = () => {
  return (
    <div className="d-flex h-100 text-center text-white bg-primary-teal">
      <div className="container cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
        <h1 className="text-center mb-4">Projects</h1>
        <p className="px-3">
          Here is a list of all the projects that I have created and contributed
          to. These projects showcase my skills and interests in full-stack
          development, game development, and interactive storytelling.
        </p>
        <nav className="mt-3">
          <NavLink label="← Home" onClick={() => {}} />
        </nav>
      </div>
    </div>
  );
};

export default Projects;
