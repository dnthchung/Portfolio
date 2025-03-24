"use client";

import { ChevronDown, ChevronUp } from "lucide-react";
import { useState, useRef, useEffect } from "react";

// Define types for project data
type Project = {
  id: string;
  title: string;
  semester: string;
  date: string;
  repoLink: string;
  description: string;
  techStacks: string[];
  role: string;
  teamSize: number;
};

type ProjectCarouselProps = {
  projects: Project[];
};

export default function ProjectCarousel({ projects }: ProjectCarouselProps) {
  // State to track which projects are expanded
  const [expandedProjects, setExpandedProjects] = useState<{ [key: string]: boolean }>(Object.fromEntries(projects.map((project) => [project.id, false])));

  // Refs for measuring content height
  const projectRefs = useRef<{ [key: string]: HTMLDivElement | null }>(Object.fromEntries(projects.map((project) => [project.id, null])));

  // State to store heights
  const [heights, setHeights] = useState<{ [key: string]: number }>(Object.fromEntries(projects.map((project) => [project.id, 0])));

  // Measure content heights on initial render
  useEffect(() => {
    const newHeights = { ...heights };
    projects.forEach((project) => {
      const ref = projectRefs.current[project.id];
      if (ref) {
        // Store the scrollHeight (full height of content)
        newHeights[project.id] = ref.scrollHeight;
      }
    });
    setHeights(newHeights);
  }, []);

  // Toggle expansion of a project
  const toggleProject = (projectId: string) => {
    setExpandedProjects((prev) => ({
      ...prev,
      [projectId]: !prev[projectId],
    }));
  };

  // Correctly typed ref callback
  const setProjectRef = (el: HTMLDivElement | null, projectId: string) => {
    projectRefs.current[projectId] = el;
  };

  return (
    <div className="mb-6">
      <h2 className="text-3xl font-bold mb-2">Projects</h2>
      {projects.map((project) => (
        <div key={project.id} className="mb-4 border-b pb-4 last:border-b-0">
          <button onClick={() => toggleProject(project.id)} className="w-full flex justify-between hover:bg-orange-200 py-2 rounded transition-colors cursor-pointer">
            <div>
              <span className="font-bold underline">{project.title}</span>
            </div>
            <div className="flex items-center">
              <div className="text-right mr-2 text-[13px]">
                <p className="font-bold">{project.semester}</p>
                <p>{project.date}</p>
              </div>
              {expandedProjects[project.id] ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </div>
          </button>
          {/* Smooth collapsible content */}
          <div
            className="overflow-hidden transition-all duration-300 ease-in-out"
            style={{
              maxHeight: expandedProjects[project.id] ? `${heights[project.id]}px` : "0",
              opacity: expandedProjects[project.id] ? 1 : 0,
            }}
          >
            <div ref={(el) => setProjectRef(el, project.id)} className="mt-3 pl-4 py-2">
              <ul className="list-none text-[15px] space-y-2">
                <li>
                  🔗{" "}
                  <a href={project.repoLink} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
                    {project.repoLink}
                  </a>
                </li>
                <li>
                  <strong>A webapp</strong> {project.description}
                </li>
                <li>
                  <strong>Tech stacks:</strong>
                  <ul className="list-disc pl-6">
                    {project.techStacks.map((tech, index) => (
                      <li key={index}>{tech}</li>
                    ))}
                  </ul>
                </li>
                <li>
                  <strong>Roles:</strong> {project.role}
                </li>
                <li>
                  <strong>Team size:</strong> {project.teamSize}
                </li>
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
