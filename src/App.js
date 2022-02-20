import './App.css';
import CreateEventForm from './pages/CreateEventForm';
import Event from './pages/Event';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Home from './pages/Home';


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
