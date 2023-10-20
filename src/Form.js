import React, { useState } from 'react'
import './Form.css';
const Form = () => {
  const [fname,setFirstName]=useState("");
  const[lname,setLastName]=useState("");
  const[contact,setContact]=useState();
  const[email,setEmail]=useState("");
  const[password,setPassword]=useState("");
  const[address,setAddress]=useState("");

  const getUserData= () =>{
    console.log(fname,lname,contact,email,password,address)
  }

    return (
    <>
    <div class="container">
    <div class="container1">
    <h4 style={{marginTop:'30px'}}>CREAT ACCOUNT</h4><br></br>
  
    FirstName:<input type="text" onChange={(e)=>setFirstName(e.target.value)} placeholder='Enter your First name'/><br></br><br></br> 

   
    LastName:<input type="text" onChange={(e)=>setLastName(e.target.value)} placeholder='Enter your Last name'/><br></br><br></br>

   
    Contact-no:<input type="number" onChange={(e)=>setContact(e.target.value)} placeholder='Enter your contact-no'/><br></br><br></br>

   
    Email:<input type="email" onChange={(e)=>setEmail(e.target.value)} placeholder='Enter your email'/><br></br><br></br> 

    Password:<input type="text" onChange={(e)=>setPassword(e.target.value)} placeholder='Enter your password'/><br></br><br></br> 

    Address:<input type="text" onChange={(e)=>setAddress(e.target.value)} placeholder='Enter your address'/><br></br><br></br> 

    <h1>{lname}</h1>
    <h1>{fname}</h1>
    <h1>{contact}</h1>
    <h1>{email}</h1>
    <h1>{password}</h1>
    <h1>{address}</h1>
    <button onClick={getUserData}>Get Data</button>
 </div>

    </div>
    </>
   

  );
}

export default Form
