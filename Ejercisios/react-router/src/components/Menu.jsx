//esto sirve para que nosotros clickeamos y nos redirija a la pagina que queremos 

import { NavLink /* esto es como un <a>, me redireccionan a las pg sin cargar la pagina */ } from "react-router-dom"; //esto es una libreria 

const Menu = () => {
  return (
    // Componente Nav por semantica
    <nav className="menu">
        {/* Componente NavLink que es lo equivalente a la etiqueta <a> de html */}
        {/* isActive me permite saber por medio de un booleano si el usuario esta en esa URL, para hacer alguna accion, en este caso, pintar un estilo especifico */}
        {/* to={} es la ruta a la cual quiero que al dar clic, se dirija */}
      <NavLink
        className={({ isActive }) => (isActive ? "active-link" /* esto es como se llama la decoracion que la tengo en index.css o app css  */  : null)} //esto es una funcion que valida si la pagina esta activa, osea que la persona este ahi
        //lo valida con isactive, lo coloca en un classname para darle un estilo que diga el usuario esta ahi, que lo diferencia de e un
        to={"/"}
      >
        Home       {/*  la palabra que estara en el menu  */}
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "active-link" : null)}
        to={"/acerca"} //esto me dice que al cliquearlo me envie a la ruta 
      >
        Acerca
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "active-link" : null)}
        to={"/productos"}
      >
        Productos
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "active-link" : null)}
        to={"/servicios"}
      >
        Servicios
      </NavLink>
    </nav>
  );
};

export default Menu;

