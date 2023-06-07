import React from "react";
import about from "../assets/img/about.png";
const Hero = () => {
    return (
    <section
        id="home"
        className="min-h-screen bg-gray-800 flex py-10 md:flex-row flex-col items-center"
    >
        <div className="flex-1 flex items-center justify-center h-full">
        <img src={about} alt="" className="md:w-11/12 h-full object-cover" />
        </div>
        <div className="flex-1">
        <div className="md:text-left text-center">
            <h1 className="md:text-5xl text-2xl md:leading-normal leading-10 text-white font-bold">
            <span className="text-cyan-600 md:text-6xl text-5xl">
                Hello!
                <br />
            </span>
            I'm <span>Jonathan Arias</span>
            </h1>
            <h4 className="md:text-2xl text-lg md:leading-normal leading-5 mt-4 font-bold text-gray-600">
            Front-end Developer <br />
            21 age / 15 may 2002 <br />
            Venezuela
            </h4>
        </div>
        </div>
    </section>
    );
};

export default Hero;