import React from 'react';
import footerData from './data/footer.json'; // Asegúrate de que la ruta sea correcta

export const Footer = () => {
  const { text, links } = footerData.footer;

  return (
    <div id='footer' className="bg-gray-200 text-center p-4 -mt-20">
      <p className='p-footer'>{text}</p>
      <div className='container-footer flex justify-center gap-4'>
        {links.map((link, index) => (
          <a key={index} href={link.href} target="_blank" rel="noopener noreferrer">
            <i className={link.iconClass}></i>
          </a>
        ))}
      </div>
    </div>
  );
};
