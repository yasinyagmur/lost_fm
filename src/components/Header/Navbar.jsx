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
          style={{
            textDecoration: "none",
            color: "unset",
            fontSize: "2rem",
            fontWeight: "bold",
          }}
        >
          Lost Fm
        </Link>
        <ul className="header-navbar">
          <li>
            <Link
              to="https://github.com/yasinyagmur"
              style={{ textDecoration: "none", color: "unset" }}
            >
              <TfiGithub /> Github
            </Link>
          </li>
          <li>
            <Link
              to="https://www.linkedin.com/in/yasinyagmur/"
              style={{ textDecoration: "none", color: "unset" }}
            >
              <TfiLinkedin /> Linkedin
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <button onClick={() => Done()} className="button">
          Dark
        </button>
      </div>
    </header>
  );
};

export default Navbar;
