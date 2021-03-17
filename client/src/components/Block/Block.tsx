import * as React from "react";

import "./Block.styles.scss";

interface IBlockProps {
  variant?: "primary" | "secondary";
}

const Block: React.FC<IBlockProps> = ({
  variant = "primary",
  children,
}): JSX.Element => {
  return <div className={`content ${variant}`}>{children}</div>;
};

export default Block;
