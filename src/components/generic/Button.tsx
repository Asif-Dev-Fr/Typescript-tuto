import Link from "next/link";
import React from "react";

type ButtonProps = {
  color: string;
  link: string;
  text: string;
  textColor?: string;
};

const Button = (props: ButtonProps) => {
  return (
    <div className="button">
      <button
        style={{
          backgroundColor: props.color,
          color: props.color === "black" ? props.textColor : "black",
        }}
      >
        <Link href={props.link}> {props.text} </Link>
      </button>
    </div>
  );
};

export default Button;
