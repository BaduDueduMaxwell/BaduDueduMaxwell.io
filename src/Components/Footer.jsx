import React from "react";
import "./footer.css";
import doc from "/Users/maxwell/portfolio_kode/src/assets/icon.png";
import github from "/Users/maxwell/portfolio_kode/src/assets/github.png";
import medium from "/Users/maxwell/portfolio_kode/src/assets/medium.png";
import linkedin from "/Users/maxwell/portfolio_kode/src/assets/linkedin.png";
import twitter from "/Users/maxwell/portfolio_kode/src/assets/twitter.png";

function Footer() {
  return (
    <div className="bg-[#e8fdf5]  mt-5 pt-3 pb-5">
      <p className="footer-parag ">Designed and built by Maxwell Duedu.</p>
      <p className="footer-parag pl-5 pr-5">
        There are many imitations, but this one is mine.
      </p>
      <div>
        <ul className="icons">
          <li>
            <a href="https://docs.google.com/document/d/1_U5rtzW80YcoXGuDe8EaKZVWiu7H3lLVzkiXVmXYiNs/edit">
              <img src={doc} className="w-4 h-4  ml-5" alt="document logo" />
            </a>
          </li>
          <li>
            <a href="https://github.com/BaduDueduMaxwell">
              <img src={github} className="w-4 h-4  ml-5" alt="github logo" />
            </a>
          </li>
          <li>
            <a href="https://twitter.com/duedumaxx">
              <img src={twitter} className="w-4 h-4  ml-5" alt="twitter logo" />
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
  );
}

export default Footer;
