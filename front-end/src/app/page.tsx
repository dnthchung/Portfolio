"use client";

import Image from "next/image";
import { useState } from "react";
import ProjectCarousel from "@/components/ProjectCarousel";
import WorkExperience from "@/components/WorkExperience";
import Certificates from "@/components/Certificates";

// Project data
const projectData = [
  {
    id: "bbus",
    title: "BBus (Capstone Project)",
    semester: "Semester: 9/9",
    date: "12/2024 - 04/2025",
    repoLink: "https://github.com/dnthchung/bbus-fe",
    description:
      "Smart Attendance on School Bus System. AI-based system for automatic student check-in/out via smart bus cameras. Built web admin panel and mobile app for parents, teachers, and drivers.",
    techStacks: ["ReactJS, TailwindCSS, Flutter", "Spring Boot", "PostgreSQL"],
    role: "Front-end Developer.",
    teamSize: 5,
  },
  {
    id: "holawear",
    title: "HolaWear Shop",
    semester: "Semester: 7/9",
    date: "05/2024 - 07/2024",
    repoLink: "https://github.com/dnthchung/HolaWear",
    description: "A webapp that allows users to buy clothes with high professionalism.",
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
    description: "A webapp allows users to register and manage insurance contracts.",
    techStacks: ["Java JDBC, Java Servlet, SQL Server", "MVC model, Tomcat 10", "Bootstrap (v5.0), JSP, JQuery"],
    role: "Team lead, Full Stack Developer.",
    teamSize: 5,
  },
];

// Work Experience data
const workExperienceData = [
  {
    id: "fpt-software",
    title: "Back-End Developer (Internship)",
    company: "FPT Software",
    date: "01/2024 - 04/2024",
    responsibilities: ["Developed RESTful APIs using Spring Boot, PostgreSQL.", "Implemented authentication and authorization using JWT.", "Collaborated with front-end (ReactJS) to integrate APIs."],
  },
];

// Certificate data
const certificatesData = [
  {
    id: "certificate-1",
    title: "(Coursera): Web Design for Everybody.",
    link: "https://www.coursera.org/account/accomplishments/specialization/certificate/GJBTBSKXJ76",
  },
  {
    id: "certificate-2",
    title: "(Coursera): Web Software Development Lifecycle.",
    link: "https://www.coursera.org/account/accomplishments/specialization/certificate/GJBTBSKXJ76",
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
                    <span className="font-bold">Short Term:</span> Looking for a Front-End intern position.
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
                    <ul className="list-disc pl-6 space-y-1 text-[15px]">
                      <li>JavaScript, TypeScript: 6 semesters.</li>
                      <li>Java SE, Java EE: 7 semesters.</li>
                      <li>Kotlin: 2 semesters.</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-bold">Frameworks/Libraries:</h3>
                    <ul className="list-disc pl-6 space-y-1 text-[15px]">
                      <li>
                        <b>Back-End</b>: NestJS, ExpressJS, SpringBoot.
                      </li>
                      <li>
                        <b>Front-End</b>: ReactJS, NextJS.
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-bold">Database:</h3>
                    <ul className="list-disc pl-6 space-y-1 text-[15px]">
                      <li>MongoDB, SQL Server, PostgreSQL</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-bold">Other Technical Skills:</h3>
                    <ul className="list-disc pl-6 space-y-1 text-[15px]">
                      <li>Git</li>
                      <li>Figma, Adobe XD</li>
                      {/* <li>Agile, Scrum</li> */}
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-bold">Soft Skills:</h3>
                    <p className="pl-2 text-[15px]">Hardworking, strong in teamwork and time management, proficient in researching English documents.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="p-4">
            <h1 className="text-3xl font-bold mb-2">DOAN THANH CHUNG</h1>
            <p className="mb-6">Front-End Developer (Internship)</p>

            <div className="mb-6">
              <h2 className="text-3xl font-bold mb-2">Education</h2>
              <p className="font-bold">FPT University (Hanoi Campus).</p>
              <p>Software Engineering</p>
              <p>09/2021 - 04/2025</p>
              <ul className="list-disc pl-6 mt-2">
                <li>100% Scholarship</li>
                <li>Final - year student</li>
                <li>Current Semester: 9/9</li>
              </ul>
            </div>

            {/* Work Experience Section */}
            <div className="mb-6">
              <WorkExperience experiences={workExperienceData} />
            </div>

            {/* Using the ProjectCarousel component */}
            <ProjectCarousel projects={projectData} />

            <div className="mb-6">
              <Certificates certificates={certificatesData} />
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
