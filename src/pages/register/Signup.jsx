import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // For programmatic navigation
import axios from "axios"; // Import Axios
import pic from "../../assets/images/pic.jpg"; // Import the image
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const Signup = () => {
  const [formData, setFormData] = useState({
    username: "",
    fullName: "",
    password: "",
    location: "",
    contactInfo: "",
    email: "",
    avatar: "",
    ngoLicense: null, // Set null for file type initially
  });
  const [error, setError] = useState("");
  const navigate = useNavigate(); // Hook for navigation

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === "file") {
      setFormData({ ...formData, [name]: files[0] }); // Store the file object
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  // Handle signup logic with axios
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Create a FormData object to handle file uploads
      const formDataToSend = new FormData();
      Object.keys(formData).forEach((key) => {
        formDataToSend.append(key, formData[key]);
      });

      // Sending signup request
      const response = await axios.post(
        "http://localhost:8000/api/v1/ngos/signup",
        formDataToSend,
        {
          headers: {
            "Content-Type": "multipart/form-data", // Set the correct content type
          },
        }
      );

      // Check if the server response contains a success property and it's true
      if (response.data.success === true) {
        alert("Signup successful! Redirecting to login page...");
        navigate("/Ngologin"); // Navigate to the login page
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
        {/* Top-Right Button */}
        <div className="max-h-screen w-screen relative">
          <nav className="w-screen h-16 flex items-center px-6 fixed -top-6 left-1/2 transform -translate-x-1/2 z-50 
            bg-gradient-to-r from-slate-900 via-transparent to-slate-900 bg-opacity-10 backdrop-blur-3xl rounded-3xl">
            <a 
              href="/dashboard" 
              className="text-white text-2xl font-bold rounded-md transition duration-300 whitespace-nowrap"
            >
              Food Saver Network
            </a>
          </nav>
        </div>

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
        bg-opacity-20 backdrop-blur-lg shadow-lg overflow-y-auto h-[450px]">
          <form onSubmit={handleSubmit} className="space-y-6">
            <h2 className="text-3xl font-bold text-white text-center">REGISTER</h2>

            {error && <p className="text-red-500 text-center">{error}</p>}

            {[ 
              { id: "username", type: "text", placeholder: "Username" },
              { id: "fullName", type: "text", placeholder: "Full Name" },
              { id: "password", type: "password", placeholder: "Password" },
              { id: "location", type: "text", placeholder: "Location" },
              { id: "contactInfo", type: "tel", placeholder: "Phone Number", pattern: "[0-9]{10}" },
              { id: "email", type: "email", placeholder: "Email Address" },
              {
                id: "ngoLicense",
                type: "file",
                placeholder: "NGO DARPAN License",
                title: "Format: AB/YYYY/XXXXXXX",
              },
            ].map(({ id, ...rest }) => (
              <div key={id}>
                <input
                  {...rest}
                  id={id}
                  name={id}
                  value={rest.type !== "file" ? formData[id] : undefined} // Avoid setting `value` for file inputs
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
                REGISTER
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
