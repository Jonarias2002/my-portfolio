import React from "react";
import hireMe from "../assets/img/hireMe.png";
const Hireme = () => {
    return (
    <section id="hireme" className="py-10 px-3 text-white">
        <div className="text-center">
        <h3 className="text-4xl font-semibold">
            Hire <span className="text-cyan-600">Me</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">Do you have any work?</p>
        </div>
        <div className="bg-gray-700 relative px-8 rounded-2xl py-5 lg:max-w-4xl mx-auto min-h-[24rem] mt-24 flex gap-6 lg:flex-row flex-col-reverse items-center">
        <div>
            <h2 className="text-2xl font-semibold">
            Do you want any work from me?
            </h2>
            <p className="lg:text-left text-justify max-w-lg text-sm mt-4 text-gray-200 leading-6">
            My main interest are projects that are focused on the user, I like to make the visual work at the beginning be striking and descriptive enough for the user and thus provide a better service.
            </p>
            <button className="btn-primary mt-10">Say Hello</button>
        </div>
        <img
            src={hireMe}
            alt=""
            className="w-50 h-30 bottom-0 -right-3 object-cover"
        />
        </div>
    </section>
    );
};

export default Hireme;