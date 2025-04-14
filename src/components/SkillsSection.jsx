import React from 'react';
import skillsData from "../data/skills.json";

const SkillsSection = () => {
  return (
    <div className="w-full max-w-[700px] mx-auto px-6 py-4 bg-white shadow-sm rounded-xl mb-4 border-white border-2">
      <h1 className="text-3xl font-semibold text-left text-[#1B1B1B] mb-3">Skills</h1>

      {skillsData.skills.map((skill) => {
        return (
          <div key={skill.skillType} className="mb-3 py-4 border-b-2 border-[#E0E0E0]">
            <h2 className="text-xl text-left font-semibold text-[#333333] mb-2">{skill.skillType}</h2>
            <ul className="list-none flex flex-wrap gap-4">
              {skill.values.map((value) => (
                <li key={value.name} className="text-md text-[#555]">{value.name}</li>
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default SkillsSection;
