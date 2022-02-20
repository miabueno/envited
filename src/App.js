import './App.css';
import CreateEventForm from './CreateEventForm';
import Event from './Event';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Home from './Home';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/">
          <Route index element={<Home/>}/>
          <Route path="create" element={<CreateEventForm/>}/>
          <Route path="event" element={<Event/>}/>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
