import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // For programmatic navigation
import axios from "axios"; // Import Axios
import pic from "../../assets/images/pic.jpg"; // Import the image
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    password: "",
    location: "",
    phone: "",
    email: "",
    ngodarpanlicense: "",
    file: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate(); // Hook for navigation

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle signup logic with axios
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Sending signup request
      const response = await axios.post("http://localhost:8000/api/v1/ngos/signup", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      // Check if the server response contains a success property and it's true
      if (response.data.success === true) {
        alert("Signup successful!");
        navigate("/event"); // Navigate to the event page
      } else {
        setError("Signup failed. Please try again.");
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
            src="https://lottie.host/22dec8a7-cfaf-4c5e-aa8e-be1fa3cd4540/ni8NCcr1Mh.lottie"
            loop
            autoplay
          />
        </div>

        {/* Signup Form */}
        <div className="fixed top-72 sm:top-72 md:top-72 -right-24 transform -translate-x-1/2 -translate-y-1/2 w-80 sm:w-96 p-6 sm:p-8 md:p-8 
        rounded-xl bg-gradient-to-r via-transparent to-transparent 
        bg-opacity-20 backdrop-blur-lg shadow-lg overflow-y-auto h-[450px]"> {/* Added scrollbar */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <h2 className="text-3xl text-white text-center">SIGN UP</h2>

            {error && <p className="text-red-500 text-center">{error}</p>}

            {[ 
              { id: "name", type: "text", placeholder: "Ngo's Name" },
              { id: "username", type: "text", placeholder: "Username" },
              { id: "password", type: "password", placeholder: "Password" },
              { id: "location", type: "text", placeholder: "Location" },
              { id: "phone", type: "tel", placeholder: "Phone Number", pattern: "[0-9]{10}" },
              { id: "email", type: "email", placeholder: "Email Address" },
              {
                id: "ngodarpanlicense",
                type: "text",
                placeholder: "NGO DARPAN License Number",
                pattern: "^[A-Za-z]{2}/\\d{4}/\\d{7}$",
                title: "Format: AB/YYYY/XXXXXXX",
              },
              { id: "file", type: "file", placeholder: "Upload file" },
            ].map(({ id, ...rest }) => (
              <div key={id}>
                <input
                  {...rest}
                  id={id}
                  name={id}
                  value={formData[id]}
                  onChange={handleChange}
                  className="w-full p-3 bg-transparent border-b-2 border-white focus:outline-none text-white font-semibold placeholder-white"
                />
              </div>
            ))}

            <div>
              <button
                type="submit"
                className="w-full block text-center p-3 bg-white text-blue-950 rounded-3xl mt-4"
              >
                SIGN UP
              </button>
            </div>

            <div className="text-center">
              <Link
                to="/Ngologin"
                className="w-full block text-center p-3 bg-white text-blue-950 rounded-3xl mt-4"
              >
                Already have an account? Login
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
