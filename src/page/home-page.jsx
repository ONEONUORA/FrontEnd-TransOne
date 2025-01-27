/* eslint-disable react/no-unescaped-entities */
import image1 from "../assets/bgimage1.png"
import image from "../assets/bgimage.png"
import image2 from "../assets/bgimage3.jpg"
import image4 from "../assets/bgimage6.png"
import image5 from "../assets/brandlogo (1).png"
import {Link} from "react-router-dom"
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react"
import people1 from '../assets/bgimage12.png'
import people2 from '../assets/bgimage8.png'
import people3 from '../assets/bgimage9.png'
import people4 from '../assets/bgimage10.png'


const HomePage =()=>{
    const [departureDate, setDepartureDate] = useState(null);
    const [returnDate, setReturnDate] = useState(null);
  
    const handleDepartureDateChange = date => {
      setDepartureDate(date);
    };
  
    const handleReturnDateChange = date => {
      setReturnDate(date);
    };

    return(
        <>

        <div className="home">
            <div className="row">
                 <div className=" col-12 col-md-6 " style={{textAlign:"center", padding:'1.5rem', display:"block", margin:'3rem auto'}}>
                        <h3 style={{color:'green'}}>Your Ticket To  Explore The world</h3>
                        <p style={{color:'blue'}}>Discover the world at your finger tips with Our flight booking service 
                            opens door to global destinations, making travel dreams a reality with 
                            convenience and ease.
                        </p>
                </div>

                <div className="col-12 col-md-6">
                    <img src={image} alt="Aeroplane Image" style={{width:'110%', display:"block", margin:'0 auto'}} />
                </div>

                <div className="booking" >
                    <div>
                        <div style={{display:"flex", gap:"5px"}}>
                            <i className="bi bi-geo-alt-fill"></i>
                             <p>FROM</p>
                        </div>
                        <input type="text" placeholder="Enter a location" style={{borderRadius:'5rem', textAlign:'center'}}/>
                    </div>

                    <div>
                        <div style={{display:"flex", gap:"5px"}}>
                           <i className="bi bi-geo-alt-fill"></i>
                           <p>TO</p>
                        </div>
                        <input type="text" placeholder="Enter a location" style={{borderRadius:'5rem', textAlign:'center'}}/>
                    </div>


                    <div>
                            <p>DEPARTURE</p>
                            <div style={{ display: "flex" }}>
                                 <i className="bi bi-calendar3"></i>
                                  <DatePicker selected={departureDate} onChange={handleDepartureDateChange} />
                            </div>
                    </div>

                    <div>
                               <p>RETURN</p>
                         <div style={{ display: "flex" }}>
                              <i className="bi bi-calendar3"></i>
                              <DatePicker selected={returnDate} onChange={handleReturnDateChange} />
                         </div>
                    </div>

                    <Link to='/signin'>
                       <button style={{borderRadius:'50%', backgroundColor:'blue', border:'none', width:'2.5rem', height:"2.5rem"}}>
                            <i className="bi bi-search" style={{color:'white'}}></i>
                       </button>
                    </Link>
                </div>
             
            </div>
        </div>

           <div className="home1">
               <div className="row">
                    <button className="btn btn-light" style={{color:'green', cursor:'default', width:'100%'}}>Discover  <i className="bi bi-arrow-right" style={{color:'blue', fontWeight:'bolder', fontSize:'1.1rem'}}></i> Book <i className="bi bi-arrow-right"  style={{color:'blue', fontWeight:'bolder', fontSize:'1.1rem'}}></i>  Fly</button>
                    <div className="col-12 col-md-6 homewrite1" style={{display:'grid', justifyContent:'center', textAlign:'center'}}>
                           <img src={people1} alt="Image" style={{width:"100%"}} className="map"/> 
                          <h4 style={{textAlign:''}}>Affordable Flights with Health Tips  for a Worry-Free <br/> Journey</h4>
                          
                         
                         <Link to="/signin">
                              <button className="btn btn-primary" style={{display:'block', margin:'0 auto'}}>Discover Low Fares</button>
                         </Link> 
                    </div>
                    <div className="col-12 col-md-6" style={{marginTop:"2rem"}}>
                         <img src={image2} alt="Background Image" style={{width:'100%'}}/>
                    </div>
                </div>
            </div>


        <div className="people">
            <div className="row">
                <div className="col-12 col-md-4">
                    <img src={people2} alt="Image" style={{width:'100%'}}/>
                </div>
                <div className="col-12 col-md-4">
                    <img src={people3} alt="Image"  style={{width:'100%'}}/>
                </div>
                <div className="col-12 col-md-4">
                    <img src={people4} alt="Image"  style={{width:'100%'}}/>
                </div>
            </div>
        </div>
          

            <div className="home2" style={{backgroundColor:'rgb(31, 30, 30)', marginTop:'2rem', paddingTop:"2rem", paddingBottom:'2rem'}}>
                    <button className="btn btn-outline-dark" style={{width:"100%", color:"blue", marginBottom:'2rem', cursor:'default'}}>Find Your Adventure</button>
                <div className="row">
                    <div className="col-12 col-md-6 " style={{display:'block', margin:'0 auto', justifyContent:'center', textAlign:'center'}}>
                         <img src={image1} alt="Image of the world" style={{width:'80%'}}/>
                       
                    </div>

                    <div className="col-12 col-md-6 " style={{display:'block', margin:'0 auto', justifyContent:'center', textAlign:'center'}}>
                         <img src={image4} alt="Image of lady travelling" />
                    </div>
                </div>
            </div>

            <div className="home3">
               <button className="btn btn-primary mt-3" style={{width:'100%'}}>Testimonials</button>

                <div className="row" >
                  
                        <div className="col-12 test" style={{ padding:'2rem'}}>
                        
                            <div className="test1" style={{border:"3px solid green", padding:"1rem"}}>
                                <h6>I found an amazing flight deal with TransOne, and their health tips
                                   during my flight were incredibly reassuring. Highly recommend</h6>
                                <p className="name">Sarah L</p>
                            </div>
                            <div className="test2" style={{border:"3px solid green", padding:"1rem"}}>
                                <h6>TransOne made my travel experience so much better. 
                                    The medication suggestions were spot on when I felt unwell during my flight.
                                </h6>
                                <p className="name">James K</p>
                            </div>
                            <div  className="test3" style={{border:"3px solid green", padding:"1rem"}}> 
                                <h6>As someone who travels frequently for work, TransOne is my go-to app. The medication
                                    suggestions have been<br/> incredibly helpful for managing minor issues during flights</h6>
                                <p className="name">David R.</p>
                            </div>
                        </div>
                 
                    </div>

                    <div className="row" >
                      <div className="col-12 test" style={{ paddingBottom:'2rem', paddingLeft:'2rem', paddingRight:'2rem'}}>

                      <div  className="test4" style={{border:"3px solid green", padding:"1rem"}}>
                            <h6>I was initially nervous about flying due to my health condition,
                              but TransOne's tailored health tips <br/>put my mind at ease. I had a smooth, worry-free journey.</h6>
                            <p className="name">Emily T.</p>
                        </div>

                        <div className="test5" style={{border:"3px solid green", padding:"1rem"}}>
                            <h6>Finding cheap flights is great, but the added health support makes TransOne 
                             truly unique. It’s like<br/> having a travel assistant and a health advisor in one app.</h6>
                            <p className="name">Liam S.</p>
                        </div>

                        <div  className="test6" style={{border:"3px solid green", padding:"1rem"}}>
                            <h6>Traveling with kids can be stressful, but TransOne made it easier.
                                We got fantastic<br/> flight deals, and their health suggestions helped keep us all comfortable.</h6>
                            <p className="name">John and Lisa P</p>
                        </div>
                      </div>
               
                    </div>
            </div>

        
        <div className="row">
          <div className="col-12 mt-2 mb-2" >
            <Link to='/rating-page' style={{textDecoration:'none'}}>
                 <button className="btn btn-outline-success" style={{display:'block', margin:'0 auto', width:'50%'}} >View Rating</button>
            </Link>
           
          </div>
        </div>

        <div className="footer"  >
                <div className="row">
                    <div className="col-12 col-md-4" style={{textAlign:'center'}}>
                        <Link to='/' style={{textDecoration:'none'}}>
                            <img src={image5} alt="Brand logo" style={{width:'10rem',marginLeft:'2rem'}}/>
                            <h3 style={{marginLeft:'2rem'}}>TransOne</h3>
                        </Link>
                        <ul>
                            <li style={{paddingBottom:'0.9rem', color:'white', fontSize:"16px"}}>Phone: +23480112TransOne</li>
                            <li style={{paddingBottom:'0.9rem', color:'white', fontSize:"16px"}}>Email: Info@TransOne.com</li>
                            <li style={{paddingBottom:'0.9rem', color:'white', fontSize:"16px"}}>Address: TransOne Online Travel App</li>
                        </ul>
                        <p style={{marginLeft:'rem',marginTop: '2rem', color:'white', fontSize:"18px"}}>Copyright: <br/> &copy;  2024. TransOne. All rights reserved.</p> 
                    </div>

                    <div className="col-12 col-md-4 about1">
                       <Link to="/About-page" style={{textDecoration:"none"}}> <h5>About Us</h5></Link>
                       <Link to="/How-to-use-page" style={{textDecoration:"none"}}><h5>How To Use</h5></Link> 
                    </div>

                    <div className="col-12 col-md-4 about1">
                        <Link to="/Terms&Conditions-page" style={{textDecoration:"none"}}><h5>Terms & Conditions</h5></Link>
                        <Link to="/Contact-page" style={{textDecoration:"none"}}> <h5>Contact Us</h5></Link>
                     </div>

                </div>
            </div>
        


       
        </>
    )
}


export default HomePage;