import React from "react";
import { Container, ContentWithPaddingXl } from "./misc/Layouts.js";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro";
import {
  SectionHeading,
  Subheading as SubjeadingBase,
} from "./misc/Headings.js";
import { SectionDescription } from "./misc/Typography";

const HeadingContainer = tw.div`text-center`;
const Subheading = tw(SubjeadingBase)`mb-4`;
const Heading = tw(SectionHeading)``;
const Description = tw(SectionDescription)`mx-auto`;

const Products = tw.div`mt-12 flex flex-wrap -mr-3 relative`;
const Product = tw.a`flex flex-col h-full bg-gray-200 rounded`;
const ProductImage = styled.div`
  ${(props) =>
    css`
      background-image: url("${props.imageSrc}");
    `}
  ${tw`h-64 sm:h-80 bg-center bg-cover rounded-t`}
`;

const ProductText = tw.div`flex-1 px-6 py-8`;
const ProductTitle = tw.h6`font-bold group-hocus:text-primary-500 transition duration-300`;
const ProductDescription = tw.p``;

const ProductContainer = styled.div`
  ${tw`relative z-20 mt-10 sm:pt-3 pr-3 w-full sm:w-1/2 lg:w-1/3 max-w-sm mx-auto sm:max-w-none sm:mx-0`}

  ${(props) =>
    props.featured &&
    css`
      ${tw`w-full sm:w-full lg:w-2/3`}
      ${Product} {
        ${tw`sm:flex-row items-center sm:pr-3`}
      }
      ${ProductImage} {
        ${tw`sm:h-80 sm:min-h-full w-full sm:w-1/2 rounded-t sm:rounded-t-none sm:rounded-l`}
      }
      ${ProductText} {
        ${tw`pl-8 pr-5`}
      }
      ${ProductTitle} {
        ${tw`text-2xl`}
      }
      ${ProductDescription} {
        ${tw`mt-4 text-sm font-semibold text-gray-600 leading-relaxed`}
      }
    `}
`;

const Productos = ({
  subheading = "",
  heading = "Productos",
  description = "",
  products = [
    {
      productImageSrc:
        "https://i.ibb.co/54qxX2Q/155566907-1110526986040202-1033804536160992891-n.jpg",
      productTitle: "Producto 1",
      productDescription: "Beep boop placeholder text",
    },
    {
      productImageSrc: "https://i.ibb.co/0B4S7rd/1a35b9b8-1aac-41fd-902e-fddbdee9bcb3.jpg",
      productTitle: "Producto",
      productDescription: "Beep boop placeholder text",
    },
    {
      productImageSrc: "https://i.ibb.co/SNy5PwR/2b8e84e4-4466-402a-b9df-da75e18496f0.jpg",
      productTitle: "Producto",
      productDescription: "Beep boop placeholder text",
    },
    {
      productImageSrc: "https://i.ibb.co/9tqhBTT/3c837307-3bba-45e9-8f8c-09a3cfcad5b2.jpg",
      productTitle: "Producto",
      productDescription: "Beep boop placeholder text",
    },
    {
      productImageSrc: "https://i.ibb.co/tpSWDFz/3cd518f4-192b-4572-abdd-10292d18b1a2.jpg",
      productTitle: "Producto",
      productDescription: "Beep boop placeholder text",
    },
    {
      productImageSrc: "https://i.ibb.co/R7v8JVk/6ddcf087-9675-4e8d-b5cb-5b25db651bc8.jpg",
      productTitle: "Producto",
      productDescription: "Beep boop placeholder text",
    },
    {
      productImageSrc: "https://i.ibb.co/R7msx1T/7d947345-6348-47cd-a892-4632e97078a5.jpg",
      productTitle: "Producto",
      productDescription: "Beep boop placeholder text",
    },
    {
      productImageSrc: "https://i.ibb.co/T85DGRQ/8b2246f8-442f-432b-9324-1032549222f8.jpg",
      productTitle: "Producto",
      productDescription: "Beep boop placeholder text",
    },
    {
      productImageSrc: "https://i.ibb.co/Br50mCG/8f113dbf-cc89-415a-88b5-f23571e157ca.jpg",
      productTitle: "Producto",
      productDescription: "Beep boop placeholder text",
    },
    {
      productImageSrc: "https://i.ibb.co/3TdXS5T/79b127e9-25d3-4728-87c3-fc82107fa5c9.jpg",
      productTitle: "Producto",
      productDescription: "Beep boop placeholder text",
    },
    {
      productImageSrc: "https://i.ibb.co/ssRKvqd/206e1d96-238d-43cc-a6bf-e3c5e4c439fc.jpg",
      productTitle: "Producto",
      productDescription: "Beep boop placeholder text",
    },
    {
      productImageSrc: "https://i.ibb.co/KK5PphR/3511b0b4-6f3a-4857-ac25-11703b1204c8.jpg",
      productTitle: "Producto",
      productDescription: "Beep boop placeholder text",
    },
    {
      productImageSrc: "https://i.ibb.co/Ryh8jDb/c9d843ff-1a5c-47f1-b834-b29ff01b99cd.jpg",
      productTitle: "Producto",
      productDescription: "Beep boop placeholder text",
    },
    {
      productImageSrc: "https://i.ibb.co/ZJ7jcK4/cfa6b84e-333d-46e3-8f4c-cd4e9c5eb78c.jpg",
      productTitle: "Producto",
      productDescription: "Beep boop placeholder text",
    },
    {
      productImageSrc: "https://i.ibb.co/Vmd9Gf2/d25be836-8918-4a17-b1b4-dd7cdeb54e52.jpg",
      productTitle: "Producto",
      productDescription: "Beep boop placeholder text",
    },
    {
      productImageSrc: "https://i.ibb.co/sJc6g2X/e9ebbbcb-195d-4a01-979a-72512cb4a5e1.jpg",
      productTitle: "Producto",
      productDescription: "Beep boop placeholder text",
    },
    {
      productImageSrc: "https://i.ibb.co/wrH86kL/eb595c70-791b-4824-92c0-fa8dc9d37aee.jpg",
      productTitle: "Producto",
      productDescription: "Beep boop placeholder text",
    },
    {
      productImageSrc: "https://i.ibb.co/Q6hMRGQ/ff7916c7-6746-4772-815e-9931995d92c6.jpg",
      productTitle: "Producto",
      productDescription: "Beep boop placeholder text",
    },
  ],
}) => {
  return (
    <div id="Products">
      <Container>
        <ContentWithPaddingXl>
          <HeadingContainer>
            {subheading && <Subheading>{subheading}</Subheading>}
            {heading && <Heading>{heading}</Heading>}
            {description && <Description>{description}</Description>}
          </HeadingContainer>
          <Products>
            {products.map((product, index) => (
              <ProductContainer key={index}>
                <Product className="group">
                  <ProductImage imageSrc={product.productImageSrc} />
                  <ProductText>
                    <ProductTitle>{product.productTitle}</ProductTitle>
                    <ProductDescription>
                      {product.productDescription}
                    </ProductDescription>
                  </ProductText>
                </Product>
              </ProductContainer>
            ))}
          </Products>
        </ContentWithPaddingXl>
      </Container>
    </div>
  );
};

export default Productos;
