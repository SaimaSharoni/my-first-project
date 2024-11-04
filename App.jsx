// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Login from './pages/LogIn';
import Register from './pages/Register';
import Course from './pages/Course';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import { AuthProvider } from './context/AuthContext';
import CourseDetails from './pages/CourseDetails';
import Admin from './pages/admin/Admin';
import UserLetsLearn from './pages/UserLetsLearn';
import ForgotPassword from './pages/ForgotPassword';




const App = () => {
  return (
    
      <AuthProvider>
        <div className="relative flex flex-col min-h-screen">
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/course" element={<Course />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/courses/:courseId" element={<CourseDetails />} />
            <Route path="/lets-learn" element={<UserLetsLearn />} />
            <Route path='/admin/*' element={<Admin/>} />
          
          </Routes>
          <Footer />
        </div>
      </AuthProvider>
    
  );
};

export default App;
