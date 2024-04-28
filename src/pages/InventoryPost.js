import Sidebar from "../Sidebar";
import { Client, Storage, Databases, ID } from "appwrite";
import React, { useState, useRef } from 'react'
import jquery from 'jquery';
import { MdOutlineDoneOutline } from "react-icons/md";
import "./BlogPoster.css"

const InventoryPost = () => {
    const [image, setImage] = useState("");
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [rating, setRating] = useState("");
    const [category, setCategory] = useState("")
    const [Featured, setFeatured] = useState(false);
    const [FeatureValue, setFeatureValue] = useState("");
    const [ModalDisplay, setModalDisplay] = useState(false);

    window.onclick = function () { setModalDisplay(false); }

    const client = new Client();
    const databases = new Databases(client);
    const storage = new Storage(client);
    client.setEndpoint('https://cloud.appwrite.io/v1')
        .setProject('661d51c7e4d47fa7d45d');

    function clearFileInput() {
        const fileInput = document.getElementById('uploader');
        fileInput.value = null;
    }

    const handleFileUpload = async () => {
        try {
            const file = document.getElementById('uploader').files[0];
            const fileId = ID.unique();
            const { $id } = await storage.createFile('6620f76347a6c75a350d', fileId, file);
            setImage(`https://cloud.appwrite.io/v1/storage/buckets/6620f76347a6c75a350d/files/${$id}/preview?project=661d51c7e4d47fa7d45d`);
            clearFileInput();
        } catch (error) {
            console.error(error);
        }
    }

    const handlePostData = async () => {
        const formData = {
            imageSrc: image,
            category: category,
            rating: rating,
            title: title,
            content: description,
        };

        try {
            const fileId = ID.unique();
            const promise = await databases.createDocument('661d520b2995308dacf5', '661d5216a2c20493387a', fileId, formData);
            console.log('Data saved successfully!', promise);
            setModalDisplay(true)
            // Handle success, e.g., clear form, show success message
        } catch (error) {
            console.error('Error saving data:', error);
            // Handle errors, e.g., show error message
        }
    }

    return (
        <div className="flex bg-primary-100 w-full h-screen">
            <Sidebar />
            <div className="w-[calc(100%-14rem)] flex ">
                <div className="w-1/2 h-full flex flex-col justify-center items-center">
                    <p className="mt-3 text-sm leading-6 text-gray-600">We value our writers , Avoid bad language</p>
                    <button type="fil" onClick={() => jquery('.file-upload-input').trigger('click')} className="h-40 mt-5 bg-blue-200 w-3/4 rounded-lg border-1 border-black border-dashed flex justify-center items-center">
                        <input type="file" id="uploader" className="file-upload-input hidden" name="" onChange={(e) => { if (e.target.files.length > 0) handleFileUpload() }} />
                        <h1>Click to Upload Image</h1>
                    </button>
                    <input type="text" name="title" id="" placeholder="Title" className="w-3/4 h-8 border-2 outline-none px-5 py-5 mt-3 rounded" onChange={(e) => setTitle(e.target.value)} />
                    <div className="w-3/4 mt-3 flex justify-between">
                        <div className="h-auto w-auto">
                            <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">Category</label>
                            <select id="country" value={category} name="country" autoComplete="country-name" className="block w-64 mt-2 cursor-pointer rounded-md border-0 py-3 px-5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6" onChange={(e) => setCategory(e.target.value)}>
                                <option>lights</option>
                                <option>sound</option>
                                <option>production</option>
                            </select>
                        </div>
                        <div className="h-auto w-auto">
                            <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">Ratings</label>
                            <select id="country" value={rating} name="country" autoComplete="country-name" className="block w-64 mt-2 cursor-pointer rounded-md border-0 py-3 px-5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6" onChange={(e) => setRating(e.target.value)}>
                                <option>5.0</option>
                                <option>4.5</option>
                                <option>4.0</option>
                                <option>3.5</option>
                                <option>3.0</option>
                                <option>2.5</option>
                                <option>2.0</option>
                                <option>1.5</option>
                                <option>1.0</option>
                            </select>
                        </div>
                    </div>
                    <div className="w-3/4 mt-3">
                        <label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900">Content</label>
                        <div className="mt-2">
                            <textarea id="about" name="about" rows="10" className="block w-full rounded-md border-0 py-3 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" onChange={(e) => setDescription(e.target.value)}></textarea>
                        </div>
                        <div className="w-full mt-5 flex justify-between">
                            <p className="mt-3 text-sm leading-6 text-gray-600">Content writing is a wonderful skill</p>
                            <button className="py-3 px-10 rounded-md bg-blue-400 hover:bg-blue-200 transition" onClick={handlePostData} type="button" >POST</button>
                        </div>
                    </div>
                </div>
                <div className="w-1/2 h-full flex rounded justify-center items-center">
                    <div className="w-3/4 h-auto bg-white px-5 py-10 shadow-lg">
                        <img className="w-full h-64 bg-white object-cover " src={image} alt="" />
                        {/* <p className="mt-5">{currentDate}</p> */}
                        <h1 className="mt-5 text-2xl">{title ? title : "Here's your title"}</h1>
                        <p className="mt-5">{description ? description : "Here's your content, Write something valuable, writing helps you increase your vocabulary"}</p>
                    </div>
                </div>
            </div>
            {ModalDisplay && (
                <div className="absolute w-full h-full flex justify-center items-center">
                    <div className="w-2/6 h-72 rounded-lg transition-all bg-green-600 flex flex-col justify-center items-center drop-shadow-lg">
                        <MdOutlineDoneOutline color="white" size={100} />
                        <h1 className="mt-10 text-2xl text-white">Posted Successfully</h1>
                    </div>
                </div>
            )}
        </div>
    )
}

export default InventoryPost;
