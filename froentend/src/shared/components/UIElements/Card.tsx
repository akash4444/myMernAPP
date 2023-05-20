import React from "react";
import "./Card.css";
import { ChildProp } from "../TypeChecks/TypeChecks";

interface CardProps {
  className: string;
  style?: object;
  children: ChildProp;
}

const Card = (props: CardProps): JSX.Element => {
  return (
    <div className={`card ${props.className}`} style={props.style}>
      {props.children}
    </div>
  );
};

export default Card;
