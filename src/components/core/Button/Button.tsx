import { ButtonHTMLAttributes } from "react";

import "./Button.scss";

const BASE_CLASS = "button";

type Props = ButtonHTMLAttributes<HTMLButtonElement>;
export function Button({ className, children, ...rest }: Props) {
  const classes = [BASE_CLASS, className].join(" ");

  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}
