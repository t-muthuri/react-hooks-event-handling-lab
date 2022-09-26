// Code EyesOnMe Component Here
import React, {useState} from "react";

    function Eyesonme(){
        const [eyesonme, setEyesonme]= useState(true)
        console.log ("Good!");

        function handleFocus(){
            setEyesonme(eyesonme)
            console.log("Good!")
        }
        function handleBlurs(){
            setEyesonme(!eyesonme)
            console.log("Hey! Eyes on me")
        }
    
    return(
        <div>
            <button onClick={handleFocus}>{eyesonme ? "Good!" : "Hey! Eyes on me!"}</button>
            <button onClick={handleBlurs}>{!eyesonme ? "Good!" : "Hey! Eyes on me!"}</button>
        </div>
    )

}

export default Eyesonme;

//Deliverables
// In the components/EyesOnMe.js file, create a EyesOnMe React component.
// In that component, render a button with the text 'Eyes on me'.
// On that button, add event handlers that listen for the focus and blur events.
// When the focus event fires, use console.log to print out the text 'Good!'.
// When the blur event fires, use console.log to print out the text 'Hey! Eyes on me!'.