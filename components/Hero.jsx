import React, { useState, useEffect } from 'react';
import poster01 from '../assets/poster1..jpg'; // Adjust image paths accordingly
import poster02 from '../assets/img2.jpg';
import poster03 from '../assets/img4.jpg';

const Hero = () => {
  const images = [poster01, poster02, poster03];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container mx-auto px-4 py-12 md:flex items-center justify-between rounded-xl shadow-lg pt-20 bg-white">
      {/* Left side - Image Carousel */}
      <div className="w-5/6 md:w-1/2 mb-8 md:mb-0 md:px-10">
        <img
          src={images[currentImageIndex]}
          alt="Hero Image"
          className="w-full h-auto rounded-lg shadow-lg"
        />
      </div>

      {/* Right side - Text Boxes */}
      <div className="w-full md:w-1/2 text-center md:text-left px-4 md:px-8 py-6 md:py-0 bg-orange-300 rounded-xl">
        {/* First Text Box */}
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mb-4">
            English Scanner
          </h2>
          <p className="text-lg text-blue-950 leading-relaxed">
          English Scanner is a premier educational institution dedicated to helping students achieve their academic and professional goals.
           We specialise in teaching English language skills and preparing students for a variety of standardised tests, including the GRE, GMAT, TOEFL, IELTS, Duolingo, SAT, and PTE. 
           Our experienced instructors use innovative teaching methods to ensure that every student can succeed. At English Scanner, we believe that learning is a lifelong journey, and we are committed to supporting our students every step of the way.
            We offer flexible class schedules to accommodate busy lifestyles and provide personalised attention to address individual learning needs. Our modern facilities and online resources create a conducive learning environment for students.
             Whether you are looking to improve your English proficiency or prepare for a specific exam, English Scanner is here to help. We are open to all learners, and our diverse community fosters a rich, inclusive educational experience.
              Join the English Scanner today and take the first step towards fulfilling your dreams.
          </p>
        </div>

        {/* Second Text Box */}
        <div>
          <p className="text-lg text-blue-950 px-4">
            @2free classes for everyone. 
          </p>
          <p className="text-lg text-blue-950 px-4">
             @50% off for the first 50 people!! 
          </p>
          <p className="text-lg text-blue-950 px-4">
             @Offline and in-person classes
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
