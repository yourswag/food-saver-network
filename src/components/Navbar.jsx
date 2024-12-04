import React, { useState, useEffect, useRef } from "react";
import { FaSearch } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi"; // Hamburger icon from react-icons
import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const dropdownRef2 = useRef(null);
  const dropdownRefDonate = useRef(null);
  const searchRef = useRef(null);
  const hamburgerRef = useRef(null);

  const toggleDropdown = (dropdownNumber) => {
    setOpenDropdown((prevDropdown) =>
      prevDropdown === dropdownNumber ? null : dropdownNumber
    );
  };

  const toggleSearch = () => {
    setSearchOpen(!searchOpen);
  };

  const toggleMobileMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        (!dropdownRef2.current || !dropdownRef2.current.contains(event.target)) &&
        (!dropdownRefDonate.current ||
          !dropdownRefDonate.current.contains(event.target)) &&
        (!searchRef.current || !searchRef.current.contains(event.target)) &&
        (!hamburgerRef.current || !hamburgerRef.current.contains(event.target))
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
      <nav className="w-11/12 h-16 flex items-center px-6 fixed top-4 left-1/2 transform -translate-x-1/2 z-50 
        bg-gradient-to-r from-slate-900 via-transparent to-slate-900 bg-opacity-10 backdrop-blur-3xl rounded-3xl">
        <div className="flex items-center justify-between w-full">
          {/* Logo */}
          <Link to="/dashboard">
            <img
              src={logo}
              alt="Logo"
              className="h-16 w-auto mr-6 shadow-[0px_4px_6px_rgba(0,0,0,0.1)] cursor-pointer"
            />
          </Link>

          {/* Hamburger Menu */}
          <button
            ref={hamburgerRef}
            onClick={toggleMobileMenu}
            className="md:hidden text-white text-3xl"
          >
            <GiHamburgerMenu />
          </button>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex w-full justify-end text-2xl gap-12 items-center">
            <Link
              to="/"
              className="px-4 py-2 bg-opacity-20 text-white rounded-3xl border border-transparent focus:outline-none hover:border-white focus:ring-2 focus:ring-white"
            >
              EVENTS
            </Link>

            {/* JOIN US Dropdown */}
            <div className="relative" ref={dropdownRef2}>
              <button
                onClick={() => toggleDropdown(2)}
                className="px-4 py-2 bg-opacity-20 text-white rounded-3xl border border-transparent focus:outline-none hover:border-white focus:ring-2 font-semibold focus:ring-white"
              >
                JOIN US
              </button>
              {openDropdown === 2 && (
                <div
                  className="absolute left-1/2 transform -translate-x-1/2 text-sm mt-2 flex flex-col w-max 
                    bg-gradient-to-r from-slate-900 via-transparent to-slate-900 bg-opacity-10 
                    backdrop-blur-5xl rounded-3xl border border-white/30 shadow-lg p-8"
                >
                  <div className="flex flex-col font-medium items-start space-y-2">
                    <Link
                      to="/Ngologin"
                      className="block px-4 py-2 text-white hover:text-white hover:underline hover:underline-offset-4"
                    >
                      AS NGO
                    </Link>
                    <Link
                      to="/Supplierlogin"
                      className="block px-4 py-2 text-white hover:text-white hover:underline hover:underline-offset-4"
                    >
                      AS FOOD SUPPLIER
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link
              to="/aboutus"
              className="px-4 py-2 bg-opacity-20 text-white rounded-3xl border border-transparent focus:outline-none hover:border-white focus:ring-2 focus:ring-white"
            >
              ABOUT US
            </Link>

            {/* DONATE Dropdown */}
            <div className="relative" ref={dropdownRefDonate}>
              <button
                onClick={() => toggleDropdown(3)}
                className="px-4 py-2 bg-white text-black rounded-3xl border border-transparent font-semibold hover:border-white focus:outline-none focus:ring-2 focus:ring-white"
              >
                DONATE
              </button>
              {openDropdown === 3 && (
                <div
                  className="absolute left-1/2 transform -translate-x-1/2 text-sm mt-2 flex flex-col w-max 
                    bg-gradient-to-r from-slate-900 via-transparent to-slate-900 bg-opacity-10 
                    backdrop-blur-5xl rounded-3xl border border-white/30 shadow-lg p-8"
                >
                  <div className="flex flex-col items-start space-y-2">
                    <Link
                      to="/DonateMoney"
                      className="block px-4 py-2 text-white hover:text-white hover:underline hover:underline-offset-4"
                    >
                      Donate Money
                    </Link>
                    <Link
                      to="/DonateFood"
                      className="block px-4 py-2 text-white hover:text-white hover:underline hover:underline-offset-4"
                    >
                      Donate Food
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-1/2 transform -translate-x-1/2 bg-transparent p-6 rounded-lg shadow-lg w-full flex flex-col items-center gap-4">
            <Link to="/" className="text-white text-lg" onClick={toggleMobileMenu}>
              EVENTS
            </Link>
            <Link
              to="/aboutus"
              className="px-4 py-2 bg-opacity-20 text-white rounded-3xl border border-transparent focus:outline-none hover:border-white focus:ring-2 font-bold focus:ring-white"
            >
              ABOUT US
            </Link>
            <div className="relative" ref={dropdownRef2}>
              <button
                onClick={() => toggleDropdown(2)}
                className="px-4 py-2 bg-opacity-20 text-white rounded-3xl border border-transparent focus:outline-none hover:border-white focus:ring-2 font-bold focus:ring-white"
              >
                JOIN US
              </button>
              {openDropdown === 2 && (
                <div
                  className="absolute left-1/2 transform -translate-x-1/2 text-sm mt-2 flex flex-col w-max 
                    bg-gradient-to-r from-slate-900 via-transparent to-slate-900 bg-opacity-10 
                    backdrop-blur-5xl rounded-3xl border border-white/30 shadow-lg p-8"
                >
                  <div className="flex flex-col font-medium items-start space-y-2">
                    <Link
                      to="/Ngologin"
                      className="block px-4 py-2 text-white hover:text-white hover:underline hover:underline-offset-4"
                    >
                      AS NGO
                    </Link>
                    <Link
                      to="/Supplierlogin"
                      className="block px-4 py-2 text-white hover:text-white hover:underline hover:underline-offset-4"
                    >
                      AS FOOD SUPPLIER
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
