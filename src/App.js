import { useState } from 'react';

function App() {
  const [firstName, setFirstName] = useState(""); 
  const [lastName, setLastName] = useState("");
  const [show, setShow] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!firstName || !lastName) {
      alert("Please fill out all fields");
    } else {
      setShow(true); 
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Full Name Display</h1>
      <div>
        <p>First Name:</p>
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <p>Last Name:</p>
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <button type="submit">Submit</button>
      </div>
      {show && (
        <p>Full Name: {firstName} {lastName}</p> 
      )}
    </form>
  );
}

export default App;

