import React, { FC } from "react";
import "./MainHeader.css";
import { ChildProp } from "../TypeChecks/TypeChecks";

type MainHeaderProps = {
  children: ChildProp;
};

const MainHeader: FC<MainHeaderProps> = (props) => {
  return <header className="main-header">{props.children}</header>;
};

export default MainHeader;
