import classes from "./Navbar.module.css";

import { BrowserRouter } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";

const Navbar = () => {
  return (
    <BrowserRouter>
      <div className={classes.header}>
        <h1>
          {" "}
          John Bryce <span className={classes.highlight}>Web Development </span>
        </h1>
        <nav>
          <ul>
            <li>
              <Link to="#about" smooth={true} ClassName={classes.active}>
                About
              </Link>
            </li>
            <li>
              <Link
                to="#projects"
                smooth={true}
                activeClassName={classes.active}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link to="#skills" smooth={true} ClassName={classes.active}>
                Skills
              </Link>
            </li>
            <li>
              <Link
                to="#contact"
                smooth={true}
                activeClassName={classes.active}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </BrowserRouter>
  );
};

export default Navbar;
