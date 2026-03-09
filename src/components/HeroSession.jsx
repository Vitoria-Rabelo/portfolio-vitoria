import React from 'react'
import Image from 'next/image';

const HeroSession = () => {
  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <div className="col-span-7 place-self-center">
          <h1 className="text-white mb-4 text-4xl lg:text-6xl font-extrabold">
              Hello, I'm Vitória Rabelo
          </h1>
          <p className="text-[#ADB7BE] text-lg mb-6 lf:text-xl">
          Desenvolvendo sistemas escaláveis e transformando dados em soluções inteligentes.
          </p>
        </div>
        <div> 
          <button className="px-6 py-3 rounded-full mr-4">Contate-me</button>
          <button>Download CV</button>
        </div>
        <div className="col-span-5 place-self-center">
            <div className='flex items-center justify-center rounded-full bg-[#181818] w-80 h-80 relative overflow-hidden'>
            <Image 
              src="/images/perfil.png" 
              alt="Perfil"
              className='w-full h-full object-cover'
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
