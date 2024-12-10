import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';

import Ngologin from './pages/login/Ngologin.jsx';
import Signup from './pages/register/Signup.jsx';
import Supplierlogin from './pages/login/Supplierlogin.jsx';
import Suppliersignup from './pages/register/Suppliersignup.jsx';
import ForgotPassword from './components/others/ForgotPassword.jsx';
import Ngoeventuser from './components/others/Ngoeventuser.jsx';
import DonateMoney from './components/others/DonateMoney.jsx';
import DonateFood from './components/others/DonateFood.jsx';
import AboutUs from './pages/AboutUs.jsx';
import Suppliereventuser from './components/others/Suppliereventuser.jsx';
import Addevent from './components/others/Addevent.jsx';
import Dashboard from './pages/Dashboard.jsx';
import Mapini from "./pages/Mapini.jsx";


function App() {
  return (
   
        <Routes>
         
         <Route path="/map" element={<Mapini/>} />
        
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/Ngologin" element={<Ngologin />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/DonateMoney" element={<DonateMoney />} />
          <Route path="/Supplierlogin" element={<Supplierlogin />} />
          <Route path="/Suppliersignup" element={<Suppliersignup />} />
          <Route path="/ForgotPassword" element={<ForgotPassword />} />
          <Route path="/event" element={<Ngoeventuser />} />
          <Route path="/supplierevent" element={<Suppliereventuser />} />
          <Route path="/addevent" element={<Addevent />} />
          <Route path="/DonateFood" element={<DonateFood />} />
          <Route path="/aboutus" element={<AboutUs />} />
        </Routes>
    
  );
}

export default App;
