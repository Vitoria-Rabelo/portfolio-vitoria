import React from 'react'
import GithubIcon from "../../public/images/github-icon.svg";
import LinkedinIcon from "../../public/images/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
  return (
    <section 
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
    >
        
    <div className="absolute z-0 bg-[radial-gradient(circle,purple_0%,transparent_70%)] opacity-40 rounded-full h-96 w-96 blur-3xl top-3/4 -left-10 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">
          Entre em contato!
        </h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md text-justify">
          Estou sempre em busca de novos desafios e conexões. Se você tiver uma proposta
          ou quiser apenas trocar uma ideia sobre tecnologia, sinta-se à vontade para entrar em contato!
        </p>
        <div className="socials flex flex-row gap-4">
          <Link href="https://github.com/Vitoria-Rabelo" target="_blank">
            <Image src={GithubIcon} alt="Github Icon" width={40} height={40} />
          </Link>
          <Link href="https://www.linkedin.com/in/vitória-rabelo/" target="_blank">
            <Image src={LinkedinIcon} alt="Linkedin Icon" width={40} height={40} />
          </Link>
        </div>
      </div>

      <div className="z-10">
        <form className="flex flex-col">
          <div className="mb-6">
            <label htmlFor="email" className="text-white block mb-2 text-sm font-medium">
              Seu email
            </label>
            <input  
              type="email" 
              id="email" 
              required 
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5 outline-none focus:border-purple-500 transition-colors"
              placeholder="seuemail@gmail.com"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="subject" className="text-white block mb-2 text-sm font-medium">
              Assunto
            </label>
            <input  
              type="text" 
              id="subject" 
              required 
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5 outline-none focus:border-purple-500 transition-colors"
              placeholder="Apenas diga oi"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="text-white block mb-2 text-sm font-medium">
              Mensagem
            </label>
            <textarea
              name="message"
              id="message"
              rows="4"
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5 outline-none focus:border-purple-500 transition-colors"
              placeholder="Vamos conversar sobre..."
            />
          </div>
          <button
            type="submit"
            className="bg-linear-to-br from-blue-500 via-purple-500 to-pink-500 hover:opacity-90 text-white font-medium py-2.5 px-5 rounded-lg w-full transition-all"
          >
            Enviar Mensagem
          </button>
        </form>
      </div>
    </section>
  )
}

export default EmailSection;