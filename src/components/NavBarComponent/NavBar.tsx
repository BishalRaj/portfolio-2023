import { Navbar as NavbarBs } from "react-bootstrap";
import navItems from "../../data/nav.json";
import firstLetterUpperCase from "../../utilities/firstLetterUpperCase";
import "./style.scss";
import { useEffect, useState } from "react";
// import { useRef } from "react";
// import { useIsVisible } from "../../utilities/useIsVisible";
// import NavRef from "../../ref/NavRef";

const NavBar = ({ onNavClick, navRef }: any) => {
  const { about, experience, work, contact } = navRef;
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const visible = prevScrollPos > currentScrollPos || currentScrollPos < 10;
      setPrevScrollPos(currentScrollPos);
      setVisible(visible);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <NavbarBs
      className={`px-5 py-3 nav-bar text-light shadow overflow-hidden fixed-top ${
        visible ? "visible" : "hidden"
      } `}
    >
      Bishal
      <ul className="ms-auto my-auto nav-list">
        {navItems.map((item, index) => (
          <li
            // to={`#${item.item}`}
            // as={NavLink}
            onClick={() => {
              switch (item.item) {
                case "about":
                  onNavClick(about);
                  break;
                case "experience":
                  onNavClick(experience);
                  break;
                case "work":
                  onNavClick(work);
                  break;
                case "contact":
                  onNavClick(contact);
                  break;
              }
            }}
            key={index * 1561}
            className="px-4"
          >
            <span>0{index + 1}.</span> {firstLetterUpperCase(item.item)}
          </li>
        ))}
      </ul>
      {/* <Nav className="ms-auto">
        {navItems.map((item, index) => (
          <Nav.Link
            to={`#${item.item}`}
            as={NavLink}
            key={index * 1561}
            className="px-4 text-light nav-text"
          >
            <span>0{index + 1}.</span> {firstLetterUpperCase(item.item)}
          </Nav.Link>
        ))}
      </Nav> */}
    </NavbarBs>
  );
};

export default NavBar;
