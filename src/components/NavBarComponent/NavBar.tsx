import { Nav, Navbar as NavbarBs } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import navItems from "../../data/nav.json";
import firstLetterUpperCase from "../../utilities/firstLetterUpperCase";
const NavBar = () => {
  return (
    <NavbarBs className="bg-danger px-5">
      Logo
      <Nav className="ms-auto">
        {navItems.map((item, index) => (
          <Nav.Link to={item.item} as={NavLink} key={index * 1561}>
            <span>0{index + 1}.</span> {firstLetterUpperCase(item.item)}
          </Nav.Link>
        ))}
      </Nav>
    </NavbarBs>
  );
};

export default NavBar;
