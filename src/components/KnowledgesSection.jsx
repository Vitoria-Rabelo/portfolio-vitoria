"use client";
import React from "react";
import Tilt from "react-parallax-tilt";
import { IoLogoJavascript } from "react-icons/io";
import { SiMongodb, SiNestjs, SiCplusplus, SiGo } from "react-icons/si";
import { FaCss3Alt, FaGitAlt, FaGithub, FaHtml5, FaNodeJs, FaPython, FaReact, FaAws } from "react-icons/fa";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { BiLogoPostgresql } from "react-icons/bi";
import { GrMysql } from "react-icons/gr";

const skills = [
  { name: "Python", icon: <FaPython /> },
  { name: "Golang", icon: <SiGo /> },
  { name: "C++", icon: <SiCplusplus /> },
  { name: "JavaScript", icon: <IoLogoJavascript /> },
  { name: "React", icon: <FaReact /> },
  { name: "Next.js", icon: <RiNextjsFill /> },
  { name: "NodeJS", icon: <FaNodeJs /> },
  { name: "Tailwind", icon: <RiTailwindCssFill /> },
  { name: "HTML", icon: <FaHtml5 /> },
  { name: "CSS", icon: <FaCss3Alt /> },
  { name: "Git", icon: <FaGitAlt /> },
  { name: "GitHub", icon: <FaGithub /> },
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "PostgreSQL", icon: <BiLogoPostgresql /> },
  { name: "MySQL", icon: <GrMysql /> },
  { name: "AWS", icon: <FaAws /> },
];

const Knowledges = () => {
  return (
    <section
      id="skills"
      className="py-24 relative flex flex-col items-center justify-center mx-auto"
    >
      {/* Título da Seção */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-white mb-4">Minhas Skills</h2>
        <div className="h-1 w-20 bg-purple-500 mx-auto rounded-full"></div>
      </div>

      {/* Grid de Skills */}
      <div 
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-6 w-full px-4"
      >
        {skills.map(({ name, icon }, index) => (
          <Tilt 
            key={index} 
            tiltMaxAngleX={15} 
            tiltMaxAngleY={15} 
            scale={1.1}
            transitionSpeed={1500}
          >
            <article
              className="group bg-[#18191E] border border-[#33353F] rounded-xl flex flex-col justify-center items-center w-full aspect-square p-4 cursor-pointer hover:border-purple-500 transition-all duration-300"
            >
              <div className="text-purple-500 text-4xl mb-2 group-hover:scale-110 transition-transform duration-300">
                {icon}
              </div>
              <p className="text-[#ADB7BE] text-xs font-medium group-hover:text-white transition-colors">
                {name}
              </p>
            </article>
          </Tilt>
        ))}
      </div>
    </section>
  );
};

export default Knowledges;