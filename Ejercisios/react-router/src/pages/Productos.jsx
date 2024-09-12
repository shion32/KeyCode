import { Link } from "react-router-dom"; //esto es para redirijir

export const Productos = ({ productos }) => {
  return (
    <div>
      Productos
      <ul>
        {productos.map((producto) => ( //muestra uno por uno lo que va por dentro, por que uno por uno se va guardando y mostrando en producto 
          <li key={producto.id}>{/* no se repite el producto, por la llave, osea por el identificador osea el id */} <Link to={`/productos/${producto.id}`}>{producto.nombre} - $ {producto.precio} {/* si clickeamos estos dos ptoductos nos redirije a su rescpectiva pagina  */}   </Link>
          </li>
        ))}
        

      </ul>
    </div>
  );
};