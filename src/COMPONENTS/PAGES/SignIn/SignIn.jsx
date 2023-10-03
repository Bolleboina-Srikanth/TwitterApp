import React, { useState } from "react";
import './XSignin.css';
import CloseIcon from '@mui/icons-material/CloseOutlined';
import ximage from '../../IMAGES/twitterImage.png';
import signingoogleimg from '../../IMAGES/googleImage.jpg';
import signinappleimg from '../../IMAGES/appleImage.png';
import TextField from '@mui/material/TextField';
import { SignIn } from "../../Services/UserServices/userservices";
import DashBoard from "../../DashBoard/Dashboard";
import { Navigate, useNavigate } from "react-router-dom";


function XSignin({set}) {
 const navigate = useNavigate();
    const[loginINput, setLoginInput] = useState(
        {
            email : "",
            password : '',
        }
    )
    let name,value;

    const handleinput = (e) =>{
          name=e.target.name;
          value=e.target.value;
          setLoginInput({...loginINput,[name]:value})
    }
 // -----------------------------------------
//  const mobileRegex = /^[6-9]\d{9}$/;
const emailRegex = /^[a-z]{3,}(.[0-9a-z]*)?@([a-z]){2,}.[a-z]+(.in)*$/;
 const passwordRegex = /^.*(?=.{8,})(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&+=]).*$/;
 let emailTest = emailRegex.test(loginINput. email);
 let passwordTest = passwordRegex.test(loginINput.password);
 const[errorObj, setErrorObj] =useState({

 });
  const handleprint = async () =>{
       setErrorObj((prevstate) =>(
        {
            ...prevstate,
            emailError : !emailTest,
            emailHelperText : !emailTest ? "enter valid email" : "",

            passwordError: !passwordTest,
            passwordHelperText: !passwordTest ? "enter correct password" : ""

        }
       ))
       if(emailTest === true && passwordTest === true)
       {
        let response = await SignIn(loginINput);
        console.log(response);
        localStorage.setItem("token",response.data.date);
        navigate("/dashboard");
       }
       

  }
//   ---------------------------------------------------------------------
    const handletohome = () =>{
       set(false);
    }

    return (
        <div className="x-container">

            <div className="x-childcontainer">
                <div className="ximagecontainer">
                    
                    <CloseIcon href="#" className="closeicon" onClick={handletohome}></CloseIcon>
                    
                    <div className="ximageposition">
                    <img id="xsinginimg" src={ximage} alt="rfg" />
                    </div>
                </div>

                <div className="x-childcontainer2">
                      <div className="x-signindetails">
                       <p className="siginx">Signin in to X</p>
                       <button id="xsigninbuttonsize"><img id="xsigninsize" src={signingoogleimg} />&nbsp;Sign in with Google</button><br></br>
                        <button id="xapplebutton"><img id="xsigninimgsize" src={signinappleimg} />&nbsp;Sign in with Apple</button>
                        <p>-----------------------or----------------------</p>
                        <div className="XLOGINFIELDS">
                        <TextField id="xoutlined-basic" label="email" name="email" value={loginINput.email} onChange={handleinput} error={errorObj.emailError} helperText={errorObj.emailHelperText}/>
                        <TextField id="xoutlined-basic" label="password" name="password" value={loginINput.password} onChange={handleinput} error={errorObj.passwordError} helperText={errorObj.passwordHelperText}/>
                        </div>
                        <button id="xnext" onClick={handleprint}>Next</button><br></br>
                        <button id="xfpwd">Forgot password?</button><br/>
                        
                        <div className="dont" >Don't have an account?<a href="#">Sign up</a></div>
                      </div>
                </div>


            </div>


        </div>
    )
}
export default XSignin;