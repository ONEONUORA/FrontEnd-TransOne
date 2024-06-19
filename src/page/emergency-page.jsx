import { useContext, useState } from 'react';
import axios from 'axios';
import {Link, Navigate } from "react-router-dom"
import { Toaster, toast } from 'react-hot-toast';
import { UserContext } from '../App';

const Emergency = () => {

    let{userAuth:{access_token, fullname}} =useContext(UserContext)
  const [country, setCountry] = useState('');
  const [emergencyContact, setEmergencyContact] = useState(null);
  const [error, setError] = useState(null);

  const handleInputChange = (event) => {
    setCountry(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Check if the input is empty
    if (country.trim() === '') {
      toast.error('Please enter a country name');
      return;
    }

    axios.get(import.meta.env.VITE_SERVER_DOMAIN + `/api/emergency-contacts/${country}`)
      .then(response => {
        if (response.data.message === 'Country not found') {
          setError('Country not found');
          setEmergencyContact(null);
        } else {
          setEmergencyContact(response.data);
          setError(null);
        }
      })
      .catch(error => {
        setError('Country name not found!');
        setEmergencyContact(null);
        console.log(error)
      });
  };

  const handleReset = () => {
    setCountry('');
    setEmergencyContact(null);
    setError(null);
  };

  return (
         access_token == null ? <Navigate to="/signin"/> 
                      : 

            <section className='h-cover'>
                <div className='row mb-5'>
                    <p style={{textTransform:'capitalize', fontWeight:'bold'}}>Welcome {fullname} +</p>
                    <hr/>
                   <div className='col-12' style={{display:'grid' , justifyContent:'center', textAlign:'center', marginTop:'3rem'}}>
                 
                   <h5>Emergency Response Finder</h5>
                        <Toaster/>
                         <form onSubmit={handleSubmit}>
                               <input type="text" value={country} onChange={handleInputChange}  placeholder='Enter Country Name' className='input-box'/>
                                <button className='btn btn-outline-success ' type="submit" style={{display:'block', margin:'1rem auto'}}>Search</button>
                                <button  className='btn btn-outline-danger ml-3' type="button" onClick={handleReset} style={{display:'block', margin:'0 auto'}}>Reset</button>
                        </form>

                     {error ? (
                    <p style={{fontWeight:"bold"}}>{error}</p>

                        ) : (
                      emergencyContact && (
                             <div className='card mt-3 mb-3'>
                                 <p className="card-header">Emergency Contacts for {emergencyContact.country}</p>
                                 <div className="card-body">
                                 

                                     <ul className="list-group list-group-flush">
                                              <li className="list-group-item">Security Department : {emergencyContact.police}</li>
                                              <li className="list-group-item">Medical Department: {emergencyContact.ambulance}</li>
                                             <li className="list-group-item">Fire Department: {emergencyContact.fire}</li>
                                    </ul>
                                 </div>
                             </div>
                         )
                    )}

               
                   </div> 
               </div>

               <Link to="/userDashboard-page">
                         <button className="btn btn-primary mt-3" style={{margin:'0 auto' , display:'block'}}><i className="bi bi-arrow-left-short"></i>Back To Dashboard</button>
                </Link>
          </section>
  );
};

export default Emergency;
