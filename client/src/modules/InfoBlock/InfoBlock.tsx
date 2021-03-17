import * as React from "react";
import Block from "../../components/Block/Block";
import { useQuery } from "@apollo/client";
import { GET_INFO_BLOCK_CONTENT } from "../../queries/PageData";
import { TPageContentEntity } from "../../types/PageData";

import "./InfoBlock.styles.scss";

type TQueryPageData = {
  pageContent: TPageContentEntity;
};

const InfoBlock: React.FC = (): JSX.Element => {
  const { data } = useQuery<TQueryPageData>(GET_INFO_BLOCK_CONTENT);
  return (
    <Block variant="secondary">
      <div className="info-block--container">
        {data?.pageContent.infoBlock.map((message, index) => {
          return (
            <div key={index} className="info-block--message">
              {message}
            </div>
          );
        })}
      </div>
    </Block>
  );
};

export default InfoBlock;
