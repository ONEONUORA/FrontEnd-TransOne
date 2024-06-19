import { Link, Navigate } from "react-router-dom";
import { UserContext } from "../App";
import { useContext } from "react";


const AiConfigure = ()=>{
    let {userAuth:{access_token, fullname}} = useContext(UserContext)
    return(
        access_token === null ? <Navigate to='/signin'/>
                           :
        <section className="h-cover">
                    <div style={{display:'grid', justifyContent:'center', textAlign:'center'}}>
                        <h3>AI Assistance Section</h3>
                        <h4 style={{textTransform:'capitalize'}}>@ {fullname}</h4>
                        <p>Implementing AI driven natural langauge processing feature. </p>
                        <h4 style={{fontWeight:'bold'}}>Stay Tuned!</h4>
                    </div>

                    <Link to="/userDashboard-page">
                         <button className="btn btn-primary mt-3" style={{margin:'0 auto' , display:'block'}}><i className="bi bi-arrow-left-short"></i>Back To Dashboard</button>
                    </Link>
        </section>
    )
}

export default AiConfigure;