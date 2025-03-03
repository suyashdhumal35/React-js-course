import { useState, useEffect } from "react";
import TypingEffect from "react-typing-effect"; // For auto-typing effect
import manimg from "../assets/man.jpg"; // Adjusted image path if necessary
import { Link } from "react-router-dom"; // Import Link for routing

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Trigger the animation when the component is mounted
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="py-20 bg-white h-[calc(100vh-80px)]">
      {/* Adjust height to account for header */}
      <div className="container mx-auto px-4 flex flex-col-reverse md:flex-row items-center h-full">
        {/* Left Section: Auto-typing text */}
        <div
          className={`md:w-1/2 flex flex-col items-start space-y-4 transform transition-all duration-500 ${
            isVisible
              ? "opacity-100 translate-x-0"
              : "opacity-0 translate-x-[-5rem]"
          }`}
        >
          <h5 className="text-xl text-gray-600">Hi, it's me</h5>
          <h1 className="text-3xl font-semibold text-gray-900">
            I'm Suyash Dhumal
          </h1>
          <p className="text-lg text-gray-700">
            I am passionate about frontend development with expertise in:{" "}
            <span className="text-lg text-gray-900"> </span>
            <TypingEffect
              text={["HTML", "CSS", "JavaScript", "ReactJS", "NodeJS"]}
              speed={100} // Typing speed
              eraseDelay={300} // Delay before erasing
              eraseSpeed={50} // Erasing speed
              typingDelay={500} // Delay before typing starts
              cursor={true}
            />
          </p>

          {/* Buttons Section */}
          <div className="flex space-x-4 mt-6">
            {/* Hire Me Button */}
            <Link
              to="/contact" // Link to contact route
              className="bg-orange-500 text-white font-serif py-2 px-6 rounded-lg hover:bg-orange-600 transition duration-300 ease-in-out shadow-md transform"
            >
              Hire Me
            </Link>

            {/* Download CV Button */}
            <a
              href="https://drive.google.com/file/d/1LfoKezpQAn5kBfxIHnTe1myMKl4nogpU/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-900 text-white font-serif py-2 px-6 rounded-lg hover:bg-gray-800 transition duration-300 ease-in-out shadow-md transform"
            >
              Download CV
            </a>
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-6 mt-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github text-2xl text-gray-700 hover:text-orange-600"></i>
            </a>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-facebook text-2xl text-gray-700 hover:text-orange-600"></i>
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram text-2xl text-gray-700 hover:text-orange-600"></i>
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
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
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"
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

export default Home;
