import React from "react";
import NavLists from "./NavLists";
import style from "./NavTitle.module.css";

const NavTitle = (props) => {
  return (
    <header className={style.navTiles}>
      <h1>My Purchases</h1>
      <NavLists onSignOut={props.onSignOut} onNavLists={props.onNavLists} onGetLogOut={props.onGetLogOut}/>
    </header>
  );
};
export default NavTitle;
