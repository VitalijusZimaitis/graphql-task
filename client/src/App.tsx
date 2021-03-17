import React from "react";
import PageLayout from "./modules/Layout/PageLayout";
import FormContent from "./modules/Form/FormContent";
import Content from "./modules/Content/Content";
import InfoBlock from "./modules/InfoBlock/InfoBlock";

import "./App.styles.scss";

export const App = () => {
  return (
    <PageLayout>
      <section className="page-content--container">
        <div className="page-content">
          <Content />
        </div>
        <div className="form-content">
          <FormContent />
        </div>
        <div className="info-block">
          <InfoBlock />
        </div>
      </section>
    </PageLayout>
  );
};

export default App;
