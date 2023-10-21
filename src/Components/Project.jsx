import React from "react";
import "./Project.css";
import wewire from "/Users/maxwell/portfolio_kode/src/assets/project_assets/wewire.png";
import ogateway from "/Users/maxwell/portfolio_kode/src/assets/project_assets/ogateway.png";
import afrotour from "/Users/maxwell/portfolio_kode/src/assets/project_assets/afrotour.png";
import kiboNavigator from "/Users/maxwell/portfolio_kode/src/assets/project_assets/kiboNavigator.png";
import { motion } from "framer-motion";

function Project() {
  return (
    <div>
      <div className="flex-1 relative">
        <h1 className="text-2xl font-extrabold relative z-10 pb-4">Projects</h1>
        <div className="overlay absolute inset-7 bg-[#f5c0a2] opacity-100 ml-20 w-auto"></div>
      </div>
     
      <div className="container">
        <div className="project">
          <motion.img
            whileHover={{ scale: 1.1 }}
            src={ogateway}
            alt="Internship company Maxwell has worked at."
          />
        </div>
        <div className="project">
          <motion.img
            whileHover={{ scale: 1.1 }}
            src={wewire}
            alt="Internship company Maxwell has worked at."
          />
        </div>
        <div className="project">
          <motion.img whileHover={{ scale: 1.1 }} src={afrotour} alt="Projects" />
        </div>
        <div className="project">
          <motion.img
            whileHover={{ scale: 1.1 }}
            src={kiboNavigator}
            alt="Projects"
          />
        </div>
      </div>
    </div>
  );
}

export default Project;
