import { BrowserRouter /** mi enrutador*/ ,Routes /** va a ir cada una de msi rutas*/, Route  /** mis rutas individuales*/} from "react-router-dom";
/** mi enrutador*/
/** Archivo de barril que contiene todas mis paginas */
import { 
  Acerca,
  Error404,
  Home,
  Productos,
  ProductosDetalle,
  Servicios,
} from "./pages";
import Menu from "./components/Menu";
import "./App.css";
import { useState } from "react";

function App() {
  const [productos, setProductos] = useState([ //estos son los valores predeterminados que son objetos
    {
      id: 1,
      nombre: "Carne",
      precio: 100,
    },
    {
      id: 2,
      nombre: "Cebolla",
      precio: 200,
    },
    {
      id: 3,
      nombre: "Pollo",
      precio: 300,
    },
    {
      id: 4,
      nombre: "Papa",
      precio: 400,
    },
  ]);

  return (
    <>
      {/* Enrutador general */}
      <BrowserRouter>{/*los envuelvo en el enrutador , que es basicamente poder pasar de pagina en pagina sin actualizarla  */}
        <h1>Hola Mundo React Router Dom</h1>
        {/* Componente Menu */}
        <Menu />
        {/* Contenedor de rutas */}
        <Routes>
          {/* Rutas individuales */}
          <Route path="/" element={<Home />} /> {/* /route es la direccion individual que esta depues del  /, y home es a donde nos va redirijir la pagian  */}
          <Route path="/acerca" element={<Acerca />} />
          {/* Pagina de productos generales */}
          <Route
            path="/productos"
            element={<Productos productos={productos} />} // a la propiedad productos le pasa los productos 
          />
          {/* Pagina individual del producto */}
          <Route
            path="/productos/:id"   //permite que desde la pagina donde este me valla a otra sub pagina de esa pagina, por que despues del / viene como el identificar de esa sub pagina, paar que me aparesca la info de esa sub pagina 
            element={<ProductosDetalle productos={productos} />}
          />
          <Route path="/servicios" element={<Servicios />} />
          {/* Ruta de error */}
          <Route path="*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;