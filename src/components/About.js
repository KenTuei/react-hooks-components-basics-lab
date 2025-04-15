// src/components/About.js
import React from "react";
import Links from "./Links"; // Make sure the import path is correct

function About({ bio, github, linkedin }) {
  return (
    <div id="about">
      <h2>About Me</h2>
      {bio && bio !== "" && <p>{bio}</p>}
      <Links github={github} linkedin={linkedin} /> {/* Pass down the links */}
    </div>
  );
}

export default About;
