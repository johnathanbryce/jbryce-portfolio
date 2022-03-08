import classes from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={classes.header}>
      <h1> John Bryce </h1>
      <nav>
        <ul>
          <li> About </li>
          <li> Projects </li>
          <li> Skills </li>
          <li> Contact </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
