"use client"
import React from 'react';
import Image from "next/image";

function AboutSession() {
  return (
    <section className="text-foreground scroll-mt-24" id="about">
        <div className="md:grid md:grid-cols-12 gap-10 items-center py-8 px-4 sm:py-16">
            <div className="md:col-span-5 flex justify-center">
                <Image 
                    src="/images/about.jpg" 
                    width={400} 
                    height={400} 
                    alt="Vitória Rabelo, Estudante de Sistemas de Informação na UFC"
                    className="rounded-xl shadow-lg" 
                />
            </div>
            <div className="md:col-span-7 mt-4 md:mt-0 text-left flex flex-col h-full">
                <h2 className="text-4xl font-bold text-foreground mb-4">
                    Sobre Mim
                </h2>
                <p className="text-sm lg:text-base mb-4 text-justify text-foreground">
                    Meu nome é <strong>Vitória Rabelo Santiago</strong> e sou graduanda em <strong>Sistemas de Informação</strong> pela Universidade Federal do Ceará (UFC). Com foco em <strong>Desenvolvimento FullStack e Ciência de Dados</strong>, tenho experiência na construção de APIs robustas utilizando Python (FastAPI) e na modelagem de dados tanto em bancos relacionais (MySQL, PostgreSQL) quanto NoSQL (MongoDB).
                </p> 
                <p className="text-sm lg:text-base mb-4 text-justify text-foreground">
                    Atualmente, atuo como Desenvolvedora Backend no <strong>Laboratório Alan Turing</strong>, contribuindo em um projeto desenvolvido para a <strong>Dell Technologies</strong>. Minha atuação envolve o desenvolvimento e implementação de um software voltado à gestão e monitoramento de armazenamento em nuvem. O projeto busca otimizar a utilização dos recursos de armazenamento e reduzir custos operacionais.
                </p>
                <p className="text-sm lg:text-base mb-4 text-justify text-foreground">
                    Contribuo também como pesquisadora em Ciência de Dados pela <strong>Fundação de Amparo à Pesquisa do Estado de São Paulo (FAPESP)</strong>, integrando um grupo de pesquisa interdisciplinar. Meu trabalho envolve o desenvolvimento de modelos preditivos de risco clínico utilizando <strong>Machine Learning (AutoML) e Aprendizado Federado</strong>, além de contribuir ativamente para a engenharia de dados, documentação técnica do projeto e escrita de artigos.
                </p>
                <p className="text-sm lg:text-base mb-4 text-justify text-foreground">
                    Busco constantemente aplicar meus conhecimentos em projetos desafiadores que exijam soluções escaláveis e eficientes. Acredito que a combinação entre rigor acadêmico e experiência prática em automação e análise de dados me permite entregar soluções que geram impacto real na sociedade.
                </p>
            </div>
        </div>
    </section>
  )
}

export default AboutSession;