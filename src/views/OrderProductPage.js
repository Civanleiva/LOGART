import React, { useEffect, useState } from "react";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import Footer from "../components/Footer";
import { GithubPicker } from "react-color";
import { FilePond, registerPlugin } from "react-filepond";
import "filepond/dist/filepond.min.css"; //esl-disable-line
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import FilePondPluginFileEnconde from "filepond-plugin-file-encode";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css"; //esl-disable-line
import { useDispatch, useSelector } from "react-redux";
import { createOrder } from "../actions/orderActions";
import { useHistory } from "react-router";
import { ORDER_CREATE_RESET } from "../constants/orderConstants";

registerPlugin(
  FilePondPluginImageExifOrientation,
  FilePondPluginImagePreview,
  FilePondPluginFileEnconde
);

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

const ErrorBox = tw.div`bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative`;

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
  const [shirtSize, setShirtSize] = useState("10");
  const [printMaterial, setPrintMaterial] = useState("Vinilo");

  const orderCreate = useSelector((state) => state.orderCreate);
  const { success, error, order } = orderCreate;

  function handleShirtChange(event) {
    setShirtType(event.target.value);
    setShirtColor("#FFFFFF");
  }

  function handleShirtColorChange(color) {
    setShirtColor(color.hex);
  }

  function handleShirtSizeChange(size) {
    setShirtSize(size.target.value);
  }

  function handlePrintMaterialChange(material) {
    setPrintMaterial(material.target.value);
  }

  const dispatch = useDispatch();
  let history = useHistory();

  const placeOrderHandler = () => {
    console.log(files[0].getFileEncodeBase64String())
    dispatch(
      createOrder([
        {
          shirtType: shirtType,
          shirtColor: shirtColor,
          shirtMaterial: printMaterial,
          shirtSize: shirtSize,
          image: files[0].getFileEncodeBase64String(),
        },
      ])
    );
  };

  useEffect(() => {
    if (success) {
      history.push(`/order/${order._id}`);
      dispatch({ type: ORDER_CREATE_RESET });
    }
  }, [success, dispatch, history, order]);

  return (
    <Section>
      <Section>
        <Container>
          <Content>
            <Image
              src={`/images/${shirtType}/${shirtColor}.png`.replace("#", "")}
            />
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
                <Dropdown value={shirtSize} onChange={handleShirtSizeChange}>
                  <option value="10">10</option>
                  <option value="12">12</option>
                  <option value="14">14</option>
                  <option value="S">S</option>
                  <option value="M">M</option>
                  <option value="L">L</option>
                  <option value="XL">XL</option>
                </Dropdown>
              </DropdownContainer>
              <DropdownContainer>
                <span tw="pr-5 pl-5">Material</span>
                <Dropdown
                  value={printMaterial}
                  onChange={handlePrintMaterialChange}
                >
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
                allowFileEncode={true}
              ></FilePond>
            </ProductDetails>
            <ColorsContainer>
              <OrderButton onClick={placeOrderHandler}>
                Cotice ahora
              </OrderButton>
            </ColorsContainer>
          </Content>
          {error && <ErrorBox>{error}</ErrorBox>}
        </Container>
      </Section>
      <Footer />
    </Section>
  );
};

export default OrderProductPage;
