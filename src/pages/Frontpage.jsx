import React, { useState } from "react";
import donation from "../assets/images/donation.jpg"; // Import the image
import supplie from "../assets/images/supplie.jpg"; // Import the image

import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { FaWhatsapp, FaFacebook, FaInstagram } from "react-icons/fa"; // Import icons

const Frontpage = () => {
  // State for controlling modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to open and close the modal
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="min-h-screen bg-slate-900 py-10 px-5 rounded-[45px]">
      {/* Page Heading */}
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-100"></h1>
        <p className=" text-[3.3rem] font-bold text-gray-50">
          Making a difference, one step at a time
        </p>
        <p className="text-lg mt-5 text-gray-300">Learn about our mission, vision, and the impact we aim to create.</p>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Section 1 */}
        <div className="flex flex-col justify-center">
          <h2 className="text-[3rem] font-semibold text-gray-100 mb-4">Our Mission</h2>
          <p className="text-gray-300">
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
        <div className="flex justify-end pr-6">
          <img
            src={supplie}
            alt="Helping Hands"
            className="rounded-3xl shadow-lg"
            style={{ width: "400px", height: "auto" }}
          />
        </div>

        <div className="flex flex-col justify-center">
          <h2 className="text-[3rem] font-semibold text-gray-100 mb-4">Our Vision</h2>
          <p className="text-gray-400">
            We envision a world where no one goes hungry and resources are shared equitably. Through innovation, collaboration, and relentless dedication, we strive to build sustainable solutions to food insecurity.
          </p>
        </div>
        
        <div>
          <DotLottieReact
            src="https://lottie.host/a1e57666-5f3b-4065-aafb-b7df79a57eb6/3glu5y5hHm.lottie"
            loop
            autoplay
          />
        </div>
      </div>

      {/* Our Values */}
      <div className="max-w-5xl mx-auto mt-16 text-center">
        <h2 className="text-[3rem] font-semibold text-gray-100 mb-6">Our Core Values</h2>
        <div className="flex flex-wrap justify-center gap-6">
          <div className="p-6 bg-slate-800 shadow-md rounded-2xl w-full sm:w-64">
            <h3 className="text-2xl font-bold text-gray-100 mb-2">Compassion</h3>
            <p className="text-gray-300">
              We care deeply about the well-being of individuals and communities.
            </p>
          </div>
          <div className="p-6 bg-slate-800 shadow-md rounded-2xl w-full sm:w-64">
            <h3 className="text-2xl font-bold text-gray-100 mb-2">Sustainability</h3>
            <p className="text-gray-300">
              Reducing food waste and fostering eco-friendly solutions.
            </p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="mt-16 bg-violet-500 text-white py-10 rounded-full">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-[3rem] font-bold mb-4">Join Us in Making a Difference</h2>
          <p className="mb-6 text-lg">
            Whether you donate, volunteer, or partner with us, your support can change lives.
          </p>
          <button
            onClick={toggleModal}
            className="px-6 py-3 text-2xl bg-white text-violet-500 font-semibold rounded-lg shadow-md hover:bg-gray-100 transition"
          >
            Get Involved
          </button>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg w-11/12 sm:w-3/4 md:w-1/2">
            <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">Join Us</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {/* Card 1 */}
              <div className="bg-violet-500 text-white text-center p-6 rounded-xl shadow-lg hover:bg-violet-600 transition cursor-pointer">
                <h3 className="text-xl font-semibold justify-between mb-4"> </h3>
                <a href="/Supplierlogin" className="text-lg font-semibold">As Supplier</a>
              </div>
              {/* Card 2 */}
              <div className="bg-blue-500 text-white text-center p-6 rounded-xl shadow-lg hover:bg-blue-600 transition cursor-pointer">
                <h3 className="text-xl font-semibold mb-4"> </h3>
                <a href="/Ngologin" className="text-lg font-semibold">As Ngo</a>
              </div>
              {/* Card 3 */}
              <div className="bg-green-500 text-white text-center p-6 rounded-xl shadow-lg hover:bg-green-600 transition cursor-pointer">
                <h3 className="text-xl font-semibold mb-4"></h3>
                <a href="/DonateMoney" className="text-lg font-semibold">Donate Money</a>
              </div>
            </div>
            <div className="text-center mt-6">
              <button
                onClick={toggleModal}
                className="px-6 py-3 bg-gray-200 text-gray-800 font-semibold rounded-lg shadow-md hover:bg-gray-300 transition"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Social Media Buttons */}
      <div className="mt-8 text-center">
        <h3 className="text-2xl font-semibold text-gray-200 mb-4">Follow Us</h3>
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
  );
};

export default Frontpage;
