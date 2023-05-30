import React from "react";
import Logout from "../components/Auth/Logout";
import LoginAuth from "../components/Auth/Login";
import Signup from "../components/Auth/Signup";



function Login(){
    return(
        <div>
            <h4>Login</h4>
            <LoginAuth/>
            {/* <Signup/>*/}
            <Logout/> 
            
        </div>
    )
}


export default Login;