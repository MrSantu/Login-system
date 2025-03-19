import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

function Reg() {
  
  let [name, setName] = useState('');
  let [username, setUsername] = useState('');
  let [mobile, setMobile] = useState('');
  let [password, setPassword] = useState('');

  let handleSubmit = async (e) => {
    e.preventDefault();
    let sai = { name, username, mobile, password };


   
    await fetch('http://localhost:3333/create', {
      method: 'POST',
      body: JSON.stringify(sai),
      headers: {
        'Content-type': 'application/json',
        
      },
      
      
    });
    
  };


  return (
    <div className="container mt-5">
      <h2>Registration Page</h2>
      <form onSubmit={handleSubmit}>
      
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            required
          />
        </div>

  
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <input
            type="text"
            className="form-control"
            id="username"
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
            required
          />
        </div>

 
        <div className="mb-3">
          <label htmlFor="mobile" className="form-label">
            Mobile Number
          </label>
          <input
            type="text"
            className="form-control"
            id="mobile"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)} 
            required
            pattern="[0-9]{10}"
            title="Please enter a valid 10-digit mobile number."
          />
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required
          />
        </div>

  
        <div>
          <button type="submit" className="btn btn-primary">
            Register
          </button>
          &nbsp;
          <Link to="/login" className=" btn-info">
            Login
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Reg;
