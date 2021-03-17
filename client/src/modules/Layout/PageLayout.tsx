import * as React from "react";
import Header from "../Header/Header";

import "./PageLayout.styles.scss";
import Footer from "../Footer/Footer";

const PageLayout: React.FC = ({ children }): JSX.Element => {
  return (
    <>
      <Header />
      <div className="container">{children}</div>
      <Footer />
    </>
  );
};

export default PageLayout;
