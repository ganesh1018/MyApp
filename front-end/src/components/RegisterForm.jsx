import {useState} from 'react'
export default function RegisterForm(){
    const[formdata,setFormData]=useState({
        name:"",
        age:"",
        gender:""
    })
    function handlechange(e){
        const {name,value}=e.target;
        setFormData((prev)=>({...prev,[name]:value}))
        

    }
  function handlesubmit(formdata){
    const name=formdata.get('name');
    const age=formdata.get('age');
    const gender=formdata.get('gender');
    const position=formdata.get('position');
    const positions=formdata.getAll('positions');
    const favcolor=formdata.get('favcolor');
    console.log({name},{age},{gender},{positions},{favcolor})
   

  }



    return(

        <section>
        <h1>Cricket Registration </h1>
        <form action={handlesubmit}>
            <div>
            <label>Name:</label> 
            <input
            type='text'
            name='name'
           
            required
            placeholder='Name'
            
            
            />
            </div>
            <div>
            <label>Age:</label> 
            <input
            type='text'
            name='age'
           
            required
            placeholder='age'
            
            
            />
            </div>
            <div>
            <label>gender:</label> 
            <input
            type='text'
            name='gender'
           
            required
            placeholder='gender'
            
            
            />
            </div>
           
           
            <fieldset>
                <legend>Position </legend>
           <label>
            <input type="radio" name='position' value="Batsman"/>
            batsman
           </label>
            <label>
            <input type="radio" name='position' value="Bowler"/>
           bowler
           </label>
            <label>
            <input type="radio" name='position' defaultChecked={true} value="Allrounder"/>
           allrounder
           </label>
          
           </fieldset>
            <fieldset>
                <legend>Position </legend>
           <label>
            <input type="checkbox" name='positions' value="Batsman"/>
            batsman
           </label>
            <label>
            <input type="checkbox" name='positions' value="Bowler"/>
           bowler
           </label>
            <label>
            <input type="checkbox" name='positions' defaultChecked={true} value="Allrounder"/>
           allrounder
           </label>
          
           </fieldset>
           <label htmlFor='favcolor'>what is your favourite color</label>
           <select id='favcolor' name='favcolor'>
            <option value="" disabled>--choose one----</option>
            <option value="red">Red</option>
            <option value="yellow">Yellow</option>
            <option value="orange">Orange</option>
            <option value="blue">blue</option>
           </select>
          
         <button type='submit'>Submit</button>
            </form>
       
        </section>
    )

}