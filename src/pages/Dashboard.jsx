import React from 'react';
import Navbar from '../components/Navbar'; // Adjust the import path if necessary
import Frontpage from '../pages/Frontpage'; // Adjust the import path if necessary
import { Link } from "react-router-dom";
const Dashboard = () => {
  return (
    <div>
      <Navbar /> {/* Navbar is fixed at the top */}
      <div className="pt-24"> {/* Add padding-top to ensure content is not hidden under the Navbar */}
        <Frontpage />
      </div>
    </div>
  );
};

export default Dashboard;
