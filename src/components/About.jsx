import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
        Hey, I am Vishal and I am a full stack intermediate developer. I created lot of MERN projects . I have an experience of more than 3 years in web development. I started my jorney in this field with HTML and Css . At that time I created many projects. After that I tried Tailwind Css library. Which make designing more easier and consumes less time as compare to CSS.        </p>

        <br />

        <p className="text-xl">
        Now, I am a MERN Stack Developer . I created many Projects like SnapAI which is an Image Generator with AI Api. ShopEase E-Commerce Application which is totally based on MERN and also I used Redux in it. I developed an ChatGPT clone website named as ChatBotify which can answer any Question in Couple of Seconds.
        </p>
      </div>
    </div>
  );
};

export default About;
