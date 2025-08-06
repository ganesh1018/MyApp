import { useState ,useEffect} from "react";

function Toogle(){
    const[isVisible,setVisible]=useState(true);
const [users,setUsers]=useState([]);
const[loading ,setLoading]=useState(true);
const[text,setext]=useState("");

const handlechange=(e)=>{
    setext(e.target.value);

}
const handleclick=()=>alert(`Heloo,${name || "stranger"}`)

useEffect(()=>{
    const dummyData = [
      { id: 1, name: 'Ganesh', email: 'ganesh@email.com' },
      { id: 2, name: 'Ravi', email: 'ravi@email.com' }
    ];
        setUsers(dummyData);
        
    
},[]);


    return(
    <div>
        <button onClick={()=>setVisible(!isVisible)}>
            {isVisible ? "hide" : "show"}  Message
        </button>
        {isVisible && <p>hello I am visible</p>}
        <div>
            <h2>User List</h2>
            <ul>
                {users.map(user=>(
                    <li key={user.id}>{user.name}({user.email})</li>
                )
                )}
            </ul>
        </div>
        <div>
            <input type='text' onChange={handlechange}/>
            <p>You typed : {text}</p>
            <button onClick={handleclick}>Greet</button>
        </div>

    </div>
    );
}


export default Toogle;