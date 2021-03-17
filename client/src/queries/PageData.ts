import { gql } from "@apollo/client";

export const GET_FOOTER_CONTENT = gql`
  query {
    navigation {
      footerMenu {
        name
        url
        title
      }
      footerContent
    }
  }
`;
export const GET_INFO_BLOCK_CONTENT = gql`
  query {
    pageContent {
      infoBlock
    }
  }
`;

export const GET_FORM_CONTENT = gql`
  query {
    pageContent {
      formIntro
      formTitle
    }
  }
`;

export const GET_PAGE_CONTENT = gql`
  query {
    pageContent {
      title
      content
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
