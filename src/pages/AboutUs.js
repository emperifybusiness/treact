import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import tw from "twin.macro";
import styled from "styled-components"; //eslint-disable-line
import { css } from "styled-components/macro"; //eslint-disable-line
import Footer from "components/footers/SimpleFiveColumn.js";
import MainFeature1 from "components/features/TwoColWithButton.js";
// import MainFeature2 from "components/features/TwoColSingleFeatureWithStats.js";
// import MainFeature3 from "components/features/TwoColSingleFeatureWithStats2.js";
import Features from "components/features/ThreeColSimple.js";
// import Features from "components/features/ThreeColWithSideImage.js";
import TeamCardGrid from "../pages/Founders.js";
import HeaderBase, { NavLinks, NavLink, PrimaryLink } from "components/headers/light.js";
import SupportIconImage from "images/support-icon.svg";
import ShieldIconImage from "images/shield-icon.svg";
import CustomerLoveIconImage from "images/simple-icon.svg";
const Header = tw(HeaderBase)`max-w-none`;
const Subheading = tw.span`uppercase tracking-wider text-sm`;
export default () => {
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
      <MainFeature1
        subheading={<Subheading>About Cas Ant</Subheading>}
        description="Cas Ant Events began as Casant Power, a humble business offering power solutions to events of all sizes. Starting with just a generator, the company quickly gained a reputation for reliability and quality service. Over time, Casant Power expanded its services, evolving into Cas Ant Events, a comprehensive event planning and production company. Today, Cas Ant is synonymous with excellence in providing stage lighting, sound systems, and event decorations, reflecting its journey from a simple generator to a leading name in event management. "
        heading="How it all Started in 1998"
        imageSrc="https://cloud.appwrite.io/v1/storage/buckets/6620f76347a6c75a350d/files/6639046400344a106132/view?project=661d51c7e4d47fa7d45d&mode=admin"
      />
      <MainFeature1
        subheading={<Subheading>Our Vision with Cas Ant Events</Subheading>}
        heading="We Invest and Deliver."
        description="At Cas Ant Events, we invest in high-quality lighting equipment to turn people's dream events into reality. Our commitment to excellence drives us to continuously upgrade our inventory with the latest technology. From weddings to concerts, our range of lighting fixtures allows us to create bespoke designs that enhance the atmosphere. We understand the importance of lighting in setting the mood, which is why we provide exceptional lighting services that exceed expectations."
        buttonRounded={false}
        primaryButtonText="Contact Us"
        imageSrc="https://cloud.appwrite.io/v1/storage/buckets/6620f76347a6c75a350d/files/66390a63003e367ad807/view?project=661d51c7e4d47fa7d45d&mode=admin"
        textOnLeft={false}
      />
      <Features
        subheading={<Subheading>Our Values</Subheading>}
        heading="We follow these."
        description="Our commitment towards our values, are rooted in our core beliefs, which reflects our commitment to excellence. Our values include:"
        cards={[
          {
            imageSrc: ShieldIconImage,
            title: "Professionalism",
            description: "We have one of the most creative & Experienced team of professionals who can provide solutions and suggestions to our clients."
          },
          {
            imageSrc: SupportIconImage,
            title: "Customer Support",
            description: "We are always committed to working with clients who have strong relationships with our team. We are here to help."
          },
          {
            imageSrc: CustomerLoveIconImage,
            title: "Customer Satisfaction",
            description: "Your event is our priority. We strive to provide our clients with the best possible experience. Your satisfaction is our top priority."
          },
        ]}
        linkText=""
      />
      <TeamCardGrid />
      <Footer />
      {/* <div className="text-center w-full">
        <p>Developed By <span className="text-blue-500">Capable Apps</span></p>
      </div> */}
    </AnimationRevealPage>
  );
};
