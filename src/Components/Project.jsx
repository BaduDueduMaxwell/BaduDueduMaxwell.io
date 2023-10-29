import React from "react";
import "./Project.css";
import wewire from "../assets/project_assets/wewire.png";
import ogateway from "../assets/project_assets/ogateway.png";
import afrotour from "../assets/project_assets/afrotour.png";
import kiboNavigator from "../assets/project_assets/kiboNavigator.png";
import { motion } from "framer-motion";

function Project() {
  return (
    <div>
      <div className="flex-1">
        <h2 className="text-2xl font-extrabold pb-4">Projects</h2>
      </div>

      <div className="container-1">
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
          <motion.img
            whileHover={{ scale: 1.1 }}
            src={afrotour}
            alt="Projects"
          />
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
