import React, { useContext } from "react";
import style from "./NavLists.module.css";
import Authorize from "../../../letsStore/authorizaation";

const NavLists = (props) => {
  let auth = useContext(Authorize)
  return (
    <nav className={style.nav}>
      <ul>
        {auth.whenLogIn && (
          <li>
            <a href="/">Users</a>
          </li>
        )}
        {auth.whenLogIn && (
          <li>
            <a href="/">Admin</a>
          </li>
        )}
        {auth.whenLogIn && (
          <li>
            <button type="button" onClick={props.onGetLogOut}>
              Log Out
            </button>
          </li>
        )}
        {/* Sign Out Button */}
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
