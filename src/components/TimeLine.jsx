"use client";
import React, { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, useMotionValue } from "framer-motion";
import { ExternalLink } from "lucide-react";

const timelineEvents = [
  {
    year: "2021 - 2023",
    company: "EEEP Juarez Távora",
    role: "Técnico em Redes de Computadores",
    type: "text", tag: "Redes",
    description: "Curso técnico integrado ao Ensino Médio.",
    link: "https://www.instagram.com/eeep.jtavora/",
  },
  {
    year: "2023",
    company: "Auto Peças Padre Cícero",
    role: "Desenvolvedora de Automação",
    type: "media",
    tag: "Primeiro Estágio",
    description:
      "Automação e gerenciamento de SO utilizando PowerShell e scripts Bash. Criação de gráficos, análise de dados em Power BI e algoritmos para Microinformática.",
    imgSrc: "/images/estagio-padre-cicero.png",
    link: "https://www.padrecicero.com.br/",
  },
  {
    year: "2024",
    company: "Universidade Federal do Ceará",
    role: "Ingresso na Graduação",
    type: "media",
    tag: "Conquista Acadêmica",
    description:
      "Bacharelado em Sistemas de Informação na Universidade Federal do Ceará (UFC).",
    imgSrc: "/images/ufc.jpg",
    link: "https://www.quixada.ufc.br",
  },
  {
    year: "2025",
    company: "PET-SI (UFC)",
    role: "Bolsista no Programa de Ensino Tutorial",
    type: "media",
    tag: "Gestão & Comunidade",
    description:
      "Criação e execução de projetos acadêmicos e sociais. Gestão de tarefas, aprimorando liderança, autogestão e trabalho em equipe.",
    imgSrc: "/images/pet.jpg",
    link: "https://linktr.ee/petsi?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAcGRvZgJleHRuA2FlbQIxMQBzcnRjBmFwcF9pZA85MzY2MTk3NDMzOTI0NTkAAadliD5T1xTV5PwredU52My0Zp_LpzS1i_dqyA46RfdlIiPtWbrRdKwUqwXFxw_aem_1oiEA_mdZ_ojq3vsKFxdQg",
  },
  {
    year: "2025 - 2026",
    company: "Fundação de Amparo à Pesquisa do Estado de São Paulo",
    role: "Pesquisadora em Ciência de Dados",
    type: "text",
    tag: "Machine Learning & AutoML",
    description:
      "Desenvolvimento de modelo de alerta preditivo de risco clínico com ML e Aprendizado Dividido Federado.",
    link: "https://fapesp.br/",
  },
  {
    year: "2026 - Atual",
    company: "Laboratório Alan Turing",
    role: "Desenvolvedora Back-End",
    type: "text",
    tag: "Python & Storage Analytics",
    description:
      "Desenvolvimento de APIs REST em Python para gestão de armazenamento e uso de Data Science para antecipar gargalos de infraestrutura de TI.",
    link: "https://www.atlab.ufc.br",
  },
];

