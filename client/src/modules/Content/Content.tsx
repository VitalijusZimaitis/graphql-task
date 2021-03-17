import * as React from "react";
import { useQuery } from "@apollo/client";
import { GET_PAGE_CONTENT } from "../../queries/PageData";
import { TPageContentEntity } from "../../types/PageData";
import Block from "../../components/Block/Block";

import "./Content.styles.scss";

type TQueryPageData = {
  pageContent: TPageContentEntity;
};

const Content: React.FC = (): JSX.Element => {
  const { data } = useQuery<TQueryPageData>(GET_PAGE_CONTENT);

  return (
    <Block>
      <h2>{data?.pageContent.title}</h2>
      <p>{data?.pageContent.content}</p>
    </Block>
  );
};

export default Content;
