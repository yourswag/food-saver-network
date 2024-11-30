import React from 'react';
import pic from "../../assets/images/pic.jpg"; // Import the image
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Supplierlogin = () => {
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
            src="https://lottie.host/e7fff689-dcc9-4da0-8c28-9377a70cda71/pVLp1lGCWs.lottie"
            loop
            autoplay
          />
        </div>

        {/* Login Form */}
        <div className="fixed top-72 -right-24 transform -translate-x-1/2 -translate-y-1/2 w-96 p-8 
          rounded-xl bg-gradient-to-r  via-transparent to-transparent 
          bg-opacity-20 backdrop-blur-lg shadow-lg">
          <form action="" className="space-y-6">
            <h2 className="text-3xl text-white text-center">LOGIN</h2>

            {/* Username Input */}
            <div>
              <input
                type="text"
                id="username"
                name="username"
                className="w-full p-3 bg-transparent border-b-2 border-white focus:outline-none 
                  text-white font-semibold placeholder-white"
                placeholder=" username"
              />
            </div>

            {/* Password Input */}
            <div>
              <input
                type="password"
                id="password"
                name="password"
                className="w-full p-3 bg-transparent border-b-2 border-white focus:outline-none 
                  text-white font-semibold placeholder-white"
                placeholder=" password"
              />
            </div>

            {/* Login Button */}
            <div>
              <button type="submit" className="w-full p-3 bg-violet-500 text-white rounded-3xl hover:bg-violet-600 transition duration-300">
                Login
              </button>
            </div>

            {/* Forgot Password */}
            <div className="text-center">
              <Link
                to="/ForgotPassword"
                className="text-sm text-white underline hover:text-violet-300 transition duration-300"
              >
                Forgot Password?
              </Link>
            </div>

            {/* Sign Up Link */}
            <div className="text-center">
              <p className="text-white font-semibold mt-4">Don't have an account?</p>
              <Link
                to="/Suppliersignup"
                className="w-full block text-center p-3 bg-violet-500 text-white rounded-3xl hover:bg-violet-600 transition duration-300 mt-4"
              >
                Sign Up
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Supplierlogin;
