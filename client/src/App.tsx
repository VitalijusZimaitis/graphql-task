import React from "react";
import PageLayout from "./components/Layout/PageLayout";
import FormContent from "./components/Form/FormContent";

import "./App.styles.scss";
import Content from "./components/Content/Content";

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
