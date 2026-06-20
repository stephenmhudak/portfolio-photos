import "./Button.css";
import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
  disabled?: boolean;
  onClick?: () => void;
}

const Button = ({ children, disabled, onClick }: Props) => {

  return (
    <button type="button" className="btn" disabled={disabled} onClick={disabled ? undefined : onClick}>
      {children}
    </button>
  );
};

export default Button;
