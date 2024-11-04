import React, { useState, useEffect } from 'react';
import Hero from '../components/Hero';
import OurTeachers from '../components/OurTeachers';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BlogSection from '../components/BlogSection';
import CourseFeeSection from '../components/CourseFeeSection';
import AboutCourse from '../components/AboutCourse';
import { db } from '../components/firebase'; // Adjust the path as per your file structure
import { collection, getDocs } from 'firebase/firestore';

const Home = () => {
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

  return (
    <div>
      <Hero />
      <AboutCourse />
      <OurTeachers />
      <div className="my-8 mx-4 md:mx-10 lg:mx-14 lg:mb-0 bg-orange-300 rounded-2xl py-4">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-blue-950 mb-4 px-4 md:px-6 lg:px-10">Why US</h2>
        <p className="text-base md:text-lg lg:text-xl text-blue-950 px-4 md:px-6 lg:px-10">
          What sets the English Scanner apart from others is our exceptional team of educators.
          We have Harvard-graduated teachers and professionals who have studied in the USA, bringing a wealth of knowledge and expertise to our institution.
          Our team also includes highly qualified software engineers with 17 years of experience.
          This unique combination of academic excellence and real-world experience ensures that our students receive the highest quality education.
          Our teachers are not only experts in their fields but also passionate about helping students achieve their goals.
          With a focus on innovative teaching methods and personalized attention, we provide a learning environment that is both challenging and supportive.
          Join English Scanner and experience the difference that our distinguished faculty can make in your educational journey.
        </p>
      </div>

      <CourseFeeSection courses={courses} />

      <BlogSection />
    </div>
  );
};

export default Home;
