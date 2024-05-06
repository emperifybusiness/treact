import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { FaInstagram } from "react-icons/fa";
import LogoImage from "../../images/LOGO REAL.png";
import { ReactComponent as FacebookIcon } from "../../images/facebook-icon.svg";
import { ReactComponent as YoutubeIcon } from "../../images/youtube-icon.svg";
import { ReactComponent as Linkedin } from "../../images/linkedin-icon.svg";

const Container = tw.div`relative bg-gray-200 -mx-8 -mb-8 px-8`;
const FiveColumns = tw.div`max-w-screen-xl mx-auto py-16 lg:py-20 flex flex-wrap justify-between`;

const Column = tw.div`md:w-1/5`;
const WideColumn = tw(Column)`text-center md:text-left w-full md:w-2/5 mb-10 md:mb-0`;

const ColumnHeading = tw.h5`font-bold`;

const LinkList = tw.ul`mt-4 text-sm font-medium`;
const LinkListItem = tw.li`mt-3`;
const Link = tw.a`border-b-2 border-transparent hocus:text-primary-500 hocus:border-primary-500 pb-1 transition duration-300`;

const LogoContainer = tw.div`flex items-center justify-center md:justify-start`;

const LogoText = tw.h5` text-2xl font-black text-primary-500`;

const CompanyDescription = tw.p`mt-4 max-w-xs font-medium text-sm mx-auto md:mx-0 md:mr-4 `;

const SocialLinksContainer = tw.div`mt-4 `;
const SocialLink = styled.a`
  ${tw`cursor-pointer inline-block p-2 rounded-full bg-gray-700 text-gray-100 hover:bg-gray-900 transition duration-300 mr-4`}
  svg {
    ${tw`w-4 h-4`}
  }
`;

export default () => {
  return (
    <Container>
      <FiveColumns>
        <WideColumn>
          <LogoContainer>
            <LogoText>Cas Ant Events Pvt Ltd</LogoText>
          </LogoContainer>
          <CompanyDescription>
            Creating memories since 1998, All over Goa. Specialized in Light , Sound & Production.
          </CompanyDescription>
          <SocialLinksContainer>
            <SocialLink href="https://www.facebook.com/profile.php?id=100063716452803">
              <FacebookIcon />
            </SocialLink>
            <SocialLink href="https://www.instagram.com/casantevents.goa/">
              <FaInstagram />
            </SocialLink>
            <SocialLink href="https://www.youtube.com/channel/UCLs9_gDMmkTQelB27W3C8cA">
              <YoutubeIcon />
            </SocialLink>
            <SocialLink href="https://www.linkedin.com/company/cas-ant-events-private-limited/mycompany/">
              <Linkedin />
            </SocialLink>
          </SocialLinksContainer>
        </WideColumn>
        <Column>
          <ColumnHeading>Quick Links</ColumnHeading>
          <LinkList>
            <LinkListItem>
              <Link href="/blogs">Blog</Link>
            </LinkListItem>
            <LinkListItem>
              <Link href="/Gallery">Gallery</Link>
            </LinkListItem>
            <LinkListItem>
              <Link href="/Inventory">Inventory</Link>
            </LinkListItem>
            <LinkListItem>
              <Link href="/AboutUs">About Us</Link>
            </LinkListItem>
          </LinkList>
        </Column>
        <Column>
          <ColumnHeading>Product</ColumnHeading>
          <LinkList>
            <LinkListItem>
              <Link href="#">Log In</Link>
            </LinkListItem>
            <LinkListItem>
              <Link href="#">Personal</Link>
            </LinkListItem>
            <LinkListItem>
              <Link href="#">Business</Link>
            </LinkListItem>
            <LinkListItem>
              <Link href="#">Team</Link>
            </LinkListItem>
          </LinkList>
        </Column>
        <Column>
          <ColumnHeading>Legal</ColumnHeading>
          <LinkList>
            <LinkListItem>
              <Link href="#">GDPR</Link>
            </LinkListItem>
            <LinkListItem>
              <Link href="#">Privacy Policy</Link>
            </LinkListItem>
            <LinkListItem>
              <Link href="#">Terms of Service</Link>
            </LinkListItem>
            <LinkListItem>
              <Link href="#">Disclaimer</Link>
            </LinkListItem>
          </LinkList>
        </Column>
      </FiveColumns>
    </Container>
  );
};
