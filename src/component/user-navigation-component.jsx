
import AnimationWrapper from "../common/page-animation"
import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { UserContext } from "../App"
import { removeFromSession } from "../common/session"




const UserNaigationPanel =()=>{

    const {userAuth: {username}, setUserAuth } = useContext(UserContext) 
    const navigate = useNavigate();
    const signOutUser = () =>{
        removeFromSession("user");
        setUserAuth({ access_token: null })
        navigate('/')

    }

    return(
        <AnimationWrapper
            className="usernav1"
            transition={{duration: 0.2}}
        >
        <div className="usernav">

                <button className="signoutbtn"
                    onClick={signOutUser}
                >
                    <p style={{fontWeight:'bold'}}>Sign Out</p>
                    <p >@{username}</p>
                </button>
        </div>

        </AnimationWrapper>
    )
}

export default UserNaigationPanel