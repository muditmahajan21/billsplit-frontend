import React from 'react'
import { Routes, Route } from "react-router-dom";
import SignUp from './pages/AuthPages/SignUp';
import LogIn from './pages/AuthPages/Login';
import HomePage from './pages/HomePage';
import ResetPassword from './pages/AuthPages/ResetPassword';
import UpdatePassword from './pages/AuthPages/UpdatePassword';
import './App.css';

const App = () => { 
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/update-password/*" element={<UpdatePassword />} />
      </Routes>
    </>
  )
}

export default App