// src/components/Layout.jsx
import React from "react";
import { Link } from "react-router-dom"; // Use this if you're using react-router-dom

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-gray-800 p-4">
        <div className="flex items-center justify-between w-full">
          <a 
            href="/dashboard" 
            className="text-white text-2xl font-bold rounded-md transition duration-300 whitespace-nowrap"
          >
            Food Saver Network
          </a>
        </div>
      </header>
      <main className="flex-grow">{children}</main>
      <footer className="bg-gray-800 text-white p-4 text-center">
        © 2024 Food Saver Network. All rights reserved.
      </footer>
    </div>
  );
};

export default Layout;
