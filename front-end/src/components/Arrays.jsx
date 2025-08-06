import data from "./data"; 
import { useState } from "react";
export default function Arrays(){
    
//    const [count,setcount]=useState(0);
//    const [isVisible,setVisible]=useState(true);
//    function handlevisible(){
//     setVisible(!isVisible);
//    }

//    function handleclick(){
//     setcount(prevcount=>prevcount+1);
//    }
//    function handleclick1(){
//     setcount(prevcount=>prevcount-1);
//    }
const[favthings,setfavthings]=useState([]);

    const Mythings=["bat","ball","glouse","helmet"];
function handleitems(){
    setfavthings(prevthings=>[...prevthings,Mythings[prevthings.length]])
    
}

    return(
       <main>
        {/* <h1> jokes list</h1>
        {data.map((joke,index)=>(
            <div key={index}>
                <p>{joke.joke}</p>
                 <p>{joke.punch}</p>
            </div>

        ))} */}
        {/* <h1>{count}</h1>
        <div>
        <button onClick={handleclick}>+</button>
        <button onClick={handleclick1}>-</button>

        </div>
        <div>
           <button onClick={handlevisible}>{isVisible ? "show" : "hide"}</button>
        </div>
        <div>
            {isVisible ? <p>I Am visible</p>: <p>nothing is there</p>} 
        </div>
         */}

         <button onClick={handleitems}>Add item</button>
         <div>
              {favthings.length===0 ? "First Click On the button":
              favthings.map((thing)=>(
                <ul key={thing}>
                   <li> {thing}</li>
                </ul>
              ))
              
              
              
              
              }
         </div>
       
       </main>
    )

}