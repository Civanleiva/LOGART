import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
// import {
//   SectionHeading,
//   Subheading as SubheadingBase,
// } from "../components/misc/Headings.js";
//import { SectionDescription } from "../components/misc/Typography.js";
import { Container, ContentWithPaddingXl } from "../components/misc/Layouts.js";
import Recommended from "../images/recommended.svg"
import Medal from "../images/medal.svg";
import Box from "../images/supplies.svg";

// const Heading = tw(SectionHeading)``;
// const Subheading = tw(SubheadingBase)`text-center mb-3`;
// const Description = tw(SectionDescription)`text-center mx-auto`;
const ThreeColContainer = styled.div`
  ${tw`mt-10 flex flex-col items-center lg:items-stretch lg:flex-row flex-wrap lg:justify-center max-w-screen-lg mx-auto`}
`;

const Column = styled.div`
  ${tw`lg:w-1/3 max-w-xs`}
`;

const Card = styled.a`
  ${tw`flex flex-col items-center text-center h-full mx-4 px-4 py-8 rounded duration-300 hover:cursor-pointer hover:scale-105 `}
  .imageContainer {
    ${tw`text-center rounded-full p-4 bg-gray-100`}
    img {
      ${tw`w-8 h-8`}
    }
  }

  .title {
    ${tw`mt-4 font-bold text-xl leading-none`}
  }

  .description {
    ${tw`mt-4 text-sm font-medium text-secondary-300`}
  }
`;

const Features = ({
  cards = [
    {
      imageSrc: Recommended,
      title: "Satisfacción Garantizada",
      description: "Beep boop placeholder text",
    },
    {
      imageSrc: Box,
      title: "Empacado de alta calidad",
      description: "Beep boop placeholder text",
    },
    {
      imageSrc: Medal,
      title: "Cálidad Superior",
      description: "Beep boop placeholder text",
    },
  ],
}) => {
  return (
    <Container>
      <ContentWithPaddingXl>
        <ThreeColContainer>
          {cards.map((card, i) => (
            <Column key={i}>
              <Card>
                <span className="imageContainer">
                  <img src={card.imageSrc} alt="" />
                </span>
                <span className="title">{card.title}</span>
                <p className="description">{card.description}</p>
              </Card>
            </Column>
          ))}
        </ThreeColContainer>
      </ContentWithPaddingXl>
    </Container>
  );
};

export default Features;
