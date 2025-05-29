import React from 'react';
import design from "../data/design.json";
import { FaExternalLinkAlt } from 'react-icons/fa';

const DesignSection = () => {
  return (
    <div className="w-full max-w-[700px] mx-auto px-6 py-6 bg-white shadow-sm rounded-xl mb-6 border-white ">
      <h1 className="text-xl font-medium text-left text-[#6B7280] mb-4 before:content-['●'] before:mr-2 before:text-[#6B7280]">
        UI/UX Projects Gallery
      </h1>

      <div className="flex flex-col gap-6">
        {design.design.map((item, index) => {
          const links = [];

          if (item.link?.figma && item.link.figma !== "") {
            links.push({ url: item.link.figma, label: "View Prototype" });
          }

          if (item.link?.caseStudy && item.link.caseStudy !== "") {
            links.push({ url: item.link.caseStudy, label: "Checkout my Case Study" });
          }

          return (
            <div key={index} className="bg-[#F8F8F9] p-4 rounded-lg flex flex-col items-center">
              <img src={item.image} alt="design thumbnail" className="w-full h-auto mb-3 rounded-lg " />
              <p className="text-md text-[#374151] mb-2 w-full text-left">{item.description}</p>

              <div className="flex flex-col w-full text-left space-y-1">
                {links.map(({ url, label }, i) => (
                  <a
                    key={i}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#0A66C2] hover:text-[#0A3C7E] font-medium flex items-center"
                  >
                    <FaExternalLinkAlt className="h-3 w-3 mr-2" />
                    {label}
                  </a>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DesignSection;

