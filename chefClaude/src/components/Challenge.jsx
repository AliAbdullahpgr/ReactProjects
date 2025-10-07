import { useState } from "react"

const Challenge = () => {
    
    
    return (
        <div>
            hello
        </div>
    )
}
export default Challenge;

/*
    you have 2 options for what you can pass in to a 
    state setter function (e.g. `setCount`). What are they?
    - One is a callback in which we can access the previous value
    or the other is directly assigning the new value to the state.

    I would want to pass the new value or are you talking about the previous state
    parameter that we have like doing this setCount(count + 1)

    oh in case of if I was passing a callback what I would do is setCount((prev)=>prev+1);
*/ 