import styled from "styled-components";

interface ButtonStyleProps {
  version: "primary" | "secondary";
}

export const Button = styled.button<ButtonStyleProps>`
  background-color: ${({ version, theme }) =>
    version === "primary" ? theme.color.primary : theme.color.secondary};
  color: ${({ version, theme }) =>
    version === "primary" ? theme.color.secondary : theme.color.primary};
  padding: 10px 20px;
  border: none;
  border-radius: 1rem;
  cursor: pointer;
  font-size: 1rem;

  &:hover {
    opacity: 0.9;
  }
`;
