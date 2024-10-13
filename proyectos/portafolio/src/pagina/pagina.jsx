import React from 'react';
import {About,Tecnologias,Skills,Proyectos} from "../componentes"

const Pagina = () => {
  return (
    <div className='contenedor' style={{padding:"30px ",  backgroundColor:"green" }}>
      <About/>
      <Tecnologias/>
      <Skills/>
      <Proyectos/>

    </div>
  );
};

export default Pagina;