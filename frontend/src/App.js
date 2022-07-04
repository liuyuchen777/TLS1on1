import React, {useState} from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Signup from './pages/Signup';
import Login from './pages/Login';
import Home from './pages/Home';
import Copyright from './footers/Copyright';
import Profile from './pages/Profile';

function App() {
  const username = "notLogin";

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home username={username} />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
      <Copyright sx={{ mt: 8, mb: 4 }} />
    </div>
  );
}

export default App;
