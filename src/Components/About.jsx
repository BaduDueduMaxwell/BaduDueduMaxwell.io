import React from "react";
import "./About.css";

function About() {
  return (
    <div className="flex-1 relative mt-20">
      <h2 className="text-2xl font-extrabold ">About</h2>
      <div className="about-info">
        <p className="text-left text-pad">
          Welcome to my corner of the web! I am{" "}
          <a href="https://www.linkedin.com/in/maxwell-duedu-05a026199/">
            Maxwell Duedu
          </a>
          , a passionate and innovative Software Engineer with a keen eye for
          solving complex problems and a love for turning ideas into reality. I
          am very passionate and dedicated to my work. With 10 months experience
          as a professional developer, I have acquired the skills and knowledge
          necessary to make your project a success. I enjoy every step of the
          developing process, from discussion and collaboration to concept and
          execution, but I find the most satisfaction in seeing the finished
          product do everything for you that it was created to do.
        </p>
        <br />
        <p className="text-left text-pad">
          In my previous role as a Frontend Engineering Intern at{" "}
          <a href="https://ogateway.io">Open Gateway</a>, I built and iterated
          on frontend features with the supervision of Senior Developers. I also
          fused quality sense through testing, bugs fixes, and adherence to
          specifications and usability standards. Additionally, I contributed to
          cross border transactions by participating in team meetings, scrum
          sessions, and code reviews.
        </p>
        <br />
        <p className="text-left text-pad">
          In my most recent role as a Frontend Engineering Intern at{" "}
          <a href="https://www.wewireafrica.com/">Wewire Africa</a>, I
          collaborated with designers, backend developers, product managers, and
          QA testers to deliver a cross border payment system. I created a
          clean, efficient, and responsive website using TypeScript and React. I
          also designed and implemented quality assurance and testing processes
          to pinpoint and rectify frontend-related issues and bugs.
        </p>
        <br />
        <p className="text-left text-pad">
          In addition to my technical skills, I am also a quick learner and am
          always eager to take on new challenges. I am also proficient in
          Python, HTML, JavaScript, TypeScript language, and Flask. I am also
          familiar with the following tools: VSCode, GIT, React, and NPM. I am
          also certified in How to be Awesome (DousH). I am fluent in English
          and have a basic understanding of French.
        </p>
      </div>
    </div>
  );
}

export default About;
