import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import Navigator, {
  NavLinks,
  NavLink as NavLinkBase,
} from "./header/Navigator.js";
import { css } from "styled-components/macro"; //eslint-disable-line
import { useDispatch, useSelector } from "react-redux";
import { signout } from "../actions/userActions.js";

const NavLink = tw(NavLinkBase)`
    sm:text-sm sm:mx-6
`;

const StyledNav = styled(Navigator)`
  ${tw`pt-8 max-w-none w-full`}
  ${NavLink}{
    ${tw`text-gray-100 hover:border-gray-300 hover:text-gray-300`}
  }
`;

const Container = styled.div`
  ${tw`relative m-0 -mt-8 bg-center bg-cover h-screen min-h-144`}
  background-image: url('https://i.ibb.co/ZJLcq8f/bg-1.png');
`;

const OpacityOverlay = tw.div`z-10 absolute inset-0 bg-black opacity-75`;

const HeroContainer = tw.div`z-20 relative px-6 sm:px-8 mx-auto h-full flex flex-col`;
const Content = tw.div`px-4 flex flex-1 flex-col justify-center items-center`;

const Heading = styled.h1`
  ${tw`text-3xl text-center sm:text-4xl lg:text-5xl xl:text-6xl font-black text-gray-100 leading-snug -mt-24 sm:mt-0`}
  span {
    ${tw`inline-block mt-2`}
  }
`;

const Hero = ({
  
  heading = (
    <>
      LOGART
      <wbr />
      <br />
      <span tw="text-primary-500">Calidad, la única opción</span>
    </>
  ),
}) => {
  const userSignedIn = useSelector((state) => state.userSignin);
  const { userInfo } = userSignedIn;

  const dispatch = useDispatch()

  const signOutHandler = () => {
    dispatch(signout());
  }

  const navLinks = [
    <NavLinks key={1}>
      <NavLink href="#">Inicio</NavLink>
      <NavLink href="#Products">Productos</NavLink>
      <NavLink href="#Contact">Contáctanos</NavLink>
      {
        userInfo ? (
          <>
        <NavLink href="/SignIn" tw="lg:ml-12!">
          {userInfo.name}
        </NavLink>
        <NavLink href="#signout" onClick={signOutHandler}>Cerrar Sesión</NavLink>
          </>
        ) :
        <NavLink href="/SignIn" tw="lg:ml-12!">
          Login
        </NavLink>
      }
      {userInfo && userInfo.isAdmin &&(
        <NavLink href="/admin" tw="lg:ml-12!">
        Admin
      </NavLink>
      )}
    </NavLinks>,
  ];
  return (
    <Container>
      <OpacityOverlay />
      <HeroContainer>
        <StyledNav links={navLinks} />
        <Content>
          <Heading>
              {heading}
          </Heading>
        </Content>
      </HeroContainer>
    </Container>
  );
};

export default Hero;