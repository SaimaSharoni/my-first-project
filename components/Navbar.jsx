import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import img1 from '../assets/eng-sc.png';
import { useAuth } from '../context/AuthContext';
import { signOut } from 'firebase/auth';
import { auth } from '../components/firebase';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, setUser } = useAuth();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = async () => {
    await signOut(auth);
    setUser(null);
  };

  return (
    <nav className="bg-white shadow fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Left side - Logo */}
          <div className="flex-shrink-0 flex items-center text-2xl">
            <img className="h-14 w-auto" src={img1} alt="Logo" />
            <span className="ml-2">English Scanner</span>
          </div>

          {/* Right side - Links */}
          <div className="hidden md:flex md:items-center space-x-4">
            <Link to="/" className="text-blue-950 hover:bg-orange-600 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</Link>
            <Link to="/lets-learn" className="text-blue-950 hover:bg-orange-600 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Let's learn</Link>
            <Link to="/about-us" className="text-blue-950 hover:bg-orange-600 hover:text-white px-3 py-2 rounded-md text-sm font-medium">About</Link>
            <Link to="/blog" className="text-blue-950 hover:bg-orange-600 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Blogs</Link>
            <Link to="/course" className="text-blue-950 hover:bg-orange-600 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Courses</Link>
            <Link to="/contact" className="text-blue-950 hover:bg-orange-600 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Contact</Link>
            {user ? (
              <button onClick={handleLogout} className="text-orange-600 py-2 px-4 mx-2 rounded-full bg-blue-950 hover:bg-blue-800">Logout</button>
            ) : (
              <>
                <Link to='/login'><button className="text-orange-600 py-2 px-4 mx-2 rounded-full bg-blue-950 hover:bg-blue-800">Login</button></Link>
                <Link to='/register'><button className="text-orange-600 py-2 px-4 mx-2 rounded-full bg-blue-950 hover:bg-blue-800">Register</button></Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center">
            <button onClick={toggleMenu} className="text-gray-400 focus:outline-none focus:text-blue-950">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Links */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="pt-2 pb-3 space-y-1">
          <Link to="/" className="text-blue-950 hover:bg-orange-600 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Home</Link>
          <Link to="/lets-learn" className="text-blue-950 hover:bg-orange-600 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Let's learn</Link>
          <Link to="/about-us" className="text-blue-950 hover:bg-orange-600 hover:text-white block px-3 py-2 rounded-md text-base font-medium">About</Link>
          <Link to="/blog" className="text-blue-950 hover:bg-orange-600 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Blogs</Link>
          <Link to="/course" className="text-blue-950 hover:bg-orange-600 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Courses</Link>
          <Link to="/contact" className="text-blue-950 hover:bg-orange-600 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Contact</Link>
          {user ? (
            <button onClick={handleLogout} className="text-orange-600 py-2 px-4 mx-2 rounded-full bg-blue-950 hover:bg-blue-800">Logout</button>
          ) : (
            <>
              <Link to='/login'><button className="text-orange-600 py-2 px-4 mx-2 rounded-full bg-blue-950 hover:bg-blue-800">Login</button></Link>
              <Link to='/register'><button className="text-orange-600 py-2 px-4 mx-2 rounded-full bg-blue-950 hover:bg-blue-800">Register</button></Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
