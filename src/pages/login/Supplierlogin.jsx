import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import pic from "../../assets/images/pic.jpg";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { Link } from 'react-router-dom';

const Supplierlogin = () => {
  const navigate = useNavigate();

  // State for login credentials
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault(); // Prevent default form submission

    // Clear any previous errors
    setError('');
    setIsLoading(true); // Start loading

    try {
      // Make the API request to the backend (replace URL with actual endpoint)
      const response = await axios.post("http://localhost:8000/api/v1/fooddonate/login", {
        username,
        password
      });

      // Check the response
      if (response.data.success) {
        // Navigate to the supplier event page if login is successful
        navigate('/supplierevent');
      } else {
        setError('Invalid username or password'); // Set error if login fails
      }
    } catch (err) {
      setError('An error occurred. Please try again.'); // Set error if API request fails
    } finally {
      setIsLoading(false); // Stop loading
    }
  };

  return (
    <div className="max-h-screen w-screen relative">
      {/* Fixed Background Image */}
      <img
        src={pic}
        className="object-cover w-full h-full fixed top-0 left-0"
        alt="Sample"
      />

      {/* Larger Fixed Glassmorphism Box */}
      <div className="fixed top-10 left-1/2 transform -translate-x-1/2 p-6 sm:p-12 md:p-20 rounded-xl 
        bg-gradient-to-r via-transparent to-transparent bg-opacity-10 backdrop-blur-sm shadow-lg w-11/12 sm:w-3/4 md:w-3/4 h-[450px] sm:h-[600px]">
        
        {/* Animation */}
        <div className="fixed -left-60 top-1/2 transform -translate-y-1/2 w-100 h-[500px]">
          <DotLottieReact
            src="https://lottie.host/e7fff689-dcc9-4da0-8c28-9377a70cda71/pVLp1lGCWs.lottie"
            loop
            autoplay
          />
        </div>

        {/* Login Form */}
        <div className="fixed top-72 sm:top-72 md:top-72 -right-24 transform -translate-x-1/2 -translate-y-1/2 w-96 p-8 sm:p-8 md:p-8 
          rounded-xl bg-gradient-to-r via-transparent to-transparent 
          bg-opacity-20 backdrop-blur-lg shadow-lg overflow-y-auto h-[450px]"> {/* Added scrollbar */}
          <form onSubmit={handleLogin} className="space-y-6">
            <h2 className="text-3xl text-white text-center">LOGIN</h2>

            {/* Error Message */}
            {error && (
              <p className="text-red-500 text-center font-semibold">{error}</p>
            )}

            {/* Username Input */}
            <div>
              <input
                type="text"
                id="username"
                name="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)} // Update state
                className="w-full p-3 bg-transparent border-b-2 border-white focus:outline-none 
                  text-white font-semibold placeholder-white"
                placeholder="Username"
              />
            </div>

            {/* Password Input */}
            <div>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)} // Update state
                className="w-full p-3 bg-transparent border-b-2 border-white focus:outline-none 
                  text-white font-semibold placeholder-white"
                placeholder="Password"
              />
            </div>

            {/* Login Button */}
            <div>
              <button
                type="submit"
                className={`w-full p-3 text-white rounded-3xl 
                  ${isLoading ? 'bg-gray-400 cursor-not-allowed' : 'bg-violet-500 hover:bg-violet-600'}`}
                disabled={isLoading} // Disable button when loading
              >
                {isLoading ? 'Logging in...' : 'Login'}
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
