import React from "react";
import { Container as ContainerBase } from "../components/misc/Layouts.js";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { ReactComponent as SignUpIcon } from "feather-icons/dist/icons/user-plus.svg";

const Container = tw(
  ContainerBase
)`min-h-screen bg-primary-500 text-white font-medium flex justify-center`;
const Content = tw.div`max-w-screen-xl m-0 sm:mx-20 sm:my-16 bg-white text-gray-900 shadow sm:rounded-lg flex justify-center flex-1`;
const MainContainer = tw.div`lg:w-1/2 xl:w-5/12 p-6 sm:p-12`;
const MainContent = tw.div`mt-12 flex flex-col items-center`;
const Heading = tw.h1`text-2xl xl:text-3xl font-extrabold`;
const FormContainer = tw.div`w-full flex-1 mt-8`;

const DividerTextContainer = tw.div`my-12 border-b text-center relative`;
const DividerText = tw.div`leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform -translate-y-1/2 absolute inset-x-0 top-1/2 bg-transparent`;

const Form = tw.form`mx-auto max-w-xs`;
const Input = tw.input`w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5 first:mt-0`;
const SubmitButton = styled.button`
  ${tw`mt-5 tracking-wide font-semibold bg-primary-500 text-gray-100 w-full py-4 rounded-lg hover:bg-primary-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none`}
  .icon {
    ${tw`w-6 h-6 -ml-2`}
  }
  .text {
    ${tw`ml-3`}
  }
`;

const LogoContainer = tw.div`sm:rounded-r-lg flex-1 bg-black text-center hidden lg:flex justify-center`;
const Logo = styled.div`
  ${(props) => `background-image: url("${props.imageSrc}");`}
  ${tw`m-12 xl:m-16 w-full max-w-sm bg-contain bg-center bg-no-repeat`}
`;

const SignUpPage = ({
  headingText = "Cree una cuenta con LOGART",
  submitButtontext = "Registrar",
  SubmitButtonIcon = SignUpIcon,
  logoURL = "https://i.ibb.co/Bt10090/bg-2.png",
}) => {
  return (
    <Container>
      <Content>
        <MainContainer>
          <MainContent>
            <Heading>{headingText}</Heading>
            <DividerTextContainer>
              <DividerText></DividerText>
            </DividerTextContainer>
            <FormContainer>
              <Form>
                <Input type="email" placeholder="Correo" />
                <Input type="password" placeholder="Contraseña" />
                <Input type="password" placeholder="Confirmar Contraseña" />
                <Input type="tel" placeholder="Número de Teléfono" />
                <SubmitButton type="submit">
                  <SubmitButtonIcon className="icon">
                    <span className="text">{submitButtontext}</span>
                  </SubmitButtonIcon>
                </SubmitButton>
              </Form>
              <p tw="mt-8 text-sm text-gray-600 text-center">
                  ¿Ya tiene una cuenta?<br/>
                  <a href="/Signin" tw="border-b border-gray-500 border-dotted">
                    Inicie Sesión
                  </a>
                </p>
            </FormContainer>
          </MainContent>
        </MainContainer>
        <LogoContainer>
          <Logo imageSrc={logoURL} />
        </LogoContainer>
      </Content>
    </Container>
  );
};

export default SignUpPage;