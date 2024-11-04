// src/pages/CourseDetails.jsx
import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { Navigate, useParams } from 'react-router-dom';
import { db } from '../components/firebase';
import { doc, getDoc } from 'firebase/firestore';

const CourseDetails = () => {
  const { user } = useAuth();
  const { courseId } = useParams();
  const [course, setCourse] = useState(null);

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const courseDoc = await getDoc(doc(db, 'courses', courseId));
        if (courseDoc.exists()) {
          setCourse({ id: courseDoc.id, ...courseDoc.data() });
        } else {
          console.log('No such course!');
        }
      } catch (error) {
        console.error('Error fetching course details: ', error);
      }
    };

    fetchCourse();
  }, [courseId]);

  if (!user) {
    return <Navigate to="/login" />;
  }

  if (!course) {
    return <div className="container mx-auto py-8 px-4">Course not found.</div>;
  }

  return (
    <div className="container mx-auto py-8 px-4 pt-20">
      <h1 className="text-3xl font-bold mb-4">{course.title}</h1>
      <p className="mb-4">{course.description}</p>
      <p className="text-2xl font-semibold mb-4">Course Fee: {course.fee} BDT</p>
    </div>
  );
};

export default CourseDetails;
