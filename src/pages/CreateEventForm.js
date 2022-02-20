import { useState } from 'react';

import './CreateEventForm.css';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DateTimePicker from '@mui/lab/DateTimePicker';

import { Link } from 'react-router-dom';

import Create from '../components/Create';



function CreateEventForm() {

  const [userName, setUserName] = useState('');
  const [eventDetails, setEventDetails] = useState({
    name: '',
    start: new Date(),
    end: new Date(),
    address: '',
    description: ''
  });

  const updateDetails = (event) => {
    const { name, value } = event.target;
    setEventDetails((prevDetails) => {
      return {
        ...prevDetails,
        [name]: value
      };
    });
  };

  const storeDetails = () => {
    localStorage.setItem('userName', userName);
    localStorage.setItem('eventDetails', JSON.stringify(eventDetails));
  };

  return (
    <div className="CreateEventForm">
      <h2>Create Your Event</h2>
      <h4>Your Details</h4>
      <Box
        sx={{margin: 3}}  
      >
        <TextField 
          id="outlined-basic"
          label="Your Name" 
          variant="standard"
          color='primary' 
          fullWidth
          value={userName}
          onChange={(event) => {setUserName(event.target.value);}}
          type="text"
        />
      </Box>
      <h4>Event Overview</h4>
      <Box sx={{margin: 3}}  >
        <TextField 
          label="Event Name" 
          variant="standard"
          color='primary' 
          fullWidth
          name="name"
          value={eventDetails.name}
          onChange={updateDetails}
          type="text"
        />
        <TextField 
          label="Event Description" 
          variant="standard"
          color='primary' 
          fullWidth
          name="description"
          value={eventDetails.description}
          onChange={updateDetails}
          type="text"
        />
        <TextField 
          label="Event Address" 
          variant="standard"
          color='primary' 
          fullWidth
          name="address"
          value={eventDetails.address}
          onChange={updateDetails}
          type="text"
        />
      </Box>
      <h4>Event Details</h4>
      <Box
        sx={{marginLeft: 10, marginBottom: 3}}  
      >
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DateTimePicker
            renderInput={(props) => <TextField {...props} />}
            label="Starting Date & Time"
            name="start"
            value={eventDetails.start}
            onChange={updateDetails}
          />
        </LocalizationProvider>
      </Box>

      <Box
        sx={{marginLeft: 10, marginBottom: 3}}  
      >
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DateTimePicker
            renderInput={(props) => <TextField {...props} />}
            label="Ending Date & Time"
            name="end"
            value={eventDetails.end}
            onChange={updateDetails}
          />
        </LocalizationProvider>
      </Box>

      <div onClick={storeDetails}>
        <Link to='/event'>
          <Create/>
        </Link>
      </div>
    </div>
  );
}

export default CreateEventForm;
