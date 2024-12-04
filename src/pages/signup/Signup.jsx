import React from 'react';
import pic from "../../assets/images/pic.jpg"; // Import the image
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Signup = () => {
  return (
    <div className="max-h-screen w-screen relative">
      {/* Fixed Background Image */}
      <img
        src={pic}
        className="object-cover w-full h-full fixed top-0 left-0"
        alt="Sample"
      />

      {/* Larger Fixed Glassmorphism Box, Positioned Higher */}
      <div className="fixed top-10 left-1/2 transform -translate-x-1/2 p-20 rounded-xl 
        bg-gradient-to-r  via-transparent to-transparent bg-opacity-10 backdrop-blur-3xl shadow-lg w-3/4 h-[550px]">
        
        {/* Lottie Animation */}
        <div className="fixed -left-60 top-1/2 transform -translate-y-1/2 w-100 h-[500px]">
          <DotLottieReact
            src="https://lottie.host/22dec8a7-cfaf-4c5e-aa8e-be1fa3cd4540/ni8NCcr1Mh.lottie"
            loop
            autoplay
          />
        </div>

        {/* Sign Up Form */}
        <div 
          className="fixed top-72 -right-24 transform -translate-x-1/2 -translate-y-1/2 w-96 p-8 
          rounded-xl bg-gradient-to-r  via-transparent to-transparent 
          bg-opacity-20 backdrop-blur-lg shadow-lg overflow-y-auto h-[450px]"
          style={{
            scrollbarWidth: 'thin',  // Firefox
            scrollbarColor: 'rgba(255, 255, 255, 0.3) transparent', // Firefox
          }}>

          {/* Custom Scrollbar for Webkit Browsers (Chrome, Safari) */}
          <div style={{
            WebkitScrollbarWidth: 'thin', // Webkit (Chrome, Safari)
            WebkitScrollbarColor: 'rgba(255, 255, 255, 0.3) transparent', // Webkit
            WebkitScrollbarTrack: 'transparent', // Track transparent
            WebkitScrollbarThumb: 'rgba(255, 255, 255, 0.3)', // Thumb
          }}></div>
          
          <form action="" className="space-y-6">
            <h2 className="text-3xl text-white text-center">SIGN UP</h2>

            {/* Name Input */}
            <div>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full p-3 bg-transparent border-b-2 border-white focus:outline-none focus:bg-transparent text-white font-semibold placeholder-white"
                placeholder=" Ngo's Name"
              />
            </div>

            {/* Username Input */}
            <div>
              <input
                type="text"
                id="username"
                name="username"
                className="w-full p-3 bg-transparent border-b-2 border-white focus:outline-none text-white font-semibold placeholder-white"
                placeholder=" Username"
              />
            </div>

            {/* Password Input */}
            <div>
              <input
                type="password"
                id="password"
                name="password"
                className="w-full p-3 bg-transparent border-b-2 border-white focus:outline-none text-white font-semibold placeholder-white"
                placeholder=" Password"
              />
            </div>

            {/* Location Input */}
            <div>
              <input
                type="text"
                id="location"
                name="location"
                className="w-full p-3 bg-transparent border-b-2 border-white focus:outline-none text-white font-semibold placeholder-white"
                placeholder=" Location"
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

            {/* Email Input */}
            <div>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full p-3 bg-transparent border-b-2 border-white focus:outline-none text-white font-semibold placeholder-white"
                placeholder=" Email Address"
                required
              />
            </div>

            {/* NGO DARPAN License Number Input */}
            <div>
              <input
                type="text"
                id="ngodarpanlicense"
                name="ngodarpanlicense"
                className="w-full p-3 bg-transparent border-b-2 border-white focus:outline-none text-white font-semibold placeholder-white"
                placeholder=" NGO DARPAN License Number"
                pattern="^[A-Za-z]{2}\/\d{4}\/\d{7}$"
                title="NGO DARPAN License Number Must Be In The Format AB/YYYY/XXXXXXX"
                required
              />
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="w-full p-3 bg-white text-blue-950 rounded-3xl "
              >
                SIGN UP
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
