import React from "react";
import * as S from "./Button.styled";

interface ButtonProps {
  version?: "primary" | "secondary";
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  version = "primary",
  onClick,
  children,
}) => {
  return (
    <S.Button version={version} onClick={onClick}>
      {children}
    </S.Button>
  );
};

export default Button;
