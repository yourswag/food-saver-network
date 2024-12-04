import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Ngologin from './components/Animated images/Ngologin.jsx';

import Signup from './components/Animated images/Signup.jsx';
import Supplierlogin from './components/Animated images/Supplierlogin.jsx';
import Suppliersignup from './components/Animated images/Suppliersignup.jsx';
import ForgotPassword from './components/Animated images/ForgotPassword.jsx';
import Ngoeventuser from './components/Animated images/Ngoeventuser.jsx';
import DonateMoney from './components/DonateMoney.jsx';
import DonateFood from './components/DonateFood.jsx';
import AboutUs from './components/Animated images/AboutUs.jsx';
import Suppliereventuser from './components/Animated images/Suppliereventuser.jsx';
import Addevent from './components/Animated images/Addevent.jsx';
import Dashboard from './pages/Dashboard.jsx';



function App() {
  return (
    
    <Routes>
      
      
      <Route path="/" element={<Dashboard />} />
      <Route path="/dashboard" element={<Dashboard />} />
    
      <Route path="/Ngologin" element={<Ngologin />} />
      <Route path="/Signup" element={<Signup/>} />
      <Route path="/DonateMoney" element={<DonateMoney/>} />
      <Route path="/Supplierlogin" element={<Supplierlogin/>} />
      <Route path="/Suppliersignup" element={<Suppliersignup/>}/>
      <Route path="/ForgotPassword" element={<ForgotPassword/>}/>
      <Route path="/event" element={<Ngoeventuser/>}/>
      <Route path="/supplierevent" element={<Suppliereventuser/>}/>
      <Route path="/addevent" element={<Addevent/>}/>
      <Route path="/DonateFood" element={<DonateFood/>}/>
      <Route path="/aboutus" element={<AboutUs/>}/>
    
    
    
    </Routes>
  
    
  );

}

export default App;
