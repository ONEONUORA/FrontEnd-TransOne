import  { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { Link, Navigate } from 'react-router-dom';
import { UserContext } from '../App';




const Medical = () => {

    let {userAuth:{access_token, fullname}} = useContext(UserContext)
    const [healthIssues, setHealthIssues] = useState([]);
    const [selectedIssue, setSelectedIssue] = useState(null);
  
    useEffect(() => {
      axios.get(import.meta.env.VITE_SERVER_DOMAIN + '/api/health-issues')
        .then(response => {
          setHealthIssues(response.data);
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    }, []);
  
    const handleSelectChange = (event) => {
      const issue = healthIssues.find(issue => issue.issue === event.target.value);
      setSelectedIssue(issue);
    };
  return (

        access_token == null ? <Navigate to='/signin'/>
                     :
         <section className=''>
         <p style={{fontWeight:'bold', textTransform:"capitalize"}}>Welcome {fullname} +</p>
         <hr/>
         <div className="App">
            <header className="App-header">
                    <h5 style={{fontWeight:'bold', marginBottom:'1.2rem', color:'dodgerblue'}}>Flight Health Issues</h5>
                    <div>
                      <label htmlFor="health-issues" style={{marginRight:"rem"}}  >Select a Health Issue</label>
                      <select id="health-issues" onChange={handleSelectChange} className='input-box1'>
                        <option value="" >--Select an issue--</option>
                        {healthIssues.map(issue => (
                          <option key={issue.issue} value={issue.issue} >
                            {issue.issue}
                          </option>
                        ))}
                      </select>
                    </div>
                    {selectedIssue && (
                <div className="issue-details mt-4 mb-3">
                        <h4 style={{fontWeight:'bold', textAlign:'center', color:"green"}}>{selectedIssue.issue}</h4>
                        <h3 style={{marginTop:"2rem", color:'red', fontWeight:'bold'}}>Symptoms</h3>
                        <ul>
                          {selectedIssue.symptoms.map((symptom, index) => (
                            <li key={index}>{symptom}</li>
                          ))}
                        </ul>
                        <h3 style={{marginTop:"2rem", color:'dodgerblue', fontWeight:'bold'}}>Remedies</h3>
                        <ul>
                          {selectedIssue.remedies.map((remedy, index) => (
                            <li key={index}>{remedy}</li>
                          ))}
                        </ul>
                </div>
                 )}
      </header>
    </div>

                <Link to="/userDashboard-page">
                         <button className="btn btn-primary mt-3" style={{margin:'0 auto' , display:'block'}}><i className="bi bi-arrow-left-short"></i>Back To Dashboard</button>
                </Link>   
        </section>
 
  );
};

export default Medical;
