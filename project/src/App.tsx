import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

import { useState, useEffect } from "react";
import Projects from "./components/Projects";
import Home from "./components/Home";
import Blog from "./components/Blog";
import Experience from "./components/Experience";

type Page = "home" | "projects" | "blog" | "experience" | "resume";

function App() {
  const [view, setView] = useState<Page>("home");

  useEffect(() => {
    document.title = "Jonathan Pelletier";
  }, []);

  return (
    <div className="d-flex h-100 text-center text-white bg-primary-teal">
      <div className="container cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
        <Header
          onNavigateHome={() => setView("home")}
          onNavigateProjects={() => setView("projects")}
          onNavigateBlog={() => setView("blog")}
          onNavigateExperience={() => setView("experience")}
          onNavigateResume={() => setView("resume")}
          activePage={view}
        ></Header>

        <main className="px-3">
          {view == "home" && <Home></Home>}
          {view == "projects" && <Projects></Projects>}
          {view == "blog" && <Blog></Blog>}
          {view == "experience" && <Experience></Experience>}
        </main>

        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
