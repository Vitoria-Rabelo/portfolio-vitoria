"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import Link from "next/link";

const HeroSession = () => {
  return (
    <section className="py-16 lg:py-24 scroll-mt-24" id="home">
      <div className="hero-stack flex flex-col-reverse lg:grid lg:grid-cols-12 gap-8 w-full max-w-7xl mx-auto px-4">
        <div className="col-span-1 lg:col-span-7 place-self-center text-center lg:text-left lg:order-1 order-last">
          <h1 className="text-foreground mb-4 text-4xl sm:text-5xl lg:text-6xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-pink-600">Hello, I'm{" "}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                "Vitória Rabelo",
                1000,
                "BackEnd Developer",
                1000,
                "Data Scientist",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-(--muted) text-base sm:text-lg mb-6 lg:text-xl">
            Desenvolvendo sistemas escaláveis e transformando dados em soluções inteligentes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button 
              onClick={() => {
                const contactSection = document.getElementById("contact");
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="px-6 py-3 w-full sm:w-fit rounded-lg bg-linear-to-br from-purple-600 via-purple-500 to-pink-500 hover:from-purple-700 hover:to-pink-700 text-white font-semibold transition-all duration-300 transform active:scale-95 shadow-md"
            >
              Contate-me
            </button>
            <a 
              href="/curriculo-vitoria-rabelo.pdf" 
              download="Curriculo-Vitoria-Rabelo.pdf"
              className="px-1 py-1 w-full sm:w-fit rounded-lg bg-linear-to-br from-purple-600 via-purple-500 to-pink-500 hover:from-purple-700 hover:to-pink-700 text-white font-semibold transition-all inline-block"
            >
              <span className="block bg-(--surface) hover:bg-(--card) rounded-lg px-5 py-2 text-center text-foreground">
                Download CV
              </span>
            </a>
            <Link 
              href="https://lattes.cnpq.br/3223426985469487"
              target="_blank"
              className="px-6 py-3 w-full sm:w-fit rounded-lg bg-linear-to-br from-purple-600 via-purple-500 to-pink-500 hover:from-purple-700 hover:to-pink-700 text-white font-semibold transition-all duration-300 transform active:scale-95 shadow-md text-center"
            >
              Lattes CV
            </Link>
          </div>
        </div>
        <div className="col-span-1 lg:col-span-5 flex justify-center lg:justify-end lg:order-last order-first mb-8 lg:mb-0">
         <div className="relative w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80">
            <Image 
              src="/images/perfil.png" 
              alt="Perfil de Vitória Rabelo"
              fill
              priority
              className="rounded-full object-cover border-2 border-gray-800 shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSession;