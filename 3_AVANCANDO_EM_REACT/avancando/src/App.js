//components
import ManageData from './components/ManageData';
import ListRender from './components/ListRender';

// style
import './App.css';

// imagem
import City from "./assets/city.jpg";

function App() {
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
      
    </div>
  );
}

export default App;
