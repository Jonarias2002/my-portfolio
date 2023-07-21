import React from "react";

const Contact = () => {
    const contact_info = [
    {
        logo: "mail",
        text: "jonathan2002dev@gmail.com"
    },
    {   
        logo: "logo-whatsapp",
        text: "(+58) 414-761-4171"
    },
    {   
        logo: "logo-linkedin",
        link: "https://www.linkedin.com/in/jonajam",
    },
    {   
        logo: "logo-github",
        link: "https://github.com/Jonarias2002"
    },
    ];
    return (
    <section id="contact" className="py-10 px-3 bg-gray-800 text-white">
        <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold">
            Contact <span className="text-cyan-600">Me</span>
        </h3>
            <div className="flex items-center justify-center  gap-7 flex-wrap">
            {contact_info.map((contact, i) => (
                <div
                key={i}
                className="flex pt-8 
                    text-left gap-4 flex-wrap items-center"
                >
                    <div className="min-w-[3.5rem]  text-3xl min-h-[3.5rem] flex items-center justify-center text-white bg-cyan-800 rounded-full">
                        <ion-icon name={contact.logo}></ion-icon>
                    </div>
                    <div className="md:text-base text-sm  break-words">
                        <p >
                            {contact.text}
                        </p>
                        <a href={contact.link}>{contact.link}</a>
                    </div>
                </div>
            ))}
            </div>
        </div>
    </section>
    );
};

export default Contact;