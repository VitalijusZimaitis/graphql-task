import * as React from "react";
import { TNavigationEntity } from "../../types/PageData";
import { useQuery } from "@apollo/client";
import { GET_MAIN_MENU_CONTENT } from "../../queries/PageData";

import "./Navbar.styles.scss";

type TQueryNavbarData = {
  navigation: TNavigationEntity;
};

const Navbar: React.FC = (): JSX.Element => {
  const { data } = useQuery<TQueryNavbarData>(GET_MAIN_MENU_CONTENT);

  return (
    <nav className="nav">
      <ul>
        {data?.navigation?.mainMenu?.map((menuItem) => {
          return (
            <li>
              <a title={menuItem.title} href={menuItem.url}>{menuItem.name}</a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
