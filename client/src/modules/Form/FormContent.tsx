import * as React from "react";
import { useQuery } from "@apollo/client";
import { GET_FORM_CONTENT } from "../../queries/PageData";
import { TPageContentEntity } from "../../types/PageData";
import Block from "../../components/Block/Block";
import Input from "../../components/FormElement/Input/Input";
import Textarea from "../../components/FormElement/Textarea/Textarea";
import Button from "../../components/Button/Button";

import "./FormContent.styles.scss";

type TQueryPageData = {
  pageContent: TPageContentEntity;
};

const FormContent: React.FC = (): JSX.Element => {
  const { data } = useQuery<TQueryPageData>(GET_FORM_CONTENT);
  return (
    <>
      <h3 className="form-content--title">{data?.pageContent.formTitle}</h3>
      <p className="form-content--description">{data?.pageContent.formIntro}</p>
      <Block>
        <Input
          label={"First name"}
          type={"text"}
          name={"first_name"}
          placeholder={"Your first name here"}
        />
        <Input
          label={"Last name"}
          type={"text"}
          name={"last_name"}
          placeholder={"Your last name here"}
        />
        <Textarea
          label={"Your message"}
          type={"text"}
          name={"last_name"}
          placeholder={"Type your message here"}
          rows={8}
        />
        <Button variant="primary" type="submit">SUBMIT</Button>
      </Block>
    </>
  );
};

export default FormContent;
