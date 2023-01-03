import React from "react";
import GuestGreeting from "./GuestGreeting"
import UserGreeting from "./UserGreeting"

const Greeting = props => {
    const { isLoggedIn } = props
    console.log(isLoggedIn)
    
    if (isLoggedIn) {
        return (
            <UserGreeting /> 
        )
    } else {
        return (
            <GuestGreeting />
        )
    }
}

export default Greeting