import "./Navbar.css";
import { TfiGithub, TfiLinkedin } from "react-icons/tfi";

const Navbar = () => {
  return (
    <header>
      <div className="wrapper">
        <h2 className="header-title">Lost Fm</h2>
        <ul className="header-navbar">
          <li>
            <TfiGithub /> Github
          </li>
          <li>
            <TfiLinkedin /> Linkedin
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
