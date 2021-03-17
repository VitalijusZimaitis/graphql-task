import * as React from "react";
import { HTMLProps } from "react";

import "../FormElement.styles.scss";

interface IInputProps extends HTMLProps<HTMLInputElement> {
  label: string;
}

const Input: React.FC<IInputProps> = ({
  label,
  type,
  name,
  ...rest
}): JSX.Element => {
  return (
    <div className="form-group">
      <label htmlFor="name">{label}</label>
      <input type={type} {...rest} />
    </div>
  );
};

export default Input;
