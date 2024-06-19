import { useContext, useState } from 'react';
import back1 from "../assets/bgimage14.png"
import { UserContext } from '../App';
import { Link, Navigate } from 'react-router-dom';

const initialFlightData = [
  {
    departure_time: '2024-06-20T08:00:00Z',
    arrival_time: '2024-06-20T12:00:00Z',
    flight_company_name: 'Airways International',
    departure_country: 'USA',
    arrival_country: 'Canada',
    airline: 'Delta',
    amount: 500,
  },
  {
    departure_time: '2024-06-20T09:30:00Z',
    arrival_time: '2024-06-20T13:45:00Z',
    flight_company_name: 'Sky High Airlines',
    departure_country: 'Germany',
    arrival_country: 'France',
    airline: 'Lufthansa',
    amount: 600,
  },
  {
    departure_time: '2024-06-20T11:00:00Z',
    arrival_time: '2024-06-20T14:30:00Z',
    flight_company_name: 'Oceanic Air',
    departure_country: 'Australia',
    arrival_country: 'New Zealand',
    airline: 'Qantas',
    amount: 700,
  },
];

const airlineData = {
  'USA-Canada': ['Delta', 'American Airlines', 'United Airlines'],
  'Germany-France': ['Lufthansa', 'Air France', 'Eurowings'],
  'Australia-New Zealand': ['Qantas', 'Air New Zealand', 'Jetstar'],
};

const Flight = () => {
  const [flightData, setFlightData] = useState(initialFlightData);
  const [searchCriteria, setSearchCriteria] = useState({
    date: '',
    time: '',
    minAmount: '',
    maxAmount: '',
    departureCountry: '',
    arrivalCountry: '',
  });
  const [flightsToDisplay, setFlightsToDisplay] = useState([]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setSearchCriteria((prevCriteria) => ({ ...prevCriteria, [name]: value }));
  };

  const validateInputs = () => {
    const { date, time, minAmount, maxAmount, departureCountry, arrivalCountry } = searchCriteria;
    return date && time && minAmount && maxAmount && departureCountry && arrivalCountry;
  };

  const generateNewFlight = (date, time, minAmount, maxAmount, departureCountry, arrivalCountry) => {
    const airlineOptions = airlineData[`${departureCountry}-${arrivalCountry}`] || [];
    if (airlineOptions.length === 0) return [];

    const randomIndex = Math.floor(Math.random() * airlineOptions.length);
    const airline = airlineOptions[randomIndex];
    const amount = Math.floor(Math.random() * (maxAmount - minAmount + 1)) + parseInt(minAmount, 10);

    const departureDateTime = new Date(`${date}T${time}:00Z`);
    const arrivalDateTime = new Date(departureDateTime);
    arrivalDateTime.setHours(departureDateTime.getHours() + 4);

    return {
      departure_time: departureDateTime.toISOString(),
      arrival_time: arrivalDateTime.toISOString(),
      flight_company_name: airline,
      departure_country: departureCountry,
      arrival_country: arrivalCountry,
      airline: airline,
      amount: amount,
    };
  };

  const searchFlights = () => {
    if (!validateInputs()) {
      alert('Please fill in all fields');
      return;
    }

    const { date, time, minAmount, maxAmount, departureCountry, arrivalCountry } = searchCriteria;
    const formattedDate = new Date(date).toISOString().split('T')[0];
    const flightsForCriteria = flightData.filter(
      (flight) =>
        flight.departure_time.startsWith(formattedDate) &&
        flight.departure_time.includes(time) &&
        flight.amount >= parseInt(minAmount, 10) &&
        flight.amount <= parseInt(maxAmount, 10) &&
        flight.departure_country === departureCountry &&
        flight.arrival_country === arrivalCountry
    );

    if (flightsForCriteria.length > 0) {
      setFlightsToDisplay(flightsForCriteria);
    } else {
      const newFlight = generateNewFlight(date, time, minAmount, maxAmount, departureCountry, arrivalCountry);
      if (newFlight) {
        setFlightData((prevData) => [...prevData, newFlight]);
        setFlightsToDisplay([newFlight]);
      } else {
        alert('No available flights for the selected criteria.');
      }
    }
  };

  const displayFlights = (flights) => {
    return (
      <ul>
        {flights.map((flight, index) => (
          <li key={index}>
            {flight.departure_time && flight.departure_time.split('T')[0] ? (
              <>
                <strong>Date:</strong> {flight.departure_time.split('T')[0]} <br />
                <strong>Airline:</strong> {flight.airline} <br />
                <strong>Time:</strong> {flight.departure_time.split('T')[1].slice(0, -1)} - {flight.arrival_time.split('T')[1].slice(0, -1)} <br />
                <strong>Amount:</strong> ${flight.amount}
              </>
            ) : (
              <strong>No Flight Found!</strong>
            )}
          </li>
        ))}
      </ul>
    );
  };

  let {userAuth:{fullname, access_token}} = useContext(UserContext)

  return (
      access_token == null ? <Navigate to='/signin'/>
      :
    <>
      <div style={{position:'relative'}}>
      <img src={back1} alt='Image' style={{position:'relative', width:"100%", minHeight:"50rem"}}/>

      <section className="h-cover" style={{display:'grid', justifyContent:'center', textAlign:'center', top:'20%', position:'absolute', zIndex: "1", backgroundColor: "rgba(255, 255, 255, 0.8)"}}>
      <p style={{ textTransform: 'capitalize', fontWeight: "bold" }}>Welcome Back {fullname} +</p>
      <h1 style={{fontWeight:'bold'}}>Flight Deals</h1>
      <div style={{textAlign:'left', display:''}}>
      <div>
        <label htmlFor="datePicker">Select a date:</label>
        <input type="date" id="datePicker" name="date" onChange={handleInputChange} className='input-box1'/>
      </div>
      <div>
        <label htmlFor="timePicker">Select a time:</label>
        <input type="time" id="timePicker" name="time" onChange={handleInputChange} className='input-box1'/>
      </div>
      <div>
        <label htmlFor="minAmountInput">Enter minimum amount($):</label>
        <input type="number" id="minAmountInput" name="minAmount" onChange={handleInputChange}  className='input-box1'/>
      </div>
      <div>
        <label htmlFor="maxAmountInput">Enter maximum amount($):</label>
        <input type="number" id="maxAmountInput" name="maxAmount" onChange={handleInputChange}  className='input-box1'/>
      </div>
      <div>
        <label htmlFor="departureCountry">Departure Country:</label>
        <input type="text" id="departureCountry" name="departureCountry" onChange={handleInputChange}  className='input-box1'/>
      </div>
      <div>
        <label htmlFor="arrivalCountry">Arrival Country:</label>
        <input type="text" id="arrivalCountry" name="arrivalCountry" onChange={handleInputChange}  className='input-box1'/>
      </div>
      <button  className='btn btn-primary' onClick={searchFlights} style={{display:'block', margin:'2rem auto'}}>Search Flight</button>
      </div>
    
      {flightsToDisplay.length > 0 && (
        <div style={{textAlign:'left'}}>
          <h5 style={{fontWeight:'bold'}}>Searched Flight Deals:</h5>
          {displayFlights(flightsToDisplay)}
        </div>
      )}

      <Link to="/userDashboard-page">
                         <button className="btn btn-primary mt-3" style={{margin:'0 auto' , display:'block'}}><i className="bi bi-arrow-left-short"></i>Back To Dashboard</button>
      </Link>
    </section>
      </div>
    </>

  );
};

export default Flight;

