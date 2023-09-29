import React from "react";
import './Xsignup.css';
import CloseIcon from '@mui/icons-material/CloseOutlined';
import TextField from '@mui/material/TextField';

function Xsignup({valueReceived}) {

   const handletohome = () =>{
    valueReceived(false);
   }

    return (
        <div className="xsignupfull-screen">
            <div className="xsignupchild">
                <div className="xAndStep">

                    <CloseIcon href="#" className="closeicon" onClick={handletohome}></CloseIcon>
                    <div className="steptext">Step 1 of 5</div>
                </div>
                <div className="xsignupchild2">
                    <div id="xcrtacct">Create your account</div><br /><br />
                    <TextField id="xTextoutlined-basic" label="Name" />
                    <br />
                    <TextField id="xTextoutlined-basic" label="Phone" /><br/>
                    <div className="xuseEmail"><a href="#">Use email instead</a></div><br/>
                    <div id="xsignupdate">Date of birth</div>
                    <div className="xcrtacctfulltext">
                    This will not be shown publicly. Confirm your own age, even if this account is for a business, a pet, or something else.
                    </div><br/>
                    <div className="">
                    <input id="xdate" type="date"></input>
                    </div><br/><br/><br/>
                    <button className="xsignupnext">Next</button>
                </div>


            </div>

        </div>
    )
}
export default Xsignup;