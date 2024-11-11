import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="home section container">
      <div className="write-up">
        <h1>Unleash AI Power for Business Growth and Online Safety</h1>
        <p>
          At Epower, we harness the transformative power of AI and
          no-code/low-code technologies to drive business performance and
          enhance digital safety.
        </p>

        <div className="buttons">
          <div className="btn f-btn">Get started</div>
          <div className="btn s-btn">Learn more</div>
        </div>
      </div>

      <div className="landing-image">
        <img className="hero_image" src="Hero_image-p-1080.webp" alt="" />
        <img className="hero_pattern" src="hero-pattern 2-p-500.png" alt="" />
      </div>
    </div>
  );
};

export default Home;
