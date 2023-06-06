import React from "react";
import social from "../../data/social";
import "./style.scss";

const Footer = ({ screenSize }: any) => {
  const socialIcons = social.map((x, key) => (
    <a href={x?.link} target="_blank" key={key * 13} className="mx-2">
      <li className="my-3 side-icons">{x?.icon}</li>
    </a>
  ));
  return (
    <footer className="w-100">
      {screenSize > 428 ? (
        ""
      ) : (
        <div className="footer-icons w-100 d-flex align-items-center justify-content-center">
          <ul>{socialIcons}</ul>
        </div>
      )}
      <p className="text-center color-slate-light py-2">
        <small className="font-mono clear">Built by Bishal Raj Shakya</small>
      </p>
    </footer>
  );
};

export default Footer;
