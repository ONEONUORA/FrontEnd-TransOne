import { useState } from "react";


const InputBox =({name, type, id, value, placeholder, icon})=>{
    const [passwordVisible, setPasswordVisible ] = useState(false);
    return(
        <div style={{position:'relative', width:"100%", marginTop:"2rem"}}>
            <input
                name={name}
                type={type == "password" ? passwordVisible ? "text" :  "password" : type}
                placeholder={placeholder}
                defaultValue={value}
                id={id}
                className="input-box"
            />
                <i className={"bi " + icon  + " input-icon"}></i>


                {
                    
                type == "password" ?
                   <i className={"bi bi-eye" +  (!passwordVisible ? "-slash" : "") + " input-icon left-auto"}
                   onClick={() => setPasswordVisible(currentVal => !currentVal)}
                   ></i>
                
                : " "

              }
        </div>
    )
}


export default InputBox;