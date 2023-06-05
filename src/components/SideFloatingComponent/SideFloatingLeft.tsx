import React from "react";
import "./style.scss";
import social from "../../data/social";
import { FiSettings } from "react-icons/fi";
const SideFloatingLeft = () => {
  const socialIcons = social.map((x, key) => (
    <a href={x?.link} target="_blank" key={key * 13}>
      <li className="my-3 side-icons">{x?.icon}</li>
    </a>
  ));
  return (
    <>
      <div className="floating-left">
        <ul>
          {socialIcons}
          <li className="my-3">
            <FiSettings className="icon-settings side-icons" />
          </li>
        </ul>
      </div>
      <div className="floating-right">
        <a href="mailto:shakya.bishalraj@gmail.com" className="my-3 side-icons">
          shakya.bishalraj@gmail.com
        </a>
      </div>
    </>
  );
};

export default SideFloatingLeft;
