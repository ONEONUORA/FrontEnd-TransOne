
import {Link, Outlet} from "react-router-dom"
import brandlogo from "../assets/brandlogo (1).png"
import { useContext, useState } from "react"
import { UserContext } from "../App"
import UserNaigationPanel from "./user-navigation-component"

const Navbar = ()=>{

    // eslint-disable-next-line no-unused-vars
    const { userAuth, userAuth:{access_token, profile_img}} =  useContext(UserContext);
    const [userNavPanel, setUserNavPanel] = useState(false);

    const handleUserNavPanel =()=>{
      setUserNavPanel(currentVal => !currentVal);
    }

    const handleBlur =()=>{

      setTimeout(() => {
        setUserNavPanel(false);
      },200)
      
    }

    return(
      <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary" style={{borderBottom:'1px solid blue'}}>
            <div className="container-fluid" >
                <Link to='/' style={{ textDecoration:'none'}}>
                    <img src={brandlogo} alt="TransOne Brand logo" style={{width:'5rem'}}/> 
                     <p style={{fontWeight:"500", marginLeft:'10px'}}>TransOne</p>
                </Link>
                    
                {
                  access_token ? 
                    <>
                        <div className="position-relative"
                            onClick={handleUserNavPanel}
                            onBlur={handleBlur}
                        >
                          <button className="profile"
                          >
                            <img src={profile_img} className="profile1"/>
                          </button>
                        </div>

                        {
                          userNavPanel ? <UserNaigationPanel/>  : ""
                        }

                  
                    </>
                  :
                  <>
                      <div style={{display:'flex', gap:'15px'}}>
                        <Link to="/signin"><button className="btn btn-outline-success " >Sign In</button></Link>
                         <Link to="/signup"><button className="btn btn-primary signup">Sign Up</button></Link>
                       </div>
                  </>
                }

            
                

            </div>
        </nav>
        <Outlet/>
      </>

      
    )
  }
  
  
  export default Navbar;