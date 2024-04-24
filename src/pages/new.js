import Sidebar from "./Sidebar";
import { Client, Storage, Databases, ID } from "appwrite";
import React, { useState } from 'react'
import "./BlogPoster.css"

const BlogPoster = () => {
    const [image, setImage] = useState("");
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");

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
            title: title,
            featured: false,
            description: description,
        };

        try {
            const fileId = ID.unique();
            const promise = await databases.createDocument('661d520b2995308dacf5', '6622c35bd517ac767979', fileId, formData);
            console.log('Data saved successfully!', promise);
            // Handle success, e.g., clear form, show success message
        } catch (error) {
            console.error('Error saving data:', error);
            // Handle errors, e.g., show error message
        }
    }

    return (
        <div className="flex w-full">
            <Sidebar />
            <div className="w-1/2 h-screen flex justify-center items-center">
                <div className="poster flex flex-col w-full px-5 h-full justify-center">
                    <div className="file-upload">
                        <button className="file-upload-btn" type="button" onClick={() => $('.file-upload-input').trigger('click')}>Add Image</button>
                        <div className="image-upload-wrap">
                            <input className="file-upload-input" type='file' id="uploader" onChange={(e) => { if (e.target.files.length > 0) handleFileUpload() }} accept="image/*" />
                            <div className="drag-text">
                                <h3>Drag and drop a file or select add Image</h3>
                            </div>
                        </div>
                    </div>
                    <div className="w-full flex flex-col justify-center items-center mt-5">
                        <input type="text" className="py-3 px-3 w-1/2 block border-2 border-gray-700 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none" placeholder="Your Blog Title" onChange={(e) => setTitle(e.target.value)} />
                    </div>
                    <div className="w-full flex flex-col justify-center items-center mt-5">
                        <input type="text" className="py-3 px-3 w-1/2 block border-2 border-gray-700 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none" placeholder="Category" onChange={(e) => setCategory(e.target.value)} />
                        <textarea id="message" rows="4" className="block p-2.5 w-3/4 mt-5 px-5 pt-5 h-72 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Paste your content here..." onChange={(e) => setDescription(e.target.value)}></textarea>
                        <button type="submit" className="py-2 w-20 mt-5 rounded-sm px-2 bg-blue-500" onClick={handlePostData}>Post</button>
                    </div>
                </div>
            </div>
            <div className="bg-primary-100 w-1/2 flex justify-center items-center">
                <div className="card_preview h-auto w-80 bg-secondary-900">
                    <div className="imageContainer h-64 w-96 bg-gray-400">
                        <img src={image} className="h-64 w-96 bg-cover" alt="" srcSet="" />
                    </div>
                    <h1 className="font-bold mt-4 text-2xl w-auto mb-4">{title ? title : "Here's your title"}</h1>
                    <p>{description ? description : "Here's your content"}</p>
                </div>
            </div>
        </div>
    )
}

export default BlogPoster;
