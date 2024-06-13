/* eslint-disable react/no-unescaped-entities */

import { Link } from "react-router-dom";


const AboutUs = ()=>{
    return(
        <>
           <div className="about">
                <div className="row">
                    <h3 style={{textAlign:'center', color:'dodgerblue', marginBottom:"2rem"}}>Welcome to TransOne</h3>
                    <div className="col-12">
                            <p>At TransOne, we prioritize your comfort and safety above all else. 
                              We understand that unexpected health issues can arise during travel, and we're here to help.
                            </p>

                            <h4>Why Choose TransOne?</h4>
                        
                              <ul >
                                <li ><strong>Affordable Flights: </strong>Find the best deals on flights to your favorite destinations.
                                         Our advanced search and filter options
                                         ensure you get the best prices, saving you money for your adventures.
                                </li>
                                <li><strong>Health Tips for Peace of Mind: </strong>We know that flying can sometimes be stressful,
                                   especially if you have health concerns. That's why TransOne provides personalized health tips and medication
                                   suggestions in case you encounter any medical issues during your flight.
                                </li>
                              </ul>

                        
                        
                            <h4>About TransOne</h4>
                            <p>Welcome to TransOne, your one-stop destination for finding the best flight deals
                                for your travel needs. Whether you're planning a quick getaway 
                                or a long-awaited vacation, TransOne is here to make your journey seamless and affordable.
                            </p>

                            <p>At TransOne, we understand that finding the right flight at the right price can be 
                                overwhelming. That's why we've curated a selection of the latest flight prices from airlines
                               around the world, all in one place. Our user-friendly interface allows you to
                                easily compare prices, dates, and airlines, ensuring that you get the best deal possible.
                            </p>

                            <p><strong>Our mission</strong> is to simplify the travel booking process and empower you to make informed decisions
                                about your travel plans. With TransOne,
                                you can book your flights with confidence, knowing that you're getting the best price available.
                            </p>

                            <p><strong>Our vision </strong>at TransOne is to revolutionize the way people travel by providing 
                                a seamless and stress-free experience. We aim to be the go-to platform for travelers seeking affordable flights and reliable
                                health tips, ensuring that every journey is not only enjoyable but also safe and comfortable.
                            </p>

                            <p>By leveraging cutting-edge technology and a commitment to customer 
                               satisfaction, we strive to make travel more accessible and convenient for everyone. Our ultimate goal is to inspire people
                                to explore the world with confidence, knowing that TransOne has their back every step of the way.
                            </p>

                            <p>Join us on this exciting journey as we redefine travel 
                              and create unforgettable experiences for travelers around the globe.
                            </p>
                        
                    </div>
                </div>

                <Link to="/">
                   <button className="btn btn-primary" style={{margin:'0 auto' , display:'block'}}><i className="bi bi-arrow-left-short"></i>Back To Home</button>
                </Link>
           </div>
        </>
    )
}

export default AboutUs;