import { gql } from "@apollo/client";

export const GET_PAGE_CONTENT = gql`
  query {
    pageContent {
      title
      content
      formIntro
      formTitle
      infoBlock
    }
  }
`;
export const GET_MAIN_MENU_CONTENT = gql`
  query {
    navigation {
      mainMenu {
        name
        url
        title
      }
    }
  }
`;
