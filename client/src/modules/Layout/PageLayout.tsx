import * as React from "react";
import Header from "../Header/Header";

import "./PageLayout.styles.scss";

const PageLayout: React.FC = ({ children }): JSX.Element => {
  return (
    <>
      <Header />
      <div className="container">
          {children}
      </div>
    </>
  );
};

export default PageLayout;
