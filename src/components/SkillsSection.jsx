import React from 'react';
import skillsData from "../data/skills.json";

const SkillsSection = () => {
  return (
    <div className="w-full max-w-[700px] mx-auto px-6 py-6 bg-white shadow-sm rounded-xl mb-6 border-white border-2">
      {/* Smaller heading with color #6B7280 and a bullet */}
      <h1 className="text-xl font-medium text-left text-[#6B7280] mb-4 before:content-['●'] before:mr-2 before:text-[#6B7280]">
        Skills
      </h1>

      {skillsData.skills.map((skill) => {
        return (
          <div
            key={skill.skillType}
            className="mb-4 p-4 bg-[#F8F8F9] rounded-lg"
          >
            {/* Heading with color #111827 */}
            <h2 className="text-lg text-left font-semibold text-[#111827] mb-3">
              {skill.skillType}
            </h2>
            <ul className="list-none flex flex-wrap gap-4">
              {/* List items with color #374151 */}
              {skill.values.map((value) => (
                <li key={value.name} className="text-md text-[#374151]">
                  {value.name}
                </li>
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default SkillsSection;
