import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { Container as ContainerBase } from "../components/misc/Layouts.js";
import { ReactComponent as FacebookIcon } from "../images/facebook-logo.svg";
import { ReactComponent as InstagramIcon } from "../images/instagram-logo.svg";

const Container = tw(ContainerBase)`bg-gray-900 text-gray-100`;
const Content = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;

const Row = tw.div`flex items-center justify-center flex-col px-8`;

const LinksContainer = tw.div`mt-8 font-medium flex flex-wrap justify-center items-center flex-col sm:flex-row`;
const Link = tw.a`border-b-2 border-transparent hocus:text-gray-300 hocus:border-gray-300 pb-1 transition duration-300 mt-2 mx-4`;

const SocialLinksContainer = tw.div`mt-10`;
const SocialLink = styled.a`
  ${tw`cursor-pointer inline-block text-gray-100 hover:text-gray-500 transition duration-300 mx-4`}
  svg {
    ${tw`w-5 h-5`}
  }
`;

const Footer = () => {
  return (
    <div id="Contact">
      <Container>
        <Content>
          <Row>
            <LinksContainer>
              <Link href="/">Inicio</Link>
              <Link href="#">Acerca</Link>
              <Link href="#Products">Productos</Link>
            </LinksContainer>
            <SocialLinksContainer>
              <SocialLink href="https://web.facebook.com/Logart-463965557707247/">
                <FacebookIcon />
              </SocialLink>
              <SocialLink href="https://www.instagram.com/logart_customs/">
                <InstagramIcon />
              </SocialLink>
            </SocialLinksContainer>
          </Row>
        </Content>
      </Container>
    </div>
  );
};

export default Footer;
