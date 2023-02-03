import "./Navbar.css";
import { TfiGithub, TfiLinkedin } from "react-icons/tfi";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { ThemeChangeContext } from "../../context/ThemeChangeContext";
const Navbar = () => {
  const { setClick, themeMode } = useContext(ThemeChangeContext);

  const [isClick, setIsClick] = useState(true);
  console.log(isClick);
  const Done = () => {
    setIsClick(!isClick);
    setClick(isClick);
  };
  return (
    <header style={themeMode}>
      <div className="wrapper">
        <Link
          to="/"
          className="link-router"
          style={{
            textDecoration: "none",
            color: "unset",
            fontSize: "2rem",
            fontWeight: "bold",
          }}
          data-testid="navbarlinkhome"
        >
          Lost Fm
        </Link>
        <ul className="header-navbar">
          <li>
            <Link
              to="https://github.com/yasinyagmur"
              style={{ textDecoration: "none", color: "unset" }}
              data-testid="navbarlinkgithub"
            >
              <TfiGithub /> Github
            </Link>
          </li>
          <li>
            <Link
              to="https://www.linkedin.com/in/yasinyagmur/"
              style={{ textDecoration: "none", color: "unset" }}
              data-testid="navbarlinklinkedin"
            >
              <TfiLinkedin /> Linkedin
            </Link>
          </li>
          <li>
            <button
              style={themeMode}
              onClick={() => Done()}
              className="button dark-light"
            >
              {isClick ? "Dark" : "Light"}
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
