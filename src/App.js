import React from 'react'
import { Routes, Route } from "react-router-dom";
import SignUp from './pages/AuthPages/SignUp';

import './App.css';

const App = () => { 
  return (
    <>
      <Routes>
      <Route path="/" element={<SignUp />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </>
  )
}

export default App