import './App.css';
import MyForm from './components/MyForm';

function App() {
  return (
    <div className="App">
      <h2>Forms</h2>
      <MyForm user={{name: "Thiago Frinhani", email: "frinhani@gmail.com", bio: "Sou arquiteto de software", role: "admin"}} />
    </div>
  );
}

export default App;
