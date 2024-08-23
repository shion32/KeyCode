//propiedades que se las pasa al select list para que las utilize
import { useState, useEffect } from "react";
import { SelectList } from "./SelectList";

export const Selects = () => {
  // 2) es el que me permite guardar lo que se ejecuto en el primer paso, ose la api
  const [
  departamentos,/*mi valor de lectura*/ setDepartamentos /*mi valor de modificacion*/,] = useState(""); //valor original ;
  const [municipios, setMunicipios] = useState("");
  const [ciudades, setCiudades] = useState("");

  console.log("Departamento ID", departamentos);
  console.log("Municipio ID", municipios);

  useEffect(() => {
    if (municipios) {
      fetch(`https://api-colombia.com/api/v1/City/${municipios}`)
        .then((response) => {
          if (!response.ok) {
            console.log("error en la respuesta");
          }
          return response.json();
        })
        .then((data) => setCiudades(data))

        .catch((error) =>
          console.error("Error al obtener la información de la ciudad:", error)
        );
    }
  });

  return (
    <div className="container">
      <SelectList
        title="Departamentos"
        url="https://api-colombia.com/api/v1/Department" // 1) yo eleijo algo aca, de la api
        manejadorCambio={(event /*es la interaccion*/) => {
          // me va a escuchar la interaccion que tenga el usuario
          setDepartamentos(
            event./*el evento */ target
              ./*posicion dentro de la accion*/ value /*una poscion dentro de la poscion target*/
          );
        }}
      />
      <SelectList
        title="Municipios"
        url={`https://api-colombia.com/api/v1/Department/${departamentos}/cities`}
        manejadorCambio={(event) => {
          // el manejador queda guardado en el selectList para que este lo utilize
          setMunicipios(event.target.value);
        }}
      />
      {/* // Imprimir info del municipio */}

      {ciudades && (
        <div className="info">
          <h2> info de la ciudad</h2>
          <p>
            <strong>nombre</strong> {ciudades.name}
          </p>

          <p>
            <strong> numero de persona </strong> {ciudades.population}
          </p>

          <p>
            <strong>codigo postal </strong> {ciudades.postalCode}
          </p>
        </div>
      )}
    </div>
  );
};
