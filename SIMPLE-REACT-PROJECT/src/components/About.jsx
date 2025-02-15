import { useState, useEffect } from "react";
import TypingEffect from "react-typing-effect"; // For auto-typing effect
import manimg from "../assets/man.jpg";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Trigger the animation when component is mounted
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="py-20 bg-gray-50 h-[calc(100vh-80px)]">
      {/* Adjust height */}
      <div className="container mx-auto px-4 flex flex-col-reverse md:flex-row items-center h-full">
        {/* Left Section: Auto-typing text */}
        <div
          className={`md:w-1/2 flex flex-col items-start space-y-4 transform transition-all duration-500 ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
          }`}
        >
          <h5 className="text-xl text-gray-600">Hi, it's me</h5>
          <h1 className="text-3xl font-semibold text-gray-900">
            I'm Suyash Dhumal
          </h1>
          <p className="text-lg text-gray-700">
            I am passionate about frontend development with <br />
            expertise in{" "}
            <TypingEffect
              text={["HTML", "CSS", "JavaScript", "ReactJS", "NodeJS"]}
              speed={100}
              eraseDelay={300}
            />
          </p>
          
          {/* Social Media Icons */}
          <div className="flex space-x-6 mt-4">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github text-2xl text-gray-700 hover:text-orange-600"></i>
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook text-2xl text-gray-700 hover:text-orange-600"></i>
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram text-2xl text-gray-700 hover:text-orange-600"></i>
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin text-2xl text-gray-700 hover:text-orange-600"></i>
            </a>
            <a href="mailto:your-email@example.com">
              <i className="fas fa-envelope text-2xl text-gray-700 hover:text-orange-600"></i>
            </a>
          </div>
        </div>

        {/* Right Section: Profile image */}
        <div
          className={`md:w-1/2 transform transition-all duration-500 ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
          }`}
        >
          <img
            src={manimg} // Replace with your image URL
            alt="Suyash Dhumal"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
