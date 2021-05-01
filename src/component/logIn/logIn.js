import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginAdmin,loginSales } from "../redux/action";
import "./logIn.css";

    const LogIn = () => {
        const history = useHistory();
        const dispatch =useDispatch();
        // const [login, setLogin] = useState(false)
        // const [loginData, setLoginData] = useState()
         const [username, setUsername] = useState("")
         const [password, setPassword] = useState("")

const submitForm = () => {
    if(username === "test-admin" && password === "test-admin"){
        dispatch(loginAdmin())
        history.push("/inventory")
    } else if(username === "test-sales" && password === "test-sales"){
        dispatch(loginSales())
        history.push("/sales")
    } else {
        alert("wrong details")
    }
}

        return(
            <div className="loginFormDiv">
                <h3>
                    LOGIN Form
                </h3>
                <div className="loginFormInnerDiv">
                <i className="fa fa-user userIcon-LoginForm"></i>
                <label 
                className="login-label"
                htmlFor="username">Username</label>
                <input 
                name='username'
                 type='username'
                 placeholder='username'
                 required
                 value={username}
                 onChange={(e) => setUsername(e.target.value)}
                 className="inputLogInForm"
                 />
               <hr/>
                <label
                className="login-label"
                htmlFor="password">Password</label>
               <input 
               name='password' 
               type='password' 
               placeholder='Password' 
               required 
               value={password}
               onChange={(e) => setPassword(e.target.value)}
               className="inputLogInForm"
               />
               <hr/>
                <button
                type="submit"
                onClick={submitForm}
                className="buttonLoginForm"
                >
                    signIn
                </button>
                </div>
            </div>
        )
    }


export default LogIn;
