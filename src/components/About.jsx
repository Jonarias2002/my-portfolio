import React from "react";
import logoImg from "../assets/img/logo.png";
const About = () => {
    const info = [
    { text: "Years experience", count: "01" },
    { text: "Completed Projects", count: "5" },
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
                    Front-end developer, lover of programming and sports, self-taught, I characterize myself as a curious person, who loves problem solving and process automation. Looking to join a team to continue to grow and apply my skills to contribute to user-focused projects
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