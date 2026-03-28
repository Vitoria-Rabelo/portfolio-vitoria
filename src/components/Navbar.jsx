"use client";
import React, {useState, useEffect} from "react";
import Link from "next/link";
import NavLink from "./NavLink";
import {Bars3Icon, XMarkIcon} from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";

const navLinks = [
    {
        title: "Home",
        path: "#home",
    },
    {
        title: "Sobre",
        path: "#about",
    },
    {
        title: "Skills",
        path:"#skills"
    },
    {
        title: "Projetos",
        path: "#projects",
    },
    {
        title: "Contate-me",
        path: "#contact",
    }
]

const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("home");

    useEffect(() => {
        const handleScroll = () => {
            const sections = navLinks.map(link => link.path.replace("#", ""));
            const scrollPosition = window.scrollY + 150;

            sections.forEach((section) => {
                const element = document.getElementById(section);
                if (element) {
                    const offsetTop = element.offsetTop;
                    const height = element.offsetHeight;
                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
                        setActiveSection(section);
                    }
                }
            });
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return(
        <nav className="fixed top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-90">
            <div className="flex flex-wrap items-center justify-between mx-auto p-4 py-2">
                <Link className="font-bold text-pink-500" href="#home">
                &lt;Vitória Rabelo/&gt;
                </Link>
                <div className="mobile-menu block md:hidden">
                    {!navbarOpen ? ( 
                        <button onClick={() => setNavbarOpen(true)} className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white">
                            <Bars3Icon className="h-5 w-5"/>
                        </button> ) : (
                        <button onClick={() => setNavbarOpen(false)} className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white">
                            <XMarkIcon className="h-5 w-5"/>
                        </button>
                    )}
                </div>
                <div className="menu hidden md:block md:w-auto" id="navbar">
                    <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
                        {
                            navLinks.map((link, index) => (
                                <li key={index}>
                                    <NavLink 
                                        href={link.path} 
                                        title={link.title} 
                                        active={activeSection === link.path.replace("#", "")}
                                    />
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
            {navbarOpen ? <MenuOverlay links={navLinks} activeSection={activeSection}/> : null}
        </nav>
    )
}

export default Navbar