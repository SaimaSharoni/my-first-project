import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';



const CourseCard = ({ title, description, fee, detailsLink }) => {
  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) return text;
    return text.substr(0, maxLength).trimEnd() + '...';
  };

  return (
    <div className="p-4">
      <div className="rounded-lg h-52 shadow-lg overflow-hidden bg-white">
        <div className="p-6">
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="text-gray-700 mb-4">{truncateText(description, 150)}</p>
          <p className="text-gray-900 font-bold">Fee: {fee} BDT</p>
          <a href={detailsLink} className="block mt-4 text-blue-600 hover:text-blue-700">
            View Details
          </a>
        </div>
      </div>
      
    </div>
  );
};

const CourseFeeSection = ({ courses }) => {
  if (!courses || courses.length === 0) {
    return null; // Return null or a loading indicator if courses is empty or undefined
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className='p-4 '>
    <div className="py-2 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 rounded-lg bg-orange-300">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Course Fees</h2>
        <Slider {...settings}>
          {courses.map(course => (
            <CourseCard
              key={course.id}
              title={course.title}
              description={course.description}
              fee={course.fee}
              detailsLink={`/courses/${course.id}`}
            />
          ))}
        </Slider>
        
      </div>
    </div>
    <div className='text-center p-6'>
      <Link to='/course' className="text-blue-950 hover:text-orange-600 mx-2 my-1 md:my-0 font-bold text-2xl">View all our Courses </Link>
  
    </div>
    </div>
  );
};

export default CourseFeeSection;
