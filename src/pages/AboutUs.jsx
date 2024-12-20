import React from "react";
import donation from "../assets/images/donation.jpg"; // Import the image
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { FaWhatsapp, FaFacebook, FaInstagram } from "react-icons/fa"; // Import icons

const AboutUs = () => {
  return (
    <div className="relative">
      {/* Top-Right Button */}
      <div className="max-h-screen w-screen relative">
        <nav className="w-screen h-16 flex items-center px-6 fixed top-6 left-1/2 transform -translate-x-1/2 z-50 bg-gradient-to-r from-slate-900 via-transparent to-slate-900 bg-opacity-10 backdrop-blur-3xl rounded-3xl">
          <a
            href="/dashboard"
            className="text-white text-2xl font-bold rounded-md transition duration-300 whitespace-nowrap"
          >
            Food Saver Network
          </a>
        </nav>
      </div>

      {/* About Us Section */}
      <div className="bg-slate-900 py-5 px-5 rounded-[45px] mt-20">
        {/* Page Heading */}
        <div className="max-w-5xl mx-auto text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-100">About Us</h1>
          <p className="mt-4 text-lg text-gray-400">
            Making a difference, one step at a time. Learn about our mission, vision, and the impact we aim to create.
          </p>
        </div>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Section 1 */}
          <div className="flex flex-col justify-center">
            <h2 className="text-2xl font-semibold text-gray-100 mb-4">Our Mission</h2>
            <p className="text-gray-400">
              Our mission is to bridge the gap between surplus food and those in need. By collaborating with NGOs, food suppliers, and volunteers, we aim to eliminate hunger and reduce food waste in our communities.
            </p>
          </div>

          {/* Image */}
          <div>
            <img
              src={donation}
              alt="Helping Hands"
              className="rounded-3xl shadow-lg"
              style={{ width: "400px", height: "auto" }} // Set width and maintain aspect ratio
            />
          </div>
        
          {/* Section 2 */}
          <div>
            <DotLottieReact
              src="https://lottie.host/a1e57666-5f3b-4065-aafb-b7df79a57eb6/3glu5y5hHm.lottie"
              loop
              autoplay
            />
          </div>

          <div className="flex flex-col justify-center">
            <h2 className="text-2xl font-semibold text-gray-100 mb-4">Our Vision</h2>
            <p className="text-gray-400">
              We envision a world where no one goes hungry and resources are shared equitably. Through innovation, collaboration, and relentless dedication, we strive to build sustainable solutions to food insecurity.
            </p>
          </div>
        </div>

        {/* Our Values */}
        <div className="max-w-5xl mx-auto mt-16 text-center">
          <h2 className="text-3xl font-semibold text-gray-100 mb-6">Our Core Values</h2>
          <div className="flex flex-wrap justify-center gap-6">
            <div className="p-6 bg-slate-800 shadow-md rounded-2xl w-full sm:w-64">
              <h3 className="text-lg font-bold text-gray-100 mb-2">Compassion</h3>
              <p className="text-gray-400">
                We care deeply about the well-being of individuals and communities.
              </p>
            </div>
            <div className="p-6 bg-slate-800 shadow-md rounded-2xl w-full sm:w-64">
              <h3 className="text-lg font-bold text-gray-100 mb-2">Sustainability</h3>
              <p className="text-gray-400">
                Reducing food waste and fostering eco-friendly solutions.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 bg-violet-500 text-white py-10 rounded-full">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Join Us in Making a Difference</h2>
            <p className="mb-6 text-lg">
              Whether you donate, volunteer, or partner with us, your support can change lives.
            </p>
            <a
              href="/JoinUs"
              className="px-6 py-3 bg-white text-violet-500 font-semibold rounded-lg shadow-md hover:bg-gray-100 transition"
            >
              Get Involved
            </a>
          </div>
        </div>

        {/* Social Media Buttons */}
        <div className="mt-8 text-center">
          <h3 className="text-xl font-semibold text-gray-200 mb-4">Follow Us</h3>
          <div className="flex justify-center gap-6">
            <a
              href="https://wa.me/7439600676" // Replace with your WhatsApp link
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-500 text-3xl hover:text-green-600 transition"
            >
              <FaWhatsapp />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100053993253639&mibextid=ZbWKwL" // Replace with your Facebook link
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 text-3xl hover:text-blue-700 transition"
            >
              <FaFacebook />
            </a>
            <a
              href="https://www.instagram.com/20_saandy/profilecard/?igsh=bDB5Mjd3c3JvZWYy" // Replace with your Instagram link
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-500 text-3xl hover:text-pink-600 transition"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
