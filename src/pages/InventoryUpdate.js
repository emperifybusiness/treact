import Sidebar from 'Sidebar'
import { Client, Storage, Databases, ID } from "appwrite";
import React, { useState, useEffect } from 'react'
import jquery from 'jquery';
import { MdOutlineDoneOutline } from "react-icons/md";
import { useNumber } from './Context';


const InventoryUpdate = () => {

    const client = new Client();
    const databases = new Databases(client);
    const storage = new Storage(client);
    client.setEndpoint('https://cloud.appwrite.io/v1')
        .setProject('661d51c7e4d47fa7d45d');

    const [category, setCategory] = useState();
    const [ModalDisplay, setModalDisplay] = useState(false);
    const [inventoryGetRequest, setInventoryGetRequest] = useState([]);
    const { inventoryEdit } = useNumber();


    window.onclick = function () { setModalDisplay(false); }

    const fetchDataInventoryUpdatedDocumentId = async () => {
        try {
            const response = databases.getDocument('661d520b2995308dacf5', '661d5216a2c20493387a', inventoryEdit);
            return response;
        } catch (error) {
            console.error("Error fetching data:", error);
            return [];
        }
    };
  
    useEffect(() => {
        fetchDataInventoryUpdatedDocumentId().then(response => {
            setInventoryGetRequest(response);
            console.log(response);
        });
    }, []);


    const { imageSrc: imagePrev, title: titlePrev, content: descriptionPrev, rating: ratingPrev, $id: id, $collectionId: collection, category: categoryPrev } = inventoryGetRequest || {};

    const [image, setImage] = useState();
    const [title, setTitle] = useState(titlePrev || '');
    const [description, setDescription] = useState(descriptionPrev || '');
    const [rating, setRating] = useState(ratingPrev || '');

    useEffect(() => {
        setTitle(titlePrev || '');
        setDescription(descriptionPrev || '');
        setRating(ratingPrev || '');
        setImage(imagePrev || '');
        setCategory(categoryPrev || '');
    }, [titlePrev, descriptionPrev, imagePrev, ratingPrev]);







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
            title: title ? title : titlePrev,
            content: description ? description : descriptionPrev,
            rating: rating ? rating : ratingPrev,
            category: category ? category : categoryPrev
        };

        try {
            const fileId = ID.unique();
            const promise = await databases.updateDocument('661d520b2995308dacf5', collection, id, formData);
            console.log('Data updated successfully!', promise);
            setModalDisplay(true)
            // Handle success, e.g., clear form, show success message
        } catch (error) {
            // console.error('Error saving data:', error);
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
                    <input type="text" name="title" value={title} placeholder="Title" className="w-3/4 h-8 border-2 outline-none px-5 py-5 mt-3 rounded" onChange={(e) => setTitle(e.target.value)} />
                    <div className="w-3/4 mt-3 flex justify-between">
                        <div className="h-auto w-auto">
                            <label htmlFor="category" className="block text-sm font-medium leading-6 text-gray-900">Category</label>
                            <select id="category" value={category} name="category" autoComplete="category-name" className="block w-64 mt-2 cursor-pointer rounded-md border-0 py-3 px-5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6" onChange={(e) => setCategory(e.target.value)}>
                                <option>lights</option>
                                <option>sound</option>
                                <option>production</option>
                            </select>
                        </div>
                        <div className="h-auto w-auto">
                            <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">Ratings</label>
                            <select value={rating} id="country" name="country" autoComplete="country-name" className="block w-64 mt-2 cursor-pointer rounded-md border-0 py-3 px-5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6" onChange={(e) => setRating(e.target.value)}>
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
                        <h1 className="mt-5 text-2xl">{title || titlePrev}</h1>
                        <p className="mt-5">{description || descriptionPrev}</p>
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

export default InventoryUpdate
