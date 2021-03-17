import * as React from "react";

import "./Block.styles.scss";

const Block: React.FC = ({ children }): JSX.Element => {
  return <div className="content">{children}</div>;
};

export default Block;
