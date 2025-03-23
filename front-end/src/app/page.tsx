"use client";

import Image from "next/image";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState, useRef, useEffect } from "react";

export default function Home() {
  const [expandedProjects, setExpandedProjects] = useState<{
    [key: string]: boolean;
  }>({
    holawear: false,
    insurance: false,
  });

  // Refs for measuring content height
  const projectRefs = {
    holawear: useRef<HTMLDivElement>(null),
    insurance: useRef<HTMLDivElement>(null),
  };

  // State to store heights
  const [heights, setHeights] = useState<{
    [key: string]: number;
  }>({
    holawear: 0,
    insurance: 0,
  });

  // Measure content heights on initial render
  useEffect(() => {
    const newHeights = { ...heights };

    Object.keys(projectRefs).forEach((key) => {
      const ref = projectRefs[key as keyof typeof projectRefs];
      if (ref.current) {
        // Store the scrollHeight (full height of content)
        newHeights[key] = ref.current.scrollHeight;
      }
    });

    setHeights(newHeights);
  }, []);

  const toggleProject = (project: string) => {
    setExpandedProjects((prev) => ({
      ...prev,
      [project]: !prev[project],
    }));
  };

  return (
    <main className="min-h-screen flex items-center justify-center p-10 relative">
      {/* Video Background */}
      <div className="fixed inset-0 w-full h-full z-0">
        <video autoPlay muted loop className="absolute w-full h-full object-cover">
          <source src="/videos/Snowfall in Forest Live Wallpaper 4K.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Main Content with Black Border */}
      <div className="max-w-4xl w-full border-4 border-black bg-[#FFBE76] shadow-xl z-10 p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="relative pt-16">
            <div className="border-2 border-gray-500 p-6 pt-16 h-full">
              {/* Avatar that overlaps the border */}
              <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 ">
                <div className="relative w-52 h-52">
                  <Image src="/images/avatar.jpg" alt="Doan Thanh Chung" fill className="rounded-full object-cover border-4 border-gray-200" />
                </div>
              </div>

              <div className="mb-6 mt-16">
                <h2 className="text-3xl font-bold mt-4">Objective</h2>
                <ul className="list-disc pl-6 mt-2 space-y-2">
                  <li>
                    <span className="font-bold">Short Term:</span> Looking for a Back-End (Node.js) intern position.
                  </li>
                  <li>
                    <span className="font-bold">Long Term:</span> Become an Engineering Manager in the next 5, 6 years.
                  </li>
                </ul>
              </div>

              <div className="mb-6">
                <h2 className="text-3xl font-bold mb-2">
                  Personal <br /> Information
                </h2>
                <div className="ml-5">
                  <div className="flex items-center gap-1">
                    <Image src="/icons/352521_location_on_icon.svg" alt="Location" width={18} height={18} />
                    <span>Hanoi, VietNam</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Image src="/icons/8673621_ic_fluent_mail_filled_icon.svg" alt="Email" width={18} height={18} />
                    <span>chungdt03.work@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Image src="/icons/352510_local_phone_icon.svg" alt="Phone" width={18} height={18} />
                    <span>0949.xxx.xxx</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <a href="https://www.facebook.com/chunahhh/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-blue-600">
                      <Image src="/icons/9055781_bxl_facebook_circle_icon.svg" alt="User" width={18} height={18} />
                      <span>Doan Chung</span>
                    </a>
                  </div>
                  <div className="flex items-center gap-1">
                    <a href="https://www.linkedin.com/in/chungdt03" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-blue-600">
                      <Image src="/icons/9055816_bxl_linkedin_square_icon.svg" alt="User" width={18} height={18} />
                      <span>chungdt03</span>
                    </a>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h2 className="text-3xl font-bold mb-2">Skills</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-bold">Programming Languages/Knowledge:</h3>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>JavaScript, TypeScript: 5 semesters.</li>
                      <li>Java SE, Java EE: 7 semesters.</li>
                      <li>Kotlin: 2 semesters.</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-bold">Frameworks/Libraries:</h3>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Back-End: NestJS, ExpressJS, SpringBoot.</li>
                      <li>Front-End: ReactJS, NextJS.</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-bold">Database:</h3>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>MongoDB, SQL Server, MySQL, PostgreSQL</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-bold">Other Technical Skills:</h3>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Git</li>
                      <li>Figma, Adobe XD</li>
                      <li>Agile, Scrum</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-bold">Soft Skills:</h3>
                    <p className="pl-2">Hardworking, strong in teamwork and time management, proficient in researching English documents.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="p-4">
            <h1 className="text-3xl font-bold mb-2">DOAN THANH CHUNG</h1>
            <p className="mb-6">Back-End Developer (Internship)</p>

            <div className="mb-6">
              <h2 className="text-3xl font-bold mb-2">Education</h2>
              <p className="font-bold">FPT University (Hanoi Campus).</p>
              <p>Software Engineering | September 2021 - Present</p>
              <ul className="list-disc pl-6 mt-2">
                <li>100% Scholarship</li>
                <li>Final - year student</li>
                <li>Current Semester: 9/9</li>
              </ul>
            </div>

            <div className="mb-6">
              <h2 className="text-3xl font-bold mb-2">Projects</h2>

              {/* HolaWear Shop Project */}
              <div className="mb-4 border-b pb-4">
                <button onClick={() => toggleProject("holawear")} className="w-full flex justify-between hover:bg-orange-200 py-2 rounded transition-colors cursor-pointer">
                  <div>
                    <span className="font-bold underline">HolaWear Shop</span>
                  </div>
                  <div className="flex items-center">
                    <div className="text-right mr-2 text-[13px]">
                      <p className="font-bold">Semester: 7/9</p>
                      <p>05/2024 - 07/2024</p>
                    </div>
                    {expandedProjects.holawear ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                  </div>
                </button>

                {/* Smooth collapsible content */}
                <div
                  className="overflow-hidden transition-all duration-300 ease-in-out"
                  style={{
                    maxHeight: expandedProjects.holawear ? `${heights.holawear}px` : "0",
                    opacity: expandedProjects.holawear ? 1 : 0,
                  }}
                >
                  <div ref={projectRefs.holawear} className="mt-3 pl-4 py-2">
                    <ul className="list-none text-[15px] space-y-2">
                      <li>
                        🔗{" "}
                        <a href="https://github.com/dnthchung/HolaWear" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
                          https://github.com/dnthchung/HolaWear
                        </a>
                      </li>
                      <li>
                        <strong>A webapp</strong> that allows users to buy clothes with high professionalism.
                      </li>
                      <li>
                        <strong>Tech stacks:</strong>
                        <ul className="list-disc pl-6">
                          <li>ReactJS, Tailwind CSS, Shadcn UI</li>
                          <li>NodeJS, ExpressJS, Mongoose, JWT, Bcrypt</li>
                          <li>MongoDB Atlas, Cloudinary</li>
                        </ul>
                      </li>
                      <li>
                        <strong>Roles:</strong> Team lead, Full Stack Developer.
                      </li>
                      <li>
                        <strong>Team size:</strong> 5
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Insurance Manage System Project */}
              <div className="mb-4">
                <button onClick={() => toggleProject("insurance")} className="w-full flex justify-between hover:bg-orange-200 py-2 rounded transition-colors cursor-pointer">
                  <div className="">
                    <span className="font-bold underline">Insurance Manage System</span>
                  </div>
                  <div className="flex items-center">
                    <div className="text-right mr-2 text-[13px]">
                      <p className="font-bold">Semester: 5/9</p>
                      <p>09/2023 - 12/2023</p>
                    </div>
                    {expandedProjects.insurance ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                  </div>
                </button>

                <div
                  className="overflow-hidden transition-all duration-300 ease-in-out"
                  style={{
                    maxHeight: expandedProjects.insurance ? `${heights.insurance}px` : "0",
                    opacity: expandedProjects.insurance ? 1 : 0,
                  }}
                >
                  <div ref={projectRefs.insurance} className="mt-3 pl-4 py-2">
                    <ul className="list-none text-[15px] space-y-2">
                      <li>
                        🔗{" "}
                        <a href="https://github.com/DoanThanhChung-HE176077/Group5-InsuranceManageSystem" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">
                          GitHub Repository
                        </a>
                      </li>
                      <li>
                        <strong>A webapp</strong> allows users to register and manage insurance contracts.
                      </li>
                      <li>
                        <strong>Tech stacks:</strong>
                        <ul className="list-disc pl-6">
                          <li>Java JDBC, Java Servlet, SQL Server</li>
                          <li>MVC model, Tomcat 10</li>
                          <li>Bootstrap (v5.0), JSP, JQuery</li>
                        </ul>
                      </li>
                      <li>
                        <strong>Roles:</strong> Team lead, Full Stack Developer.
                      </li>
                      <li>
                        <strong>Team size:</strong> 5
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-6">
              <h2 className="text-3xl font-bold mb-2">Certificates</h2>
              <ul className="space-y-4">
                <li>
                  <p className="font-bold">(Coursera): Web Design for Everybody.</p>
                  <ul className="list-disc pl-6">
                    <li className="break-all">
                      <a href="https://www.coursera.org/account/accomplishments/specialization/certificate/GJBTBSKXJ76" className="text-blue-800 hover:underline">
                        https://www.coursera.org/account/accomplishments/specialization/certificate/GJBTBSKXJ76
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <p className="font-bold">(Coursera): Web Software Development Lifecycle.</p>
                  <ul className="list-disc pl-6">
                    <li className="break-all">
                      <a href="https://www.coursera.org/account/accomplishments/specialization/certificate/GJBTBSKXJ76" className="text-blue-800 hover:underline">
                        https://www.coursera.org/account/accomplishments/specialization/certificate/GJBTBSKXJ76
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="text-center mt-4 text-sm">
          <p>
            Remember to protect your <span className="font-bold">eyes</span> when using the computer for a long time.
          </p>
        </div>
      </div>
    </main>
  );
}
