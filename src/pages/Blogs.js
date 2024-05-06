import React, { useState, useEffect } from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import { Container, ContentWithPaddingXl } from "components/misc/Layouts";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro";
import { Link } from "react-router-dom";
import Header from "components/headers/light.js";
import Footer from "components/footers/SimpleFiveColumn.js";
import { SectionHeading } from "components/misc/Headings";
import { PrimaryButton } from "components/misc/Buttons";
import { fetchDataBlogs } from "components/cards/AppwriteData";
import { NavLink, NavLinks, PrimaryLink as PrimaryLinkBase, LogoLink, NavToggle, DesktopNavLinks } from "../components/headers/light.js";
import { useNumber } from './Context';
import parse from 'html-react-parser';

const HeadingRow = tw.div`flex`;
const Heading = tw(SectionHeading)`text-gray-900`;
const Posts = tw.div`mt-6 sm:-mr-8 flex flex-wrap`;
const PrimaryLink = tw(PrimaryLinkBase)`rounded-full`
const StyledHeader = styled(Header)`
  ${tw`max-w-none w-full`}
  ${DesktopNavLinks} ${NavLink}, ${LogoLink} {
    ${tw``}
  }
  ${NavToggle}.closed {
    ${tw`text-gray-100 hover:text-primary-500`}
  }
`;
const PostContainer = styled.div`
  ${tw`mt-10 w-full sm:w-1/2 lg:w-1/3 sm:pr-8`}
  ${props =>
    props.featured &&
    css`
      ${tw`w-full!`}
      ${Post} {
        ${tw`sm:flex-row! h-full sm:pr-4`}
      }
      ${Image} {
        ${tw`sm:h-96 sm:min-h-full sm:w-1/2 lg:w-2/3 sm:rounded-t-none sm:rounded-l-lg`}
      }
      ${Info} {
        ${tw`sm:-mr-4 sm:pl-8 sm:flex-1 sm:rounded-none sm:rounded-r-lg sm:border-t-2 sm:border-l-0`}
      }
      ${Description} {
        ${tw`text-sm mt-3 leading-loose text-gray-600 font-medium`}
      }
    `}
`;
const Post = tw.div`cursor-pointer flex flex-col bg-gray-100 rounded-lg`;
const Image = styled.div`
  ${props => css`background-image: url("${props.imageSrc}");`}
  ${tw`h-64 w-full bg-cover bg-center rounded-t-lg`}
`;
const Info = tw.div`p-8 border-2 border-t-0 rounded-lg rounded-t-none`;
const Category = tw.div`uppercase text-primary-500 text-xs font-bold tracking-widest leading-loose after:content after:block after:border-b-2 after:border-primary-500 after:w-8`;
const CreationDate = tw.div`mt-4 uppercase text-gray-600 italic font-semibold text-xs`;
const Title = tw.div`mt-1 font-black text-2xl text-gray-900 group-hover:text-primary-500 transition duration-300`;
const Description = tw.div``;

const ButtonContainer = tw.div`flex justify-center`;
const LoadMoreButton = tw(PrimaryButton)`mt-16 mx-auto`;


const Blogs = () => {
  const { updateNumber } = useNumber();
  console.log(updateNumber);
  const handleClick = (index) => {
    updateNumber(index);
  };



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
  const [visible, setVisible] = useState(7);
  const onLoadMoreClick = () => {
    setVisible(v => v + 6);
  }
  const [AllBlogs, setAllBlogs] = useState([])
  useEffect(() => {
    fetchDataBlogs().then(response => {
      setAllBlogs(response);
    });
  }, []);
  const Blogs = {
    headingText: "Blog Posts",
    posts: [
      ...AllBlogs
    ]
  }
  const data = Blogs.posts;


  return (
    <AnimationRevealPage> 
      <StyledHeader links={navLinks} />
      <Container>
        <ContentWithPaddingXl>
          <HeadingRow>
            <Heading>{Blogs.headingText}</Heading>
          </HeadingRow>
          <Link to="/blog">
            <Posts>
              {data.map((post, index) => (
                <PostContainer onClick={() => handleClick(index)} key={index} featured={post.featured}>
                  <Post className="group" as="a" href={post.url}>
                    <Image imageSrc={post.imageSrc} />
                    <Info>
                      <Category>{post.category}</Category>
                      <CreationDate>{new Intl.DateTimeFormat('en-IN', {
                        year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric'
                      }).format(new Date(post.date))}</CreationDate>
                      <Title>{post.title.substring(0, 20) + "..."}</Title>
                      {
                        <Description className="text-xl" >{parse(post.description.substring(0,100))}...</Description>}
                    </Info>
                  </Post>
                </PostContainer>

              ))}
            </Posts>
          </Link>
          {visible < data.length && (
            <ButtonContainer>
              <LoadMoreButton onClick={onLoadMoreClick}>Load More</LoadMoreButton>
            </ButtonContainer>
          )}
        </ContentWithPaddingXl>
      </Container>
      <Footer />
    </AnimationRevealPage>
  )
}

export default Blogs

