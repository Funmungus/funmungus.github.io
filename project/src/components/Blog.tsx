import React from "react";
import { NavLink } from "./NavLink";

const Blog: React.FC = () => {
  return (
    <div className="d-flex h-100 text-center text-white bg-primary-teal">
      <div className="container cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
        <h1 className="text-center mb-4">Blog</h1>
        <p className="px-3">
          This is where I will post my thoughts and musings about various
          topics, including but not limited to software development, games, and
          technology. I hope you will find this blog informative and
          entertaining.
        </p>

        <nav className="mt-3">
          <NavLink label="← Home" onClick={() => {}} />
        </nav>
      </div>
    </div>
  );
};

export default Blog;
