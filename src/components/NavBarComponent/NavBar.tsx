import { Nav, Navbar as NavbarBs } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import navItems from "../../data/nav.json";
import firstLetterUpperCase from "../../utilities/firstLetterUpperCase";
import "./style.scss";

const NavBar = () => {
  return (
    <NavbarBs className="px-5 py-3 nav-bar text-light shadow overflow-hidden">
      Bishal
      <Nav className="ms-auto">
        {navItems.map((item, index) => (
          <Nav.Link
            to={item.item}
            as={NavLink}
            key={index * 1561}
            className="px-4 text-light nav-text"
          >
            <span>0{index + 1}.</span> {firstLetterUpperCase(item.item)}
          </Nav.Link>
        ))}
      </Nav>
    </NavbarBs>
  );
};

export default NavBar;
