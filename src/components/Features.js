import React from "react";

function Features() {
  const featureList = [
    {
      title: "React Frontend",
      description: "Modern UI built using reusable React components."
    },
    {
      title: "GitHub Repository",
      description: "Source code stored and version-controlled in GitHub."
    },
    {
      title: "GitHub Actions CI/CD",
      description: "Automated build pipeline to validate and package the app."
    },
    {
      title: "JFrog Artifactory",
      description: "Store the generated build artifact securely."
    },
    {
      title: "Azure Deployment",
      description: "Deploy the final build to Azure for hosting."
    },
    {
      title: "Easy Learning Project",
      description: "A beginner-friendly project to understand end-to-end DevOps."
    }
  ];

  return (
    <section className="features" id="features">
      <div className="container">
        <h2>Project Features</h2>
        <div className="feature-grid">
          {featureList.map((feature, index) => (
            <div className="feature-card" key={index}>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;