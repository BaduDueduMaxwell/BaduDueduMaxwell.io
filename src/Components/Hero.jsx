import React from "react";
import maxwell from "/Users/maxwell/portfolio_kode/src/assets/duedu.jpeg";
import doc from "/Users/maxwell/portfolio_kode/src/assets/icon.png";
import github from "/Users/maxwell/portfolio_kode/src/assets/github.png";
import medium from "/Users/maxwell/portfolio_kode/src/assets/medium.png";
import linkedin from "/Users/maxwell/portfolio_kode/src/assets/linkedin.png";
import twitter from "/Users/maxwell/portfolio_kode/src/assets/twitter.png";
import "./Hero.css";

function Hero() {
  return (
    <div className="flex bg-[#e8fdf5]">
      <div className="container">
        <div className="flex-1 relative">
          <h1 className="text-2xl font-extrabold relative z-10">
            Maxwell Duedu
          </h1>
          <div className="sm:overlay bg-top absolute inset-7 bg-[#f5c0a2] opacity-100 w-40"></div>

          <p className="font-thin slogan">
            I'm the walking <span>&lt;kode/&gt;</span>{" "}
          </p>
        </div>
        <div className="flex-1">
          <h6 className="font-thin school">KIBO SCHOOL OF TECHNOLOGY</h6>
        </div>
        <div className="pt-5">
          <ul className="icons">
            <li>
              <img src={doc} className="w-4 h-4  ml-5" alt="document logo" />
            </li>
            <li>
              <img src={github} className="w-4 h-4  ml-5" alt="document logo" />
            </li>
            <li>
              <img src={twitter} className="w-4 h-4  ml-5" alt="document logo" />
            </li>

            <li>
              <img src={medium} className="w-4 h-4  ml-5" alt="document logo" />
            </li>
            <li>
              <img src={linkedin} className="w-4 h-4  ml-5" alt="document logo" />
            </li>
          </ul>
        </div>
      </div>

      <div>
        <div className="flex-1">
          <img
            src={maxwell}
            className="w-40 headshot"
            alt="an image of Maxwell Duedu"
          />
        </div>
        <div>
          <p className="ml-5 mr-5 pb-3">
            "Fluent Python is the best book to learn Python"
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
