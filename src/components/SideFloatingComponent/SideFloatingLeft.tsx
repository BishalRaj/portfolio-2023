import React from "react";
import "./style.scss";
import social from "../../data/social";
const SideFloatingLeft = () => {
  const socialIcons = social.map((x) => (
    <a href={x?.link}>
      <li className="my-3">{x?.icon}</li>
    </a>
  ));
  return (
    <>
      <div className="floating-left">
        <ul>{socialIcons}</ul>
      </div>
      <div className="floating-right">
        <a href="mailto:shakya.bishalraj@gmail.com" className="my-3">
          shakya.bishalraj@gmail.com
        </a>
      </div>
    </>
  );
};

export default SideFloatingLeft;
