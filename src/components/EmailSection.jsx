import React from 'react'
import GithubIcon from "../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
  return (
    <section className='grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4'>
        <div>
            <h5 className='text-xl font-bold text-white my-2'>Entre em contato!</h5>
            <p className='text-[#ADB7BE] mb-4 max-w-md'>
                {" "}
                Estou sempre em busca de novos desafios e conexões. Se você tiver uma proposta, uma pergunta técnica
                ou quiser apenas trocar uma ideia sobre tecnologia, sinta-se à vontade para entrar em contato!
            </p>
            <div className="socials flex flex-row gap-2">
                <Link href="https://github.com/Vitoria-Rabelo">
                    <Image src={GithubIcon} alt="Github Icon"></Image>
                </Link>
                <Link href="https://www.linkedin.com/in/vitória-rabelo/">
                    <Image src={LinkedinIcon} alt="Linkedin Icon"></Image>
                </Link>
            </div>
        </div>
        <div>
             <form className="flex flex-col gap-4">
                <input />
             </form>
        </div>
    </section>
  )
}

export default EmailSection
