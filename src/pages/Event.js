// import './Event.css';

function Event() {
    const eventDetails = JSON.parse(localStorage.getItem('eventDetails'));
    const userName = localStorage.getItem('userName');
    return (
      <div className="Event">
        <h3>{eventDetails.name}</h3>
        <h3>Hosted by {userName}</h3>

        <h3>From: {eventDetails.start}</h3>
        <h3>To: {eventDetails.end}</h3>
        <h3>{eventDetails.address}</h3>

        <h4>{eventDetails.description}</h4>
      </div>
    );
  }
  
  export default Event;
  