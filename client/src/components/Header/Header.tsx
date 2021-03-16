import * as React from "react";
import Navbar from "../Navigation/Navbar";

import "./Header.styles.scss";

const Header: React.FC = (): JSX.Element => {
  return (
    <header className="header-block">
      <Navbar />
    </header>
  );
};

export default Header;
