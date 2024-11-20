"use client";

import React from "react";
import { FaGithub } from "react-icons/fa"; // Asegúrate de instalar react-icons si aún no lo has hecho

const Welcome = () => {
  return (
    <section
      className="relative h-screen flex items-center justify-center overflow-hidden bg-slate-950"
      id="Welcome"
    >
    
      <div
        className="absolute inset-0 opacity-50 pointer-events-none"
        style={{ perspective: "200px" }}
      >
        <div className="absolute inset-0" style={{ transform: "rotateX(60deg)" }}>
          <div className="animate-grid synthwave-grid synthwave-grid-light synthwave-grid-dark"></div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-black to-transparent"></div>
      </div>

      {/* Sección de bienvenida */}
      <div className="relative z-10 text-center">
        <h1 className="text-3xl md:text-5xl font-extrabold mb-4 text-white">
          Cristian Mancuso
        </h1>
        <p className="text-lg md:text-2xl py-6 text-white px-5">
          Welcome to my Portfolio!
        </p>
        {/* Icono de GitHub */}
        <a
          href="https://github.com/cristianmancuso"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 mt-6 text-white hover:text-gray-400 transition"
        >
          <FaGithub size={30} />
          <span className="text-lg">Visit my GitHub</span>
        </a>
      </div>

      {/* Estilos adicionales */}
      <style jsx>{`
        @keyframes grid {
          0% {
            transform: translateY(-50%);
          }
          100% {
            transform: translateY(0);
          }
        }

        .animate-grid {
          animation: grid 15s linear infinite;
        }

        .synthwave-grid {
          background-repeat: repeat;
          background-size: 60px 60px;
          height: 300vh;
          inset: 0% 0px;
          margin-left: -50%;
          transform-origin: 100% 0 0;
          width: 600vw;
        }

        :not(.dark) .synthwave-grid-light {
          background-image: linear-gradient(
              to right,
              rgba(248, 250, 252, 0.2) 1px,
              transparent 0
            ),
            linear-gradient(to bottom, rgba(248, 250, 252, 0.4) 1px, transparent 0);
        }

        .dark .synthwave-grid-dark {
          background-image: linear-gradient(
              to right,
              rgba(255, 255, 255, 0.2) 1px,
              transparent 0
            ),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.4) 1px, transparent 0);
        }
      `}</style>
    </section>
  );
};

export default Welcome;
