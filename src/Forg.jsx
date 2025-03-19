import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Forg() {
  let [username, setUsername] = useState('');
  let [mobile, setMobile] = useState('');

  
  let handleSubmit = async (e) => {
    e.preventDefault();
    let sai = { username, mobile };

    try {
      let response = await fetch('http://localhost:3333/forg', {
        method: 'POST',
        body: JSON.stringify(sai),
        headers: {
          'Content-type': 'application/json',
        },
      });

      if (response.ok) {
        let result = await response.json();
        alert('Your Password is  ' + result.password);
        setUsername('');
        setMobile('');
      } else {
        alert('Login failed. Please check your credentials.');
      }
    } catch (error) {
      alert('An error');
    }
  };

  return (
    <div className="container mt-5">
      <h2>Forgate Paaword</h2>
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


        <button type="submit" className="btn btn-primary">
          Pass Show
        </button>
      </form>
    </div>
  );
}

export default Forg;
