import React from "react";
import maxwell from "../assets/duedu.jpg";
import icon from "../assets/icon.png";
import github from "../assets/github.png";
import medium from "../assets/medium.png";
import linkedin from "../assets/linkedin.png";
import twitter from "../assets/twitter.png";
import "./Hero.css";

function Hero() {
  return (
    <div className="flex bg-[#e8fdf5] pad">
      <div className="container">
        <div className="flex-1 relative">
          <h1 className="header__title z-10">Maxwell Duedu</h1>
        </div>
        <div className="">
          <p className="font-thin header__affiliation">
            I'm the walking <span>&lt;kode/&gt;</span>{" "}
          </p>
          <p className="font-thin header__affiliation">
            KIBO SCHOOL OF TECHNOLOGY
          </p>
        </div>
        <div className="pt-5">
          <ul className="icons-hero">
            <li>
              <a href="https://docs.google.com/document/d/1_U5rtzW80YcoXGuDe8EaKZVWiu7H3lLVzkiXVmXYiNs/edit">
                <img src={icon} className="w-4 h-4  ml-5" alt="document logo" />
              </a>
            </li>
            <li>
              <a href="https://github.com/BaduDueduMaxwell">
                <img src={github} className="w-4 h-4  ml-5" alt="github logo" />
              </a>
            </li>
            <li>
              <a href="https://twitter.com/duedumaxx">
                <img
                  src={twitter}
                  className="w-4 h-4  ml-5"
                  alt="twitter logo"
                />
              </a>
            </li>

            <li>
              <a href="https://medium.com/@duedumaxwell43">
                <img src={medium} className="w-4 h-4  ml-5" alt="medium logo" />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/maxwell-duedu-05a026199/">
                <img
                  src={linkedin}
                  className="w-4 h-4  ml-5"
                  alt="linkedin logo"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <div>
          <figure className="header__photo-wrapper">
            <img
              src={maxwell}
              className="header__photo"
              alt="an image of Maxwell Duedu"
            />
          </figure>
        </div>
      </div>
    </div>
  );
}

export default Hero;
