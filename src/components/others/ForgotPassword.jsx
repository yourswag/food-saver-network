import React, { useState } from 'react';
import pic from "../../assets/images/pic.jpg"; // Import the image
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const ForgotPassword = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal visibility state
  const [otp, setOtp] = useState(""); // OTP input state

  const handleResetPassword = (e) => {
    e.preventDefault();
    // Simulate OTP sending process
    setIsModalOpen(true); // Open the modal
  };

  const handleOtpSubmit = (e) => {
    e.preventDefault();
    console.log("OTP Submitted: ", otp); // Process OTP submission logic here
    // Close the modal or handle further actions
    setIsModalOpen(false);
  };

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
        bg-gradient-to-r from-slate-950 via-transparent to-slate-950 bg-opacity-10 backdrop-blur-3xl shadow-lg w-3/4 h-[600px] flex items-center justify-center space-y-10"
      >
        {/* Forgot Password Form */}
        <div className="w-full max-w-md p-10 rounded-xl bg-white shadow-2xl">
          <h2 className="text-4xl font-bold text-indigo-600 text-center mb-6">
            Forgot Password
          </h2>
          <form onSubmit={handleResetPassword} className="space-y-6">
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
        <div className="h-full w-auto">
          <DotLottieReact
            src="https://lottie.host/1ef7871c-912f-47ba-aabd-7683bcbedbf2/egB6Rc4yOW.lottie"
            loop
            autoplay
          />
        </div>
      </div>

      {/* OTP Modal */}
      {isModalOpen && (
        <div className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg w-96">
            <h3 className="text-2xl font-bold text-center text-indigo-600 mb-4">
              OTP Verification
            </h3>
            <p className="text-center text-gray-600 mb-6">
              An OTP has been sent to your email. Please enter it below.
            </p>
            <form onSubmit={handleOtpSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  id="otp"
                  name="otp"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  className="w-full p-4 bg-gray-100 border-2 border-indigo-300 rounded-lg focus:ring-4 
                  focus:ring-indigo-200 focus:outline-none text-gray-700 placeholder-gray-500"
                  placeholder="Enter OTP"
                  required
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full p-4 bg-indigo-500 text-white font-semibold rounded-lg hover:bg-indigo-600 
                  hover:shadow-lg transition duration-300"
                >
                  Submit OTP
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ForgotPassword;
