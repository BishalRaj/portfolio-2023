import { Navbar as NavbarBs } from "react-bootstrap";
import { useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import navItems from "../../data/nav.json";
import firstLetterUpperCase from "../../utilities/firstLetterUpperCase";
import "./style.scss";
import { Fade } from "react-reveal";

const NavBar = ({ onNavClick, navRef, screenSize }: any) => {
  const { intro, about, experience, work, contact } = navRef;
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
      <span onClick={() => onNavClick(intro)} style={{ cursor: "pointer" }}>
        Bishal
      </span>
      <ul className="ms-auto my-auto nav-list">
        {screenSize > 428 ? (
          navItems.map((item, index) => (
            <Fade left key={index * 1561}>
              <li
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
                className="px-4"
              >
                <span>0{index + 1}.</span> {firstLetterUpperCase(item.item)}
              </li>
            </Fade>
          ))
        ) : (
          <div>
            <RxHamburgerMenu />
          </div>
        )}
      </ul>
    </NavbarBs>
  );
};

export default NavBar;
