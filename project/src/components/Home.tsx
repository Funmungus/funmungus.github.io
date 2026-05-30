import React from "react";
import portraitImg from "../assets/portrait.jpg";

const Experience: React.FC = () => {
  return (
    <>
      <section id="spacer"></section>
      <div className="row align-items-start mb-3">
        <img
          className="bg-info-teal col img-thumbnail rounded-circle w-25 px-5 mx-5"
          src={portraitImg}
          alt="profile picture"
        ></img>
        <div className="col align-self-end">
          <h1>Jonathan Pelletier</h1>
          <h2>Software Engineer</h2>
          <p className="subtitle">
            I am a full stack developer with game and storytelling interest.
          </p>
          <p className="lead">
            Hello. This is the self introduction page for Jonathan Pelletier.
            Nothing is here yet. Please look forward to it.
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
    </>
  );
};

export default Experience;
