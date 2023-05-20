import React, { FC } from "react";
import ReactDOM from "react-dom";
import "./SideDrawer.css";
import { ChildProp } from "../TypeChecks/TypeChecks";
import { CSSTransition } from "react-transition-group";

type SideDrawerProps = {
  children: ChildProp;
  show: boolean;
  onClick: () => void;
};

const SideDrawer: FC<SideDrawerProps> = (props) => {
  const content = (
    <CSSTransition
      in={props.show}
      timeout={200}
      classNames="slide-in-left"
      mountOnEnter
      unmountOnExit
    >
      <aside className="side-drawer" onClick={props.onClick}>
        {props.children}
      </aside>
    </CSSTransition>
  );

  return ReactDOM.createPortal(
    content,
    document.getElementById("drawer-hook")!
  );
};

export default SideDrawer;
