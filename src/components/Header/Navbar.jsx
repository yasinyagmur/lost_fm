import "./Navbar.css";
import { TfiGithub, TfiLinkedin } from "react-icons/tfi";
import { useNavigate, NavLink } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <header className="bg-light">
      <div className="wrapper">
        <h2
          className="header-title"
          style={{ cursor: "pointer" }}
          onClick={() => navigate("/")}
        >
          Lost Fm
        </h2>
        <ul className="header-navbar">
          <li>
            <NavLink
              to="https://github.com/yasinyagmur"
              style={{ textDecoration: "none", color: "unset" }}
            >
              <TfiGithub /> Github
            </NavLink>
          </li>
          <li>
            <NavLink
              to="https://www.linkedin.com/in/yasinyagmur/"
              style={{ textDecoration: "none", color: "unset" }}
            >
              <TfiLinkedin /> Linkedin
            </NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
