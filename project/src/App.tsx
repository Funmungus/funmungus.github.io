import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import portraitImg from "./assets/portrait.jpg";

import { useEffect } from "react";

function App() {
  useEffect(() => {
    document.title = "Jonathan Pelletier";
  }, []);
  return (
    <div className="d-flex h-100 text-center text-white bg-dark">
      <div className="container cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
        <Header
          onNavigateHome={function (): void {
            throw new Error("Function not implemented.");
          }}
          onNavigateAbout={function (): void {
            throw new Error("Function not implemented.");
          }}
          onNavigateContact={function (): void {
            throw new Error("Function not implemented.");
          }}
          onNavigateProjects={function (): void {
            throw new Error("Function not implemented.");
          }}
          onNavigateBlog={function (): void {
            throw new Error("Function not implemented.");
          }}
          onNavigateExperience={function (): void {
            throw new Error("Function not implemented.");
          }}
          onNavigateResume={function (): void {
            throw new Error("Function not implemented.");
          }}
        ></Header>

        <main className="px-3">
          <section id="spacer"></section>
          <div className="row align-items-start mb-3">
            <img
              className="col img-thumbnail rounded-circle w-25 h-25"
              src={portraitImg}
              alt="profile picture"
            ></img>
            <div className="col align-self-end">
              <h1>Jonathan Pelletier</h1>
              <p className="lead">
                Hello. This is the self introduction page for Jonathan
                Pelletier. Nothing is here yet. Please look forward to it.
              </p>
              <span role="img" aria-label="bow" className="lead">
                🙇‍♂️
              </span>
            </div>
          </div>
          <section id="spacer">
            <p></p>
          </section>
          <section id="spacer"></section>
        </main>

        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
