import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const BackButton = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1); // Go back in history
  };

  return (
    <button
      className="top-0 left-0 m-4 bg-blue-950 hover:bg-orange-300 text-white font-bold py-2 px-4 rounded-full flex items-center focus:outline-none focus:shadow-outline"
      onClick={goBack}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 mr-2"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M15 19l-7-7 7-7"
        />
      </svg>
    
    </button>
  );
};

export default BackButton;
