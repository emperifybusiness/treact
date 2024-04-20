import React, { useState } from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import { Container, ContentWithPaddingXl } from "components/misc/Layouts";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro";
import Header from "components/headers/light.js";
import Footer from "components/footers/FiveColumnWithInputForm.js";
import { SectionHeading } from "components/misc/Headings";
import { PrimaryButton } from "components/misc/Buttons";
import { useEffect } from "react";
import { fetchDataBlogs, client } from "components/cards/AppwriteData";

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

const ButtonContainer = tw.div`flex justify-center`;
const LoadMoreButton = tw(PrimaryButton)`mt-16 mx-auto`;


const BlogIndex = () => {
  const [Blogs, setBlogs] = useState([]);
  const [documents, setDocuments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDataBlogs().then(response => {
      setBlogs(response);
    });
  }, []);

  useEffect(() => {
    client
      .setEndpoint('https://cloud.appwrite.io/v1') // Replace with your Appwrite endpoint
      .setProject('661d51c7e4d47fa7d45d') // Replace with your Appwrite project ID
      .setKey('383ab9a8a79175565b89b08f87130757a87fd7f6ecd3e5bbcb40c9069478f4e562441f048f9ab5b455999b14e245ce3ebc87d03db6e93bbb4f72195f271b11463f547b25ff4ba2d5d5621077e0fe4192de26e4dd193fee64da5cdb17779e894a9c602f05ca627d72f9b912196f72f57f3cf501fd1d237b252bb8775a3678c7a9'); // Replace with your Appwrite API key

    // Fetch all documents from the database
    client.database.listDocuments('6622c35bd517ac767979')
      .then((response) => {
        setDocuments(response.documents);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching documents:', error);
        setLoading(false);
      });
  }, []);

  const [visible, setVisible] = useState(7);

  const onLoadMoreClick = () => {
    setVisible(v => v + 6);
  };
  const blogPosts = {
    headingText: "Authour's Space",
    posts: [
      ...Blogs
    ]
  };

  console.log(Blogs);
  const BlogsArray = Object.values(blogPosts.posts);

const toggleFeature = (documentId) => {
  const updatedDocuments = documents.map((doc) => {
    if (doc.$id === documentId) {
      const updatedDoc = { ...doc, feature: !doc.feature };
      // Update the feature value in the database
      client.database.updateDocument('6622c35bd517ac767979', documentId, {
        feature: updatedDoc.feature
      })
        .then(() => {
          console.log(`Feature toggled for document ${documentId}`);
        })
        .catch((error) => {
          console.error(`Error toggling feature for document ${documentId}:`, error);
        });
      return updatedDoc;
    }
    return doc;
  });
  setDocuments(updatedDocuments);
};
  return (
    <AnimationRevealPage>
      <Header />
      <Container >
        <ContentWithPaddingXl>
          <HeadingRow>
            <Heading>{blogPosts.headingText}</Heading>
          </HeadingRow>
          <Posts onClick={() => toggleFeature(doc.$id)} >
            {BlogsArray.slice(0, visible).map((post, index) => (
              <PostContainer key={index} featured={post.featured}>
                <Post className="group" >
                  <Image style={{ borderRadius: "20px" }} imageSrc={post.imageSrc} />
                  <Info style={{ padding: "0", marginTop: "50px", }}>
                    <Category>{post.category}</Category>
                    <CreationDate>{post.date}</CreationDate>
                    <Title>{post.title}</Title>
                    {post.openBlog && post.description && <Description>{post.description}</Description>}
                  </Info>
                </Post>
              </PostContainer>
            ))}
          </Posts>

        </ContentWithPaddingXl>
      </Container>
      <Footer />
    </AnimationRevealPage>
  )
}
export default BlogIndex
