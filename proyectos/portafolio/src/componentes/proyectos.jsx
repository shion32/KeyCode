import React, { useEffect, useState } from 'react';
import proyectosData from './data/proyectos.json'; 

export const Proyectos = () => {
  const [proyectos, setProyectos] = useState([]);

  useEffect(() => {
    setProyectos(proyectosData);
  }, []);

  return (
    <section id="proyectos" className='section'>
      <h3 className='titulo-pro'>Proyectos</h3>
      <div className='contenedor-proyectos1 flex justify-center space-x-40'>
        {proyectos.map((proyecto) => (
          <div key={proyecto.id} className="contenedor-proyectos relative group overflow-hidden bg-black m-auto mt-36">
            <img
              className="object-cover w-full h-full transform duration-700 backdrop-opacity-100"
              src={proyecto.imagen}
              alt={proyecto.nombre}
            />
            <div className="absolute w-full h-full shadow-2xl opacity-20 transform duration-500 inset-y-full group-hover:-inset-y-0"></div>
            <div className="absolute bg-gradient-to-t from-black w-full h-full transform duration-500 inset-y-3/4 group-hover:-inset-y-0">
              <div className="absolute w-full flex place-content-center">
                <p className="capitalize font-['Cinzel_Decorative',_cursive] font-bold text-3xl text-center shadow-2xl text-white mt-10">
                  {proyecto.nombre}
                </p>
              </div>
              <div className="botones1 absolute w-full place-content-center mt-40 grid grid-cols-2 gap-4 px-10 text-white">
                {proyecto.tecnologias.map((tecnologia, index) => (
                  <button key={index} className="btn-grid border-[1px] border-[solid] border-[white] hover:bg-white hover:text-black hover:scale-105 transform transition-transform duration-300">
                    {tecnologia}
                  </button>
                ))}
              </div>
              <div className='flex justify-center gap-4 absolute left-0 right-0 bottom-4 group-hover:bottom-6 transition-all'>
                <button className="botones2 bg-white text-black font-bold rounded-lg h-10 hover:bg-black hover:text-white transition-transform transform hover:scale-105">Local</button>
                <button className="botones2 bg-white text-black font-bold rounded-lg h-10 hover:bg-black hover:text-white transition-transform transform hover:scale-105">GitHub</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}