import { useState } from 'react';

function App() {
 
  const [fullName, setFullName] = useState("");
   const [firstName, setfirstName] = useState("");
   const [lastName, setlastName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!firstName || !lastName) {
      alert("Please fill out this field");
    } 
  };

 

  return (
    <form onSubmit={handleSubmit}>
      <h1>Full Name Display</h1>
      <div>
        <p>First Name:</p>
        <input
          type="text"
          value={firstname}
          onchnage={(e)=>setfirstName(e.target.value)}
        />
        <p>Last Name:</p>
        <input
          type="text"
          value={firstname}
          onchnage={(e)=>setlastName(e.target.value)}
         
        />
        <button type="submit">Submit</button>
      </div>
      {fullName && <p>Full Name:{firstName}{lastName}</p>}
    </form>
  );
}

export default App;
