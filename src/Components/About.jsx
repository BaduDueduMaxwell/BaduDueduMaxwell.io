import React from "react";
import "./About.css";

function About() {
  return (
    <div className="flex-1 relative mt-20">
      <h2 className="text-2xl font-extrabold ">About</h2>
      <div className="about-info">
        <p className="text-left text-pad">
          Welcome to my corner of the web! I am Maxwell Duedu, a passionate and
          innovative Software Engineer with a keen eye for solving complex
          problems and a love for turning ideas into reality. I'm excited to
          share my journey, skills, and projects with you.
        </p>
        <br />
        <p className="text-left text-pad">
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
