import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";

const navActiveClass = ({ isActive }) => (isActive ? css.active : "");

const Navigation = () => {
  return (
    <div>
      <nav>
        <ul className={css.navList}>
          <li className={css.navListItem}>
            <NavLink className={navActiveClass} to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className={navActiveClass} to="/movies">
              Movies
            </NavLink>
          </li>
        </ul>
      </nav>
      <hr />
    </div>
  );
};

export default Navigation;
