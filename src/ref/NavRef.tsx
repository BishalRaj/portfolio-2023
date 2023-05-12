import React, { useRef } from "react";

const NavRef = () => {
  const about = useRef(null);
  const experience = useRef(null);
  const work = useRef(null);
  const contact = useRef(null);

  return { about, experience, work, contact };
};

export default NavRef;
