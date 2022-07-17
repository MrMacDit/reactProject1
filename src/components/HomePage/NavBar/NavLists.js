import React from "react";
import style from "./NavLists.module.css";

const NavLists = (props) => {
  return (
    <nav className={style.nav}>
      <ul>
        {props.onNavLists && (
          <li>
            <a href="/">Users</a>
          </li>
        )}
        {props.onNavLists && (
          <li>
            <a href="/">Admin</a>
          </li>
        )}
        {props.onNavLists && (
          <li>
            <button type="button" onClick={props.onGetLogOut}>
              Log Out
            </button>
          </li>
        )}
        {props.onSignOut && (
          <li>
            <button>Sign Up</button>
          </li>
        )}
      </ul>
    </nav>
  );
};
export default NavLists;
