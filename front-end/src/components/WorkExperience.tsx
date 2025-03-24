"use client";

import { ChevronDown, ChevronUp } from "lucide-react";
import { useState, useRef, useEffect } from "react";

// Define types for work experience data
type WorkExperience = {
  id: string;
  title: string;
  company: string;
  date: string;
  responsibilities: string[];
};

type WorkExperienceProps = {
  experiences: WorkExperience[];
};

export default function WorkExperience({ experiences }: WorkExperienceProps) {
  const [expandedExperiences, setExpandedExperiences] = useState<Record<string, boolean>>({});
  const experienceRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const [contentHeights, setContentHeights] = useState<Record<string, number>>({});

  const toggleExperience = (id: string) => {
    setExpandedExperiences((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const setExperienceRef = (el: HTMLDivElement | null, id: string) => {
    if (el) {
      experienceRefs.current[id] = el;
      setContentHeights((prev) => ({
        ...prev,
        [id]: el.scrollHeight,
      }));
    }
  };

  return (
    <div className="mb-6">
      <h2 className="text-3xl font-bold mb-2">Work Experience</h2>
      {experiences.map((experience) => (
        <div key={experience.id} className="mb-4 border-b pb-4 last:border-b-0">
          <button onClick={() => toggleExperience(experience.id)} className="w-full flex justify-between hover:bg-orange-200 py-2 rounded transition-colors cursor-pointer">
            <div>
              <span className="font-bold">{experience.title}</span>
              <p>{experience.company}</p>
            </div>
            <div className="flex items-center">
              <p className="text-right mr-2 text-sm">{experience.date}</p>
              {expandedExperiences[experience.id] ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </div>
          </button>
          <div
            style={{
              height: expandedExperiences[experience.id] ? contentHeights[experience.id] + "px" : "0",
              overflow: "hidden",
              transition: "height 0.3s ease-in-out",
            }}
          >
            <div ref={(el) => setExperienceRef(el, experience.id)} className="mt-3 pl-4">
              <ul className="list-disc pl-6 text-sm space-y-2">
                {experience.responsibilities.map((responsibility, index) => (
                  <li key={index}>{responsibility}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
