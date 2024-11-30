import React from 'react';
import pic from "../../assets/images/pic.jpg"; // Import the image
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const ForgotPassword = () => {
  return (
    <div className="max-h-screen w-screen relative">
      {/* Background Image */}
      <img
        src={pic}
        className="object-cover w-full h-full fixed top-0 left-0"
        alt="Sample"
      />

      {/* Glassmorphism Box */}
      <div
        className="fixed top-10 left-1/2 transform -translate-x-1/2 p-20 rounded-xl 
        bg-gradient-to-r from-violet-300 via-transparent to-transparent bg-opacity-10 backdrop-blur-3xl shadow-lg w-3/4 h-[600px] flex items-center justify-center space-y-10"
      >
        {/* Forgot Password Form */}
        <div className="w-full max-w-md p-10 rounded-xl bg-white shadow-2xl">
          <h2 className="text-4xl font-bold text-indigo-600 text-center mb-6">
            Forgot Password
          </h2>
          <form action="" className="space-y-6">
            {/* Email Input */}
            <div>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full p-4 bg-gray-100 border-2 border-indigo-300 rounded-lg focus:ring-4 
                focus:ring-indigo-200 focus:outline-none text-gray-700 placeholder-gray-500"
                placeholder="Enter your registered email"
                required
              />
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="w-full p-4 bg-indigo-500 text-white font-semibold rounded-lg hover:bg-indigo-600 
                hover:shadow-lg transition duration-300"
              >
                Reset Password
              </button>
            </div>
          </form>
        </div>

        {/* Lottie Animation */}
        <div className='h-full w-auto'>
          <DotLottieReact
            src="https://lottie.host/1ef7871c-912f-47ba-aabd-7683bcbedbf2/egB6Rc4yOW.lottie"
            loop
            autoplay
          />
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;

