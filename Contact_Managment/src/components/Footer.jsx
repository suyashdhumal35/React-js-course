import { Link } from "react-router-dom"; // Optional: for routing links in the footer

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto px-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Left Section: Footer Text */}
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="text-lg">&copy; {new Date().getFullYear()} Suyash Dhumal. All Rights Reserved.</p>
          </div>

          {/* Right Section: Social Media Icons */}
          <div className="flex space-x-6 justify-center md:justify-end">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github text-xl hover:text-orange-600"></i>
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook text-xl hover:text-orange-600"></i>
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram text-xl hover:text-orange-600"></i>
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin text-xl hover:text-orange-600"></i>
            </a>
            <a href="mailto:your-email@example.com">
              <i className="fas fa-envelope text-xl hover:text-orange-600"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
