import './App.css';
import CarDetails from './components/CarDetails';

function App() {

  const cars = [
    {id: 1 ,brand: "Chevrolet", model: "Cruze", manufactured: 2018, color: "Branco", km: 30290, isNew: false, price: 101000  },
    {id: 1 ,brand: "Honda", model: "Civic", manufactured: 2020, color: "Preto", km: 51300, isNew: false, price: 107000 },
    {id: 1 ,brand: "Ford", model: "Fusion", manufactured: 2013, color: "Prata", km: 101200, isNew: false , price: 80000 },
    {id: 1 ,brand: "Hyundai", model: "HB20", manufactured: 2021, color: "Branco", km: 0, isNew: true , price: 105000 }
  ];

  return (
    <div className="App">
     <h1>Tarefa 05 - Car Details</h1>

    <div className="boxes">
      {cars.map((car) => (
        <CarDetails id={car.id} brand={car.brand} model={car.model} manufactured={car.manufactured} color={car.color} km={car.color} isNew={car.color} price={car.price} />
      ))}
    </div>

    </div>
  );
}

export default App;
