import React from "react";

const Contact = () => {
  return (
    <div
      id="contact"
      className="flex justify-center items-center h-auto bg-gray-100 py-10"
    >
      <div className="bg-white p-6 shadow-lg rounded-lg w-full max-w-6xl flex flex-col lg:flex-row">
        {/* Right Column - Contact Details */}
        <div className="w-full lg:w-1/2 mb-6 lg:mb-0 flex flex-col justify-center items-start text-center lg:text-left">
          <h4 className="text-xl font-semibold mb-6">Contact Information</h4>
          <div className="flex items-center space-x-3 mb-6 justify-center lg:justify-start">
            <i className="fas fa-map-marker-alt text-orange-500 text-2xl"></i>
            <p className="text-lg">12345 Fake St, NoWhere AB, Country</p>
          </div>
          <div className="flex items-center space-x-3 mb-6 justify-center lg:justify-start">
            <i className="fas fa-phone-alt text-orange-500 text-2xl"></i>
            <p className="text-lg">(869) 200-3560</p>
          </div>
          <div className="flex items-center space-x-3 mb-6 justify-center lg:justify-start">
            <i className="fas fa-envelope text-orange-500 text-2xl"></i>
            <p className="text-lg">suyashdhumal@gmail.com</p>
          </div>
        </div>

        {/* Vertical Line (only visible on large screens) */}
        <div className="hidden lg:block border-l border-gray-300 mx-6"></div>

        {/* Left Column - Contact Form */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center items-start">
          <h2 className="text-2xl font-semibold text-center mb-4">
            Available 24/7
          </h2>
          <h3 className="text-xl text-center mb-6">Get In Touch</h3>
          <form className="space-y-6 w-full">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter email"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                placeholder="Password"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                placeholder="Message"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 h-32 resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-orange-400 text-white font-semibold rounded-lg hover:bg-orange-500 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
