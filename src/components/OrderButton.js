import React from "react";
import styled from "styled-components"; //eslint-disable-line
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import { ContentWithPaddingXl, Container } from "../components/misc/Layouts.js";
import { useSelector } from "react-redux";

const PrimaryBackgroundContainer = tw.div`py-20 lg:py-24 bg-primary-500 rounded-lg relative`;
const Row = tw.div`px-8 max-w-screen-lg mx-auto flex items-center relative z-10 flex-col lg:flex-row text-center lg:text-left`;

const ColumnContainer = tw.div`lg:w-1/2 max-w-lg`;
const TextContainer = tw(ColumnContainer)``;
const Text = tw.h5`text-gray-100 text-2xl sm:text-3xl font-bold`;

const LinkContainer = tw(
  ColumnContainer
)`flex justify-center lg:justify-end mt-6 lg:mt-0 flex-col sm:flex-row`;

const Link = tw.a`w-full sm:w-auto text-sm sm:text-base px-6 py-3 sm:px-8 sm:py-4 lg:px-10 lg:py-5 mt-4 first:mt-0 sm:mt-0 sm:mr-8 sm:last:mr-0 rounded-full font-bold border border-transparent tracking-wide transition duration-300 focus:outline-none focus:shadow-outline`;
const PrimaryLink = tw(
  Link
)`bg-red-500 text-gray-100 shadow-lg hocus:bg-red-600 hocus:text-gray-200`;

const OrderButton = ({
  text = "¿Listo/a para personalizar tu propia camisa?",
  primaryLinkText = "Cotice ahora",
  primaryLinkUrl = "/OrderProduct",
  pushDownFooter = true,
}) => {
  const userSignedIn = useSelector((state) => state.userSignin);
  const { userInfo } = userSignedIn;
  return (
    <Container css={pushDownFooter && tw`mb-20 lg:mb-24`}>
      <ContentWithPaddingXl>
        <PrimaryBackgroundContainer>
          <Row>
            <TextContainer>
              <Text>{text}</Text>
            </TextContainer>
            <LinkContainer>
              <PrimaryLink href={userInfo ? primaryLinkUrl: '/Signin'}>{primaryLinkText}</PrimaryLink>
            </LinkContainer>
          </Row>
        </PrimaryBackgroundContainer>
      </ContentWithPaddingXl>
    </Container>
  );
};

export default OrderButton;
