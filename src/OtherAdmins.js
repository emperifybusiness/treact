
// import React, { useState } from 'react'
// import { Client, Storage, ID } from "appwrite";
// import tw from "twin.macro";
// import styled from "styled-components";
// import { motion } from "framer-motion";
// import { SectionHeading } from "components/misc/Headings.js";
// import Sidebar from 'Sidebar';
// import "./OtherAdmins.css"

// const Heading = tw(SectionHeading)`text-left lg:text-4xl xl:text-5xl`;
// const Post = tw(motion.a)`block sm:max-w-sm cursor-pointer mb-16 last:mb-0 sm:mb-0 sm:odd:mr-8 lg:mr-8 xl:mr-16`;
// const Image = styled(motion.div)(props => [
//   `background-image: url("${props.$imageSrc}");`,
//   tw`h-64 bg-cover bg-center rounded`
// ]);
// const AuthorInfo = tw.div`mt-6 flex items-center`;
// const Description = tw.p`mt-2 font-medium text-secondary-100 leading-loose text-sm`;
// const AuthorImage = tw.img`w-12 h-12 rounded-full`;
// const AuthorNameAndProfession = tw.div`ml-4`;
// const PopularPostsContainer = tw.div`lg:w-2/3`;
// const AuthorProfile = tw.p`text-secondary-100 text-sm`;
// const PostTextContainer = tw.div``
// const Title = tw.h5`mt-6 text-xl font-bold transition duration-300 group-hover:text-primary-500`;
// const AuthorName = tw.h6`font-semibold text-lg`;
// const PostsContainer = tw.div`mt-12 flex flex-col sm:flex-row sm:justify-between lg:justify-start`;
// const OtherAdmins = () => {

//   const [data, setData] = React.useState(null);
//   const [description, setdescription] = useState("")
//   const [title, settitle] = useState("")


//   const client = new Client()
//     .setEndpoint('https://cloud.appwrite.io/v1')
//     .setProject('661d51c7e4d47fa7d45d');

//   const storage = new Storage(client);
//   const RecentPostsContainer = styled.div`
//   ${tw`mt-24 lg:mt-0 lg:w-1/3`}
//   ${PostsContainer} {
//     ${tw`flex flex-wrap lg:flex-col`}
//   }
//   ${Post} {
//     ${tw`flex justify-between mb-10 max-w-none w-full sm:w-1/2 lg:w-auto sm:odd:pr-12 lg:odd:pr-0 mr-0`}
//   }
//   ${Title} {
//     ${tw`text-base xl:text-lg mt-0 mr-4 lg:max-w-xs`}
//   }
//   ${AuthorName} {
//     ${tw`mt-3 text-sm text-secondary-100 font-normal leading-none`}
//   }
//   ${Image} {
//     ${tw`h-20 w-20 flex-shrink-0`}
//   }
// `;

//   const upload = async () => {

//     try {
//       const file = document.getElementById('uploader').files[0];
//       const fileId = ID.unique();
//       const { $id } = await storage.createFile('6620f76347a6c75a350d', fileId, file);
//       setData(`https://cloud.appwrite.io/v1/storage/buckets/6620f76347a6c75a350d/files/${$id}/preview?project=661d51c7e4d47fa7d45d`);
//       console.log(data);
//     } catch (error) {
//       console.error(error);
//     }
//   };
//   console.log(data);
//   const postBackgroundSizeAnimation = {
//     rest: {
//       backgroundSize: "100%"
//     },
//     hover: {
//       backgroundSize: "110%"
//     }
//   };


//   return (
//     <div className="con flex">
//       <Sidebar />
//       <div className="h-screen w-full grid grid-cols-2">
//         <div className="formconatiner w-full bg-blue-200 flex flex-col justify-center items-center">
//           <div className='flex flex-col'>
//             <label className="text-2xl font-bold " htmlFor="">BLOG POSTER</label>
//             <div className="file-upload-form"  >
//               <label for="file" className="file-upload-label">
//                 <div className="file-upload-design">
//                   <svg viewBox="0 0 640 512" height="1em">
//                     <path
//                       d="M144 480C64.5 480 0 415.5 0 336c0-62.8 40.2-116.2 96.2-135.9c-.1-2.7-.2-5.4-.2-8.1c0-88.4 71.6-160 160-160c59.3 0 111 32.2 138.7 80.2C409.9 102 428.3 96 448 96c53 0 96 43 96 96c0 12.2-2.3 23.8-6.4 34.6C596 238.4 640 290.1 640 352c0 70.7-57.3 128-128 128H144zm79-217c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l39-39V392c0 13.3 10.7 24 24 24s24-10.7 24-24V257.9l39 39c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-80-80c-9.4-9.4-24.6-9.4-33.9 0l-80 80z"
//                     ></path>
//                   </svg>
//                   <p>click to load an image</p>
//                   <p>or</p>
//                   <span onClick={() => document.getElementById("uploader").click()} className="browse-button">Browse file</span>
//                 </div>
//                 <input id="uploader" type="file" />
//               </label>
//             </div>
//             <div className="coolinput">
//               <label htmlFor="input" className="text">Enter Title :</label>
//               <input type="text" placeholder="Write here..." onChange={(e) => settitle(e.target.value)} name="input" className="input" />
//             </div>
//             <textarea placeholder='Enter Your Content' name="" id="" className='mt-5 px-3 py-3' cols="30" rows="10" onChange={(e) => setdescription(e.target.value)}></textarea>
//             <button className='mt-5 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600' onClick={upload}>LOAD IMAGE</button>
//           </div>
//         </div>
//         <div className="formconatiner flex justify-center items-center  w-full  ">
//           <PopularPostsContainer>
//             <Heading>Preview</Heading>
//             <PostsContainer>

//               <Post className="group" initial="rest" whileHover="hover" animate="rest">
//                 <Image
//                   transition={{ duration: 0.3 }}
//                   variants={postBackgroundSizeAnimation}
//                   $imageSrc={data}
//                 />
//                 <Title>{title}</Title>
//                 <Description>{description}</Description>
//                 {/* <AuthorInfo>
//                 <AuthorImage src={authorImageSrc} />
//                 <AuthorNameAndProfession>
//                   <AuthorName>{authorName}</AuthorName>
//                   <AuthorProfile>{authorProfile}</AuthorProfile>
//                 </AuthorNameAndProfession>
//               </AuthorInfo> */}
//               </Post>

//             </PostsContainer>
//           </PopularPostsContainer>
//         </div>
//       </div>
//     </div>

//   )
// }

// export default OtherAdmins