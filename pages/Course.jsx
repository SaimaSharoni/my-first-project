import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { db } from '../components/firebase';
import { collection, getDocs } from 'firebase/firestore';
import BackButton from '../components/BackButton';


const Courses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const coursesSnapshot = await getDocs(collection(db, 'courses'));
        const fetchedCourses = coursesSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setCourses(fetchedCourses);
      } catch (error) {
        console.error('Error fetching courses: ', error);
      }
    };

    fetchCourses();
  }, []);

  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) return text;
    return text.substr(0, maxLength) + '...';
  };

  return (
   
      
    <div className="container pt-16 mx-auto py-8 px-4">
    
    <div className='flex items-center'>
           <BackButton/>
     <div className="flex-grow">
         <h1 className="text-3xl text-center font-bold mb-4">Courses</h1>
    </div>
</div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses.map(course => (
          <div key={course.id} className="border rounded-lg p-4 shadow">
            <h2 className="text-2xl font-bold mb-2">{course.title}</h2>
            <p className="mb-4">{truncateText(course.description, 150)}</p>
            <p className="text-lg font-semibold mb-4">Fee: {course.fee} BDT</p>
            <Link to={`/courses/${course.id}`} className="text-blue-500 hover:underline">
              View Details
            </Link>
          </div>
        ))}
      </div>

      {/* Render CourseFeeSection component with courses prop */}
      
    </div>
    
  );
};

export default Courses;
