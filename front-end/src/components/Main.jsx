
import { useState } from "react";
export default function Main(){
    const[ingredient,addIngredient]=useState([]);

    function handelesubmit(formdata){
      
          
         const newIng=formdata.get('Ingredient')
         console.log(newIng);
         addIngredient(prevIng=>[...prevIng,newIng])
        
        


    }
    return(
        <main>
            <form action={handelesubmit} className="add-ingredient-form">
                <input
                type='text'
                placeholder="e.g.oregano"
                aria-label="Add Ingredient"
                name="Ingredient"
                required
                />
                <button style={{ color: 'white', fontSize: '18px', fontWeight: 'bold' }}>Add Ingredient</button>
                
            </form>
            <div>
                    {ingredient.length===0 ?
                ("Nothing to show you"):
                (
                   ingredient.map((ing,index)=>(
                    <ul key={index}>
                        <li>{ing}</li>
                    </ul>
                   ))

                )    
                
                }
                </div>
        </main>
    )
}