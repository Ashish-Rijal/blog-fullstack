import React, { useEffect, useState } from "react";
import TopNavbar from "./Components/TopNavbar";
import BottomNavbar from "./Components/BottomNavbar";
import FeedSection from "./Components/FeedSection";
import axios from "axios";

export default function App() {
  // Hooks (useState, useEffect)

  // 1. useState
  // syntax
  // const [variable, setterFunction]=useState (initialValue)
  const [balance, SetBalance] = useState(100);
  const [myName, setMyname] = useState("ashish");
  const [married, setMarried] = useState(false);

  // 2. useEffect
  // useEffect Syntax ho lekhne tarika
  useEffect(() => {
    SetBalance(balance + 400);
  }, []);

  // console.log(balance, "this is balance");
  // console.log(myName);
  // console.log(married);

  // get all Blogs
  const [blog,setblog]= useState([]);

  const getAllFunction = async () => {
    try {
      const response = await axios.get("https://blog-backend-rgjz.onrender.com/get-all-blog");
      console.log(response.data.data);
      setblog(response.data.data)
    } catch (error) {
      console.log("something went wrong", error);
    }
  };
  console.log(blog)

  useEffect(() => {
    getAllFunction()
  }, []);

  return (
    <div>
      <p>My balance is {balance}</p>
      <p>My name id {myName}</p>
      {married && <p>I am married</p>}
      {!married && <p>I am unmarried</p>}

      <button
        onClick={() => SetBalance(balance + 20)}
        className="bg-blue-500 px-4 py-2 text-white"
      >
        change balane
      </button>

      <button
        onClick={() => setMyname("ashish rijal")}
        className="bg-blue-500 px-4 py-2 ml-4 text-white"
      >
        change Name
      </button>

      <button
        onClick={() => setMarried(!Married)}
        className="bg-blue-500 px-4 py-2 ml-4 text-white"
      >
        change Married Status
      </button>

      <FeedSection blog={blog} />
    </div>
  );
}
