
import React, { useState } from "react";

const Contact = () => {
  const [detail, setDetail] = useState({
    name: "", message: ""
  })
  const handleChange = (e) => {
    setDetail({ ...detail, [e.target.name]: e.target.value })
  }
  const handleClick = () => {
    window.location.href = `mailto:${"vishalsainisilu@gmail.com"}?Subject=${detail.name}
    &body=${detail.message}
     `
  }
  return (
    <div
      name="contact"
      className=" bg-gradient-to-b from-black to-gray-800 p-4 text-white"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Contact
          </p>
          <p className="py-6">Submit the form below to get in touch with me</p>
        </div>

        <div className=" flex justify-center items-center">
          <div

            className=" flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              value={detail.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <textarea
              name="message"
              value={detail.message}
              onChange={handleChange}
              placeholder="Enter your message"
              rows="10"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            ></textarea>

            <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300" onClick={handleClick}>
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;



