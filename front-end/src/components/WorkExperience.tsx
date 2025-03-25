// WorkExperience.tsx
import React from "react";

type Experience = {
  id: string;
  title: string;
  company: string;
  date: string;
  responsibilities: string[];
};

type WorkExperienceProps = {
  experiences: Experience[];
};

export default function WorkExperience({ experiences }: WorkExperienceProps) {
  return (
    <div className="mb-6">
      <h2 className="text-3xl font-bold mb-2">Work Experience</h2>
      {experiences.map((experience) => (
        <div key={experience.id} className="mb-4">
          <div className="flex justify-between items-start">
            <div>
              <p className="font-bold">{experience.company}</p>
              <p className="text-[15px]">{experience.title}</p>
            </div>
            <p className="text-[13px]">{experience.date}</p>
          </div>
          <ul className="list-disc pl-6 mt-2 text-sm">
            {experience.responsibilities.map((task, i) => (
              <li key={i}>{task}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
