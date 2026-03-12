"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";

const projectsData = [
  {
    id: 1,
    title: "React Portfolio Website",
    description: "Meu Portfólio Pessoal | Desenvolvido com Next.js, Tailwind CSS e TypeScript.",
    image: "/images/projects/quiz-sockets.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Vitoria-Rabelo/portfolio-vitoria",
    previewUrl: "https://github.com/Vitoria-Rabelo/portfolio-vitoria/blob/main/README.md",
  },
  {
    id: 2,
    title: "API de Gestão Financeira",
    description: "API de Gestão Financeira e Controle de Gastos Assíncrona desenvolvida com FastAPI, MongoDB e Beanie ODM.",
    image: "/images/projects/finance-beanie.png",
    tag: ["All", "BackEnd"],
    gitUrl: "https://github.com/Vitoria-Rabelo/fastapi-beanie-finance",
    previewUrl: "https://github.com/Vitoria-Rabelo/fastapi-beanie-finance/blob/main/README.md",
  },
  {
    id: 3,
    title: "Quiz Multiplayer Sockets",
    description: "Implementação original de um sistema de Quiz competitivo com sockets e multithreading.",
    image: "/images/projects/quiz-sockets.png",
    tag: ["All", "Computer Network"],
    gitUrl: "https://github.com/Vitoria-Rabelo/quiz-multiplayer-sockets-python",
    previewUrl: "https://github.com/Vitoria-Rabelo/quiz-multiplayer-sockets-python/blob/main/README.md",
  },
];

function ProjectsSection() {
  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold mt-4 mb-8">
        Meus Projetos
      </h2>
      <div className="grid md:grid-cols-3 gap-8 md:gap-12">
        {projectsData.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
            gitUrl={project.gitUrl}
            previewUrl={project.previewUrl}
          />
        ))}
      </div>
    </section>
  );
}

export default ProjectsSection;