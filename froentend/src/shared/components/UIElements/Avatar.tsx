import React from "react";
import "./Avatar.css";

interface AvatarProps {
  className?: string;
  style?: object;
  image: string;
  alt: string;
  width?: string;
}

const Avatar = (props: AvatarProps): JSX.Element => {
  return (
    <div className={`avatar ${props.className}`} style={props.style}>
      <img
        src={props.image}
        alt={props.alt}
        style={{ width: props.width, height: props.width }}
      />
    </div>
  );
};

export default Avatar;
