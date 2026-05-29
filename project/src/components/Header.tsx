import React from "react";
import { NavLink } from "./NavLink";

interface HeaderProps {
  onNavigateHome: () => void;
  onNavigateProjects: () => void;
  onNavigateExperience: () => void;
  onNavigateBlog: () => void;
  onNavigateResume: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  onNavigateHome,
  onNavigateProjects,
  onNavigateExperience,
  onNavigateBlog,
  onNavigateResume,
}) => {
  return (
    <header className="mb-auto">
      <div>
        <h3 className="float-md-start mb-0">Jonathan Pelletier</h3>
        <nav className="nav nav-masthead justify-content-center float-md-end">
          <NavLink label="Home" active={true} onClick={onNavigateHome} />
          <NavLink label="Projects" onClick={onNavigateProjects} />
          <NavLink label="Experience" onClick={onNavigateExperience} />
          <NavLink label="Blog" onClick={onNavigateBlog} />
          <NavLink label="Resumé" onClick={onNavigateResume} />
        </nav>
      </div>
    </header>
  );
};

export default Header;
