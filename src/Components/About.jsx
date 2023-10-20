import React from "react";
import "./About.css";

function About() {
  return (
    <div className="flex-1 relative">
      <h1 className="text-2xl font-extrabold relative z-10">About</h1>
      <div className="overlay absolute inset-7 bg-[#f5c0a2] opacity-100 ml-20 w-auto"></div>
      <div className="about-info">
        <p className="text-left">
          My name is Maxwell, and I am a Software Engineer. Lorem ipsum, dolor
          sit amet consectetur adipisicing elit. Cum, incidunt, quod ut iste
          reprehenderit distinctio qui error animi ab dignissimos possimus neque
          sint rerum voluptate, libero doloremque sunt quia vel?
        </p>
        <br />
        <p className="text-left">
          My name is Maxwell, and I am a Software Engineer. Lorem ipsum, dolor
          sit amet consectetur adipisicing elit. Cum, incidunt, quod ut iste
          reprehenderit distinctio qui error animi ab dignissimos possimus neque
          sint rerum voluptate, libero doloremque sunt quia vel?
        </p>
      </div>
    </div>
  );
}

export default About;
