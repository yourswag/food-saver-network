import { useState } from 'react'
import './App.css'
import { Routes, Route } from "react-router-dom";
import Ngologin from './components/Animated images/Ngologin.jsx';
import Dashboard from './pages/Dashboard.jsx';
import Signup from './components/Animated images/Signup.jsx';
import Donate from './components/Donate.jsx';
import Supplierlogin from './components/Animated images/Supplierlogin.jsx';
import Suppliersignup from './components/Animated images/Suppliersignup.jsx';
import ForgotPassword from './components/Animated images/ForgotPassword.jsx';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/Ngologin" element={<Ngologin />} />
      <Route path="/Signup" element={<Signup/>} />
      <Route path="/Donate" element={<Donate/>} />
      <Route path="/Supplierlogin" element={<Supplierlogin/>} />
      <Route path="/Suppliersignup" element={<Suppliersignup/>}/>
      <Route path="/ForgotPassword" element={<ForgotPassword/>}/>
    </Routes>
  );
}

export default App;
