import React, { useState } from 'react';
import pic from "../assets/images/pic.jpg"; // Import the image
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const DonateFood = () => {
  const [grainsSelected, setGrainsSelected] = useState(false);
  const [snacksSelected, setSnacksSelected] = useState(false);

  return (
    <div className="max-h-screen w-screen relative">
      {/* Fixed Background Image */}
      <img
        src={pic}
        className="object-cover w-full h-full fixed top-0 left-0"
        alt="Sample"
      />

      {/* Larger Fixed Glassmorphism Box */}
      <div className="fixed top-10 left-1/2 transform -translate-x-1/2 p-20 rounded-xl 
        bg-gradient-to-r via-transparent to-transparent bg-opacity-10 backdrop-blur-3xl shadow-lg w-3/4 h-[600px]">
        
        {/* Animation */}
        <div className="fixed -left-60 top-1/2 transform -translate-y-1/2 w-100 h-[500px]">
          <DotLottieReact
            src="https://lottie.host/63d49626-4e30-445e-9dd5-d4b9a08466f6/ARuuy3OBzy.lottie"
            loop
            autoplay
          />
        </div>

        {/* DonateFood Form */}
        <div className="fixed top-72 -right-24 transform -translate-x-1/2 -translate-y-1/2 w-96 p-8 
          rounded-xl bg-gradient-to-r via-transparent to-transparent 
          bg-opacity-20 backdrop-blur-lg shadow-lg">
          <form action="" className="space-y-6">
            <h2 className="text-3xl text-white text-center">Donate Packaged Food</h2>

            {/* Name Input */}
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

            {/* Submit Button */}
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
  );
};

export default DonateFood;

