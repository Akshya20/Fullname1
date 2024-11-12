import { useState } from 'react';

function App() {
  const [names, setNames] = useState({ fname: '', lname: '' });
  const [fullName, setFullName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!names.fname || !names.lname) {
      alert("Please fill out this field");
    } else {
      setFullName(`Full Name: ${names.fname} ${names.lname}`);
    }
  };

  const inputEvent = (e) => {
    const { name, value } = e.target;
    setNames((prevNames) => ({ ...prevNames, [name]: value }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Full Name Display</h1>
      <div>
        <span>First Name:</span>
        <input
          type="text"
          name="fname"
          value={names.fname}
          onChange={inputEvent}
          required
        />
        <span>Last Name:</span>
        <input
          type="text"
          name="lname"
          value={names.lname}
          onChange={inputEvent}
          required
        />
        <button type="submit">Submit</button>
      </div>
      {fullName && <p>{fullName}</p>}
    </form>
  );
}

export default App;
