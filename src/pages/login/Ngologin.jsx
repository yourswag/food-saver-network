import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // For programmatic navigation
import axios from "axios"; // Import Axios
import pic from "../../assets/images/pic.jpg"; // Import the image
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const Ngologin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate(); // Hook for navigation

  // Handle login logic with axios
  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // Sending login request
      const response = await axios.post("http://localhost:8000/api/v1/ngos/login", {
        username,
        password,
      });

      // Check if the server response contains a success property and it's true
      if (response.data.success === true) {
        navigate("/event"); // Navigate to the event page
      } else {
        setError("Invalid username or password");
      }
    } catch (error) {
      setError("An error occurred. Please try again.");
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
        bg-gradient-to-r via-transparent to-transparent bg-opacity-10 backdrop-blur-sm shadow-lg w-11/12 sm:w-3/4 md:w-3/4 h-[400px] sm:h-[600px]">
        <div className="fixed -left-60 top-1/2 transform -translate-y-1/2 w-100 h-[500px]">
          <DotLottieReact
            src="https://lottie.host/5930968b-64ef-44a8-adaa-83f363964ceb/g0R25OiP5C.lottie"
            loop
            autoplay
          />
        </div>

        {/* Login Form */}
        <div className="fixed top-72 sm:top-72 md:top-72 -right-24 transform -translate-x-1/2 -translate-y-1/2 w-80 sm:w-96 p-6 sm:p-8 md:p-8 
        rounded-xl bg-gradient-to-r via-transparent to-transparent 
        bg-opacity-20 backdrop-blur-lg shadow-lg">
          <form onSubmit={handleLogin} className="space-y-6">
            <h2 className="text-3xl text-white text-center">LOGIN</h2>

            {error && <p className="text-red-500 text-center">{error}</p>}

            {/* Username Input */}
            <div>
              <input
                type="text"
                id="username"
                name="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-3 bg-transparent border-b-2 border-white focus:outline-none   text-white font-semibold placeholder-white"
                placeholder=" password"
              />
            </div>
            <div className="text-center">
              <Link
                to="/ForgotPassword"
                className="text-sm text-white underline hover:text-violet-300 transition duration-300"
              >
                Forgot Password?
              </Link>
            </div>

            {/* Login Button */}
            <div>
              <button
                type="submit"
                className="w-full block text-center p-3 bg-white text-blue-950 rounded-3xl mt-4"
              >
                LOGIN
              </button>
            </div> 

            <div className="text-center">
              <Link
                to="/Signup"
                className="w-full block text-center p-3 bg-white text-blue-950 rounded-3xl mt-4"
              >
                Don't have an account? Sign Up
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Ngologin;
