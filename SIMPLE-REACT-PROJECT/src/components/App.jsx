import { useState } from "react";
import pLogo from "../assets/logo.svg";  // Adjusted the path to logo.svg

function App() {
  // State for mobile menu toggle
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle the mobile menu visibility
  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-md">
      <div className="max-w-screen-xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-4">
          <img src={pLogo} alt="Logo" className="h-8" />
        </div>

        {/* Desktop Navigation Menu */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#home" className="text-gray-700 hover:text-orange-600">
            Home
          </a>
          <a href="#about" className="text-gray-700 hover:text-orange-600">
            About
          </a>
          <a href="#service" className="text-gray-700 hover:text-orange-600">
            Service
          </a>
          <a href="#portfolio" className="text-gray-700 hover:text-orange-600">
            Portfolio
          </a>
          <a href="#testimonial" className="text-gray-700 hover:text-orange-600">
            Testimonial
          </a>
          <a href="#blog" className="text-gray-700 hover:text-orange-600">
            Blog
          </a>
          <a href="#contact" className="text-gray-700 hover:text-orange-600">
            Contact
          </a>
          <div className="hidden md:block">
            <button className="bg-orange-500 text-white py-2 px-6 rounded-full hover:bg-orange-600 focus:outline-none">
              Components
            </button>
          </div>
        </nav>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden flex items-center">
          <button
            onClick={handleMenuToggle}
            className="text-gray-700 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`md:hidden bg-white shadow-md ${isMenuOpen ? "block" : "hidden"}`}
      >
        <nav className="flex flex-col space-y-4 px-4 py-4">
          <a href="#home" className="text-gray-700 hover:text-orange-600">
            Home
          </a>
          <a href="#about" className="text-gray-700 hover:text-orange-600">
            About
          </a>
          <a href="#service" className="text-gray-700 hover:text-orange-600">
            Service
          </a>
          <a href="#portfolio" className="text-gray-700 hover:text-orange-600">
            Portfolio
          </a>
          <a href="#testimonial" className="text-gray-700 hover:text-orange-600">
            Testimonial
          </a>
          <a href="#blog" className="text-gray-700 hover:text-orange-600">
            Blog
          </a>
          <a href="#contact" className="text-gray-700 hover:text-orange-600">
            Contact
          </a>
          <div className="mt-4">
            <button className="bg-orange-500 text-white py-2 px-6 rounded-full hover:bg-orange-600 focus:outline-none">
              Components
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default App;
