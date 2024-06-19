import { useContext } from "react";
import { UserContext } from "../App";
import { Link, Navigate } from "react-router-dom";
import chatbox from "../assets/chatbox.png"

import back1 from "../assets/bgimage13.png"

const Dashboard = () =>{

    let {userAuth:{access_token, fullname}} = useContext(UserContext)


    return(

        access_token == null ? <Navigate to="/signin"/> 
        : 

        <>
      

        <div style={{ position: "relative" }}>
  <img src={back1} alt="image" style={{ position: "relative", width: '100%', minHeight:'50rem' }} />
  <section className="h-cover" style={{ position: "absolute", top: "10%", width: "100%", zIndex: "1" }}>
    <p style={{ textTransform: 'capitalize', fontWeight: "bold" }}>Welcome Back {fullname} +</p>

    <h5 style={{ textAlign: 'center', marginBottom: '2rem' }}>Where Will TransOne Take You Today?</h5>

    <div style={{ border: '2px solid blue', width: '80%', padding: '2rem', display: "block", margin: '0 auto', borderTopLeftRadius: "2rem", backgroundColor: "rgba(255, 255, 255, 0.8)" }} >

      <div style={{ display: 'grid', gap: '10px', justifyContent: "center", textAlign: 'center' }} >


        <Link to="/flightDeals-page">
          <button className="btn btn-outline-primary" style={{}}>
            Flight deals
          </button>
        </Link>

        <Link to="/weatherApp-page" style={{}}>
          <button className="btn btn-outline-primary"> Weather Forecast</button>
        </Link>

        <Link to='/medicalSuggestion-page'>
          <button className="btn btn-outline-primary" style={{}}>
            Health suggestion
          </button>
        </Link>


        <Link to='/emergency-page'>
          <button className="btn btn-outline-primary" style={{}}>
            Emergency Numbers
          </button>
        </Link>

        <a href="https://care-link-web-app.netlify.app/" target="_blank">
          <button className="btn btn-outline-primary" style={{}}>
            Virtual medical consultation
          </button>
        </a>

      </div>

    </div>
    <Link to="/AiConfig-page">
      <img src={chatbox} alt="Search Icon" style={{ width: '5rem', float: 'right' }} />
    </Link>

  </section>

</div>

        
        </>
           
        
    )
}


export default Dashboard;