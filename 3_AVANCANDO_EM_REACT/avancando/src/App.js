import {  useState } from 'react';

// style
import './App.css';

// imagem
import City from "./assets/city.jpg";
import ShowUserName from './components/ShowUserName';
import CarDetails from './components/CarDetails';

//components
import ManageData from './components/ManageData';
import ListRender from './components/ListRender';
import ConditionalRender from './components/ConditionalRender';
import Fragment from './components/Fragment';

function App() {

  //const name="Thiago Frinhani";
  const [userName] = useState("Thiago");

  const cars = [
    {id: 1 , brand: "Ferrari", color: "Amarela", newCar: true, km: 0},
    {id: 2, brand: "KIA", color: "Branco", newCar: false , km:  3400},
    {id: 3, brand: "Renault", color: "Azul", newCar:  false, km: 2330}
  ]

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

      {/* props */}
      <div>
        <ShowUserName name={userName} />
      </div>

      {/* destructuring */} 
      <div>
        <CarDetails brand="GM" km="10 mil" color="black" newCar={false} />
      </div>

      {/* reaproveitamento */} 
      <CarDetails brand="Ford" km={0} color="Vermelha" newCar={true} />
      <CarDetails brand="Ford" km={4500} color="Branco" newCar={false} />

      {/* loop em array de objetos */} 
      {cars.map((car) => (
        <CarDetails brand={car.brand} color={car.color} km={car.km} newCar={car.newCar} />
      ))}

      {/* fragment */}
      <Fragment titulo="Terceiro título" />
      
    </div>
  );
}

export default App;
