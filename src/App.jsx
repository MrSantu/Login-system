import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from './Login';
import Reg from './reg';
import Forg from './Forg';
import Show from './Show';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Reg />} /> 
        <Route path="/login" element={<Login />} />  
        <Route path='/forg' element={<Forg />} />
        <Route path="/show" element={<Show />} /> 
      </Routes>
    </Router>
  );
}

export default App;
