import {Selects} from './componentes/Selects'

const App = () => {
  return (
    <>
      <body className="cuerpo" >
      <header>
        <div className='contenedor'>

          <h2>Aprendizaje React</h2>

        </div>
      </header>
      <hr />
      <p className='p'>Selects Anidados</p>
      {/* SelectAnidados */}
      
      <Selects/>
      
      </body>
    </>
  );
};

export default App;