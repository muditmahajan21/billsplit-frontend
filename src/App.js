import React from 'react'
import { Routes, Route } from "react-router-dom";
import SignUp from './pages/AuthPages/SignUp';
import LogIn from './pages/AuthPages/Login';
import HomePage from './pages/HomePage';

import './App.css';

const App = () => { 
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<LogIn />} />
      </Routes>
    </>
  )
}

export default App