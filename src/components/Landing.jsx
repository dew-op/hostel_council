import React, { useState } from "react";
import { Link } from "react-scroll";

const NavBar = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);
    
    const routes = {
        "SAC Noticeboard": "Noticeboard",
        "Gallery": "Gallery",
        "Members": "Members",
        //"FAQs": "#",
        "Contact Us": "Contact us"
    };

    function NavBtn() {
        return <button onClick={() => setIsNavOpen(!isNavOpen)} className="text-white hover:text-gray-400">
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
        <div className="flex flex-col md:flex-row md:content-center md:place-content-end my-4 md:my-8 relative z-20">

            <div className="relative md:hidden flex justify-between mx-10 z-10">
                <img src="images/sac_logo.png" alt="SAC_logo" width="40"/>
                {NavBtn()}
            </div>
            <nav className={`${isNavOpen ? 'block' : 'hidden'} md:flex md:flex-row bg-black md:bg-transparent md:mr-10`}>
                <ul className="flex flex-col md:flex-row md:items-center md:space-x-16">
                    {Object.entries(routes).map(([name, url], index) => (
                        <li className="block font-medium md:text-sm lg:text-base font-montserrat p-4 md:p-0">
                            <Link to={url} spy={true} smooth={true} offset={0} duration={500} className="text-white hover:text-gray-400 cursor-pointer">
                                {name}
                            </Link>
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
            <div className="relative flex flex-col flex-nowrap md:justify-start lg:justify-between bg-header-img">

                <NavBar />

                <div className="hidden md:flex md:flex-col md:place-content-center text-white font-extrabold z-10 text-3xl md:text-4xl lg:text-5xl font-montserrat my-auto cursor-default ">
                    <div>STUDENTS' AFFAIRS COUNCIL,</div>
                    <div className="pt-5">IIT ROORKEE</div>
                </div>

                <div className="hidden lg:flex lg:justify-center md:flex-wrap text-white text-lg font-medium z-10 font-poppins my-10 leading-8">
                    A student-led, active organization that engages with, empowers, and represents<br/>the diverse student population of IIT Roorkee.
                </div>

            </div>
        </section>
    );
};

export default Landing;
