import { ReactNode } from "react";
import ButtonPrimary from "./ButtonPrimary";

interface ButtonExtensions {
  Primary: typeof ButtonPrimary;
}

interface Props {
  children: ReactNode;
}

const Button: React.FC<Props> & ButtonExtensions = ({
  children,
}): JSX.Element => {
  return <>{children}</>;
};

export default Button;

Button.Primary = ButtonPrimary;
