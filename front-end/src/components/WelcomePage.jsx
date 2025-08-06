
import { useState } from "react";
function Welcome({name,age}){
    const [count,setcount]=useState(0);
    return(
        <div>
            <h1>Welcome home {name}</h1>
            <h1>age {age}</h1>
            <div>
                <h2>count : {count}</h2>
                <button onClick={()=>setcount(prev=>prev+1)}>Increment</button>
            </div>
        </div>
    )
}
export default Welcome;