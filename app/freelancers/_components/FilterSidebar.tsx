"use client"
import React, { useState } from 'react';

interface Option {
  name: string;
  count: number;
}

const SidebarFilter = () => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedProjectTypes, setSelectedProjectTypes] = useState<string[]>([]);
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);

  const categories: Option[] = [
    { name: 'UX Designer', count: 1945 },
    { name: 'Web Developers', count: 8136 },
    { name: 'Illustrators', count: 917 },
    { name: 'Node.js', count: 240 },
    { name: 'Project Managers', count: 2460 },
  ];

  const projectTypes: Option[] = [
    { name: 'Fixed', count: 1945 },
    { name: 'Hourly', count: 8136 },
  ];

  const skills: Option[] = [
    { name: 'Adobe Photoshop', count: 1945 },
    { name: 'Figma', count: 815 },
    { name: 'Sketch', count: 654 },
  ];

  const handleCategoryChange = (category: string) => {
    const isSelected = selectedCategories.includes(category);
    setSelectedCategories(
      isSelected
        ? selectedCategories.filter((c) => c !== category)
        : [...selectedCategories, category]
    );
  };

  const handleProjectTypeChange = (projectType: string) => {
    const isSelected = selectedProjectTypes.includes(projectType);
    setSelectedProjectTypes(
      isSelected
        ? selectedProjectTypes.filter((pt) => pt !== projectType)
        : [...selectedProjectTypes, projectType]
    );
  };

  const handleSkillChange = (skill: string) => {
    const isSelected = selectedSkills.includes(skill);
    setSelectedSkills(
      isSelected
        ? selectedSkills.filter((s) => s !== skill)
        : [...selectedSkills, skill]
    );
  };

  return (
    <div className=" bg-black rounded-3xl flex flex-col justify-start items-center p-2">
      <div>
        <h1 className="text-white font-bold mb-4">Category</h1>
        {categories.map((category, index) => (
          <div key={index} className="flex justify-between items-center mb-2">
            <label className="text-white flex items-center">
              <input
                type="checkbox"
                checked={selectedCategories.includes(category.name)}
                onChange={() => handleCategoryChange(category.name)}
                className="mr-2"
              />
              {category.name}
            </label>
            <span className="text-white">({category.count})</span>
          </div>
        ))}
      </div>

      <div className="mt-6 w-2/3">
        <h1 className="text-white font-bold mb-4">Project type</h1>
        {projectTypes.map((type, index) => (
          <div key={index} className="flex justify-between items-center mb-2">
            <label className="text-white flex items-center">
              <input
                type="checkbox"
                checked={selectedProjectTypes.includes(type.name)}
                onChange={() => handleProjectTypeChange(type.name)}
                className="mr-2"
              />
              {type.name}
            </label>
            <span className="text-white">({type.count})</span>
          </div>
        ))}
      </div>

      <div className="mt-6">
        <h1 className="text-white font-bold mb-4">Skills</h1>
        {skills.map((skill, index) => (
          <div key={index} className="flex justify-between items-center mb-2">
            <label className="text-white flex items-center">
              <input
                type="checkbox"
                checked={selectedSkills.includes(skill.name)}
                onChange={() => handleSkillChange(skill.name)}
                className="mr-2"
              />
              {skill.name}
            </label>
            <span className="text-white">({skill.count})</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SidebarFilter;