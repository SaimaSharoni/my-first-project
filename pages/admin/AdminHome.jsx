import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const AdminHome = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const isAdmin = sessionStorage.getItem('isAdmin');
    if (!isAdmin) {
      navigate('/admin/admin-login');
    }
  }, [navigate]);

  return (
    <div className="flex flex-col h-96">
      <div className="flex flex-col items-center justify-center flex-grow pt-20">
        <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Link to="../courses" className="bg-blue-500 text-white py-4 px-8 rounded-md shadow hover:bg-blue-700 transition duration-200">
            Manage Courses
          </Link>
          {/* <Link to="advertise" className="bg-green-500 text-white py-4 px-8 rounded-md shadow hover:bg-green-700 transition duration-200">
            Manage Advertise
          </Link> */}
          <Link to="../lets-learn" className="bg-yellow-500 text-white py-4 px-8 rounded-md shadow hover:bg-yellow-700 transition duration-200">
            Manage Let's Learn
          </Link>
          {/* <Link to="lets-learn" className="bg-pink-500 text-white py-4 px-8 rounded-md shadow hover:bg-pink-700 transition duration-200">
            Manage teacher
          </Link> */}
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
