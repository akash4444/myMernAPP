import React, { FC } from "react";
import ReactDOM from "react-dom";

import "./BackDrop.css";

type BackDropProps = {
  onClick: () => void;
};

const Backdrop: FC<BackDropProps> = (props) => {
  return ReactDOM.createPortal(
    <div className="backdrop" onClick={props.onClick}></div>,
    document.getElementById("backdrop-hook")!
  );
};

export default Backdrop;
