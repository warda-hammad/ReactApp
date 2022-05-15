import React from "react";
import {
  Drop,
  DropTitle,
  SubInput,
  TitleSpan,
  Form,
  FormInput,
  TextArea,
  InputText,
  InputEmail,
  InputSubmit,
} from "./style.js";
function Contact() {
  return (
    <Drop>
      <div className="container">
        <DropTitle>
          <TitleSpan>Drop </TitleSpan>Me A line
        </DropTitle>
        <Form action="">
          <FormInput>
            <InputText type="text" placeholder="Your Name" />
            <InputEmail type="email" placeholder="Your Email" />
          </FormInput>
          <SubInput type="text" placeholder="Your Subject" />
          <TextArea cols="30" rows="10" placeholder="Your Message"></TextArea>
          <InputSubmit type="submit" value="Send Message" />
        </Form>
      </div>
    </Drop>
  );
}

export default Contact;
