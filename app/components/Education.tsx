"use client";

export default function Education() {
  const educationData = [
    {
      institution: "University of Palermo",
      degree: "Image and Sound Designer",
      dates: "2011 - 2016",
    },
    {
      institution: "CICE Escuela Profesional de Nuevas Tecnologías.",
      degree: "Expert UX/UI",
      dates: "2018-2019",
    },
    {
      institution: "Online Learning Platform",
      degree: "FrontEnd",
      dates: "2021-Now",
    
    },
  ];

  return (
    <section className="py-16 bg-slate-950" id="Education">
      <div className="max-w-7xl mx-auto ">
        <h2 className="text-3xl font-extrabold text-center text-white mb-12">
          Education
        </h2>
        <div className="space-y-8 px-6 sm:px-46">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-center bg-slate-900  shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow px-6 sm:px-42"
            >
              <div>
                <h3 className="text-xl font-semibold text-white">
                {edu.degree}
                </h3>
                <p className="text-sm text-white">{edu.institution}</p>
              </div>
              <span className="text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4">
                {edu.dates}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
