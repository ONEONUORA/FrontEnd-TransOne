/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import InputBox from "../component/input-component";
import logo from "../assets/brandlogo (1).png"
import { Link } from "react-router-dom";
import AnimationWrapper from "../common/page-animation";


const UserAuthForm =({type})=>{
    return(
            <AnimationWrapper  keyValue={type}>
                   <section className="h-cover " style={{marginTop:'2rem'}} >
                    <form className="form" style={{display:'block', margin:'0 auto'}}>
                        <img src={logo} alt="Brand Logo" style={{width:'6rem', display:"block", margin:"0 auto"}}/>
                        <h3 style={{textAlign:'center', display:"flex", justifyContent:'center'}}>
                            {type == "sign-in" ? "Welcome Back Traveller" : "Join The Adventure"}
                        </h3>

                        {
                            type !== "sign-in" ?
                            <InputBox
                                name="fullname"
                                type="text"
                                placeholder=" Full Name"
                                icon="bi-person"
                                />
                                   :""
                        }

                        <InputBox
                                name="email"
                                type="email"
                                placeholder="Email"
                                icon="bi-envelope"
                         />

                        <InputBox
                                name="password"
                                type="password"
                                placeholder="Password"
                                icon="bi-key"
                         />

                         <button className="btn btn-primary mt-3"
                            style={{display:'block', margin:'0 auto', textTransform:'capitalize'}}
                         > 
                           {type.replace("-", ' ')}

                         </button>

                        <div style={{display:'flex'}}>
                            <hr style={{width:'50%', borderColor:'blue'}}/>
                            <p style={{textTransform:'capitalize', fontWeight:'400', fontSize:'0.8rem', padding:'5px', marginTop:'2px'}}>OR</p>
                            <hr style={{width:'50%', borderColor:'blue'}}/>
                        </div>

                        <button
                        className="btn btn-dark"
                        style={{display:'block', margin:'0 auto'}}
                        ><i className="bi bi-google p-2"  style={{color:'red'}}></i>Continue With Google</button>

                        {
                            type == "sign-in"  ?
                            <p style={{display:'flex', gap:'5px', textAlign:'center', justifyContent:'center', marginTop:"1rem"}}>
                             Don't Have An Account ?
                            <Link to="/signup" style={{textDecoration:"none", fontWeight:'500'}}> Register Now </Link>
                            </p>
                            : 
                            <p style={{display:'flex', gap:'5px', textAlign:'center', justifyContent:'center', marginTop:"1rem"}}>
                             Already A Traveller?
                              <Link to="/signin" style={{textDecoration:"none", fontWeight:'500'}}> Sign In </Link>
                            </p>

                        }



    
                    </form>

                    </section>
            </AnimationWrapper>
           
    )
}

export default UserAuthForm;