import React, { useState } from "react";
import './Xsignup.css';
import CloseIcon from '@mui/icons-material/CloseOutlined';
import TextField from '@mui/material/TextField';

function Xsignup({ valueReceived }) {

    const nameRegex = /^[a-zA-Z ]{2,30}$/;
    const mobileRegex = /^[6-9]\d{9}$/;
    const emailRegex = /^[a-z]{3,}(.[0-9a-z]*)?@([a-z]){2,}.[a-z]+(.in)*$/;
    const passwordRegex = /^.*(?=.{8,})(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&+=]).*$/;


    const [userInput, setUserInput] = useState(
        {
            Name: "",
            email: "",
            password: "",
            confirmPassword: ""
        }
    )

    let name, value;

    const handleInput = (e) => {
        name = e.target.name;
        value = e.target.value;
        setUserInput({ ...userInput, [name]: value })
    }


    //    -------------------------------------------------
    const [errorObj, setErrorObj] = useState(
        {

        }
    )
    const handlepage = () => {
        let nameTest = nameRegex.test(userInput.Name);
        let emailTest = emailRegex.test(userInput.email);
        let passwordtest = passwordRegex.test(userInput.password);
        let confirmPasswordtest = passwordRegex.test(userInput.confirmPassword);

        setErrorObj((prevstate) => (
            {
                ...prevstate,
                NameError: !nameTest,
                Nameheplertext: !nameTest ? "enter correct name" : "",

                emailError: !emailTest,
                emailhelpertext: !emailTest ? "enter valid email" : "",

                passwordError: !passwordtest,
                passwordHelperText: !passwordtest ? "enter correct password" : "",

                confirmPasswordError: !confirmPasswordtest,
                confirmPasswordHelperText: !confirmPasswordtest ? "enter correct password" : ""


            }
        ))

    }


    // ----------------------------------------------------



    const handletohome = () => {
        valueReceived(false);
    }

    return (
        <div className="xsignupfull-screen">
            <div className="xsignupchild">
                <div className="xAndStep">

                    <CloseIcon href="#" className="closeicon" onClick={handletohome}></CloseIcon>
                    <div className="steptext">Step 1 of 2</div>
                </div>
                <div className="xsignupchild2">
                    <div id="xcrtacct">Create your account</div>
                    <div className="xinputfiels">
                    <TextField id="xTextoutlined-basic" label="Name" onChange={handleInput} name="Name" value={userInput.Name} error={errorObj.NameError} helperText={errorObj.Nameheplertext} />
                    <div>
                    <TextField id="xTextoutlined-basic" label="email" onChange={handleInput} name="email" value={userInput.email} error={errorObj.emailError} helperText={errorObj.emailhelpertext} />
                    
                    {/* <div className="xuseEmail"><a href="#">Use email instead</a></div> */}
                    </div>
                    <TextField id="xTextoutlined-basic" label="Password" onChange={handleInput} name="password" value={userInput.password} error={errorObj.passwordError} helperText={errorObj.passwordHelperText} />
                    <TextField id="xTextoutlined-basic" label="Confirm password" onChange={handleInput} name="confirmPassword" value={userInput.confirmPassword} error={errorObj.confirmPasswordError} helperText={errorObj.confirmPasswordHelperText} />
                    </div>
                    <div id="xsignupdate">Date of birth</div>
                    <div className="xcrtacctfulltext">
                        This will not be shown publicly. Confirm your own age, even if this account is for a business, a pet, or something else.
                    </div><br />
                    <div className="">
                        <input id="xdate" type="date"></input>
                    </div><br />
                    <button className="xsignupnext" onClick={handlepage}>Next</button>
                </div>


            </div>

        </div>
    )
}
export default Xsignup;