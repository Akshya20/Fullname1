import {useState} from 'react';


function App() {
  const [name,setname]=useState('');
  const [surname,setsurname]=useState('');
  const [fullName, setFullName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !surname) {
      alert("Please fill out this field");
    } else {
      
      setFullName(`Full Name:${name} ${surname}`);
      
    }
  };

  
  return (
    <form>
      <h1>Full Name Display</h1>
      <div>
        <span>First Name:</span>
      <input type="text" value={name} onChange={(e) =>setname(e.target.value)}></input>
      <span>Last Name:</span>
      <input type="text" value={surname} onChange={(e) =>setsurname(e.target.value)}></input>
      <button onClick={handleSubmit}>Submit</button>
      </div>
      {fullName && <p>{fullName}</p>}
    </form>
  )
}

export default App;
