import React from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa'; // External link icon from React Icons
import projectsData from '../data/project.json';

const ProjectsSection = () => {
  return (
    <div className="w-full max-w-[700px] mx-auto px-6 py-4 bg-white shadow-sm rounded-xl mb-4 border-white border-2">
      <h1 className="text-3xl font-semibold text-left text-[#1B1B1B] mb-6">Projects</h1>
      
      <div className="flex flex-col gap-6">
        {projectsData.projects.map((project) => {
          return (
            <div 
              key={project.name} 
              className="bg-white p-4 rounded-lg border-2 border-[#E0E0E0] mb-6 shadow-sm transition-shadow duration-300 hover:shadow-md"
            >
              <img 
                src={project.imgLink} 
                alt="Preview unavailable" 
                className="w-full object-cover h-48 rounded-lg mb-4 border-b-2 border-[#E0E0E0]"
              />
              <div className='flex flex-col items-start'>
                <h2 className="text-2xl font-semibold text-[#333333] mb-2 text-left">{project.name}</h2>
                <p className="text-md text-[#555] mb-4 text-left">{project.description}</p>
                <a 
                  href={project.githubLink} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-[#0A66C2] text-md text-left font-medium hover:text-[#0A3C7E] transition flex items-center gap-2"
                >
                  <FaExternalLinkAlt className="h-4 w-4 text-[#0A66C2]"/> {/* React Icon for external link */}
                  View on GitHub
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsSection;
