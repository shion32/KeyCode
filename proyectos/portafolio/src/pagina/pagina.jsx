import React from 'react';
import {About,Tecnologias,Skills,Proyectos} from "../componentes"

const Pagina = () => {
  return (
    <div className='contenedor' style={{padding: "0", margin: "0", width: "100%",  backgroundColor:"#fbfdfe" }}>
      <About/>
      <Skills/>
      <Tecnologias/>
      <Proyectos/>

    </div>
  );
};

export default Pagina;