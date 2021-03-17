import * as React from "react";

import "./Button.styles.scss";

interface IButtonProps extends React.ComponentPropsWithoutRef<"button"> {
  variant: "primary" | "default";
}

const Button: React.FC<IButtonProps> = ({
  variant,
  children,
  ...rest
}): JSX.Element => {
  return (
    <button className={`btn btn-${variant}`} {...rest}>
      {children}
    </button>
  );
};

export default Button;
