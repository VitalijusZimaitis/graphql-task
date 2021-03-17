import * as React from "react";
import { HTMLProps } from "react";

import "../FormElement.styles.scss";

interface IInputProps extends HTMLProps<HTMLTextAreaElement> {
  label: string;
}

const Textarea: React.FC<IInputProps> = ({
  label,
  type,
  name,
  ...rest
}): JSX.Element => {
  return (
    <div className="form-group">
      <label htmlFor="name">{label}</label>
      <textarea {...rest} />
    </div>
  );
};

export default Textarea;
