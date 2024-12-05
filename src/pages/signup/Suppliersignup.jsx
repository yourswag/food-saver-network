import React, { useState } from 'react';
import pic from "../../assets/images/pic.jpg";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Suppliersignup = () => {
  const navigate = useNavigate();

  // State for form fields
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [location, setLocation] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [fssaiLicense, setFssaiLicense] = useState('');
  const [businessType, setBusinessType] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission

    // Clear any previous errors
    setError('');
    setIsLoading(true); // Start loading

    try {
      // Prepare the data to send to the backend
      const data = {
        name,
        username,
        password,
        location,
        phone,
        email,
        fssaiLicense,
        businessType
      };

      // Send the data via POST request to the backend API
      const response = await axios.post("http://localhost:8000/api/v1/fooddonate/login", data);

      // Check if signup was successful
      if (response.data.success === true) {
        // Navigate to login page or success page after successful signup
        navigate('/supplierevent');
      } else {
        setError('Failed to sign up. Please check your details and try again.');
      }
    } catch (err) {
      setError('An error occurred. Please try again later.');
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
        bg-gradient-to-r from-violet-300 via-transparent to-transparent bg-opacity-10 backdrop-blur-sm shadow-lg w-11/12 sm:w-3/4 md:w-3/4 h-[450px] sm:h-[600px]">
        
        {/* Lottie Animation */}
        <div className="fixed -left-60 top-1/2 transform -translate-y-1/2 w-100 h-[500px]">
          <DotLottieReact
            src="https://lottie.host/6587be58-c8d4-49cb-ad9f-9e278ebf499c/oGbmK9U0Qa.lottie"
            loop
            autoplay
          />
        </div>

        {/* Sign Up Form */}
        <div className="fixed top-72 sm:top-72 md:top-72 -right-24 transform -translate-x-1/2 -translate-y-1/2 w-96 p-8 sm:p-8 md:p-8 
          rounded-xl bg-gradient-to-r from-violet-300 via-transparent to-transparent 
          bg-opacity-20 backdrop-blur-lg shadow-lg overflow-y-auto h-[450px]">
          <form onSubmit={handleSubmit} className="space-y-6">
            <h2 className="text-3xl text-white text-center">SIGN UP</h2>

            {/* Error Message */}
            {error && (
              <p className="text-red-500 text-center font-semibold">{error}</p>
            )}

            {/* Name Input */}
            <div>
              <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-3 bg-transparent border-b-2 border-white focus:outline-none text-white font-semibold placeholder-white"
                placeholder="Organization's Name"
              />
            </div>

            {/* Username Input */}
            <div>
              <input
                type="text"
                id="username"
                name="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full p-3 bg-transparent border-b-2 border-white focus:outline-none text-white font-semibold placeholder-white"
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
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-3 bg-transparent border-b-2 border-white focus:outline-none text-white font-semibold placeholder-white"
                placeholder="Password"
              />
            </div>

            {/* Location Input */}
            <div>
              <input
                type="text"
                id="location"
                name="location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full p-3 bg-transparent border-b-2 border-white focus:outline-none text-white font-semibold placeholder-white"
                placeholder="Location"
              />
            </div>

            {/* Business Type */}
            <div>
              <div className="text-white font-semibold">Select Your Business Type:</div>
              <div className="flex items-center mt-2">
                <input
                  type="radio"
                  id="eventorganiser"
                  name="businessType"
                  value="eventorganiser"
                  onChange={(e) => setBusinessType(e.target.value)}
                  className="mr-2"
                  required
                />
                <label htmlFor="eventorganiser" className="text-white">Event Organizer</label>
              </div>
              <div className="flex items-center mt-2">
                <input
                  type="radio"
                  id="caterer"
                  name="businessType"
                  value="caterer"
                  onChange={(e) => setBusinessType(e.target.value)}
                  className="mr-2"
                />
                <label htmlFor="caterer" className="text-white">Caterer</label>
              </div>
              <div className="flex items-center mt-2">
                <input
                  type="radio"
                  id="restaurant"
                  name="businessType"
                  value="restaurant"
                  onChange={(e) => setBusinessType(e.target.value)}
                  className="mr-2"
                />
                <label htmlFor="restaurant" className="text-white">Restaurant</label>
              </div>
            </div>

            {/* Phone Input */}
            <div>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full p-3 bg-transparent border-b-2 border-white focus:outline-none text-white font-semibold placeholder-white"
                placeholder="Phone Number"
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 bg-transparent border-b-2 border-white focus:outline-none text-white font-semibold placeholder-white"
                placeholder="Email Address"
                required
              />
            </div>

            {/* FSSAI License Number Input */}
            <div>
              <input
                type="text"
                id="fssailicense"
                name="fssailicense"
                value={fssaiLicense}
                onChange={(e) => setFssaiLicense(e.target.value)}
                className="w-full p-3 bg-transparent border-b-2 border-white focus:outline-none text-white font-semibold placeholder-white"
                placeholder="FSSAI License Number"
                pattern="^1\d{13}$"
                title="FSSAI License Number Must Be a 14-digit Code Starting with 1"
                required
              />
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className={`w-full p-3 bg-violet-500 text-white rounded-3xl hover:bg-violet-600 transition duration-300 ${isLoading === true ? 'cursor-not-allowed bg-gray-400' : ''}`}
                disabled={isLoading === true}
              >
                {isLoading === true ? 'Signing Up...' : 'SIGN UP'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Suppliersign
