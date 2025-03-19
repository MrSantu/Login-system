import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import Show from './Show';




function Login() {
  let [username, setUsername] = useState('');
  let [password, setPassword] = useState('');
  let handleSubmit = async (e) => {
    e.preventDefault();
    let sai = { username, password };

    try {
      let response = await fetch('http://localhost:3333/login', {
        method: 'POST',
        body: JSON.stringify(sai),
        headers: {
          'Content-type': 'application/json',
        },
      });
       

      if (response.ok) {
        let result = await response.json();
      
        alert(`Login successful! Welcome, 
          Name: ${result.name} 
          Mobile: ${result.mobile} 
          Username: ${result.username} 
          Password: ${result.password}`);

          setUsername('');
          setPassword('');                   
      } else {
        alert('Login failed. Please check your credentials.');
      }
    } catch (error) {
      alert("error"+error);
    }
  };

  return (
    <div className="container mt-5">
      <h2>Login Page</h2>
      <form onSubmit={handleSubmit}>
        
        
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <input
            type="text"
            className="form-control"
            name="l_username"
            value={username} 
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>

      
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            name="l_password"
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required
          />
        </div>

      
        <button type="submit" className="btn btn-primary">
      
            Login
        
        </button>
        <a href="/forg">Forgate Pass</a>
      </form>
    </div>
  );
}

export default Login;
