import React, { useState } from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';
import projectsData from '../data/project.json';

const ProjectsSection = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    setExpandedIndex(index === expandedIndex ? null : index);
  };

  return (
    <div className="w-full max-w-[700px] mx-auto px-6 py-6 bg-white shadow-sm rounded-xl mb-6 border-white ">
      <h1 className="text-xl font-medium text-left text-[#6B7280] mb-4 before:content-['●'] before:mr-2 before:text-[#6B7280]">
        Projects
      </h1>

      <div className="flex flex-col gap-6">
        {projectsData.projects.map((project, index) => {
          const isExpanded = expandedIndex === index;

          return (
            <div
              key={project.name}
              className="bg-[#F8F8F9] p-4 rounded-lg  "
            >
              {/* Header Row */}
              <div className="flex flex-wrap justify-between items-center mb-2">                
                <div className="flex items-center gap-4">
                <img
                  src={project.logo}
                  alt={`${project.name} logo`}
                  className="w-10 h-10 object-contain"
                />
                <div className="flex items-start space-y-1 flex-col text-left">
                  <h2 className="text-lg font-semibold text-[#374151] ">{project.name}</h2>
                  <p className="text-md text-[#6B7280]">{project.tagline}</p>
                </div>
              </div>

                <button
                  onClick={() => toggleExpand(index)}
                  className="text-sm bg-[#D9F6E1] text-[#4BA675] px-4 py-1 rounded-xl font-medium hover:bg-[#c2efd3] transition"
                >
                  {isExpanded ? 'Show Less' : 'View'}
                </button>
              </div>

              {/* Expanded Section */}
              {isExpanded && (
                <div className="flex flex-col items-start gap-3 mt-4 text-left">
                  <img
                    src={project.imgLink}
                    alt={`${project.name} preview`}
                    className="w-full h-80 object-cover rounded-lg border border-[#E0E0E0]"
                  />

                  <p className="text-sm text-[#6B7280]">
                    {project.description}
                  </p>

                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-[#0A66C2] font-medium hover:text-[#0A3C7E] flex items-center gap-2"
                  >
                    <FaExternalLinkAlt className="h-3 w-3" />
                    View on GitHub
                  </a>
                </div>
              )}

            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsSection;
