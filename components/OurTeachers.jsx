import React, { useState, useEffect } from 'react';
import teacher1 from '../assets/tea1.jpeg';
import teacher2 from '../assets/tea2.jpeg';
import teacher3 from '../assets/tea3.jpeg';

const TeacherCard = ({ image, name,position, location, large }) => {
  return (
    <div
      className={`bg-orange-300 w-2/3 rounded-lg overflow-hidden shadow-lg m-4 transition-transform duration-700 ease-in-out ${large ? 'transform scale-110' : 'hidden md:block'}`}
    >
      <img src={image} alt={`${name}`} className="w-full h-auto object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-bold">{name}</h3>
        <p className="text-gray-600 ">{position}</p>
        <p className="text-gray-600 ">{location}</p>
      </div>
    </div>
  );
};

const OurTeachers = () => {
  const teachers = [
    {
      image: teacher1,
      name: 'Shamser Sarder',
      position:'Chairman',
      location: "BA in English(1st),MA in English, BEd(1st), MSS(1st),MEd(3.10-DU) Master Trainer in English (Trained by British council)"
    },
    {
      image: teacher2,
      name: 'Shams Ishtiaque Rahman',
      position:'Managing Director',
      location: 'BSc and MSc in Computer Science from Stony Brook University, New York, USA O Levels, A Levels from Scholastica School (English Medium)'
    },
    {
      image: teacher3,
      name: 'Md. Abdur Razzak Khan',
      position:'Chief Executive Officer',
      location: 'MBA, BBA in Tourism and Hospitality Management University of Dhaka'
    }
  ];

  const [currentMiddleIndex, setCurrentMiddleIndex] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMiddleIndex((prevIndex) => (prevIndex + 1) % teachers.length);
    }, 10000);

    return () => clearInterval(interval);
  }, [teachers.length]);

  return (
    <div className="py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-8">Our Team</h2>
        <div className="flex justify-center">
          {teachers.map((teacher, index) => (
            <TeacherCard 
              key={index}
              image={teacher.image}
              name={teacher.name}
              position={teacher.position}
              location={teacher.location}
              large={index === currentMiddleIndex}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurTeachers;
