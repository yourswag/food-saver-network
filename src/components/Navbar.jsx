import React, { useState, useEffect, useRef } from "react";
import { FaSearch } from "react-icons/fa";
import logo from "../assets/images/logo.png"; // Adjust to your directory structure
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import pic from "../assets/images/pic.jpg";

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [searchOpen, setSearchOpen] = useState(false);

  const dropdownRef2 = useRef(null);
  const dropdownRefDonate = useRef(null);
  const searchRef = useRef(null);

  const toggleDropdown = (dropdownNumber) => {
    setOpenDropdown((prevDropdown) =>
      prevDropdown === dropdownNumber ? null : dropdownNumber
    );
  };

  const toggleSearch = () => {
    setSearchOpen(!searchOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        (!dropdownRef2.current || !dropdownRef2.current.contains(event.target)) &&
        (!dropdownRefDonate.current || !dropdownRefDonate.current.contains(event.target)) &&
        (!searchRef.current || !searchRef.current.contains(event.target))
      ) {
        setOpenDropdown(null);
        setSearchOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="max-h-screen w-screen relative">
      {/* Fixed Background Image */}
      <img
        src={pic}
        className="object-cover w-full h-full fixed top-0 left-0"
        alt="Sample"
      />
      <nav className="w-11/12 h-16 flex items-center px-6 fixed top-4 left-1/2 transform -translate-x-1/2 z-50 
        bg-gradient-to-r  to-transparent rounded-3xl 
        backdrop-blur-lg">
        {/* Logo */}
        <div className="flex items-center justify-start">
          <img src={logo} alt="Logo" className="h-16 w-auto mr-6" />
        </div>

        {/* Navbar Content */}
        <div className="flex w-full justify-end text-2xl gap-12 items-center">
        <Link
            to="/"
            className="px-4 py-2 bg-opacity-20 text-black rounded-3xl border border-transparent 
            focus:outline-none hover:border-black focus:ring-2 focus:ring-black"
          >
            EVENTS
          </Link>
          {/* Dropdown Button for JOIN US */}
          <div className="relative" ref={dropdownRef2}>
            <button
              onClick={() => toggleDropdown(2)}
              className="px-4 py-2 bg-opacity-20 text-black rounded-3xl border border-transparent 
              focus:outline-none hover:border-black focus:ring-2 font-semibold focus:ring-black"
            >
              JOIN US
            </button>
            {openDropdown === 2 && (
              <div
                className="absolute left-1/2 transform -translate-x-1/2 text-sm mt-2 flex flex-col w-max 
                backdrop-blur-md text-black rounded-3xl p-8"
              >
                <div className="flex flex-col font-medium items-start space-y-2">
                  <Link
                    to="/Ngologin"
                    className="block px-4 py-2 text-black hover:text-black hover:underline hover:underline-offset-4"
                  >
                    AS NGO
                  </Link>
                  <Link
                    to="/Supplierlogin"
                    className="block px-4 py-2 text-black hover:text-black hover:underline hover:underline-offset-4"
                  >
                    AS FOOD SUPPLIER
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* ABOUT US Button */}
          <Link
            to="/aboutus"
            className="px-4 py-2 bg-opacity-20 text-black rounded-3xl border border-transparent 
            focus:outline-none hover:border-black focus:ring-2 focus:ring-black"
          >
            ABOUT US
          </Link>

          {/* Search Bar */}
          <div className="relative flex items-center flex-shrink-0" ref={searchRef}>
            <button onClick={toggleSearch} className="text-black p-2">
              <FaSearch size={25} />
            </button>
            {searchOpen && (
              <div
                className="transition-all duration-300 flex items-center ml-4"
                style={{
                  opacity: searchOpen ? 1 : 0,
                  width: searchOpen ? "200px" : "0",
                }}
              >
                <input
                  type="text"
                  placeholder="Search..."
                  className="px-4 py-2 border text-black border-black rounded-3xl"
                  style={{
                    transition: "width 0.3s ease-in-out",
                    width: searchOpen ? "200px" : "0",
                  }}
                />
              </div>
            )}
          </div>

          {/* Divider */}
          <div className="border-r -ml-10 border-black h-12"></div>

          {/* Dropdown Button for DONATE */}
          <div className="relative" ref={dropdownRefDonate}>
            <button
              onClick={() => toggleDropdown(3)}
              className="px-4 py-2 bg-white text-black rounded-3xl border border-transparent font-semibold
            hover:border-black focus:outline-none focus:ring-2 focus:ring-black"
            >
              DONATE
            </button>
            {openDropdown === 3 && (
              <div
                className="absolute left-1/2 transform -translate-x-1/2 text-sm mt-2 flex flex-col w-max 
                backdrop-blur-md text-black rounded-3xl p-8"
              >
                <div className="flex flex-col items-start space-y-2">
                  <Link
                    to="/DonateMoney"
                    className="block px-4 py-2 text-base text-black hover:text-black hover:underline hover:underline-offset-4"
                  >
                    Donate Money
                  </Link>
                  <Link
                    to="/DonateFood"
                    className="block px-4 py-2 text-base text-black hover:text-black hover:underline hover:underline-offset-4"
                  >
                    Donate Food
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
