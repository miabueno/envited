import '../App.css';
import Nav from '../components/Nav';
import Text from '../components/Text';
import Create from '../components/Create';
import LandingBottom from '../components/LandingBottom';
import { Link } from 'react-router-dom';

function Home() {
  return (
      <div className="App">
        <header className="App-header">
          <Nav/>
          <Text/>
          <Link to='/create'>
            <Create/> 
          </Link>
          <LandingBottom/>
        </header>
      </div>
    
  );
}

export default Home;
