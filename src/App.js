import { useState } from "react";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [fullName, setFullName] = useState(""); // New state to store the full name
  const [submitted, setSubmitted] = useState(false); // State to track form submission

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!firstName || !lastName) {
      alert("Please fill out all fields");
    } else {
      setFullName(`${firstName} ${lastName}`); // Correctly set full name using backticks
      setSubmitted(true); // Set submitted to true after submission
    }
  };

  return (
    <div>
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
      </form>

      {/* Render Full Name as a sibling of the form */}
      {submitted && (
        <div>
          <p>Full Name: {fullName}</p>
        </div>
      )}
    </div>
  );
}

export default App;

