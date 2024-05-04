import React from 'react'
import "./Inventory.css";
import tw from "twin.macro";
import styled from "styled-components";
import AnimationRevealPage from "../../helpers/AnimationRevealPage";
import { css } from "styled-components/macro"; //eslint-disable-line
import Header, { NavLink, NavLinks, PrimaryLink as PrimaryLinkBase, LogoLink, NavToggle, DesktopNavLinks } from "../headers/light.js";
import InventoryCard from 'components/cards/InventoryCard';
import Home from "../../videos/INVENTORY.mp4";
import truss from "../../images/trusss.png"
import "../../index.css"
import { Client, Storage } from "appwrite";
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
  background-image: url("https://images.unsplash.com/photo-1536300007881-7e482242baa5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=80");
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

const PrimaryAction = tw.button`rounded-full px-8 py-3 mt-10 text-sm sm:text-base sm:mt-16 sm:px-8 sm:py-4 font-bold shadow transition duration-300 bg-blue-500 text-gray-100 hocus:bg-primary-700 hocus:text-gray-200 focus:outline-none focus:shadow-outline`;


const InventorySection = () => {

// const client = new Client();

// const storage = new Storage(client);

// client
//     .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
//     .setProject('661d51c7e4d47fa7d45d') // Your project ID
// ;

// const Inventory = storage.getFileView('66361568003124745f89', '6636a555001bb4dd11d3');
// console.log(Inventory);

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
        <AnimationRevealPage>
            <Container>
                <OpacityOverlay />
                <HeroContainer>
                    <StyledHeader links={navLinks} />
                    <Content>
                        <video className="h-full" autoPlay loop muted src={Home}>
                            
                        </video>
                        <Heading>
                            EVERYTHING YOU NEED
                            <br />
                            AT ONE PLACE
                        </Heading>
                        <PrimaryAction>GET QUOTE</PrimaryAction>
                    </Content>
                </HeroContainer>
            </Container>
            <div className="truss">
                <img src={truss} alt="" srcset="" />
            </div>
            <InventoryCard />

        </AnimationRevealPage>
    )
}

export default InventorySection