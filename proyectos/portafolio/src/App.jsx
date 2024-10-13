import { Nav, Header,  Footer, About,Proyectos,Skills,Tecnologias,Error404 } from './componentes';
import './App.css'
import '@fortawesome/fontawesome-free/css/all.min.css';
import Pagina from '../src/pagina/pagina.jsx';
// import { BrowserRouter, Routes, Route } from "react-router-dom";



function App() {
  return (
    <div className="flex flex-col min-h-screen">
        <Nav/>
        <Header />
        <Pagina />
        <Footer />
      {/* Enrutador general
      <BrowserRouter>
        {/*los envuelvo en el enrutador , que es basicamente poder pasar de pagina en pagina sin actualizarla  */}
        {/* Componente Menu */}

        {/* Contenedor de rutas */}
        {/* <Routes>
          <Route path="*" element={<Error404 />} />
        </Routes>
      </BrowserRouter> */} 
    </div>
  );
}

export default App;
