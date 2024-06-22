import React, { useEffect, useState } from 'react';
import { FaPhone, FaRegEnvelope } from 'react-icons/fa6';
import { LuGlobe2 } from "react-icons/lu";
import axios from 'axios';

const Footer = () => {
    // const [location, setLocation] = useState("Roorkee, India");
    // const [dateTime, setDateTime] = useState("");
    // const [temperature, setTemperature] = useState("");
    // const [aqi, setAqi] = useState("");

    // useEffect(() => {
    //     const fetchWeatherData = async () => {
    //       try {
    //         const apiKey = process.env.REACT_APP_OPENWEATHERMAP_API_KEY;
    //         const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=Roorkee,in&units=metric&appid=${apiKey}`);
            
    //         const { temp } = response.data.main;
    //         setTemperature(`Temp: ${temp}°C`);
    
    //         const coord = response.data.coord;
    //         const aqiResponse = await axios.get(`http://api.openweathermap.org/data/2.5/air_pollution?lat=${coord.lat}&lon=${coord.lon}&appid=${apiKey}`);
            
    //         const { aqi } = aqiResponse.data.list[0].main;
    //         setAqi(`AQI: ${aqi}`);
    
    //         // Set local datetime
    //         const localDateTime = new Date().toLocaleString('en-IN', {
    //           timeZone: response.data.timezone,
    //           weekday: 'long',
    //           hour: '2-digit',
    //           minute: '2-digit',
    //           day: 'numeric',
    //           month: 'long',
    //           year: 'numeric'
    //         });
    //         setDateTime(localDateTime);
    //       } catch (error) {
    //         console.error("Error fetching weather data:", error);
    //       }
    //     };
    
    //     fetchWeatherData();
    // }, []);
    

    return (
        <div className='w-full flex py-16 bg-black text-white'>
            <div className="flex flex-col w-[35%] items-center gap-8">
                <img src="/images/iitr_logo.svg" className='w-24 h-24' alt="IITR" />
                <div className="flex flex-col gap-1">
                    <h1 className="font-poppins text-lg">Indian Institute of Technology Roorkee</h1>
                    <p className="font-poppins text-sm text-gray-500">Indian Institute of Technology Roorkee</p>
                </div>
                <div className="flex flex-col gap-2">
                    <div className="flex gap-10 items-center text-[#FFFBF5]">
                        <FaPhone className='w-4 h-4' />
                        <a href="tel:021-0659-700" className="font-poppins text-gray-500">021-0659-700</a>
                    </div>
                    <div className="flex gap-10 items-center text-[#FFFBF5]">
                        <FaRegEnvelope className='w-4 h-4' />
                        <a href="mailto:info@iitr.in" target='_blank' rel='noreferrer' className="font-poppins text-gray-500">info@iitr.in</a>
                    </div>
                    <div className="flex gap-10 items-center text-[#FFFBF5]">
                        <LuGlobe2 className='w-4 h-4' />
                        <a href="https://www.iitr.in" target='_blank' rel='noreferrer' className="font-poppins text-gray-500">www.iitr.in</a>
                    </div>
                </div>
            </div>
            <div className="w-0 border-r-2 border-white"></div>
            <div className="flex flex-col text-left px-20 gap-6 w-[25%]">
                <div className="flex flex-col w-fit">
                    <h1 className="text-xl font-poppins">Quick Links</h1>
                    <hr className="border-t-2 w-20 border-white" />
                </div>
                <a href="#" className="text-gray-500 font-poppins">IIT Roorkee</a>
                <a href="#" className="text-gray-500 font-poppins">Outreach</a>
                <a href="#" className="text-gray-500 font-poppins">Wellness</a>
                <a href="#" className="text-gray-500 font-poppins">Sports</a>
                <a href="#" className="text-gray-500 font-poppins">Department</a>
                <a href="#" className="text-gray-500 font-poppins">International Student</a>
                <a href="#" className="text-gray-500 font-poppins">SAC</a>
            </div>
            <div className="flex flex-col text-left px-20 gap-6 w-[40%]">
                <div className="flex flex-col w-fit">
                    <h1 className="text-xl font-poppins">Roorkee</h1>
                    <hr className="border-t-2 w-20 mb-4 border-white" />
                    {/* <p className="text-gray-500 font-poppins">{dateTime}</p>
                    <p className="text-gray-500 font-poppins">{temperature}</p>
                    <p className="text-gray-500 font-poppins">{aqi}</p> */}
                    <p className="text-gray-500 font-poppins">Monday 4:24 pm, 15th April, 2024<br />Temp : 33.09°C<br />AQI : 150</p>
                </div>
                <div className="flex flex-col w-full">
                    <h1 className="text-xl font-poppins">Find us here</h1>
                    <hr className="border-t-2 w-20 border-white" />
                    <div className="mt-6">
                        <iframe className='border-0 h-60 w-4/5 rounded-lg' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3459.9183662112623!2d77.89724787554691!3d29.866628025013625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390eb32bac1adc93%3A0x80bba7dd5e4d1a6a!2sStudents%20Activity%20Centre%20-%20SAC!5e0!3m2!1sen!2sin!4v1719039496909!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;