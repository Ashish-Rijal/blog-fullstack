import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router'

export default function BlogReadPage() {

    const url=useLocation();
    console.log(url.pathname.split("/") [2])

    const id=url.pathname.split("/") [2];

        const [singleBlog, setSingleBlog]=useState(null)

    const fetchSingleBlog= async()=> {
        try {
            const response =await axios.get(`https://blog-backend-rgjz.onrender.com/get-single-blog/${id}`);
            console.log(response.data.data)
            setSingleBlog(response.data.data)
            
        } catch (error) {
            console.log("Something went wrong")
        }
    }
     console.log(singleBlog)

    useEffect(()=>{
        fetchSingleBlog()
    },[])
    

  return (
    <div>
      { singleBlog && <div>
      <p>{singleBlog.titile}</p>
      <p>{singleBlog.description}</p>
      <p>{singleBlog.authorName}</p>
      <p>{singleBlog.timeToRead}</p>
      </div>}
    </div>
  )
}
