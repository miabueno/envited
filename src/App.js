import './App.css';
import Nav from './Nav';
import Text from './Text';
import Create from './Create';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav/>
        <Text/>
        <Create/>
      </header>
    </div>
  );
}

export default App;
