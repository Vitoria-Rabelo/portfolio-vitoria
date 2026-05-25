"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "React Portfolio Website",
    description: "Meu Portfólio Pessoal | Desenvolvido com Next.js, Tailwind CSS e TypeScript. Objetivo de apresentar minhas habilidades",
    image: "/images/projects/portfolio-next.png",
    tag: ["Todos", "Web"],
    gitUrl: "https://github.com/Vitoria-Rabelo/portfolio-vitoria",
    previewUrl: "https://github.com/Vitoria-Rabelo/portfolio-vitoria/blob/main/README.md",
  },
  {
    id: 2,
    title: "API de Gestão Financeira",
    description: "API de Gestão Financeira e Controle de Gastos Assíncrona desenvolvida com FastAPI, MongoDB e Beanie ODM.",
    image: "/images/projects/finance-beanie.png",
    tag: ["Todos", "BackEnd"],
    gitUrl: "https://github.com/Vitoria-Rabelo/fastapi-beanie-finance",
    previewUrl: "https://github.com/Vitoria-Rabelo/fastapi-beanie-finance/blob/main/README.md",
  },
  {
    id: 3,
    title: "Quiz Multiplayer Sockets",
    description: "Implementação original de um sistema de Quiz competitivo com sockets e multithreading.",
    image: "/images/projects/quiz-sockets.png",
    tag: ["Todos", "BackEnd"],
    gitUrl: "https://github.com/Vitoria-Rabelo/quiz-multiplayer-sockets-python",
    previewUrl: "https://github.com/Vitoria-Rabelo/quiz-multiplayer-sockets-python/blob/main/README.md",
  },
  {
    id: 4,
    title: "Plataforma Nutricional",
    description: "Solução completa de gestão nutricional desenvolvida para modernizar a interação entre nutricionistas e pacientes.",
    image: "/images/projects/nutritrack.png",
    tag: ["Todos", "Web"],
    gitUrl: "https://github.com/Vitoria-Rabelo/NutriTrack",
    previewUrl: "https://github.com/Vitoria-Rabelo/NutriTrack/blob/main/README.md",
  },
  {
    id: 5,
    title: "Avante Carreiras",
    description: "Sistema voltado para o setor de Recursos Humanos da Avante Tech Jr., com o objetivo de automatizar a gestão de documentos. ",
    image: "/images/projects/avante.png",
    tag: ["Todos", "Web"],
    gitUrl: "https://github.com/PriHolanda/Avante-Carreiras",
    previewUrl: "https://github.com/PriHolanda/Avante-Carreiras/blob/main/README.md",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("Todos");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects" className="text-white scroll-mt-24">
      <h2 className="text-center text-4xl font-bold mt-4 mb-8 md:mb-4">
        Meus Projetos
      </h2>
      <div className="flex flex-row justify-center items-center gap-2 py-6 overflow-x-auto">
        <ProjectTag
          onClick={handleTagChange}
          name="Todos"
          isSelected={tag === "Todos"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="BackEnd"
          isSelected={tag === "BackEnd"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12 group">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
            className="transition-all duration-300 group-hover:scale-[0.98] group-hover:blur-[2px] hover:scale-105! hover:blur-none!"
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;