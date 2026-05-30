import React from "react";
import { NavLink } from "./NavLink";

interface HeaderProps {
  onNavigateHome: () => void;
  onNavigateProjects: () => void;
  onNavigateExperience: () => void;
  onNavigateBlog: () => void;
  onNavigateResume: () => void;
  activePage: string;
}

export const Header: React.FC<HeaderProps> = ({
  onNavigateHome,
  onNavigateProjects,
  onNavigateExperience,
  onNavigateBlog,
  onNavigateResume,
  activePage,
}) => {
  return (
    <header className="mb-auto">
      <div>
        <h3 className="float-md-start mb-0">Jonathan Pelletier</h3>
        <nav className="nav nav-masthead justify-content-center float-md-end">
          <NavLink
            label="Home"
            active={activePage === "home" && true}
            onClick={onNavigateHome}
          />
          <NavLink
            label="Projects"
            active={activePage === "projects" && true}
            onClick={onNavigateProjects}
          />
          <NavLink
            label="Experience"
            active={activePage === "experience" && true}
            onClick={onNavigateExperience}
          />
          <NavLink
            label="Blog"
            active={activePage === "blog" && true}
            onClick={onNavigateBlog}
          />
          <NavLink label="Resumé" active={false} onClick={onNavigateResume} />
        </nav>
      </div>
    </header>
  );
};

export default Header;
