import React from "react";
import PageLayout from "./modules/Layout/PageLayout";
import FormContent from "./modules/Form/FormContent";

import "./App.styles.scss";
import Content from "./modules/Content/Content";

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
      </section>
    </PageLayout>
  );
}

export default App;
