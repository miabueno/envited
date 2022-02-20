import './App.css';
import Nav from './Nav';
import Text from './Text';
import Create from './Create';
import LandingBottom from './LandingBottom';

function Home() {
  return (
      <div className="App">
        <header className="App-header">
          <Nav/>
          <Text/>
          <Create/>
          <LandingBottom/>
        </header>
      </div>
    
  );
}

export default Home;
