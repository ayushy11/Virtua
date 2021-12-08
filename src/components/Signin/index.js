import React from "react";
import {
  Form,
  FormButton,
  FormContent,
  FormInput,
  FormLabel,
  Icon,
  SigninContainer,
  SigninWrap,
  Text,
  FormH1
} from "./SigninElements";

function Signin() {
  return (
    <>
      <SigninContainer>
        <SigninWrap>
          <Icon to="/">virtua</Icon>
          <FormContent>
            <Form action="#">
              <FormH1>Sign in to your account</FormH1>
              <FormLabel htmlFor="for">Email</FormLabel>
              <FormInput type="email" required />
              <FormLabel htmlFor="for">Password</FormLabel>
              <FormInput type="password" required />
              <FormButton type="submit">Continue</FormButton>
              <Text>Forgot password</Text>
            </Form>
          </FormContent>
        </SigninWrap>
      </SigninContainer>
    </>
  );
}

export default Signin;
