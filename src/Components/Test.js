import { useState } from "react";

export default function Test(){
    const [userName,setUserName]= useState("Vaishali");
    const [userAge,setUserAge]= useState(22)
    const [userEmail,setUserEmail]= useState("vaishali14@gmail.com")
    const [userNumber,setUserNumber] =useState(0)
   
    let name = "gurjar"
    const changeName = () =>{
        name = "Vaishali Gurjar"
        console.log(name);
        setUserName("hello Vaishali Gurjar")
    }
    
    const increment = () =>{
       setUserNumber(userNumber+1)


    }
    const decrement = () =>{
        setUserNumber(userNumber-1)
    }

  
    return(
        <>
        <h1>Hello Test</h1>
        <h1>{userName}</h1>
        <h1>{userAge}</h1>
        <h1>{userEmail}</h1>
        
        <h1>{name}</h1>
        <button onClick={changeName}>Change</button>
        <button onClick={increment}>Increment</button>
        <span>{userNumber}</span>
        <button onClick={decrement}>Decrement</button>

        </>
    )
}