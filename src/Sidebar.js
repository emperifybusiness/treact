import React , {useState} from 'react'
import { MdOutlinePostAdd , MdManageAccounts, MdInventory  } from "react-icons/md";
import { FaBox } from "react-icons/fa6";
import { Link } from 'react-router-dom';
const Sidebar = () => {
    const [active, setActive] = useState(false);
    const features = [
        {name: "Blog Poster", icon : <MdOutlinePostAdd color='rgb(99 179 237 / var(--tw-bg-opacity))' className='m-5' size={30} /> , routing : "/postreqhandlerAdmin"},
        {name: "Blog manager", icon : <MdManageAccounts color='rgb(99 179 237 / var(--tw-bg-opacity))' className='m-5' size={30} /> , routing : "/BlogseditAdmin"},
        {name: "Inventory", icon : <MdInventory color='rgb(99 179 237 / var(--tw-bg-opacity))' className='m-5' size={30} />},
        {name: "Inventory Edit", icon : <FaBox color='rgb(99 179 237 / var(--tw-bg-opacity))' className='m-5' size={30} />}
    ]
    return (
        <div className=" py-3 px-3 w-56 bg-white shadow-lg h-screen">
            <div className="h-10 w-full bg-blue-400 text-white shadow-xs flex justify-center rounded items-center mb-10">CASANT ADMIN</div>
            <div className="w-full h-auto bg-white ">
            {features.map((feature) => (
                <Link to={feature.routing}>
                <div className="flex items-center h-10 rounded hover:bg-blue-200 mt-6 cursor-pointer">
                    {feature.icon}
                    <p className='mx-1'>{feature.name}</p>
                </div>
                </Link>
            ))}
            </div>
        </div>
    )
}

export default Sidebar