import * as React from "react";
import { TNavigationEntity } from "../../types/PageData";
import { useQuery } from "@apollo/client";
import { GET_MAIN_MENU_CONTENT } from "../../queries/PageData";
import { useState } from "react";
import MenuItems from "./MenuItems";

import "./Navbar.styles.scss";

type TQueryNavbarData = {
  navigation: TNavigationEntity;
};

const Navbar: React.FC = (): JSX.Element => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { data } = useQuery<TQueryNavbarData>(GET_MAIN_MENU_CONTENT);

  return (
    <nav className="nav">
      <button
        className="menu-mobile menu-mobile--button"
        onClick={() => setMenuOpen((open) => !open)}
      >
        Menu
      </button>
      <div className="menu-desktop">
        <MenuItems mainMenu={data?.navigation?.mainMenu || []} />
      </div>

      <div className="menu-mobile">
        <MenuItems
          style={{ display: menuOpen ? "flex" : "none" }}
          className="menu-mobile"
          visible={menuOpen}
          mainMenu={data?.navigation?.mainMenu || []}
        />
      </div>
    </nav>
  );
};

export default Navbar;
