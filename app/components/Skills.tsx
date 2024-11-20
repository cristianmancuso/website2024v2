"use client";

import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact} from 'react-icons/fa';
import { SiTypescript, SiPython, SiTailwindcss, SiFigma, SiWordpress, SiAstro, SiVite, SiAdobepremierepro, SiAdobeillustrator, SiAdobeaftereffects, SiAdobexd,SiAdobephotoshop ,SiAdobeaudition, SiCanva, SiSketch } from 'react-icons/si';
import { DiBootstrap, DiNodejs, DiPhp } from "react-icons/di";
import { TbSql } from "react-icons/tb";
import { RiNextjsFill } from "react-icons/ri";

export default function Skills() {
  const tools = [
    { name: "HTML", icon: <FaHtml5 size={40} /> },
    { name: "CSS", icon: <FaCss3Alt size={40} /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss size={40} /> },
    { name: "JavaScript", icon: <FaJsSquare size={40} /> },
    { name: "ReactJS", icon: <FaReact size={40} /> },
    { name: "Typescript", icon: <SiTypescript size={40} /> },
    { name: "Python", icon: <SiPython size={40} /> },
    { name: "Wordpress", icon: <SiWordpress size={40} /> },
    { name: "NodeJS", icon: <DiNodejs size={60} /> },
    { name: "SQL", icon: <TbSql size={40} /> },
    { name: "PHP", icon: <DiPhp size={40} /> },
    { name: "Bootstrap", icon: <DiBootstrap size={40} /> },
    { name: "Next.js", icon: <RiNextjsFill size={40} /> },
    { name: "Astro", icon: <SiAstro size={40} /> },
    { name: "Vite", icon: <SiVite size={40} /> },
    { name: "Adobe Photoshop", icon: <SiAdobephotoshop size={40} /> },
    { name: "Adobe Premiere", icon: <SiAdobepremierepro size={40} /> },
    { name: "Adobe Illustrator", icon: <SiAdobeillustrator size={40} /> },
    { name: "Adobe After Effects", icon: <SiAdobeaftereffects size={40} /> },
    { name: "Adobe XD", icon: <SiAdobexd size={40} /> },
    { name: "Adobe Audition", icon: <SiAdobeaudition size={40} /> },
    { name: "Sketch", icon: <SiSketch size={40} /> },
    { name: "Figma", icon: <SiFigma size={40} /> },
    { name: "Canva", icon: <SiCanva size={40} /> },
  ];

  return (
    <section className="py-32 bg-slate-950" id="Skill">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="sm:text-3xl text-2xl font-extrabold text-center text-white mb-12">
          Tools I Use
        </h2>
        <div className="overflow-hidden">
          <div className="flex animate-scroll gap-10 px-10 items-center">
            {tools.map((tool, index) => (
              <div
                key={index}
                className="tool-card flex flex-col items-center justify-center p-4 rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
              >
                <div className="text-white text-lg text-center font-semibold">
                  {tool.icon} 
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }

        .animate-scroll {
          animation: scroll 20s linear infinite;
        }
      `}</style>
    </section>
  );
}
