/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import InputBox from "../component/input-component";
import logo from "../assets/brandlogo (1).png"
import { Link, Navigate } from "react-router-dom";
import AnimationWrapper from "../common/page-animation";
import {Toaster, toast} from "react-hot-toast"
import axios from "axios"
import { storeInSession } from "../common/session";
import { useContext } from "react";
import { UserContext } from "../App";
import {authWithGoogle} from "../common/firebase"


const UserAuthForm =({type})=>{

    // const authForm = useRef();

    let { userAuth: {access_token}, setUserAuth} = useContext(UserContext)
    console.log(access_token);

    const userAuthThroughServer = (serverRoute, formData)=>{
        axios.post(import.meta.env.VITE_SERVER_DOMAIN + serverRoute, formData)
        .then(({ data }) =>{
            storeInSession("user", JSON.stringify(data))
        
            setUserAuth(data)
        })
        .catch(({response}) => {
            toast.error(response.data.error)
        })
    }
    const handlesubmit = (e) =>{
        e.preventDefault();

        let serverRoute = type == "sign-in" ? "/signin"  : "/signup"
        let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; // regex for email
        let passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/; // regex for password

        let form = new FormData(formElement);
        let formData = {};
        for(let [key, value] of form.entries()){
            formData[key] = value;
        }

        let {fullname, email,password} = formData

        if(fullname){
            if(fullname.length < 3) {
                return toast.error( "Fullname must be atleast 3 letters long")
              }
        }
        
          if(!email.length){
            return toast.error( "Enter Email")
          }
        
          if(!emailRegex.test(email)){
            return toast.error("Enter is Invalid")
          }
        
          if (!passwordRegex.test(password)){
            return toast.error("Password should be 6-20 chracters long with a numeric, 1 lowercase and 1 uppercase letters ")
          }

          userAuthThroughServer(serverRoute, formData)
        
        
    }

    const handleGoogleAuth =  (e)=>{
            e.preventDefault();
            authWithGoogle().then( user => {

              let  serverRoute = "/google-auth";

              let formData ={
                access_token: user.accessToken,
              }

              userAuthThroughServer(serverRoute, formData)
            })
            .catch(err => {
                toast.error("Trouble trying to login through google")
                return console.log(err)
            })
    }


    return(
            access_token ? 
            <Navigate to='/userDashboard-page'/>
            :
            <AnimationWrapper  keyValue={type}>
                   <section className="h-cover " style={{marginTop:'2rem'}} >
                    <Toaster/>
                    <form id="formElement" className="form" style={{display:'block', margin:'0 auto'}}>
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
                            type="submit"
                            onClick={handlesubmit}
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
                        onClick={handleGoogleAuth}
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