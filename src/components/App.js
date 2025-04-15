// src/components/App.js
import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";
import Links from "./Links"; // Ensure it's imported here too if used
import { username, city, image, bio, github, linkedin } from "../data/user";

function App() {
  return (
    <div>
      <NavBar />
      <Home username={username} city={city} image={image} />
      <About bio={bio} github={github} linkedin={linkedin} />
    </div>
  );
}

export default App;
