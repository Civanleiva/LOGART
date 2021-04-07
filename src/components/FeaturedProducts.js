import React, { useEffect, useState } from "react";
import { Container, ContentWithPaddingXl } from "./misc/Layouts.js";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro";
import {
  SectionHeading,
  Subheading as SubheadingBase,
} from "./misc/Headings.js";
import { SectionDescription } from "./misc/Typography";
import axios from "axios";

const HeadingContainer = tw.div`text-center`;
const Subheading = tw(SubheadingBase)`mb-4`;
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
}) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get("/api/products");
      setProducts(data);
    };
    fetchData();
  }, []);
  
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
