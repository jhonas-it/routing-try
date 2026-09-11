import { NavLink } from "react-router-dom";
import "./Navbar.css";

const activeLink = {
  fontWeight: "bold",
};
const inactiveLink = {
  fontWeight: "normal",
};

const NavBar = () => {
  return (
    <nav className="navbar">
      <NavLink className="logo" to="/">
        Lola's Kitchen
      </NavLink>
      <div className="nav-links">
        <NavLink
          to="/"
          end
          style={({ isActive }) => (isActive ? activeLink : inactiveLink)}
        >
          Home
        </NavLink>
        <NavLink
          to="/About"
          end
          style={({ isActive }) => (isActive ? activeLink : inactiveLink)}
        >
          About
        </NavLink>
      </div>
    </nav>
  );
};

export default NavBar;