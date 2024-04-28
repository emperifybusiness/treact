import Sidebar from 'Sidebar'
import { Client, Storage, Databases, ID } from "appwrite";
import React, { useState, useEffect } from 'react'
import jquery from 'jquery';
import { MdOutlineDoneOutline } from "react-icons/md";
import { fetchDataBlogs } from 'components/cards/AppwriteData';
import { useNumber } from './Context';

const BlogsUpdate = () => {
    const [FeatureValue, setFeatureValue] = useState();
    const [ModalDisplay, setModalDisplay] = useState(false);
    const [blogUpdate, setBlogUpdate] = useState([]);
    const { editID } = useNumber();

    useEffect(() => {
        fetchDataBlogs().then(response => {
            setBlogUpdate(response);
        });
    }, []);

    const { imageSrc: imagePrev, title: titlePrev, description: descriptionPrev, category: categoryPrev, featured: featuredPrev, $id: id } = blogUpdate[editID] || {};

    const [image, setImage] = useState();
    const [title, setTitle] = useState(titlePrev || '');
    const [description, setDescription] = useState(descriptionPrev || '');
    const [category, setCategory] = useState(categoryPrev || '');
    const [Featured, setFeatured] = useState(featuredPrev || '');

    useEffect(() => {
        setTitle(titlePrev || '');
        setDescription(descriptionPrev || '');
        setCategory(categoryPrev || '');
        setFeatured(featuredPrev || '');
        setImage(imagePrev || '');

    }, [titlePrev, descriptionPrev, categoryPrev, featuredPrev, imagePrev]);

    window.onclick = function () { setModalDisplay(false); }

    if (FeatureValue === "true") {
        setFeatured(true)
    }
    if (FeatureValue === "false") {
        setFeatured(false)
    }
    if (FeatureValue === "null") {
        setFeatured(false)
    }

    const indianDate = new Intl.DateTimeFormat('en-IN', { timeZone: 'Asia/Kolkata', hour12: false, weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
    const currentDate = indianDate.format(new Date());

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



    const handleEditData = async () => {
        const formData = {
            imageSrc: image ? image : imagePrev,
            category: category ? category : categoryPrev,
            title: title ? title : titlePrev,
            featured: Featured ? Featured : featuredPrev,
            description: description ? description : descriptionPrev,
            date: currentDate
        };

        try {
            const fileId = ID.unique();
            const promise = await databases.updateDocument('661d520b2995308dacf5', '6622c35bd517ac767979', id, formData);
            console.log('Data updated successfully!', promise);
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
                    <button type="" onClick={() => jquery('.file-upload-input').trigger('click')} className="h-40 mt-5 bg-blue-200 w-3/4 rounded-lg border-1 border-black border-dashed flex justify-center items-center">
                        <input type="file" id="uploader" className="file-upload-input hidden" name="" onChange={(e) => { if (e.target.files.length > 0) handleFileUpload() }} />
                        <h1>Click to Upload Image</h1>
                    </button>
                    <input type="text" name="title" value={title}  placeholder="Title" className="w-3/4 h-8 border-2 outline-none px-5 py-5 mt-3 rounded" onChange={(e) => setTitle(e.target.value)} />
                    <div className="w-3/4 mt-3 flex justify-between">
                        <div className="h-auto w-auto">
                            <label htmlFor="category" className="block text-sm font-medium leading-6 text-gray-900">Category</label>
                            <select id="category" value={category} name="category" autoComplete="category-name" className="block w-64 mt-2 cursor-pointer rounded-md border-0 py-3 px-5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6" onChange={(e) => setCategory(e.target.value)}>
                                <option>Lights</option>
                                <option>Sound</option>
                                <option>Announcement</option>
                                <option>Inventory</option>
                                <option>updates</option>
                            </select>
                        </div>
                        <div className="h-auto w-auto">
                            <label htmlFor="featured" className="block text-sm font-medium leading-6 text-gray-900">Featured</label>
                            <select id="featured" value={Featured} name="featured" autoComplete="featured-option" className="block w-64 mt-2 cursor-pointer rounded-md border-0 py-3 px-5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6" onChange={(e) => setFeatureValue(e.target.value)}>
                                <option>True</option>
                                <option>False</option>
                                <option>null</option>
                            </select>
                        </div>
                    </div>
                    <div className="w-3/4 mt-3">
                        <label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900">Content</label>
                        <div className="mt-2">
                            <textarea id="about" name="about" value={description} rows="10" className="block w-full rounded-md border-0 py-3 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" onChange={(e) => setDescription(e.target.value)}></textarea>
                        </div>
                        <div className="w-full mt-5 flex justify-between">
                            <p className="mt-3 text-sm leading-6 text-gray-600">Content writing is a wonderful skill</p>
                            <button className="py-3 px-10 rounded-md bg-blue-400 hover:bg-blue-200 transition" onClick={handleEditData} type="button" >UPDATE</button>
                        </div>
                    </div>
                </div>
                <div className="w-1/2 h-full flex rounded justify-center items-center">
                    <div className="w-3/4 h-auto bg-white px-5 py-10 shadow-lg">
                        <img className="w-full h-64 bg-white object-cover " src={image || imagePrev} alt="" />
                        <p className="mt-5">{currentDate}</p>
                        <h1  className="mt-5 text-2xl">{title || titlePrev}</h1>
                        <p className="mt-5">{description || descriptionPrev ? (description || descriptionPrev).substring(0, 100) + '...' : '..'}</p>
                    </div>
                </div>
            </div>
            {ModalDisplay && (
                <div className="absolute w-full h-full flex justify-center items-center">
                    <div className="w-2/6 h-72 rounded-lg transition-all bg-green-600 flex flex-col justify-center items-center drop-shadow-lg">
                        <MdOutlineDoneOutline color="white" size={100} />
                        <h1 className="mt-10 text-2xl text-white">updated Successfully</h1>
                    </div>
                </div>
            )}
        </div>
    )
}

export default BlogsUpdate
