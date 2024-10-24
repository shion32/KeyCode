
import { useState } from 'react';
import logo from '../img/logo.svg';

export const Nav = () => {
  const [estaAbierto, setEstaAbierto] = useState(false);
  const [botonActivo, setBotonActivo] = useState("");

  const menuCelular = () => {
    setEstaAbierto(!estaAbierto);
  };

  const manejarClick = (boton) => {
    setBotonActivo(boton);
  };

  return (
    <nav className="myNav fixed top-0 left-0 w-full z-50 bg-[#fbfdfe] p-4v ">
      <div className="relative flex items-center justify-between w-full bg-[#fbfdfe] p-4 z-10 border-gray-200 shadow">
        {" "}
        {/* Asegúrate de que tenga z-index */}
        <div className="logo flex-1 pl-[6rem]">
          <img src={logo} alt="logo" width="60px" height="auto" />
        </div>
        <div className=" botones hidden md:flex pr-[16px] space-x-7 text-black font-bold">
          {["home", "about", "skills", "tecnologias", "proyectos"].map(
            (boton) => (
              <a href={`#${boton}`} key={boton}>
                <button
                  className={`hover:text-[#7adcb0] ${
                    botonActivo === boton ? "text-[#7adcb0] font-bold" : ""
                  }`}
                  onClick={() => manejarClick(boton)}
                >
                  {boton.toUpperCase()}
                </button>
              </a>
            )
          )}
        </div>
        <div
          className="md:hidden flex items-center pl-5"
          style={{ fontSize: "2.6rem" }}
        >
          <button onClick={menuCelular}>
            <i className={`fa-solid ${estaAbierto ? "fa-x" : "fa-bars" }`}></i>
          </button>
        </div>
        {estaAbierto && (
          <div className="md:hidden absolute top-full left-0 w-full border-gray-200 shadow-xl bg-white z-20">
            {" "}
            {/* Asegúrate de que tenga z-index */}
            {["home", "about", "skills", "proyectos", "tecnologias"].map((boton) => (
                <section className="border-b border-gray-200">
                  <a href={`#${boton}`} key={boton}>
                    <button
                      className={`block w-full rounded p-1 text-right px-[26.88px] py-[22.4px] ${botonActivo === boton ? "text-[#7adcb0] font-bold" : "" }`}
                      onClick={() => {
                        manejarClick(boton);
                        setEstaAbierto(!estaAbierto);
                      }}
                    >
                      {boton.toUpperCase()}
                    </button>
                  </a>
                </section>
              )
            )}
          </div>
        )}
      </div>
    </nav>
  );
};