import { useState } from 'react';

function App() {
  const [firstName, setFirstName] = useState(""); 
  const [lastName, setLastName] = useState(""); 

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!firstName || !lastName) {
      alert("Please fill out all fields");
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
      {firstName && lastName && (
        <p>Full Name: {firstName} {lastName}</p> // Display full name dynamically
      )}
    </form>
  );
}

export default App;

