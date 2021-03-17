import * as React from "react";
import { TNavLinkEntity } from "../../types/PageData";
import { HTMLAttributes } from "react";

interface IMenuItemsProps extends HTMLAttributes<any> {
  mainMenu: Array<TNavLinkEntity>;
  visible?: boolean;
}

const MenuItems: React.FC<IMenuItemsProps> = ({
  mainMenu,
  visible = true,
  ...rest
}): JSX.Element => {
  return (
    <ul {...rest}>
      {mainMenu?.map((menuItem) => {
        return (
          <li key={menuItem.name}>
            <a title={menuItem.title} href={menuItem.url}>
              {menuItem.name}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default MenuItems;
