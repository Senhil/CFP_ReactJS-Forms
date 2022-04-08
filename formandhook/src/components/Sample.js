import React from 'react'
import  {useState} from 'react'

function Sample() {

  const [name, setName] = useState("");
  const [Number, setNumber] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [counter, setCounter]= useState(1)
  
  const increment=()=>{
    setCounter(counter +1);
    };

  return (
    <div>
        <form >
    <label>Enter your FullName:
      <input type="text"  aria-label="Name" placeholder='Name' value={name}  
        onChange={(e) => setName(e.target.value)}
      />   
    </label><br />
    <label>Enter your Number:
      <input
        type="text" placeholder='Number'
        value={Number}  
        onChange={(e) => setNumber(e.target.value)}
      />
    </label><br />
    <label>Enter your Email:
      <input
        type="text" placeholder='Email'
        value={Email}  
        onChange={(e) => setEmail(e.target.value)}
      />
    </label><br />
    <label>Enter your Password:  
      <input
        type="text" placeholder='Password'
        value={Password}  
        onChange={(e) => setPassword(e.target.value)}
      />
    </label><br />
  </form>
  <div className='buttons'> 
     <button onClick={increment}>Submit</button> Total Entries = {counter} </div>
    </div>
  )
}

export default Sample;