import React from 'react'
export const Tecnologias = () => {
  return (
    <section id="tecnologias" className="section">
      <h3 className="tecno">Tecnologías</h3>
      <div className="container-tecno">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-20">
          <div className="group relative text-center">
            <i className="iconos fa-brands fa-php text-9xl transition-opacity duration-300 ease-in-out group-hover:opacity-0"></i>
            <span className="absolute inset-0 flex justify-center items-center text-lg font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">PHP</span>
          </div>
          <div className="group relative text-center">
            <i className="iconos fa-brands fa-react text-6xl transition-opacity duration-300 ease-in-out group-hover:opacity-0"></i>
            <span className="absolute inset-0 flex justify-center items-center text-lg font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">React</span>
          </div>
          <div className="group relative text-center">
            <i className="iconos fa-brands fa-github text-6xl transition-opacity duration-300 ease-in-out group-hover:opacity-0"></i>
            <span className="absolute inset-0 flex justify-center items-center text-lg font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">GitHub</span>
          </div>
          <div className="group relative text-center">
            <i className="iconos fa-brands fa-css3-alt text-6xl transition-opacity duration-300 ease-in-out group-hover:opacity-0"></i>
            <span className="absolute inset-0 flex justify-center items-center text-lg font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">CSS3</span>
          </div>
          <div className="group relative text-center">
            <i className="iconos fa-brands fa-html5 text-6xl transition-opacity duration-300 ease-in-out group-hover:opacity-0"></i>
            <span className="absolute inset-0 flex justify-center items-center text-lg font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">HTML5</span>
          </div>
          <div className="group relative text-center">
            <i className="iconos fa-brands fa-js text-6xl transition-opacity duration-300 ease-in-out group-hover:opacity-0"></i>
            <span className="absolute inset-0 flex justify-center items-center text-lg font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">JavaScript</span>
          </div>
          <div className="group relative text-center">
            <i className="iconos fa-brands fa-linux text-6xl transition-opacity duration-300 ease-in-out group-hover:opacity-0"></i>
            <span className="absolute inset-0 flex justify-center items-center text-lg font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">Linux</span>
          </div>
          <div className="group relative text-center">
            <i className="iconos fa-brands fa-python text-6xl transition-opacity duration-300 ease-in-out group-hover:opacity-0"></i>
            <span className="absolute inset-0 flex justify-center items-center text-lg font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">Python</span>
          </div>
        </div>
      </div>
    </section>
  
  );
};