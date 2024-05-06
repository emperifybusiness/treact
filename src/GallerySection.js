import AnimationRevealPage from 'helpers/AnimationRevealPage'
import React from 'react'
import tw from "twin.macro";
import Footer from "./components/footers/SimpleFiveColumn.js";
import Gallery from './Gallery'
import HeaderBase, { NavLinks, NavLink, PrimaryLink } from "./components/headers/light.js";
const Header = tw(HeaderBase)`max-w-none`;
const GallerySection = () => {
    const button = {
        buttonRounded: true
    }
    const buttonRoundedCss = button.buttonRounded && tw`rounded-full`;
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
            <Header links={navLinks} />
            <Gallery />
            <Footer />
        </AnimationRevealPage>


    )
}

export default GallerySection