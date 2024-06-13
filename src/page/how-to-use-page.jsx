/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";



const HowToUse =()=>{
    return(
        <>
            <div className="how">
                <div className="row">
                    <h3 style={{textAlign:'center', color:'dodgerblue', marginBottom:"2rem"}}>User Manual</h3>
                    <div className="col-12">
                        <p>Welcome to TransOne! Follow these simple steps to find the best flight deals and get personalized health tips for your journey.</p>
                       
                        <h4>1. Create an Account</h4>
                        <ul>
                            <li>Click on the "Sign Up" button in the top right corner.</li>
                            <li>Fill in your details and create a password.</li>
                        </ul>

                        <h4>2. Search for Flights</h4>
                        <ul>
                            <li>Enter your departure and destination cities.</li>
                            <li>Select your travel dates and the number of passengers.</li>
                            <li>Click on the "Search Flights" button to see available options.</li>
                        </ul>

                        <h4>3. Get Health Tips</h4>
                        <ul>
                            <li>Visit the "Health Tips" section in your user dashboard.</li>
                            <li>Enter any specific health concerns or conditions you have.</li>
                            <li>Receive personalized tips and medication suggestions to ensure a safe and comfortable journey.</li>
                        </ul>

                    </div>
                </div>
                <Link to="/">
                   <button className="btn btn-primary" style={{margin:'0 auto' , display:'block'}}><i className="bi bi-arrow-left-short"></i>Back To Home</button>
                </Link>
            </div>
        </>
    )
}


export default HowToUse;