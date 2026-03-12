"use client"
import React from 'react';
import HeroSession from './HeroSession';
import Navbar from './Navbar';
import Image from "next/image";

function AboutSession() {
  return (
    <section className="text-white">
        <div className="md: grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16">
            <Image src="/images/about.jpg" width={400} height={400} alt="Vitória Rabelo, Estudante de Sistemas de Informação na UFC"/>
            <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
                <h2 className="text-4xl font-bold text-white mb-4">
                    Sobre Mim
                </h2>
                <p className="text-sm lg:text-base mb-2 text-justify">
                    Meu nome é <strong>Vitória Rabelo Santiago</strong> e sou graduanda em <strong>Sistemas de Informação</strong> pela Universidade Federal do Ceará (UFC). Com foco em <strong>Desenvolvimento Backend e Ciência de Dados</strong>, tenho experiência na construção de APIs robustas utilizando Python (FastAPI) e na modelagem de dados tanto em bancos relacionais (MySQL, PostgreSQL) quanto NoSQL (MongoDB).
                </p> 
                <p className="text-sm lg:text-base mb-2 text-justify">
                    Atualmente, atuo como pesquisadora em Ciência de Dados pela <strong>Fundação de Amparo à Pesquisa do Estado de São Paulo (FAPESP)</strong>, integrando um grupo de pesquisa interdisciplinar. Meu trabalho envolve o desenvolvimento de modelos preditivos de risco clínico utilizando <strong>Machine Learning (AutoML) e Aprendizado Federado</strong>, além de contribuir ativamente para a engenharia de dados, documentação técnica do projeto e escrita de artigos.
                </p>
                <p className="text-sm lg:text-base mb-2 text-justify">
                    Busco constantemente aplicar meus conhecimentos em projetos desafiadores que exijam soluções escaláveis e eficientes. Acredito que a combinação entre rigor acadêmico e experiência prática em automação e análise de dados me permite entregar soluções que geram impacto real na sociedade.
                </p>
            </div>
        </div>
    </section>
  )
}

export default AboutSession
