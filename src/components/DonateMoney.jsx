import React from 'react';
import pic from "../assets/images/pic.jpg"; // Import the image
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

import { Link } from 'react-router-dom'; // Import Link from react-router-dom



    
 
const DonateMoney = () => {
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
        bg-gradient-to-r  via-transparent to-transparent bg-opacity-10 backdrop-blur-3xl shadow-lg w-3/4 h-[600px]">
        
        {/* Animation */}
        <div className="fixed -left-60 top-1/2 transform -translate-y-1/2 w-100 h-[500px]">
        <DotLottieReact
      src="https://lottie.host/63d49626-4e30-445e-9dd5-d4b9a08466f6/ARuuy3OBzy.lottie"
      loop
      autoplay
    />
        </div>

        {/* donatemoney Form */}
        <div className="fixed top-72 -right-24 transform -translate-x-1/2 -translate-y-1/2 w-96 p-8 
          rounded-xl bg-gradient-to-r  via-transparent to-transparent 
          bg-opacity-20 backdrop-blur-lg shadow-lg">
          <form action="" className="space-y-6">
            <h2 className="text-3xl text-white text-center">DONATE MONEY</h2>
  {/* Username Input */}
  <div>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full p-3 bg-transparent border-b-2 border-white focus:outline-none text-white font-semibold placeholder-white"
                    placeholder=" Name"
                  />
                </div>

                {/* Phone Input */}
                <div>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full p-3 bg-transparent border-b-2 border-white focus:outline-none text-white font-semibold placeholder-white"
                    placeholder=" Phone Number"
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
                    placeholder=" The Amount [minimum-100/-]" 
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
    </div>
  );
};

export default DonateMoney;
