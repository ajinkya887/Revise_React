import React from "react";

function Welcome(){
    const date = new Date().toDateString();
    return (
        <div>
            <h1>Welcome to my page</h1>
            <p>Todays date is {date}</p>
        </div>
    )
}

export default Welcome