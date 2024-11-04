import React from 'react';
import Slider from 'react-slick';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'; // Import icons for custom arrows

const BlogVideo = ({ videoId }) => {
  return (
    <div className="relative overflow-hidden px-4 rounded-lg shadow-lg transform transition duration-300 ease-in-out hover:scale-110 hover:z-10">
      <iframe
        width="100%"
        height="250"
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube video player"
        frameBorder='0'
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="w-full h-full object-cover"
        style={{ aspectRatio: '16 / 9' }} // Maintain aspect ratio
      ></iframe>
    </div>
  );
};

// Custom arrow components
const CustomPrevArrow = ({ className, style, onClick }) => (
  <div
    className={`${className} custom-prev-arrow`}
    style={{ 
      ...style, display: 'block', zIndex: 1 }}
    onClick={onClick}
  >
    <FaArrowLeft />
  </div>
);

const CustomNextArrow = ({ className, style, onClick }) => (
  <div
    className={`${className} custom-next-arrow`}
    style={{ ...style, display: 'block', fontSize: '2rem', zIndex: 1 }}
    onClick={onClick}
  >
    <FaArrowRight />
  </div>
);

const BlogSection = () => {
  const videos = [
    { id: 'UmgkLnVQaZo?si=L-g0ijtM77Alsjtw' }, // Replace with your YouTube video IDs
    { id: 'ERTsAbXA_08?si=UkLGCBGz1USygpnA' },
    { id: 'QRDFMPmFLG0?si=qGx2zLXzmj1_p0jH' },
    { id: '7_l-y7aAJtw?si=pJT4NkCp29SYezfN' },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 10000,
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
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />
  };

  return (
    <div className="bg-orange-300 py-4 m-6 rounded-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-blue-950 mb-8">Our Blog</h2>
        <Slider {...settings}>
          {videos.map((video) => (
            <BlogVideo key={video.id} videoId={video.id} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default BlogSection;
