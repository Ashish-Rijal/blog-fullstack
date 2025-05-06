import React from "react";

export default function ContactPages() {
  return (
    <div className="bg-pink-50 ">
      <div className="flex justify-between items-center w-11/12 mx-auto  ">
        <div className="space-y-8 mt-20 mb-10">
          <div className="space-x-2 bg-white rounded-full">
            <button className="bg-gradient-to-r from-pink-700 to-pink-300 rounded-full px-3 py-1 text-white font-semibold ">
              Success
            </button>
            <input
              type="text"
              placeholder="Our Success in numbers"
              className="outline-nonepy-1"
            />
          </div>
          <h1 className="text-3xl font-semibold text-gray-800">
            Have a project in mind?
            <br />
            Let's talk!
          </h1>
          <p className="opacity-85">
            Lorem ipsum dolor sit amet, consectetur adipiscing <br /> elit. Ut
            elit tellus, luctus nec ullamcorper mattis, <br />
            pulvinar dapibus leo.
          </p>
        </div>

        <div className="space-y-6 flex flex-col">
          <div className="space-x-6 ">
            <input
              type="text"
              placeholder="First Name"
              className="bg-white px-10 outline-none"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="bg-white px-10 outline-none"
            />
          </div>
          <input
            type="text"
            placeholder="Email"
            className="bg-white px-10 outline-none"
          />
          <input
            type="text"
            placeholder="Your Message"
            className="bg-white px-10 py-15 outline-none items-"
          />
          <div>
            <button className="bg-red-500 py-2 rounded-md px-3 hover:bg-black duration-500 text-white">
              Submit Form
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
