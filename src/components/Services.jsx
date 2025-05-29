import React from 'react';
import { BsDot } from 'react-icons/bs';

const services = [
    {
        title: "Web Development",
        description: "Fast, secure, and scalable websites built for performance and reliability."
    },
    {
        title: "UI/UX Design",
        description: "Clean, user-focused designs that feel intuitive and work beautifully."
    },
    {
        title: "Graphic Design & Marketing",
        description: "Striking visuals and content to boost your brand’s online presence."
    }
];

const pastelColors = [
    '#F8F8F9', // Blue
    '#F8F8F9', // Orange
    '#F8F8F9'  // Purple
];

const Services = () => {
    return (
        <div className="w-full max-w-[700px] mx-auto px-6 py-4 bg-white shadow-sm rounded-xl mb-4">
            <h1 className="text-xl font-medium text-left text-[#6B7280] mb-4 before:content-['●'] before:mr-2 before:text-[#6B7280]">
                Services
            </h1>

            {services.map((service, index) => (
                <div
                    key={index}
                    className="p-5 rounded-lg shadow-sm mb-4 "
                    style={{ backgroundColor: pastelColors[index % pastelColors.length] }}
                >
                    <div className="flex items-start">
                        <div >
                            <h2 className="text-lg before:content-['●'] before:mr-2 font-semibold text-[#333333] text-left mb-1">{service.title}</h2>
                            <p className="text-sm text-[#555] text-left leading-snug pl-4">{service.description}</p>
                        </div>
                        <div className="text-red-500 h-10">
                       
                        </div>

                    </div>
                </div>
            ))}
        </div>
    );
};

export default Services;
