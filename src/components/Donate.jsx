import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import pic from "../assets/images/pic.jpg"; // Import the image

const Donate = () => {
  const [grainsSelected, setGrainsSelected] = useState(false);
  const [snacksSelected, setSnacksSelected] = useState(false);

  return (
    <div className="h-screen w-screen relative overflow-auto">
      {/* Fixed Background Image */}
      <img
        src={pic}
        className="object-cover w-full h-full fixed top-0 left-0"
        alt="Sample"
      />
    
      {/* Gradient Overlay */}
      <div className="fixed top-0 left-0 w-full h-full bg-gradient-to-r from-black via-transparent to-black bg-opacity-10 backdrop-blur-sm">
        {/* Main Container Divided Vertically */}
        <div className="h-full w-full flex flex-col lg:flex-row items-center justify-start gap-12 px-4 py-8 overflow-auto">
          
          {/* Left Section (Donate Money) */}
          <div className="w-full lg:w-1/2 flex flex-col items-center justify-start">
            {/* Donate Money Heading */}
            <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg p-4 sm:p-8 md:p-10 rounded-3xl bg-gradient-to-r from-violet-500 via-transparent to-purple-400 bg-opacity-90 backdrop-blur-sm flex items-center justify-center mb-4">
              <div className="px-4 py-2 bg-purple-700 text-black rounded-3xl border border-transparent font-bold text-center w-full">
                <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl">DONATE MONEY</h3>
              </div>
            </div>

            {/* Donate Money Form */}
            <div className="w-full sm:w-96 md:w-[400px] lg:w-[500px] p-8 md:p-10 rounded-3xl bg-gradient-to-r from-violet-300 to-teal-300 via-transparent bg-opacity-20 backdrop-blur-lg shadow-lg">
              <form action="" className="space-y-6">
                {/* Username Input */}
                <div>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full p-3 bg-transparent border-b-2 border-white focus:outline-none text-white font-semibold placeholder-white"
                    placeholder="Enter your Name"
                  />
                </div>

                {/* Phone Input */}
                <div>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full p-3 bg-transparent border-b-2 border-white focus:outline-none text-white font-semibold placeholder-white"
                    placeholder="Enter Your Phone Number"
                    pattern="[0-9]{10}"
                    required
                  />
                </div>
                
                {/* Amount Input */}
                <div>
                  <input
                    type="tel"
                    id="amount"
                    name="amount"
                    className="w-full p-3 bg-transparent border-b-2 border-white focus:outline-none text-white font-semibold placeholder-white"
                    placeholder="Enter The Amount [minimum-100/-]" 
                    pattern="[0-9]{3}"
                    required
                  />
                </div>
              
                {/* Date Input */}
                <div>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    className="w-full p-3 bg-transparent border-b-2 border-white focus:outline-none text-white font-semibold placeholder-white"
                    placeholder="Day Of Donation"
                    required
                  />
                </div>
              
                <div>
                  <a
                    href="/"
                    className="submit w-full p-3 bg-violet-500 text-white rounded-3xl hover:bg-violet-600 transition duration-300">
                      PAY
                  </a>
                </div>
              </form>
            </div>
          </div>
    
          {/* Right Section (Donate Packaged Food) */}
          <div className="w-full lg:w-1/2 flex flex-col items-center justify-start">
            {/* Donate Packaged Food Heading */}
            <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg p-4 sm:p-8 md:p-10 rounded-3xl bg-gradient-to-r from-violet-500 via-transparent to-purple-400 bg-opacity-90 backdrop-blur-sm flex items-center justify-center mb-4">
              <div className="px-4 py-2 bg-purple-700 text-black rounded-3xl border border-transparent font-bold text-center w-full">
                <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl">DONATE PACKAGED FOOD</h3>
              </div>
            </div>

            {/* Donate Packaged Food Form */}
            <div className="w-full sm:w-96 md:w-[400px] lg:w-[500px] p-8 md:p-10 rounded-3xl bg-gradient-to-r from-violet-300 to-teal-300 via-transparent bg-opacity-20 backdrop-blur-lg shadow-lg">
              <form action="" className="space-y-6">
                {/* Username Input */}
                <div>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full p-3 bg-transparent border-b-2 border-white focus:outline-none text-white font-semibold placeholder-white"
                    placeholder="Enter your Name"
                  />
                </div>

                {/* Phone Input */}
                <div>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full p-3 bg-transparent border-b-2 border-white focus:outline-none text-white font-semibold placeholder-white"
                    placeholder="Enter Your Phone Number"
                    pattern="[0-9]{10}"
                    required
                  />
                </div>

                {/* Grains and Snacks */}
                <div className="flex flex-wrap justify-between">
                  {/* Grains Section */}
                  <div className="w-1/2 sm:w-auto">
                    <label className="text-white font-semibold">Grains</label>
                    <input 
                      type="checkbox" 
                      id="grains" 
                      className="ml-2"
                      checked={grainsSelected}
                      onChange={() => setGrainsSelected(!grainsSelected)}
                    />
                  </div>
                  
                  {/* Snacks Section */}
                  <div className="w-1/2 sm:w-auto">
                    <label className="text-white font-semibold">Snacks</label>
                    <input 
                      type="checkbox" 
                      id="snacks" 
                      className="ml-2"
                      checked={snacksSelected}
                      onChange={() => setSnacksSelected(!snacksSelected)}
                    />
                  </div>
                </div>

                {/* Grains Sub-Options (Dropdown) */}
                {grainsSelected && (
                  <div id="grains-options" className="mt-4 pl-4">
                    <select name="grains" className="w-full p-3 bg-transparent border-b-2 border-white text-black font-semibold focus:outline-none appearance-none">
                      <option value="">Select Quantity (Kg.)</option>
                      <option value="5-10">5-10</option>
                      <option value="10-20">10-20</option>
                      <option value="20-30">20-30</option>
                      <option value="Above 30">Above 30</option>
                    </select>
                  </div>
                )}

                {/* Snacks Sub-Options (Dropdown) */}
                {snacksSelected && (
                  <div id="snacks-options" className="mt-4 pl-4">
                    <select name="snacks" className="w-full p-3 bg-transparent border-b-2 border-white text-black font-semibold focus:outline-none" required>
                      <option value="">Select Quantity (No. Of Packets)</option>
                      <option value="less than 10">less than 10</option>
                      <option value="10-20">10-20</option>
                      <option value="20-30">20-30</option>
                      <option value="Above 30">Above 30</option>
                    </select>
                  </div>
                )}

                {/* Date Input */}
                <div>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    className="w-full p-3 bg-transparent border-b-2 border-white focus:outline-none text-white font-semibold placeholder-white"
                    placeholder="Day Of Donation"
                    required
                  />
                </div>

                <div>
                  <a
                    href="/"
                    className="submit w-full p-3 bg-violet-500 text-white rounded-3xl hover:bg-violet-600 transition duration-300">
                      DONATE
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Donate;