import React from "react";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container hero-content">
        <h1>Hi Prakash & Jaya 👋</h1>
        <p>
          How are you guys? 🚀 This website is deployed using CI/CD with GitHub,
          JFrog, and Azure.
        </p>
        <a href="#features" className="hero-btn">
          Explore Features
        </a>
      </div>
    </section>
  );
}

export default Hero;