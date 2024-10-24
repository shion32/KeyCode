import React from 'react';
import florGrande from '../img/florGrande.png';
import florpequeña from '../img/florpequeña.png';

export const Header = () => {
  return (
    <div id='home' className='header'>
      <img className="florG" src={florGrande} alt="grande" />
      <img className="florP" src={florpequeña} alt="pequeña" />
      <div className='letra2'>
        <h2>holaa, soy Anny Montaño software developer</h2>
        <div className='letra'>
          <h6>"Codifica tu futuro, depura tus límites."</h6>
        </div>
      </div>
    </div>
  );
};