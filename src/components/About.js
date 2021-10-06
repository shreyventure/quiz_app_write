import React from "react";

const About = () => {
  return (
    <div className="w-100 h-100">
      <h2 className="text-warning mb-4">About this app</h2>
      <p className="mb-1" style={{ color: "white" }}>
        Created using{" "}
        <a className="text-light" href="www.appwrite.io">
          Appwrite.io
        </a>
        .
      </p>
      <p style={{ color: "white" }}>Version: 1.0.0</p>
    </div>
  );
};

export default About;
