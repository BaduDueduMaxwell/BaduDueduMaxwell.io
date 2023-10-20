import React from "react";
import "./footer.css";
import doc from "/Users/maxwell/portfolio_kode/src/assets/icon.png";
import github from "/Users/maxwell/portfolio_kode/src/assets/github.png";
import medium from "/Users/maxwell/portfolio_kode/src/assets/medium.png";
import linkedin from "/Users/maxwell/portfolio_kode/src/assets/linkedin.png";
import twitter from "/Users/maxwell/portfolio_kode/src/assets/twitter.png";


function Footer() {
  return (
    <div className="bg-[#202631] mt-5">
      <div className="pt-5">
        <ul>
          <li>
            <img src={doc} className="w-4 h-4" alt="document logo" />
          </li>
          <li>
            <img src={github} className="w-4 h-4" alt="document logo" />
          </li>
          <li>
            <img src={twitter} className="w-4 h-4" alt="document logo" />
          </li>

          <li>
            <img src={medium} className="w-4 h-4" alt="document logo" />
          </li>
          <li>
            <img src={linkedin} className="w-4 h-4" alt="document logo" />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
