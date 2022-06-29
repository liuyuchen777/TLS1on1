import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Signup from './pages/Signup';
import Login from './pages/Login';
import Home from './pages/Home';
import Copyright from './footers/Copyright';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
      <Copyright sx={{ mt: 8, mb: 4 }} />
    </div>
  );
}

export default App;