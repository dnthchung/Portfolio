"use client";

import Image from "next/image";
import { useState } from "react";
import ProjectCarousel from "@/components/ProjectCarousel";

// Project data
const projectData = [
  {
    id: "holawear",
    title: "HolaWear Shop",
    semester: "Semester: 7/9",
    date: "05/2024 - 07/2024",
    repoLink: "https://github.com/dnthchung/HolaWear",
    description: "that allows users to buy clothes with high professionalism.",
    techStacks: ["ReactJS, Tailwind CSS, Shadcn UI", "NodeJS, ExpressJS, Mongoose, JWT, Bcrypt", "MongoDB Atlas, Cloudinary"],
    role: "Team lead, Full Stack Developer.",
    teamSize: 5,
  },
  {
    id: "insurance",
    title: "Insurance Manage System",
    semester: "Semester: 5/9",
    date: "09/2023 - 12/2023",
    repoLink: "https://github.com/DoanThanhChung-HE176077/Group5-InsuranceManageSystem",
    description: "allows users to register and manage insurance contracts.",
    techStacks: ["Java JDBC, Java Servlet, SQL Server", "MVC model, Tomcat 10", "Bootstrap (v5.0), JSP, JQuery"],
    role: "Team lead, Full Stack Developer.",
    teamSize: 5,
  },
];

// Work Experience data
const workExperienceData = [
  {
    id: "techvision",
    title: "Junior Back-End Developer",
    company: "TechVision Software Solutions",
    date: "06/2023 - 12/2023",
    responsibilities: [
      "Developed RESTful APIs using Node.js, Express, and MongoDB",
      "Implemented authentication and authorization using JWT",
      "Collaborated with front-end developers to integrate APIs",
      "Participated in code reviews and improved code quality",
    ],
  },
  {
    id: "innotech",
    title: "Software Developer Intern",
    company: "InnoTech Solutions",
    date: "01/2023 - 05/2023",
    responsibilities: [
      "Assisted in developing and maintaining web applications",
      "Worked with Java Spring Boot for back-end services",
      "Learned version control with Git and GitHub",
      "Participated in daily stand-up meetings and sprint planning",
    ],
  },
];

export default function Home() {
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

            {/* Work Experience Section */}
            <div className="mb-6">
              <h2 className="text-3xl font-bold mb-2">Work Experience</h2>
              {/* ==================== work details ================== */}
              <div className="mb-4">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-bold">Junior Back-End Developer</p>
                    <p>TechVision Software Solutions</p>
                  </div>
                  <p className="text-sm">06/2023 - 12/2023</p>
                </div>
                <ul className="list-disc pl-6 mt-2 text-sm">
                  <li>Developed RESTful APIs using Node.js, Express, and MongoDB</li>
                  <li>Implemented authentication and authorization using JWT</li>
                  <li>Collaborated with front-end developers to integrate APIs</li>
                  <li>Participated in code reviews and improved code quality</li>
                </ul>
              </div>

              <div className="mb-4">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-bold">Software Developer Intern</p>
                    <p>InnoTech Solutions</p>
                  </div>
                  <p className="text-sm">01/2023 - 05/2023</p>
                </div>
                <ul className="list-disc pl-6 mt-2 text-sm">
                  <li>Assisted in developing and maintaining web applications</li>
                  <li>Worked with Java Spring Boot for back-end services</li>
                  <li>Learned version control with Git and GitHub</li>
                  <li>Participated in daily stand-up meetings and sprint planning</li>
                </ul>
              </div>
            </div>

            {/* Using the ProjectCarousel component */}
            <ProjectCarousel projects={projectData} />

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
