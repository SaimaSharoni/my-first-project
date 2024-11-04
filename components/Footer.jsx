import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-blue-950 text-white py-8 pt-6 mt-auto">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo and Description */}
          <div className="mb-6 md:mb-0 w-full md:w-1/4 text-center md:text-left">
            <h2 className="text-2xl font-bold mb-2">English Scanner</h2>
            <p className="text-gray-400">
              The one-stop English solution you've been waiting for to boost your self-confidence is English Scanner.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col md:flex-row md:items-center text-center md:text-left">
            <a href="/" className="text-gray-400 hover:text-white mx-2 my-1 md:my-0">Home</a>
            <a href="/about-us" className="text-gray-400 hover:text-white mx-2 my-1 md:my-0">About</a>
            <a href="/course" className="text-gray-400 hover:text-white mx-2 my-1 md:my-0">Course</a>
            <a href="/blog" className="text-gray-400 hover:text-white mx-2 my-1 md:my-0">Blogs</a>
            <a href="/contact" className="text-gray-400 hover:text-white mx-2 my-1 md:my-0">Contact</a>
          </div>

          {/* Social Media Icons */}
          <div className="flex justify-center md:justify-start space-x-4 mt-6 md:mt-0">
            <a href="https://www.facebook.com/scanenglish" className="text-gray-400 hover:text-white">
              <FaFacebook size={24} />
            </a>
            <a href="https://twitter.com" className="text-gray-400 hover:text-white">
              <FaTwitter size={24} />
            </a>
            <a href="https://instagram.com" className="text-gray-400 hover:text-white">
              <FaInstagram size={24} />
            </a>
            <a href="https://linkedin.com" className="text-gray-400 hover:text-white">
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()}. All rights reserved.
          <p>This website is under development</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
