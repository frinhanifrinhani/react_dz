//components
import FirstComponent from './components/FirstComponent';
import TemplateExpressions from './components/TempleteExpressions';
//styles
import './App.css';
import MyComponent from './components/MyComponent';
import Events from './components/Events';


function App() {
  return (
    <div className="App">
      <h1>Fundamentos</h1>
      <FirstComponent />
      <TemplateExpressions />
      <MyComponent />
      <Events />
    </div>
  );
}

export default App;
