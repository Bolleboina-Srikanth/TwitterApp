import React, { useState } from "react";
import './Xpage.css';
import ximage from '../../../COMPONENTS/IMAGES/twitterImage.png';
import googleimg from '../../IMAGES/googleImage.jpg';
import appleimg from '../../IMAGES/appleImage.png';
import Xsignup from "../SignUp/Xsignup";
import XSignin from "../SignIn/SignIn";

function FirstPage() {

    const[signUp, setSignUp] = useState();
    const[signIn, setSignIn] = useState();

const handleSignup = () =>{
      setSignUp(true);
}
const handleSignin = () =>{
      setSignIn(true);
} 
    




    return (
        <div className="full-screen">

           



            <div className="parent-container">
                <div className="child1">
                    <img id="ximage" src={ximage} alt="jh"></img>
                </div>

                <div className="child2">
                    <div className="child2-box">
                        <p id="happening">Happening now</p>
                        <div id="join">Join today.</div><br></br>
                        <button id="signbutton"><img id="googleimg" src={googleimg} />&nbsp;Sign up with Google</button><br></br>
                        <button id="signupbutton"><img id="appleimg" src={appleimg} />&nbsp;Sign up with Apple</button>
                        <p>--------------------------or-----------------------</p>
                        <button id="createbutton" input='submit' onClick={handleSignup}>Create account</button>
                        <div class="terms">
                            <p id="textsize">By signing up, you agree to the
                                <a href="#"> Terms of Service </a>
                                and <a href="#">Privacy<br /> Policy</a>,
                                including <a href="#">Cookie Use</a>.
                            </p>
                        </div>

                        <p id="have-acct">Already have an account?</p>
                        <button id="xsigninbutton" onClick={handleSignin}>Sign in</button>
                    </div>
                </div>

            </div>
            <div>{signUp ? <Xsignup valueReceived={setSignUp} />: ""}</div>
            <div>{signIn ? <XSignin set={setSignIn}/> : ""}</div>
        </div>
    )
}
export default FirstPage;