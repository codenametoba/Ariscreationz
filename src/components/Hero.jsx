import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section id="home" className="max-w-screen-xl mx-auto px-6 py-12 flex flex-col-reverse lg:flex-row items-center gap-12">
      <div className="flex-1 text-center lg:text-left space-y-6">
        <h1 className="text-4xl md:text-6xl font-extrabold text-purple-900 leading-tight">
          Your Passport to Luxury Events and Dreamy Weddings!
        </h1>
        <p className="text-lg text-gray-600 leading-relaxed max-w-lg mx-auto lg:mx-0">
          From intimate gatherings to grand celebrations, we bring your vision
          to life with meticulous planning and creative execution.
        </p>
        <div className="flex flex-col gap-2 text-center lg:text-left">
          <p className="text-purple-700 text-lg font-semibold tracking-wide">
            Ready to plan your next event?
          </p>
          <p className="inline-block text-gold-400 text-lg font-semibold underline underline-offset-4 hover:text-gold-300 transition duration-300">
            <a href="#contact">
            Lets's Make It Happen →
            </a>
          </p>
        </div>
      </div>
      <div className="flex-1 flex justify-center items-center">
        <img
          src="/IMG_7130.JPG" /* Replace with your actual image path */
          alt="Event Planning"
          className="rounded-3xl shadow-lg w-full max-w-md"
        />
        <div className="absolute bottom-[-40px] w-64 lg:w-72 bg-white rounded-3xl shadow-lg flex flex-col justify-between p-6 text-center border-t-4 border-gold-40">
        {/* <div className="w-80 h-96 bg-white rounded-3xl shadow-lg flex flex-col justify-between p-8 text-center relative border-t-4 border-gold-400"> */}
          <h3>Crafting Unforgettable Events </h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            Whether it's a birthday, corporate meeting, or anniversary, we
            ensure every moment is flawless and memorable.
          </p>
          <div className="absolute top-[-25px] left-1/2 transform -translate-x-1/2 bg-purple-900 text-white py-1 px-3 text-sm rounded-full shadow-md">
            Let's Celebrate Together!
          </div>
          <div className="mt-4">
            <span className="text-purple-700 font-medium text-lg italic">
                "Details make the difference"
            </span>
          </div>
        {/* </div> */}
      </div>
      </div>

      
    </section>
  );
};

export default Hero;
