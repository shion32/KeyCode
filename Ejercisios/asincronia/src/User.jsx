import { useState, useEffect } from "react";

const User = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [cargando, setCargando] = useState(true);

  // const obtenerUsuarios = async () => {
  //   fetch("https://jsonplaceholder.typicode.com/users")
  //     .then((respuesta) => respuesta.json()) // Convertir la respuesta a JSON
  //     .then((data) => {
  //       console.log(data); // Verificar los datos en la consola
  //       setUsuarios(data); // Actualizar el estado con los usuarios
  //       setCargando(false); // Cambiar el estado de "cargando"
  //     })
  //     .catch((error) => {
  //       console.error("Hubo un error", error); // Manejar cualquier error
  //     });
  // };
  const obtenerUsuarios = async () => {
    try {
      const respuesta = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data =  await respuesta.json();
      setUsuarios(data);
      setCargando(false);
    } catch (error) {
      console.error("Hubo un error");
    }
  };

  useEffect(() => {
    obtenerUsuarios()
  }, []);

  if (cargando) {
    return <p>Cargando...</p>
  } else {
      return (
        <div>
          <h1>Lista de usuarios</h1>
          <ul>
            {usuarios.map((usuario) => (
              <li>{usuario.name}</li>
            ))}
          </ul>
        </div>
      );
  }

};

export default User;