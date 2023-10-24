import React from "react";
import "./footer.css";
import doc from "/Users/maxwell/portfolio_kode/src/assets/icon.png";
import github from "/Users/maxwell/portfolio_kode/src/assets/github.png";
import medium from "/Users/maxwell/portfolio_kode/src/assets/medium.png";
import linkedin from "/Users/maxwell/portfolio_kode/src/assets/linkedin.png";
import twitter from "/Users/maxwell/portfolio_kode/src/assets/twitter.png";

function Footer() {
  return (
    <div className="bg-[#e8fdf5]  mt-5 pb-5">
      <p className="footer-parag ">Designed and built by Maxwell Duedu.</p>
      <p className="footer-parag pl-5 pr-5">
        There are many imitations, but this one is mine.
      </p>
      <div>
        <ul className="icons">
          <li className="pl-5">
            <img src={doc} className="w-4 h-4" alt="document logo" />
          </li>
          <li className="pl-5">
            <img src={github} className="w-4 h-4" alt="document logo" />
          </li>
          <li className="pl-5">
            <img src={twitter} className="w-4 h-4" alt="document logo" />
          </li>

          <li className="pl-5">
            <img src={medium} className="w-4 h-4" alt="document logo" />
          </li>
          <li className="pl-5">
            <img src={linkedin} className="w-4 h-4" alt="document logo" />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
