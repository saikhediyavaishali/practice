import { useState } from "react";

export default function Test(){
    const[userData,setUserData]=useState({
        userLname : '',
        userFname : '',
        userContact : '',
        userEmail : '',
        userPassword : '',
        userCity : ''

    })
    const getUserData= () =>{
        console.log(userData)
    }
    return(
        <>
       First Name: <input type="text" onChange={(e)=>setUserData({...userData,userFname :e.target.value})}/><br></br><br></br> 
       Last Name: <input type="text" onChange={(e)=>setUserData({...userData,userLname :e.target.value})}/><br></br><br></br> 
       Contact no: <input type="text" onChange={(e)=>setUserData({...userData,userContact :e.target.value})}/><br></br><br></br>   
        Email:<input type="email" onChange={(e)=>setUserData({...userData,userEmail :e.target.value})}/><br></br><br></br> 
        Password: <input type="text" onChange={(e)=>setUserData({...userData,userPassword :e.target.value})}/><br></br><br></br> 
        City: <input type="text" onChange={(e)=>setUserData({...userData,userCity :e.target.value})}/><br></br><br></br>   

        <button onClick={getUserData}>Get Data</button>



       </> 
    )
}