import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line

const Container = tw.div`relative -mx-8 -mt-8`;
const TwoColumn = tw.div`flex flex-col lg:flex-row`;
const LeftColumn = tw.div`ml-8 mr-8 xl:pl-10 py-8`;
const RightColumn = styled.div`
  background-image: url("https://media3.s-nbcnews.com/i/newscms/2020_41/1616958/makeup-artist-favs-kb-main-201007_3e655e5bb39d704540d5a447268d7be3.jpg");
  ${tw`bg-transparent bg-cover bg-center xl:ml-24 h-96 lg:h-auto lg:w-1/2 lg:flex-1`}
`;

const Content = tw.div`mt-24 lg:mt-24 lg:mb-24 flex flex-col sm:items-center lg:items-stretch`;
const Heading = tw.h1`text-3xl sm:text-5xl md:text-6xl lg:text-5xl font-black leading-none`;
const Paragraph = tw.p`max-w-md my-8 lg:my-5 lg:my-8 sm:text-lg lg:text-base xl:text-lg leading-loose`;

const Actions = styled.div`
    ${tw`mb-8 lg:mb-0`}
    .action {
        ${tw`text-center inline-block w-full sm:w-48 py-4 font-semibold tracking-wide rounded hocus:outline-none focus:shadow-outline transition duration-300`}
    }
    .primaryAction {
        ${tw`bg-primary-500 text-gray-100 hover:bg-primary-700`}
    }
    .secondaryAction {
        ${tw`mt-4 sm:mt-0 sm:ml-4 bg-gray-300 text-gray-700 hover:bg-gray-400 hover:text-gray-800`}
    }
`;

const Hero = ({
  heading = (
    <>
      ¡Bienvenida a la familia Nani Shop!
      <wbr />
      <br />
      <span tw="text-primary-500">Levántate y resplandece</span>
    </>
  ),
  description = "Something I'm not creative enough to come up with",
  primaryActionUrl = "#",
  primaryActionText = "Regístrate",
  secondaryActionUrl = "#",
  secondaryActionText = "Busca productos"
}) => {
  return (
    <Container>
      <TwoColumn>
        <LeftColumn>
          <Content>
            <Heading>{heading}</Heading>
            <Paragraph>{description}</Paragraph>
            <Actions>
                <a href={primaryActionUrl} className="action primaryAction">
                    {primaryActionText}
                </a>
                <a href={secondaryActionUrl} className="action secondaryAction">
                    {secondaryActionText}
                </a>
            </Actions>
          </Content>
        </LeftColumn>
        <RightColumn />
      </TwoColumn>
    </Container>
  );
};

export default Hero;