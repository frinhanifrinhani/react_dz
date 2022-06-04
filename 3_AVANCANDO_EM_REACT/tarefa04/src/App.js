import logo from './logo.svg';
import './App.css';
import UserDetails from './components/UserDetails';

function App() {

  const users = [
    {id: 1, name: "Thiago", age: "33", profession: "Software Engineer"},
    {id: 2, name: "Pedro", age: "25", profession: "Software Development"},
    {id: 3, name: "Maria", age: "22", profession: "Requirements Analyst"},
    {id: 4, name: "Joaquina", age: "28", profession: "Data Base Administrator"},
    {id: 5, name: "Lucas", age: "17", profession: "Estagiario"},
  ]

  return (
    <div className="App">
      <h1>Tarefa 04</h1>
      {users.map((user) => (
        <UserDetails key={user.id} name={user.name} age={user.age} profession={user.profession} />
      ))}
     
    </div>
  );
}

export default App;
