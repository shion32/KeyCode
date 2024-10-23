import React from 'react';
import tecnologiasData from './data/tecnologias.json'; // Asegúrate de tener este archivo en la misma carpeta o ajustar el path

export const Tecnologias = () => {
  return (
    <section id="tecnologias" className="section">
      <h3 className="tecno">Tecnologías</h3>
      <div className="container-tecno">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-20">
          {tecnologiasData.map((tecno, index) => (
            <div key={index} className="group relative text-center">
              <i className={`iconos ${tecno.icon} ${tecno.size} transition-opacity duration-300 ease-in-out group-hover:opacity-0`}></i>
              <span className="absolute inset-0 flex justify-center items-center text-lg font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                {tecno.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};