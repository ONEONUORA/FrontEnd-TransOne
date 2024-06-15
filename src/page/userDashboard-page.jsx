import { useContext } from "react";
import { UserContext } from "../App";
import { Link, Navigate } from "react-router-dom";



const Dashboard = () =>{

    let {userAuth:{access_token, fullname}} = useContext(UserContext)

    return(

        access_token == null ? <Navigate to="/signin"/> 
        : 

        <section className="h-cover">
            <p style={{textTransform:'capitalize', fontWeight:"bold" , textAlign:'center'}}>Welcome Back {fullname}</p>
            <hr/>
            <h5 style={{textAlign:'center'}}>Where Will TransOne Take You Today?</h5>
          <Link to="/weatherApp-page">
                 <button>check the weather of your destination</button>
          </Link> 
        </section>
        
    )
}


export default Dashboard;