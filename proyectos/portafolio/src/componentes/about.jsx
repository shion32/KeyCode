import React from 'react'
import pcm from '../img/pcm.png';



export const About = () => {
  return (
    <section id="about" className="section">
      <img  className='pc'  src={pcm} alt="pc" width="700rem" height="auto" />
      <div className='aboutC'>
        <div>
          <h3 className="about-title">Un poco sobre mi</h3>
        </div>
        <div>
          <p className="pab">
          Soy programadora autodidacta con conocimientos en tecnologías como
          bases de datos, React, Redux, lenguajes de programación como PHP,
          Python, JavaScript, entre otros. Poseo habilidades blandas clave, como
          la capacidad para resolver problemas, adaptabilidad, trabajo en equipo
          y comunicación efectiva, lo que me permite integrarme fácilmente en
          proyectos y colaborar de manera eficiente.
        </p>
        </div>
      </div>
    </section>
  );
}