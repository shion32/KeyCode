
import { useState } from 'react';
import logo from '../img/logo.svg';
// import { NavLink } from "react-router-dom";




export const Nav = () => {
  const [estaAbierto, setEstaAbierto] = useState(false); //va estar cerrado por eso el falso, por que no va estar ejecutandose la accion

  const menuCelular = () => {
    setEstaAbierto(!estaAbierto); // si esta en false con esto lo abre
  };

  return (
    /** la clase myNav esta en index.css pero es tailwind! */
    <nav className="myNav">
      <div className=" relative flex items-center justify-between w-full bg-slate-400 p-4">
        <div className="  logo flex-1  pl-[6rem] ">
          <img src={logo} alt="logo" width="108px" height="auto"></img>
        </div>
        {/* Botones */}
        <div className="hidden md:flex flex-grow justify-end space-x-7 text-white ">
          {/*contenedor de los botones, el hidden es para ocultar cuando esta en flex es decir cuando esta en cel, responsivo*/}

          <a href="#home">
            <button>HOME</button>
          </a>

          <a href="#about">
            <button>ABOUT</button>
          </a>

          <a href="#skills">
            <button >SKILLS</button>
          </a>

          <a href="#proyectos">
            <button >PROYECTOS</button>
          </a>

          <a href="#tecnologias">
            <button >TECNOLOGIAS</button>
          </a>
        </div>
        {/* Usuario */}
        <div className=" sol hidden md:flex text-2xl pl-16 pr-10 ">
          {/*no se vea el icono persona en flex */}
          <i class="fa-regular fa-sun" style={{ fontSize: "2.6rem" }}></i>
          {/*el link de html que instala lo necesario para colocar este icono*/}
        </div>
        {/* Menu hamburguesa para celular */}
        <div
          className="md:hidden flex items-center pl-4"
          style={{ fontSize: "2.6rem" }}
        >
          {/* desplegar un menu hamburguesa en cel, pero que en pantalas para el pc se oculte*/}
          <button onClick={menuCelular}>
            {/* desplegar un menu hamburguesa, con una accion*/}
            <i className={`fa-solid ${estaAbierto ? "fa-x" : "fa-bars"}`}></i>
            {/* Logo rallitas */}
          </button>
        </div>
        {/* cuando set sea tru y si el codigo anterior el de <div className="text-2xl md:hidden"> no esta abierto (osea que la accion no se ejecute) no se ejecutara, es por eso el &&, */}
        {estaAbierto && (
          <div className="md:hidden absolute top-full left-0 w-full border-gray-200 shadow-xl bg-white">
            <section className="border-b border-gray-200">
              <button className="block w-full  hover:text-gray-200 rounded p-1 text-right px-[26.88px] py-[22.4px] ">
                HOME
              </button>
            </section>
            <section className="border-b border-gray-200">
              <button className="block w-full  hover:text-gray-200 rounded p-1 text-right px-[26.88px] py-[22.4px]">
                ABOUT
              </button>
            </section>
            <section className="border-b border-gray-200">
              <button className="block w-full  hover:text-gray-200 rounded p-1 text-right px-[26.88px] py-[22.4px]">
                SKILLS
              </button>
            </section>
            <section className="border-b border-gray-200">
              <button className="block w-full  hover:text-gray-200 rounded p-1 text-right px-[26.88px] py-[22.4px]">
                PROYECTOS
              </button>
            </section>
            <section className="border-b border-gray-200">
              <button className="block w-full  hover:text-gray-200 rounded p-1 text-right px-[26.88px] py-[22.4px]">
                TECNOLOGIAS
              </button>
            </section>
          </div>
        )}
      </div>
    </nav>
  );
}
