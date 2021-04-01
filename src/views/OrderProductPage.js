import React from "react";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import Footer from "../components/Footer";
import { GithubPicker } from "react-color";

const Section = tw.section`text-gray-700  overflow-hidden bg-white`;
const Container = tw.div`container px-5 py-24`;
const Content = tw.div`lg:w-4/5 flex flex-wrap`;

const Image = tw.img`lg:w-1/2 w-full object-cover object-center rounded border border-gray-200`;
const ProductDetails = tw.div`lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0`;

const ProductTitle = tw.h1`text-gray-900 text-3xl font-medium mb-1`;

const ProductOptions = tw.div`flex pb-5 border-b-2 border-gray-200 mb-5 `;
const ColorsContainer = tw.div`flex`;
const DropdownContainer = tw.div`mt-12 flex flex-wrap -mr-3 relative`;
const Dropdown = tw.select`rounded border border-gray-400 py-2 focus:outline-none focus:border-red-500 text-base pl-3 pr-10`;

const OrderButton = tw.button`flex ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded`;

const OrderProductPage = ({
  productTitle = "Camisa personalizada",
  colors = [
    "#FFF",
    "#B80000",
    "#000",
    "#FCCB00",
    "#008B02",
    "#800080",
    "#004DCF",
  ],
}) => {
  return (
    <Section>
      <Section>
        <Container>
          <Content>
            <Image src="https://i.pinimg.com/originals/2f/bb/66/2fbb6650a2b6b07aee93909b1f248e24.png" />
            <ProductDetails>
              <ProductTitle>{productTitle}</ProductTitle>
              <ProductOptions>
                <ColorsContainer>
                  <GithubPicker colors={colors} triangle="hide" />
                </ColorsContainer>
              </ProductOptions>
              <DropdownContainer>
                  <span tw="pr-5 pl-5">Size</span>
                  <Dropdown>
                    <option>10</option>
                    <option>12</option>
                    <option>14</option>
                    <option>S</option>
                    <option>M</option>
                    <option>L</option>
                    <option>XL</option>
                  </Dropdown>
              </DropdownContainer>
              <DropdownContainer>
                  <span tw="pr-5 pl-5">Serigrafía</span>
                  <Dropdown>
                    <option>Vinilo</option>
                    <option>Papel Transfer</option>
                    <option>Bordado</option>
                  </Dropdown>
                </DropdownContainer>
                <DropdownContainer>
                  <span tw="pr-5 pl-5">Estilo</span>
                  <Dropdown>
                    <option>Cuello redondo</option>
                    <option>Cuello V</option>
                    <option>Polo</option>
                  </Dropdown>
                </DropdownContainer>
            </ProductDetails>
            <ColorsContainer>
              <OrderButton>Cotice ahora</OrderButton>
            </ColorsContainer>
          </Content>
        </Container>
      </Section>
      <Footer />
    </Section>
  );
};

export default OrderProductPage;