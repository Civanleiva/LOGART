import React, { useState } from "react";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import Footer from "../components/Footer";
import { GithubPicker } from "react-color";
import { FilePond, registerPlugin } from "react-filepond";
import "filepond/dist/filepond.min.css"; //esl-disable-line
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css"; //esl-disable-line

registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

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
  fileLabel = "Arrastre sus imagenes aquí o <span class='filepond--label-action'>suba desde su dispositivo</span>",
  basicColors = [
    "#FFFF00",
    "#FFA500",
    "#0000FF",
    "#FFF",
    "#808080",
    "#C3B091",
    "#000",
    "#FF0000",
    "#00FF00",
  ],
  poloColors = [
    "#0000FF",
    "#000",
    "#5E1E54",
    "#008000",
    "#771E1F",
    "#FFFF00",
    "#FFA500",
    "#FFF",
    "#D2691E",
    "#FF77FF",
    "#A9A9A9",
    "#00A86B",
    "#C3B091",
    "#000080",
  ],
}) => {
  const [files, setFiles] = useState([]);
  const [shirtType, setShirtType] = useState("basic");
  const [shirtColor, setShirtColor] = useState("#FFFFFF");

  function handleShirtChange(event) {
    setShirtType(event.target.value);
    setShirtColor("#FFFFFF")
  }

  function handleShirtColorChange(color) {
    setShirtColor(color.hex);
  }

  return (
    <Section>
      <Section>
        <Container>
          <Content>
            <Image src={`/images/${shirtType}/${shirtColor}.png`.replace("#", "")} />
            <ProductDetails>
              <ProductTitle>{productTitle}</ProductTitle>
              <ProductOptions>
                <ColorsContainer>
                  <GithubPicker
                    colors={shirtType === "basic" ? basicColors : poloColors}
                    triangle="hide"
                    onChangeComplete={handleShirtColorChange}
                    color={shirtColor}
                  />
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
                <span tw="pr-5 pl-5">Material</span>
                <Dropdown>
                  <option>Vinilo</option>
                  <option>Papel Transfer</option>
                  <option>Bordado</option>
                </Dropdown>
              </DropdownContainer>
              <DropdownContainer>
                <span tw="pr-5 pl-5">Estilo</span>
                <Dropdown value={shirtType} onChange={handleShirtChange}>
                  <option value="basic">Cuello redondo</option>
                  <option value="polo">Polo</option>
                </Dropdown>
              </DropdownContainer>
              <span tw="p-2"></span>
              <FilePond
                files={files}
                onupdatefiles={setFiles}
                allowMultiple={false}
                labelIdle={fileLabel}
              ></FilePond>
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
