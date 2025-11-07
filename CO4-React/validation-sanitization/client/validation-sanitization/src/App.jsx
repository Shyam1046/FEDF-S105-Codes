// client/src/App.jsx
import React, { useState } from "react";
import axios from "axios";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState([]);

  // Handle form submit
  const handleSubmit = async () => {
    try {
      const res = await axios.post("http://localhost:5000/api/submit", { name, email });
      setMessage(res.data.message);
      setErrors([]);
    } catch (err) {
      setErrors(err.response?.data?.errors || []);
      setMessage("");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>React + Express Input Validation Example</h1>

      <div style={{ marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ padding: "8px", marginRight: "10px" }}
        />

        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ padding: "8px", marginRight: "10px" }}
        />

        <button onClick={handleSubmit} style={{ padding: "8px 15px" }}>
          Submit
        </button>
      </div>

      {message && <p style={{ color: "green" }}>{message}</p>}

      {errors.length > 0 && (
        <ul style={{ color: "red" }}>
          {errors.map((err, i) => (
            <li key={i}>{err.msg}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;