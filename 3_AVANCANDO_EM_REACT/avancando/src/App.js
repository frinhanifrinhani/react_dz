import { useState } from 'react';

//components
import ManageData from './components/ManageData';
import ListRender from './components/ListRender';
import ConditionalRender from './components/ConditionalRender';

// style
import './App.css';

// imagem
import City from "./assets/city.jpg";
import ShowUserName from './components/ShowUserName';
import CarDetails from './components/CarDetails';

function App() {

  const name="Thiago Frinhani";
  const [userName] = useState("Thiago");

  return (
    <div className="App">
      <h1>Avançando em React</h1>
      
      {/* Imagem em public */}
      <div>
        <img src="/img1.jpg" alt="Paisagem" />
      </div>
      
      {/*Imagem em assets */}
      <div>
        <img src={City} alt="City" />
      </div>
      
      <div>
        <ManageData />
      </div>

      <div>
        <ListRender />
      </div>

      <div>
        <ConditionalRender />
      </div>

      <div>
        <ShowUserName name={userName} />
      </div>

      <div>
        <CarDetails brand="GM" km="10 mil" color="black" />
      </div>
      
    </div>
  );
}

export default App;
