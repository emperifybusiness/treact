import React , { useState, useEffect } from "react";
import { Container, ContentWithPaddingXl } from "components/misc/Layouts";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro";
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings";
import { SectionDescription } from "components/misc/Typography";
import { ReactComponent as SvgDotPatternIcon } from "images/dot-pattern.svg";
import { fetchDataGallery } from "components/cards/AppwriteData";




const HeadingContainer = tw.div`text-center`;
const Subheading = tw(SubheadingBase)`mb-4`;
const Heading = tw(SectionHeading)``;
const Description = tw(SectionDescription)`mx-auto`;

const Posts = tw.div`mt-12 flex flex-wrap -mr-3 relative`;
const Post = tw.a`flex flex-col h-full bg-gray-200 rounded`;
const PostImage = styled.div`
  ${props => css`background-image: url("${props.imageSrc}");`}
  ${tw`h-64 sm:h-80 bg-center bg-cover rounded-t`}
`;
const PostText = tw.div`flex-1 px-6 py-8` 
const PostTitle = tw.h6`font-bold group-hocus:text-primary-500 transition duration-300 `;
const PostDescription = tw.p``;
const AuthorInfo = tw.div`flex`;
const AuthorImage = tw.img`w-12 h-12 rounded-full mr-3`;
const AuthorTextInfo = tw.div`text-xs text-gray-600`;
const AuthorName = tw.div`font-semibold mt-2`;
const AuthorProfile = tw.div`pt-1 font-medium`;

const PostContainer = styled.div`
  ${tw`relative z-20 mt-10 sm:pt-3 pr-3 w-full sm:w-1/2 lg:w-1/3 max-w-sm mx-auto sm:max-w-none sm:mx-0`}

  ${props => props.featured && css`
    ${tw`w-full sm:w-full lg:w-2/3`}
    ${Post} {
      ${tw`sm:flex-row items-center sm:pr-3`}
    }
    ${PostImage} {
      ${tw`sm:h-80 sm:min-h-full w-full sm:w-1/2 rounded-t sm:rounded-t-none sm:rounded-l`}
    }
    ${PostText} {
      ${tw`pl-8 pr-5`}
    }
    ${PostTitle} {
      ${tw`text-2xl`}
    }
    ${PostDescription} {
      ${tw`mt-4 text-sm font-semibold text-gray-600 leading-relaxed`}
    }
    ${AuthorInfo} {
      ${tw`mt-8 flex items-center`}
    }
    ${AuthorName} {
      ${tw`mt-0 font-bold text-gray-700 text-sm`}
    }
  `}
`;

const DecoratorBlob1 = tw(SvgDotPatternIcon)`absolute bottom-0 left-0 w-32 h-32 mb-3 ml-3 transform -translate-x-1/2 translate-y-1/2 fill-current text-gray-500 opacity-50`
const DecoratorBlob2 = tw(SvgDotPatternIcon)`absolute top-0 right-0 w-32 h-32 mt-16 mr-6 transform translate-x-1/2 -translate-y-1/2 fill-current text-gray-500 opacity-50`


const GridWithFeaturedPost = () => {

  const [Gallery, setGallery] = useState([]);

  useEffect(() => {
    fetchDataGallery().then(response => {
      setGallery(response);
    });
  }, []);


const GalleryData = {
  subheading : "",
  heading : "Setup Gallery",
  description : "",
  posts : {
    ...Gallery
  }
}
console.log(Gallery);
const PostsArray = Object.values(GalleryData.posts); // Spread the cards object into an array





  return (
    <Container>
    <ContentWithPaddingXl>
      <HeadingContainer>
        {GalleryData.subheading && <Subheading>{GalleryData.subheading}</Subheading>}
        {GalleryData.heading && <Heading>{GalleryData.heading}</Heading>}
        {GalleryData.escription && <Description>{GalleryData.description}</Description>}
      </HeadingContainer>
      <Posts>
        {PostsArray.slice(0,3).map((post, index) => (
          <PostContainer featured={post.featured} key={index}>
            <Post className="group" >
              <PostImage imageSrc={post.postImageSrc} />
              <PostText>
                <PostTitle>{post.title}</PostTitle>
                {post.featured && <PostDescription>{post.description}</PostDescription>}
                <AuthorInfo>
                  {post.featured && <AuthorImage src={post.authorName} />}
                  <AuthorTextInfo>
                    <AuthorName>{post.authorName}</AuthorName>
                    {post.featured && <AuthorProfile>{post.authorProfile}</AuthorProfile>}
                  </AuthorTextInfo>
                </AuthorInfo>
              </PostText>
            </Post>
          </PostContainer>
        ))}
        <DecoratorBlob1 />
        <DecoratorBlob2 />
      </Posts>
    </ContentWithPaddingXl>
  </Container>
  )
}

export default GridWithFeaturedPost
