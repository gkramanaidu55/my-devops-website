import React from "react";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container hero-content">
        <h1>Build, Store, and Deploy with Confidence</h1>
        <p>
          This sample website demonstrates a complete DevOps flow using React,
          GitHub, GitHub Actions, JFrog Artifactory, and Azure.
        </p>
        <a href="#features" className="hero-btn">
          Explore Features
        </a>
      </div>
    </section>
  );
}

export default Hero;