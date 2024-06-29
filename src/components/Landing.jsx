import React, { useState } from "react";

const NavBar = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);
    
    const routes = {
        "SAC Noticeboard": "#",
        "Gallery": "#",
        "Members": "#",
        "FAQs": "#",
        "Contact Us": "#"
    };

    function NavBtn() {
        return <button onClick={() => setIsNavOpen(!isNavOpen)} className="text-white">
            {isNavOpen ? (
                <svg
                    className="w-8 h-8 transition-transform duration-300 transform rotate-90"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                    ></path>
                </svg>
            ) : (
                <svg
                    className="w-8 h-8 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16m-7 6h7"
                    ></path>
                </svg>
            )}
        </button>;
    }

    return (
        <div className="flex flex-col md:flex-row md:content-center md:place-content-end py-5 relative z-20">
            <div className="relative md:hidden flex justify-end pr-10 z-10">
                {NavBtn()}
            </div>
            <nav className={`${isNavOpen ? 'block' : 'hidden'} md:flex md:flex-row bg-black md:bg-transparent md:relative md:pr-10`}>
                <ul className="flex flex-col md:flex-row md:items-center md:space-x-16">
                    {Object.entries(routes).map(([name, url], index) => (
                        <li key={index}>
                            <a
                                href={url}
                                className="block text-white font-medium md:text-sm lg:text-base font-montserrat p-4 md:p-0 hover:text-gray-400"
                            >
                                {name}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
}

const Landing = () => {
    return (
        <section>
            <div className="relative flex flex-col flex-wrap justify-between bg-header-img">

                <NavBar />

                <div className="hidden md:flex md:flex-col text-white font-extrabold z-10 text-3xl md:text-4xl lg:text-5xl font-montserrat py-32">
                    <div>STUDENTS' AFFAIRS COUNCIL,</div>
                    <div className="pt-5">IIT ROORKEE</div>
                </div>

                <div className="hidden lg:flex lg:justify-center md:flex-wrap text-white font-medium z-10 font-montserrat py-10">
                    A student-led, active organization that engages with, empowers, and represents the diverse student population of IIT Roorkee.
                </div>

            </div>
        </section>
    );
};

export default Landing;
