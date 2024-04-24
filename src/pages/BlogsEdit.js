import Sidebar from 'Sidebar'
import React, { useEffect , useState } from 'react'
import { Client, Databases } from "appwrite";
import { fetchDataBlogs , client } from 'components/cards/AppwriteData';

const BlogsEdit = () => {
    const databases = new Databases(client);
    const [data, setData] = useState([])
    const [deleteID, setdeleteID] = useState("")

    
    const handleDelete = async (id) => {
        const promise = databases.deleteDocument('661d520b2995308dacf5', '6622c35bd517ac767979', id);
        
        console.log(promise);
      }
    useEffect(() => {
        fetchDataBlogs().then(response => {
            setData(response);
        });
      }, [handleDelete]);


    
console.log(data);
    return (
        <div className="flex blogsEdit overflow-hidden">
            <Sidebar />
            <div className="w-[calc(100%-14rem)] h-screen grid grid-cols-4 gap-2 items-start px-5 py-5 overflow-y-scroll">
                {data.map((blog , index) => (
                    
                <div className="w-[350px] h-auto flex rounded justify-center items-center">
                    <div className="w-[400px] h-auto bg-white px-5 py-10 shadow-lg">
                        <img className="w-full h-48 bg-white object-cover " src={blog.imageSrc} alt="" />
                        <p className="mt-2">{blog.date}</p>
                        <h1 className="mt-2 text-lg ">{blog.title}</h1>
                        <div className="w-full flex mt-5 justify-between">
                            <button className='py-2 px-6 rounded-md bg-yellow-400 hover:bg-blue-200 transition'>Edit</button>
                            <button className='py-2 px-4 rounded-md bg-red-400 hover:bg-red-200 transition' onClick={() => handleDelete(blog.$id)} >Delete</button>
                        </div>
                    </div>
                </div>
                  ))}
            </div>
        </div>
    )
}

export default BlogsEdit