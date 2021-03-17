export type TPageContentEntity = {
  title: string;
  content: string;
  formIntro: string;
  formTitle: string;
  infoBlock: Array<string>;
};

export type TNavLinkEntity = {
  name: string;
  url: string;
  title?: string;
};

export type TNavigationEntity = {
  mainMenu: Array<TNavLinkEntity>;
  footerMenu: Array<TNavLinkEntity>;
};
