import style from "./NavBar.module.css";
import { NavLink } from "react-router-dom";
import Friends from "./Friends/Friends";

const NavBar = () => {
  return (
    <nav className={style.nav}>
      <ul>
        <li className={style.item}>
          <NavLink to="/Profile">Profile</NavLink>
        </li>
        <li className={style.item}>
          <NavLink to="/Dialogs">Messages</NavLink>
        </li>
        <li className={style.item}>
          <NavLink to="/News">News</NavLink>
        </li>
        <li className={style.item}>
          <NavLink to="/Music">Music</NavLink>
        </li>
        <li className={style.item}>
          <NavLink to="/Settings">Settings</NavLink>
        </li>
        <li className={style.item}>
          <NavLink to="/Friends">Friends</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
