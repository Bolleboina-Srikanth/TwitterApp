import React from "react";
import './XSignin.css';
import CloseIcon from '@mui/icons-material/CloseOutlined';
import ximage from '../../IMAGES/twitterImage.png';
import signingoogleimg from '../../IMAGES/googleImage.jpg';
import signinappleimg from '../../IMAGES/appleImage.png';
import TextField from '@mui/material/TextField';
import { Link } from "@mui/material";
function XSignin({set}) {
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
                        <p>---------------------------or------------------------</p>
                        <TextField id="xoutlined-basic" label="phone, email or username"/>
                        <br></br>
                        <button id="xnext">Next</button><br></br>
                        <button id="xfpwd">Forgot password?</button><br/><br/>
                        <div className="dont">Don't have an account?<a href="#">Sign up</a></div>
                      </div>
                </div>


            </div>


        </div>
    )
}
export default XSignin;