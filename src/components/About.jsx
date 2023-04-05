import React from "react";
import logoImg from "../assets/img/logo.png";
const About = () => {
    const info = [
    { text: "Years experience", count: "01" },
    { text: "Personal Projects", count: "2" },
    { text: "Companies Work", count: "01" },
    ];
    return (
    <section id="about" className="py-10 text-white">
        <div className="text-center mt-8">
            <h3 className="text-4xl font-semibold">
                About <span className="text-cyan-600">Me</span>
            </h3>
            <p className="text-gray-400 my-3 text-lg">My introduction</p>
            <div className="flex md:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto">
                <div className="p-2">
                <div className="text-gray-300 my-3">
                    <p className="text-justify leading-7 w-11/12 mx-auto">
                    I dedicate myself to web development, specialized in the Front-end area using JavaScript with the React framework, I also using HTML, CSS with framework's Tailwind and Bootstrap. Lover of programming and sports, self-taught, I characterize myself as a curious person, who loves problem solving and process automation. I like to be part of innovative and challenging teams, where I can add quality, using the latest technologies.
                    </p>
                    <div className="flex mt-10 items-center gap-7">
                    {info.map((content) => (
                        <div key={content.text}>
                        <h3 className="md:text-4xl text-2xl font-semibold text-white">
                            {content.count}
                            <span className="text-cyan-600">+</span>{" "}
                        </h3>
                        <span className="md:text-base text-xs">{content.text}</span>
                        </div>
                    ))}
                    </div>
                </div>
                </div>
                <div className="flex-1 md:mt-0 mt-6 flex justify-center items-center">
                <div className="lg:w-96 h-full relative sm:w-10/12 w-11/12 max-w-sm aboutImg ">
                    <img
                    src={logoImg}
                    alt=""
                    className="w-full object-cover bg-cyan-600 rounded-xl"
                    />
                </div>
                </div>
            </div>
        </div>
    </section>
    );
};

export default About;