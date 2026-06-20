import "./Input.css";
import type { ComponentProps } from "react";

type Props = ComponentProps<"input">;

const Input = ({ className, ...props }: Props) => {
  return (
    <input className={`input ${className ?? ""}`} {...props} />
  )
}

export default Input