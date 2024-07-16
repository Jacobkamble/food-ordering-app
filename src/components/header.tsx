// src/components/Header.js
import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom'
// import logo from '../path/to/your/logo.png'; // Adjust the path to your logo image

const Header :React.FC= () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div>
          <Link to="/">
            <img src={"https://cdn.logojoy.com/wp-content/uploads/2018/05/30151557/1516.png"} alt="Logo" className="h-12" />
          </Link>
        </div>

        {/* Navigation Links */}
        <nav className="space-x-4">
          <Link to="/" className="text-gray-700 hover:text-gray-900">Home</Link>
          <Link to="/about" className="text-gray-700 hover:text-gray-900">About</Link>
        </nav>

        {/* Cart Icon */}
        <div className="text-gray-700 hover:text-gray-900">
          <Link to="/cart">
            <FaShoppingCart size={24} />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
