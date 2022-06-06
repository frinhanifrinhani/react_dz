import './App.css';
import MyComponent from './components/MyComponent';
import { useState } from 'react';
import Title from './components/Title';

function App() {
  const n = 15;

  const [name] = useState("Thiago");

  const redTitle = true

  return (
    <div className="App">
      {/* CSS global */}
      <h1>React com CSS</h1>

      {/* CSS de componente */}
      <MyComponent />
      <p>Este parágrafo é do App</p>

      {/* Inline css*/}
      <p style={{
        color: "magenta",
        padding: "25px",
        borderTop: "2px solid red"
      }}>
        Este elemento foi estilizado de forma inline
      </p>

      {/* CSS Inline dinânimo */}
      <h2 style={n < 10 ? { color: "purple" } : { color: "pink" } }>CSS Dinâmico</h2>

      <h2 style={n > 10 ? { color: "purple" } : { color: "pink" } }>CSS Dinâmico</h2>

      <h2 style={ name === 'Thiago' ? { color: "green", backgroundColor: '#000' } :  null }>{name}</h2>

      {/* Classe dinâmica */}
      <h2 className={ redTitle ? "red-title" : "title" }>
        Este título vai ter classe dinâmica
      </h2>

      {/* CSS Modules */}
      <Title />
    </div>
  );
}

export default App;
