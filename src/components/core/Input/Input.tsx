import { InputHTMLAttributes } from "react";

const BASE_CLASS = "input";

type Props = InputHTMLAttributes<HTMLInputElement>;

export function Input({ className, ...rest }: Props) {
  const classes = [BASE_CLASS, className].join(" ");

  return <input className={classes} {...rest} />;
}
