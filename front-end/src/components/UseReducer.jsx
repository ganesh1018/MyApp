import { useReducer } from "react";

    const initialstate={count : 0}
   function reducer(state,action){

     switch(action.type){
        case 'increment':
            return {count:state.count+1};
        case 'decrement':
            return {count:state.count-1};
        default:
            return state;
     }

   }



function UseReducer(){
    const [state,dispatch]=useReducer(reducer,initialstate);


    return(
        <diV>
            <h2>Count : {state.count}</h2>
            <button onClick={()=>dispatch({type:'increment'})}>+</button>
                    <button onClick={()=>dispatch({type:'decrement'})}>-</button>
    

        </diV>
    )



}
export default UseReducer;
