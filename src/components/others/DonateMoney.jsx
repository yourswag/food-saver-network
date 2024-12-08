import React from 'react';
import pic from "../../assets/images/pic.jpg"; // Import the image
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const DonateMoney = () => {
  return (
    <div className="relative">
      {/* Top-Right Button */}
      <div className="max-h-screen w-screen relative">
        <nav className="w-screen h-16 flex items-center px-6 fixed top-6 left-1/2 transform -translate-x-1/2 z-50 
          bg-gradient-to-r from-slate-900 via-transparent to-slate-900 bg-opacity-10 backdrop-blur-3xl rounded-3xl">
          <a
            href="/dashboard"
            className="text-white text-2xl font-bold rounded-md transition duration-300 whitespace-nowrap"
          >
            Food Saver Network
          </a>
        </nav>
      </div>

      {/* Fixed Background Image */}
      <img
        src={pic}
        className="object-cover w-full h-full fixed top-0 left-0"
        alt="Background Image"
      />

      {/* Larger Fixed Glassmorphism Box */}
      <div className="fixed top-10 left-1/2 transform -translate-x-1/2 p-5 sm:p-8 md:p-20 rounded-xl 
        bg-gradient-to-r via-transparent to-transparent bg-opacity-10 backdrop-blur-3xl shadow-lg 
        w-[90%] sm:w-3/4 md:w-2/3 lg:w-2/3 h-[90vh] sm:h-[700px] md:h-[80vh] lg:h-[90vh] flex flex-col sm:flex-row items-center justify-center">
        
        {/* Animation (Positioned properly inside the glass-box) */}
        <div className="w-[40%] sm:w-[50%] md:w-[60%] lg:w-[50%] h-auto mb-5 sm:mb-0 md:w-[650px] md:h-[650px] lg:w-[700px] lg:h-[700px] flex justify-center">
          <DotLottieReact
            src="https://lottie.host/63d49626-4e30-445e-9dd5-d4b9a08466f6/ARuuy3OBzy.lottie"
            loop
            autoplay
          />
        </div>

        {/* Donate Money Form */}
        <div className="w-[90%] sm:w-96 p-5 sm:p-8 bg-gradient-to-r via-transparent to-transparent 
          bg-opacity-20 backdrop-blur-lg shadow-lg rounded-xl md:w-[400px] lg:w-[450px]">
          <form action="" className="space-y-6">
            <h2 className="text-2xl sm:text-3xl text-white text-center">DONATE MONEY</h2>

            {/* Username Input */}
            <div>
              <label htmlFor="name" className="sr-only">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full p-3 bg-transparent border-b-2 border-white focus:outline-none text-white font-semibold placeholder-white"
                placeholder="Name"
                required
              />
            </div>

            {/* Phone Input */}
            <div>
              <label htmlFor="phone" className="sr-only">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="w-full p-3 bg-transparent border-b-2 border-white focus:outline-none text-white font-semibold placeholder-white"
                placeholder="Phone Number"
                pattern="[0-9]{10}"
                required
              />
            </div>

            {/* Amount Input */}
            <div>
              <label htmlFor="amount" className="sr-only">Amount</label>
              <input
                type="tel"
                id="amount"
                name="amount"
                className="w-full p-3 bg-transparent border-b-2 border-white focus:outline-none text-white font-semibold placeholder-white"
                placeholder="The Amount [minimum-100/-]" 
                pattern="[0-9]{3}"
                required
              />
            </div>

            {/* Date Input */}
            <div>
              <label htmlFor="date" className="sr-only">Date</label>
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
