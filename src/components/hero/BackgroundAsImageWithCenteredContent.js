import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; 
// import Home from "../../videos/7mb.mp4";

import Header, { NavLink, NavLinks, PrimaryLink as PrimaryLinkBase, LogoLink, NavToggle, DesktopNavLinks } from "../headers/light.js";

const StyledHeader = styled(Header)`
  ${tw`pt-8 max-w-none w-full`}
  ${DesktopNavLinks} ${NavLink}, ${LogoLink} {
    ${tw`text-gray-100 hover:border-gray-300 hover:text-gray-300`}
  }
  ${NavToggle}.closed {
    ${tw`text-gray-100 hover:text-primary-500`}
  }
`;

const PrimaryLink = tw(PrimaryLinkBase)`rounded-full`
const Container = styled.div`
  ${tw`relative -mx-8 -mt-8 bg-center bg-cover h-screen min-h-144`}
  background-image: url("https://cloud.appwrite.io/v1/storage/buckets/6620f76347a6c75a350d/files/663a682d000ac94e619c/view?project=661d51c7e4d47fa7d45d&mode=admin");
`;

const OpacityOverlay = tw.div`z-10 absolute inset-0 bg-black opacity-75`;

const HeroContainer = tw.div`z-20 relative px-6 sm:px-8 mx-auto h-full flex flex-col`;
const Content = tw.div`px-4 flex flex-1 flex-col justify-center items-center bg-cover`;

const Heading = styled.h1`
  ${tw`text-3xl text-center sm:text-4xl lg:text-5xl xl:text-6xl font-black text-gray-100 leading-snug -mt-24 sm:mt-0`}
  span {
    ${tw`inline-block mt-2`}
  }
`;

const PrimaryAction = tw.button`rounded-full px-8 py-3 mt-10 text-sm sm:text-base sm:mt-16 sm:px-8 sm:py-4 font-bold shadow transition duration-300 bg-blue-500 text-gray-100 hocus:bg-primary-700 hocus:text-gray-200 focus:outline-none focus:shadow-outline`;

export default () => {
  const navLinks = [
    <NavLinks key={1}>
      <NavLink href="/Inventory">
        Inventory
      </NavLink>
      <NavLink href="/blogs">
        Blog
      </NavLink>
      <NavLink href="/gallery">
        Gallery
      </NavLink>
      <NavLink href="/AboutUs">
        About us
      </NavLink>
    </NavLinks>,
    <NavLinks key={2}>
      <PrimaryLink href="https://goadestinationweddings.com">
        Weddings
      </PrimaryLink>
    </NavLinks>
  ];

  return (
    <Container>
      
      <OpacityOverlay />
      <HeroContainer>
        <StyledHeader links={navLinks} />
        <Content>
        <video 
        id="b9561b64-3c61-c5c4-9ac2-44c901e131c6-video"
        className="h-full"
        autoplay="true"
        loop="true"
        muted="true"
        playsinline=""
        data-wf-ignore="true"
        data-object-fit="cover"
      >
        <source
          src="https://assets-global.website-files.com/66041c667295e18e3d1ff479/663c3d605103bbec9e5d07fd_7mb(home)-transcode.mp4"
          data-wf-ignore="true"
        />
        <source
          src="https://assets-global.website-files.com/66041c667295e18e3d1ff479/663c3d605103bbec9e5d07fd_7mb(home)-transcode.webm"
          data-wf-ignore="true"
        /></video>
          <Heading>
            PLAN YOUR EVENTS
            <br />
            WITH US
          </Heading>
          <PrimaryAction>GET QUOTE</PrimaryAction>
        </Content>
      </HeroContainer>
    </Container>
  );
};
