import { useState } from "react";

export default function LoginForm() {

     const[formData,setFormData]=useState({
        email: ""
     })
     function handlesubmit(e){
        e.preventDefault();
        //alert(`Submitted Data ${formData}`)
     
        console.log(formData)
        
      setFormData({ email: "" });
        

     }
     function handlechange(e){
        const{name,value}=e.target;
        setFormData(prev=>({...prev,[name]:value}))

     }

    return(
        <main>
            <div>
            <h1>LogIn Form</h1>
            </div>
            <form onSubmit={handlesubmit}>
                <label htmlFor="email">Email:</label>
                <input 
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handlechange}
                placeholder="Email"
                required
                />
           <button type="submit">submit</button>

            </form>
          

        </main>
    )
  

}
