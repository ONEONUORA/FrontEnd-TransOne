
import {Link, Outlet} from "react-router-dom"

import brandlogo from "../assets/brandlogo (1).png"

const Navbar = ()=>{
    return(
      <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary" style={{borderBottom:'1px solid blue'}}>
            
            <div className="container-fluid" >
                <Link to='/' style={{ textDecoration:'none'}}>
                    <img src={brandlogo} alt="TransOne Brand logo" style={{width:'5rem'}}/> 
                     <p style={{fontWeight:"500", marginLeft:'10px'}}>TransOne</p>
                </Link>
                    
       

                <div style={{display:'flex', gap:'15px'}}>
                    <Link to="/signin"><button className="btn btn-outline-success " >Sign In</button></Link>
                    <Link to="/signup"><button className="btn btn-primary signup">Sign Up</button></Link>
                </div>
                

            </div>
        </nav>
        <Outlet/>
      </>

      
    )
  }
  
  
  export default Navbar;