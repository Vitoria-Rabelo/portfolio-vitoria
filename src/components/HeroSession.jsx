"use client";
import React from "react"
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const HeroSession = () => {
  return (
    <section className="py-16 lg:py-24">
      <div className="grid grid-cols-1 sm:grid-cols-12 gap-8 w-full max-w-7xl mx-auto px-4">
        <div className="col-span-7 place-self-center text-center lg:text-left">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-pink-600">Hello, I'm{" "}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                "Vitória Rabelo",
                1000,
                "BackEnd Developer",
                1000,
                "Data Scientist",
                1000,
                "Information System Student",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
            
          </h1>
          <p className="text-[#ADB7BE] text-basecsm:text-lg mb-6 lg:text-xl">
          Desenvolvendo sistemas escaláveis e transformando dados em soluções inteligentes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button className="px-6 py-3 w-full sm:w-fit rounded-full bg-linear-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white font-semibold transition-colors">
              Contate-me
            </button>
            <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-linear-to-br from-blue-500 via-purpl-500 to-pink-500 hover:bg-slate-800 text-white font-semibold transition-colors">
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">Download CV</span>
            </button>
          </div>
        </div>
        <div className="col-span-5 place-self-center lg:place-self-end mt-8 lg:mt-0">
          <div className='flex items-center justify-center rounded-full bg-black-950 w-80 h-80 relative overflow-hidden border-2 border-pink-900'>
            <Image 
              src="/images/perfil.png" 
              alt="Perfil"
              className='w-full h-full object-cover rounded-full'
              width={320}
              height={320}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSession
