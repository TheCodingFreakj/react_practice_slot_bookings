import React from "react";
import "./style.css";

import { CSSTransition } from "react-transition-group";
const SideDrawer = (props) => {
  return (
    <CSSTransition
      in={props.show}
      timeout={200}
      classNames="slide-in-left"
      mountOnEnter
      unmountOnExit
    >
      <aside className={props.mainmenu ? "main-sidebar" : "sidedrawer"}>
        <button
          className="main-nav-menu-button-close"
          onClick={props.closemenu}
        >
          x
        </button>
        {props.children}
      </aside>
    </CSSTransition>
  );
};

export default SideDrawer;
