"use client"; 

export default function About() {
  return (
    <section className="relative py-32 bg-slate-950 text-white overflow-hidden" id="About">
      <div className="absolute inset-0 z-0 bg-slate-950"></div>
      
      {/* Contenido */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <h2 className="sm:text-3xl text-2xl font-extrabold mb-8">About Me</h2>
        <p className="text-md leading-relaxed">
        Nice to meet you! Here is a bit about me:
I am a calm and creative person who thrives on challenges and learning new things. Over the years, I have been working as a freelancer, gaining valuable experience and honing my skills in different projects. Now, I am excited to start my journey in a company where I can contribute and grow further.

I have lived in three different countries: Argentina, Spain, and the USA, which has given me a broad perspective and adaptability to diverse cultures. I can speak Spanish and English.

In my free time, I enjoy sports, especially soccer, and spending quality time with my loved ones.</p>
      </div>
    </section>
  );
}

