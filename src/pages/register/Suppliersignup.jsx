import React, { useState } from 'react';
import pic from "../../assets/images/pic.jpg";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Suppliersignup = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [contactInfo, setContactinfo] = useState('');
  const [email, setEmail] = useState('');
  const [licenseImage, setLicenseImage] = useState(null);
  const [Type, setType] = useState('');
  const [avatar, setAvatar] = useState(null);

  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError('');
    setIsLoading(true);

    try {
      const formData = new FormData();
      formData.append('username', username);
      formData.append('password', password);
      formData.append('contactInfo', contactInfo);
      formData.append('email', email);
      formData.append('licenseImage', licenseImage);
      formData.append('Type', Type);
      formData.append('avatar', avatar);

      const response = await axios.post(
        'http://localhost:8000/api/v1/foodDonors/register',
        formData,
        {
          headers: { 'Content-Type': 'multipart/form-data' },
        }
      );

      if (response.data.success) {
        alert('Signup successful! Redirecting to login page...');
        navigate('/Supplierlogin');
      } else {
        setError('Failed to sign up. Please check your details and try again.');
      }
    } catch (err) {
      setError('An error occurred. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-h-screen w-screen relative">
      {/* Background Image */}
      <img
        src={pic}
        className="object-cover w-full h-full fixed top-0 left-0"
        alt="Background"
      />

      {/* Main Container */}
      <div className="fixed top-10 left-1/2 transform -translate-x-1/2 p-6 sm:p-12 md:p-20 rounded-xl 
        bg-gradient-to-r via-transparent to-transparent bg-opacity-10 backdrop-blur-sm shadow-lg w-11/12 sm:w-3/4 md:w-3/4 h-[450px] sm:h-[600px]">
        
        {/* Navbar */}
        <nav className="w-screen h-16 flex items-center px-6 fixed -top-6 left-1/2 transform -translate-x-1/2 z-50 
          bg-gradient-to-r from-slate-900 via-transparent to-slate-900 bg-opacity-10 backdrop-blur-3xl rounded-3xl">
          <a 
            href="/dashboard" 
            className="text-white text-2xl font-bold rounded-md transition duration-300 whitespace-nowrap"
          >
            Food Saver Network
          </a>
        </nav>

        {/* Animation */}
        <div className="fixed -left-60 top-1/2 transform -translate-y-1/2 w-100 h-[500px]">
          <DotLottieReact
            src="https://lottie.host/6587be58-c8d4-49cb-ad9f-9e278ebf499c/oGbmK9U0Qa.lottie"
            loop
            autoplay
          />
        </div>

        {/* Form */}
        <div className="fixed top-72 sm:top-72 md:top-72 -right-24 transform -translate-x-1/2 -translate-y-1/2 w-96 p-8 sm:p-8 md:p-8 
          rounded-xl bg-gradient-to-r via-transparent to-transparent 
          bg-opacity-20 backdrop-blur-lg shadow-lg overflow-y-auto h-[450px]">
          <form onSubmit={handleSubmit} className="space-y-6">
            <h2 className="text-3xl font-bold text-white text-center">REGISTER</h2>

            {error && (
              <p className="text-red-500 text-center font-semibold">{error}</p>
            )}

            {/* Username */}
            <div>
              <input
                type="text"
                className="w-full p-3 bg-transparent text-white border-b-2 border-white focus:outline-none focus:border-b-4 focus:border-white transition-all duration-300"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter Username"
                required
              />
            </div>

            {/* Password */}
            <div>
              <input
                type="password"
                className="w-full p-3 bg-transparent text-white border-b-2 border-white focus:outline-none focus:border-b-4 focus:border-white transition-all duration-300"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter Password"
                required
              />
            </div>

            {/* Contact Info */}
            <div>
              <input
                type="text"
                className="w-full p-3 bg-transparent text-white border-b-2 border-white focus:outline-none focus:border-b-4 focus:border-white transition-all duration-300"
                value={contactInfo}
                onChange={(e) => setContactinfo(e.target.value)}
                placeholder="Enter Contact Info"
                required
              />
            </div>

            {/* Email */}
            <div>
              <input
                type="email"
                className="w-full p-3 bg-transparent text-white border-b-2 border-white focus:outline-none focus:border-b-4 focus:border-white transition-all duration-300"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter Email"
                required
              />
            </div>

            {/* License Image */}
            <div>
              <label className="text-white block mb-2">License Image</label>
              <input
                type="file"
                className="w-full p-3 bg-transparent text-white border-b-2 border-white focus:outline-none focus:border-b-4 focus:border-white transition-all duration-300"
                onChange={(e) => setLicenseImage(e.target.files[0])}
                required
              />
            </div>

            {/* Type */}
            <div>
              <select
                className="w-full p-3 bg-transparent text-white border-b-2 border-white focus:outline-none focus:border-b-4 focus:border-white transition-all duration-300"
                value={Type}
                onChange={(e) => setType(e.target.value)}
                required
                style={{
                  backgroundColor: "rgba(0, 0, 0, 0.7)",
                  color: "white",
                }}
              >
                <option style={{ backgroundColor: "rgba(0, 0, 0, 0.9)", color: "white" }} value="">
                  Select Type
                </option>
                <option style={{ backgroundColor: "rgba(0, 0, 0, 0.9)", color: "white" }} value="food_donor">
                  Caterer
                </option>
                <option style={{ backgroundColor: "rgba(0, 0, 0, 0.9)", color: "white" }} value="supplier">
                  Restaurant
                </option>
              </select>
            </div>

            {/* Avatar */}
            <div>
              <label className="text-white block mb-2">Avatar</label>
              <input
                type="file"
                className="w-full p-3 bg-transparent text-white border-b-2 border-white focus:outline-none focus:border-b-4 focus:border-white transition-all duration-300"
                onChange={(e) => setAvatar(e.target.files[0])}
                required
              />
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className={`w-full p-3 bg-violet-500 text-white rounded-3xl hover:bg-violet-600 transition duration-300 ${isLoading ? 'cursor-not-allowed bg-gray-400' : ''}`}
                disabled={isLoading}
              >
                {isLoading ? 'Signing Up...' : 'REGISTER'}
              </button>
              <div className="text-center">
                <Link
                  to="/Supplierlogin"
                  className="w-full block text-center p-3 bg-white text-blue-950 rounded-3xl mt-4"
                >
                  Already have an account? Login
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Suppliersignup;
