import * as React from "react";
import { useQuery } from "@apollo/client";
import { GET_FOOTER_CONTENT } from "../../queries/PageData";
import { TNavigationEntity } from "../../types/PageData";

import "./Footer.styles.scss";

type TQueryFooterData = {
  navigation: TNavigationEntity;
};

const Footer: React.FC = (): JSX.Element => {
  const { data } = useQuery<TQueryFooterData>(GET_FOOTER_CONTENT);
  return (
    <footer className="footer-block">
      <div className="footer-block--container">
        <ul className="footer-menu">
          {data?.navigation.footerMenu.map((footerItem) => {
            return (
              <li>
                <a href={footerItem.url} title={footerItem.title}>
                  {footerItem.name}
                </a>
              </li>
            );
          })}
        </ul>
          <p>{data?.navigation.footerContent}</p>
      </div>
    </footer>
  );
};

export default Footer;
