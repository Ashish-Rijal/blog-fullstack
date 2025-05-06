import React from "react";
import ballImage from "../assets/photo.webp";
import CarImage from "../assets/carImage.webp";
import SkeatingBoard from "../assets/SkeatingBoard.webp";
import Helmate from "../assets/Helmate.webp";
import { NavLink } from "react-router";

export default function FeedSection({ blog }) {
  console.log(blog);
  return (
    <div className="w-11/12 md:w-8/12 mx-auto mt-12 space-y-4">
      {/* Card */}

      {blog.map((item, index) => (
       
       <div
       key={index}
        className="bg-white shadow-md border-gray-50 rounded-2xl p-4 group">
       <div className="md:flex gap-6 space-y-4">
         <img
           src={ballImage}
           className="h-40 w-full md:w-40 object-cover rounded-2xl group hover:scale-105 duration-500"
           alt=""
         />

         <div>
           <NavLink
             to={`/blog-read/${item._id}`}
             className="text-2xl flex flex-col font-medium mb-3 group-hover:text-pink-500 duration-500 border-b-3 border-white group-hover:border-pink-500 cursor-pointer"
           >
             {item.titile}
           </NavLink>
           <span className="text-gray-600 ">By Jessica Smith 6 Comments</span>
           <p className="text-lg text-gray-700 mt-5">
           {item.description}
           </p>
         </div>
       </div>

       <div className="flex items-center justify-between border-t border-dashed mt-4 text-gray-500 border-gray-300 pt-4">
         <p>
           {" "}
           <span className="text-pink-500">#</span>Lifestyle Trending
         </p>
         <p>291 Views {item.timeToRead} Min Read</p>
       </div>
     </div>

      ))}

    
    </div>
  );
}
