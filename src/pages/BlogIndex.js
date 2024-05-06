import React, { useState } from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import { Container, ContentWithPaddingXl } from "components/misc/Layouts";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro";
import Header from "components/headers/light.js";
import Footer from "components/footers/SimpleFiveColumn.js";
import { SectionHeading } from "components/misc/Headings";
import { PrimaryButton } from "components/misc/Buttons";
import { useEffect } from "react";
import { NavLink, NavLinks, PrimaryLink as PrimaryLinkBase, LogoLink, NavToggle, DesktopNavLinks } from "../components/headers/light.js";
import { fetchDataBlogs } from "components/cards/AppwriteData.js";
import { useNumber } from './Context.js';
import parse from 'html-react-parser';
const HeadingRow = tw.div`flex`;
const Heading = tw(SectionHeading)`text-gray-900`;
const Posts = tw.div`mt-6 sm:-mr-8 flex flex-col`;
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
        ${tw`sm:h-96 sm:min-h-144 sm:w-full lg:w-full`}
      }
      ${Info} {
        ${tw`sm:-mr-4 sm:pl-8 sm:flex-1`}
      }
      ${Description} {
        ${tw`text-sm mt-3 leading-loose text-gray-600 font-medium`}
      }
    `}
`;
const Post = tw.div`cursor-pointer bg-gray-100 `;
const Image = styled.div`
  ${props => css`background-image: url("${props.imageSrc}");`}
  ${tw`h-64 w-full bg-cover bg-center`}
`;
const Info = tw.div`py-8 px-0`;
const Category = tw.div`uppercase text-primary-500 text-xs font-bold tracking-widest leading-loose after:content after:block after:border-b-2 after:border-primary-500 after:w-8`;
const CreationDate = tw.div`mt-4 uppercase text-gray-600 italic font-semibold text-xs`;
const Title = tw.div`mt-1 font-black text-2xl text-gray-900 group-hover:text-primary-500 transition duration-300`;
const Description = tw.div``;
const PrimaryLink = tw(PrimaryLinkBase)`rounded-full`
const ButtonContainer = tw.div`flex justify-center`;
const LoadMoreButton = tw(PrimaryButton)`mt-16 mx-auto`;


const BlogIndex = () => {
  const { number } = useNumber();
  console.log(number);
  const [Blogs, setBlogs] = useState([])
  useEffect(() => {
    fetchDataBlogs().then(response => {
      setBlogs(response);
    });
  }, []);
  const navLinks = [
    <NavLinks key={1}>
      <NavLink href="#">
        Inventory
      </NavLink>
      <NavLink href="/blogs">
        Blog
      </NavLink>
      <NavLink href="#">
        Portfolio
      </NavLink>
      <NavLink href="#">
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
  };
  const BlogPosts = {
    headingText: "Blogs",
    posts: [
      ...Blogs
    ]
  }

  const data = BlogPosts.posts[number]



  // const imageSrc = data.imageSrc;
  // const category = data.category;
  // const date = data.date;
  // const title = data.title;
  // const description = data.description


  return (
    <AnimationRevealPage>
      <Header />
      <Container >
        <ContentWithPaddingXl>
          <HeadingRow>
            <Heading>{BlogPosts.headingText}</Heading>
          </HeadingRow>
          <Posts >
            {data && data.imageSrc && (
              <PostContainer featured={data.featured = true}>
                <Post className="group" >
                  <Image style={{ borderRadius: "20px" }} imageSrc={data.imageSrc} />
                  <Info style={{ padding: "0", marginTop: "50px", }}>
                    <Category>{data.category}</Category>
                    <CreationDate>{new Intl.DateTimeFormat('en-IN', {
                      year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric'
                    }).format(new Date(data.date))}</CreationDate>
                    <Title>{data.title}</Title>
                    <Description>{parse(data.description)}</Description>
                  </Info>
                </Post>
              </PostContainer>
            )}
          </Posts>

        </ContentWithPaddingXl>
      </Container>
      <Footer />
    </AnimationRevealPage>
  )
}
export default BlogIndex
