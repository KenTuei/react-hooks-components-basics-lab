// Home.js
import React from "react";

function Home({ username, city, image }) {
  return (
    <div id="home">
      <h1 style={{ color: "firebrick" }}>
        {username} is a Web Developer from {city}
      </h1>
      <img src={image} alt="User profile" />
    </div>
  );
}

export default Home;
