
import './App.css';

import ComponenteA from './components/contactoA';

function App() {
  const contactoPrueba = {
    nombre: 'Darien',
    apellido: 'Pajaro Miranda',
    email: 'dpajaro81@gmail.com',
    conectado: false,
  };
  return (
    <div className="App">
      <header className="App-header">
       
        <ComponenteA contacto={contactoPrueba} />
      </header>
    </div>
  );
}

export default App;
