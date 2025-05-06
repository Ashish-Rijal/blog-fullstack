import React from "react";
import { TbSquareLetterMFilled } from "react-icons/tb";
import { TbLetterX } from "react-icons/tb";
import { FaInstagram } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";

export default function Footer() {
  return (
    <div className="bg-gray-100">
      <div className="md:flex justify-between items-center w-11/12 mx-auto mt-15 mb-5 space-y-4">
        {/* Syron */}
        <div>
          <h1 className="font-semibold text-3xl py-3">Syron</h1>
          <p className="opacity-85">
            This is a great space to write text{" "}
            <span className="font-semibold">
              about your <br /> company
            </span>{" "}
            and your services. You can use this <br />
            space to go into a little more <span className="">
              details
            </span>{" "}
            about <br />
            your company.{" "}
          </p>
        </div>

        <div>
          <p className="flex font-medium text-xl py-3 items-center">
            <GoDotFill className="text-red-600 opacity-70" />
            Links
          </p>
          <p className="opacity-85">About Us</p>
          <p className="opacity-85">Our Story</p>
          <p className="opacity-85">Project</p>
        </div>

        <div>
          <p className="flex items-center font-medium text-xl py-3">
            <GoDotFill className="text-red-600 opacity-70" />
            Categories
          </p>
          <p className="opacity-85">
            <span className="text-purple-500">#</span>Entertainment{" "}
            <span className="text-orange-500">#</span>Gadget{" "}
            <span className="text-blue-500">#</span>Ideas <br />{" "}
            <span className="text-green-500">#</span>Inspiration{" "}
            <span className="text-yellow-500">#</span>Lifestyle{" "}
            <span className="text-pink-500">#</span>Music <br />
            <span className="text-purple-500">#</span>Travel{" "}
            <span className="text-pink-500">#</span>Trending
          </p>
        </div>

        <div>
          <p className="flex items-center font-medium text-xl py-5 ">
            <GoDotFill className="text-red-600 opacity-70" />
            Newsletter
          </p>
          <p className="opacity-85">
            subscribe newsletter to get latest articles
          </p>
          <div className="flex bg-white space-x-10 mt-10 pl-2 border rounded-full border-gray-400">
            <input
              type="text"
              placeholder="Email Address*"
              className="outline-none  "
            />
            <button className="flex items-center gap-2 bg-pink-500 rounded-xl py-2 px-5  hover:bg-black text-white duration-500">
              <FaTelegramPlane />
              Join
            </button>
          </div>
        </div>
      </div>

      <div className="md:flex justify-between w-11/12 mx-auto border-t border-gray-400 mt-15 py-10 opacity-85 space-y-6">
        <p>
          This website may collect data about you, use cookies, embed additional
          third-party tracking, and <br />
          monitor your interaction with that embedded content
        </p>
        <div>
          <p>Follow Us On Socials</p>
          <div className="flex space-x-3 py-3 opacity-80">
            <TbSquareLetterMFilled />
            <TbLetterX />

            <FaInstagram />
            <FaTelegramPlane />
          </div>
        </div>
      </div>
    </div>
  );
}
