import React, {useState} from "react";

// Code Keypad Component Here

function Keypad (){
    const[password, setPassword]=useState("")

    function handleSubmit(e){
        e.preventDefault();
        const keypadData={
            password
        }
        console.log(keypadData)
        console.log ("entering password...");
    }
    return (
        <div>
        <form onBlur={handleSubmit}>
        <input
        type="password"
        onBlur={(e)=>setPassword(e.target.value)}></input>
        </form>
        </div>
    )
}
export default Keypad;

//Deliverables
//use an <input type="password" /> field to capture input
//In the components/Keypad.js file, create a Keypad React component.
//In that component, render an input with the right type.
//On that input, add an event handler that listens for the change event.
//When that event fires, use console.log to print out the text 'Entering password...'