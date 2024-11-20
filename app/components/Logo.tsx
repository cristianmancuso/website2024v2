"use client"; 

import Image from 'next/image';

export default function Logo() {
  const logos = [
    {
      src: "/cuso.png", 
      alt: "Cuso Closet Logo",
      width: 120, // 
      height: 120, // 
    },
    {
      src: "/logoblanco.png",
      alt: "Samshappytails Logo",
      width: 80,
      height: 80,
    },
    {
      src: "/22.png",
      alt: "La providencia Logo",
      width: 280,
      height: 180,
    },
    {
      src: "/photo.png",
      alt: "MancuPhoto Logo",
      width: 180,
      height: 120,
    },
    // Agrega más logos según sea necesario
  ];

  return (
    <section className="py-10 bg-slate-950" id='Logo'>
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="sm:text-2xl text-xl font-extrabold text-center text-white mb-12">
          Logos
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
          {logos.map((logo, index) => (
            <div key={index} className="logo-card flex justify-center items-center  bg-slate-950">
              <Image
                src={logo.src}
                alt={logo.alt}
                width={logo.width}  // Usa el ancho del logo
                height={logo.height} // Usa la altura del logo
                className="object-contain hover:scale-110 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>


      <style jsx>{`
        .logo-card {
          background: #020617;
          padding: 16px; 
          transition: transform 0.3s;
        }

        .logo-card:hover {
          transform: translateY(-5px); 
        }
      `}</style>
    </section>
  );
}