export default function TimeLine() {
  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  const progressMotion = useMotionValue(0);
  const [progressValue, setProgressValue] = useState(0);

  useEffect(() => {
    const computeManual = () => {
      const el = targetRef.current;
      if (!el || typeof window === "undefined") return;
      const rect = el.getBoundingClientRect();
      const scrollY = window.scrollY || window.pageYOffset;
      const elTop = rect.top + scrollY;
      const total = elTop + rect.height - window.innerHeight;
      let value = 0;
      if (total > 0) value = (scrollY - elTop) / total;
      value = Math.min(Math.max(value || 0, 0), 1);
      const num = Number(value.toFixed(3));
      progressMotion.set(num);
      setProgressValue(num);
    };

    computeManual();
    window.addEventListener("scroll", computeManual, { passive: true });
    window.addEventListener("resize", computeManual);

    let unsub = null;
    if (scrollYProgress && scrollYProgress.onChange) {
      unsub = scrollYProgress.onChange((v) => {
        const num = Number((v || 0).toFixed(3));
        progressMotion.set(num);
        setProgressValue(num);
      });
    }

    return () => {
      window.removeEventListener("scroll", computeManual);
      window.removeEventListener("resize", computeManual);
      if (unsub) unsub();
    };
  }, [scrollYProgress, progressMotion, targetRef]);

  const scaleY = useTransform(progressMotion, [0, 1], [0, 1]);
  const ballTop = useTransform(progressMotion, [0, 1], ["0%", "100%"]);

  return (
    <section
      id="timeline"
      ref={targetRef}
      className="relative h-[450vh] w-full text-slate-900 dark:text-white transition-colors"
    >
      <div className="sticky top-0 flex h-screen w-full items-center justify-center overflow-hidden">
        <div className="container p-6 md:p-12 mx-auto h-[85vh] flex flex-col justify-between">
          <div className="text-center z-20 mb-6">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">
              Minha Trajetória
            </h2>
          </div>

          <div className="relative flex-1 w-full flex items-center justify-center">
            <div className="absolute left-4 md:left-1/3 top-0 bottom-0 w-px bg-slate-300 dark:bg-zinc-800 -translate-x-1/2" />

            <motion.div
              style={{ scaleY, transformOrigin: "top" }}
              className="absolute left-4 md:left-1/3 top-0 bottom-0 w-0.5 bg-linear-to-b from-indigo-800 via-purple-500 to-rose-500 -translate-x-1/2 z-10"
            />

            <motion.div
              style={{ top: ballTop }}
              className="absolute left-4 md:left-1/3 -translate-x-1/2 w-4 h-4 rounded-full bg-pink-500 dark:bg-white shadow-[0_0_15px_#ec4899] z-30 -mt-2 transition-transform hover:scale-150 cursor-pointer"
            />

            <div className="relative w-full h-full">
              {/* Debug overlay: mostra scrollYProgress em dev */}
              <div className="fixed right-4 bottom-4 z-50 pointer-events-none">
                <div className="bg-white/90 dark:bg-black/80 text-xs text-slate-900 dark:text-white px-2 py-1 rounded shadow">
                  scrollYProgress: {progressValue}
                </div>
              </div>
              {timelineEvents.map((event, index) => {
                const total = timelineEvents.length;
                const activeIndex = Math.min(
                  total - 1,
                  progressValue >= 0.99
                    ? total - 1
                    : Math.floor(progressValue * (total - 1))
                );
                const isActive = index === activeIndex;
                const opacity = isActive ? 1 : 0;
                const zIndex = 10 + index;
                const pointerEvents = isActive ? "auto" : "none";

                const leftX = useTransform(
                  progressMotion,
                  [index / (total - 1), (index + 1) / (total - 1)],
                  [-20, 0]
                );

                const rightX = useTransform(
                  progressMotion,
                  [index / (total - 1), (index + 1) / (total - 1)],
                  [20, 0]
                );

                return (
                  <motion.div
                    key={index}
                    style={{ opacity, zIndex, pointerEvents }}
                    className={`absolute inset-0 grid-cols-1 md:grid-cols-12 gap-6 items-center ${
                      isActive ? "grid" : "hidden"
                    }`}
                  >
                    <motion.div
                      style={{ x: leftX }}
                      className="md:col-span-4 md:text-right pl-12 md:pl-0 pr-0 md:pr-8 pointer-events-none"
                    >
                      <span className="timeline-year text-4xl md:text-6xl font-black font-mono tracking-tighter text-pink-600 dark:text-white block drop-shadow-sm">
                        {event.year}
                      </span>
                      <p className="text-xs md:text-sm font-bold uppercase tracking-wider text-pink-600 dark:text-pink-500 mt-2">
                        {event.company}
                      </p>
                    </motion.div>

                    <div className="hidden md:block md:col-span-1" />

                    <motion.div
                      style={{ x: rightX }}
                      className="md:col-span-7 pl-12 md:pl-6"
                    >
                      <a
                        href={event.link || "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block group cursor-pointer"
                      >
                        {event.type === "media" ? (
                          <motion.div
                            whileHover={{ y: -4, rotateX: 2, rotateY: -2 }}
                            whileTap={{ scale: 0.98 }}
                            transition={{ type: "spring", stiffness: 200, damping: 15 }}
                            className="rounded-2xl bg-white dark:bg-[#111113] border border-slate-200 dark:border-zinc-800/80 p-6 shadow-2xl backdrop-blur-xl group-hover:border-pink-500 group-hover:shadow-[0_0_25px_rgba(236,72,153,0.25)] transition-all duration-300"
                          >
                            <div className="flex items-center justify-between mb-3">
                              <span className="inline-block text-[10px] font-mono uppercase tracking-widest px-2.5 py-1 rounded bg-indigo-50 dark:bg-indigo-950/80 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800/50">
                                {event.tag}
                              </span>
                              <div className="flex items-center gap-2">
                                <span className="text-xs font-mono text-slate-400 dark:text-zinc-500">
                                  0{index + 1} / 0{timelineEvents.length}
                                </span>
                                <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-pink-500 transition-colors" />
                              </div>
                            </div>

                            <h3 className="text-lg md:text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-pink-600 dark:group-hover:text-pink-400 transition-colors flex items-center justify-between">
                              {event.role}
                            </h3>

                            <p className="text-xs md:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed mb-4">
                              {event.description}
                            </p>

                            {event.imgSrc && (
                              <div className="relative w-full h-40 md:h-52 rounded-xl overflow-hidden bg-slate-100 dark:bg-zinc-950 border border-slate-200 dark:border-zinc-800">
                                <motion.img
                                  src={event.imgSrc}
                                  alt={event.role}
                                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                                />
                              </div>
                            )}
                          </motion.div>
                        ) : (
                          <motion.div
                            whileHover={{ x: 4 }}
                            whileTap={{ scale: 0.98 }}
                            transition={{ type: "spring", stiffness: 250 }}
                            className="max-w-lg rounded-2xl bg-white/90 dark:bg-[#111113]/90 border border-slate-200 dark:border-zinc-800/80 p-6 shadow-2xl backdrop-blur-xl group-hover:border-pink-500 group-hover:shadow-[0_0_25px_rgba(236,72,153,0.25)] transition-all duration-300"
                          >
                            <div className="flex items-center justify-between mb-3">
                              <span className="inline-block text-[10px] font-mono uppercase tracking-widest px-2.5 py-1 rounded bg-slate-100 dark:bg-zinc-800 text-slate-600 dark:text-zinc-400 border border-slate-200 dark:border-zinc-700">
                                {event.tag}
                              </span>
                              <div className="flex items-center gap-2">
                                <span className="text-xs font-mono text-slate-400 dark:text-zinc-500">
                                  0{index + 1} / 0{timelineEvents.length}
                                </span>
                                <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-pink-500 transition-colors" />
                              </div>
                            </div>

                            <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-pink-600 dark:group-hover:text-pink-400 transition-colors">
                              {event.role}
                            </h3>
                            <p className="text-sm md:text-base text-slate-600 dark:text-zinc-300 leading-relaxed">
                              {event.description}
                            </p>
                          </motion.div>
                        )}
                      </a>
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
