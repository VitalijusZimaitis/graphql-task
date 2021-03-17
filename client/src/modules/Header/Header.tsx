import * as React from "react";
import Navbar from "../Navigation/Navbar";
import logo from "../../assets/images/logo.svg";

import "./Header.styles.scss";

const Header: React.FC = (): JSX.Element => {
  return (
    <header className="header-block">
      <div className="header-content">
        <img src={logo} alt="Logo" />
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
