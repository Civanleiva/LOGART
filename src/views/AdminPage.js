import React, { useEffect, useState } from "react";
import { Container, ContentWithPaddingXl } from "../components/misc/Layouts.js";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro";
import { SectionHeading } from "../components/misc/Headings.js";
import axios from "axios";
import Footer from "../components/Footer.js";
import { useSelector } from "react-redux";

const HeadingContainer = tw.div`text-center`;

const Heading = tw(SectionHeading)``;

const Orders = tw.div`mt-12 flex flex-wrap -mr-3 relative`;
const Order = tw.a`flex flex-col h-full bg-gray-200 rounded`;
const OrderImage = styled.img`
  ${tw`h-64 sm:h-80 bg-center bg-cover rounded-t`}
`;

const OrderType = tw.div`flex-1 px-6 py-8`;
const OrderSize = tw.h6`font-bold group-hocus:text-primary-500 transition duration-300`;
const OrderInfo = tw.p``;

const ProductContainer = styled.div`
  ${tw`relative z-20 mt-10 sm:pt-3 pr-3 w-full sm:w-1/2 lg:w-1/3 max-w-sm mx-auto sm:max-w-none sm:mx-0`}

  ${(props) =>
    props.featured &&
    css`
      ${tw`w-full sm:w-full lg:w-2/3`}
      ${Order} {
        ${tw`sm:flex-row items-center sm:pr-3`}
      }
      ${OrderImage} {
        ${tw`sm:h-80 sm:min-h-full w-full sm:w-1/2 rounded-t sm:rounded-t-none sm:rounded-l`}
      }
      ${OrderType} {
        ${tw`pl-8 pr-5`}
      }
      ${OrderSize} {
        ${tw`text-2xl`}
      }
      ${OrderInfo} {
        ${tw`mt-4 text-sm font-semibold text-gray-600 leading-relaxed`}
      }
    `}
`;

const AdminPage = ({ heading = "Órdenes" }) => {
  const userSignedIn = useSelector((state) => state.userSignin);
  const { userInfo } = userSignedIn;
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get("/api/orders/getOrders");
      console.log(data);
      setOrders(data);
    };
    fetchData();
  }, []);

  return (
    <div id="Orders">
      <Container>
        {userInfo && userInfo.isAdmin ? (
          <ContentWithPaddingXl>
            <HeadingContainer>
              {heading && <Heading>{heading}</Heading>}
            </HeadingContainer>
            <Orders>
              {orders.map((order, index) => (
                <ProductContainer key={index}>
                  <Order className="group">
                    <OrderImage src={`data:image/jpeg;base64,${order.orderItem[0].image}`} />
                    <OrderType>
                      <OrderSize>{order.orderItem[0].shirtSize}</OrderSize>
                      <OrderInfo>{order.orderItem[0].shirtColor}</OrderInfo>
                      <OrderInfo>{order.orderItem[0].shirtType}</OrderInfo>
                      <OrderInfo>{order.orderItem[0].shirtMaterial}</OrderInfo>
                      <OrderInfo>{order.orderItem[0].email}</OrderInfo>
                    </OrderType>
                  </Order>
                </ProductContainer>
              ))}
            </Orders>
          </ContentWithPaddingXl>
        ) : (
          <h1>401 Forbidden</h1>
        )}
      </Container>
      <Footer />
    </div>
  );
};

export default AdminPage;
