import React from 'react'

export const Footer = () => {
  return (
    <div id='footer' className="bg-gray-200 text-center p-4 -mt-20">
      <p className='p-footer'>© Copyright 2024 . echo por Anny Montaño</p>
      <div className='container-footer flex justify-center gap-4'>
        {/* Icono de Correo */}
        <a href="mailto:tuemail@example.com" target="_blank" rel="noopener noreferrer">
          <i className="fa-regular fa-envelope"></i>
        </a>
        {/* Icono de GitHub */}
        <a href="https://github.com/shion32" target="_blank" rel="noopener noreferrer">
          <i className="fa-brands fa-github"></i>
        </a>
        {/* Icono de LinkedIn */}
        <a href="https://www.linkedin.com/in/anny-sofia-monta%C3%B1o-jimenez-6405332b7/" target="_blank" rel="noopener noreferrer">
          <i className="fa-brands fa-linkedin"></i>
        </a>
      </div>
    </div>
  );
};
