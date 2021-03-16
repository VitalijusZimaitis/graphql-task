import React from "react";
import { useQuery } from "@apollo/client";
import { TPageContentEntity } from "./types/PageData";
import { GET_PAGE_CONTENT } from "./queries/PageData";
import PageLayout from "./components/Layout/PageLayout";

type TQueryPageData = {
  pageContent: TPageContentEntity;
};

function App() {
  const { loading, data } = useQuery<TQueryPageData>(GET_PAGE_CONTENT);

  if (loading) {
    return <>Loading...</>;
  }

  return (
    <PageLayout>
      <h2>{data?.pageContent.title}</h2>
      <p>{data?.pageContent.content}</p>
    </PageLayout>
  );
}

export default App;
