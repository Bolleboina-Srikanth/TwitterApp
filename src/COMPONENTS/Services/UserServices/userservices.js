import axios from "axios";

export const SignIn = async  (obj) =>{
    let response = await axios.post(
        "https://localhost:44392/api/User/login",
        obj
    )
    return response;
}


export const Register = async  (obj) =>{
    let response = await axios.post(
        "https://localhost:44392/api/User/Register",
        obj
        
    )
    return response;
}