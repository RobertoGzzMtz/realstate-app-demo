import { NavLink } from "react-router-dom";
import classes from "../css_modules/Menu.module.css";

const Menu = () => {
  return (
    <header className={classes.header}>
      <nav>
        <ul>
          <li>
            <NavLink to="/home">Inicio</NavLink>
          </li>
          <li></li>
          <li></li>
        </ul>
      </nav>
    </header>
  );
};

export default Menu;
