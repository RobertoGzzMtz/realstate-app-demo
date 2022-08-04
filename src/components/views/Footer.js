import { NavLink } from "react-router-dom";
import classes from "../css_modules/Menu.module.css";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.footerIcons}>
        <a
          href="https://github.com/RobertoGzzMtz"
          target="_blank"
          rel="noreferrer"
        >
          <i class="fa fa-github"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/roberto-emmanuel-gonz%C3%A1lez-mart%C3%ADnez-b46b13143/"
          target="_blank"
          rel="noreferrer"
        >
          <i class="fa fa-linkedin"></i>
        </a>
      </div>
      <NavLink
        className={(navData) => (navData.isActive ? classes.active : "")}
        to="/contact"
      ></NavLink>
      <p> </p>
    </footer>
  );
};

export default Footer;
