// src/pages/admin/Admin.jsx
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AdminHome from './AdminHome';
import AdminLogin from './AdminLogin';
import AdminCourses from './AdminCourses';
import AdminLetsLearn from './AdminLetsLearn';
// import AdminAdvertise from './AdminAdvertise';

const Admin = () => {
  return (
    <Routes>
      <Route path="admin-home" element={<AdminHome />} />
      <Route path="admin-login" element={<AdminLogin />} />
      <Route path="courses" element={<AdminCourses />} />
      <Route path="lets-learn" element={<AdminLetsLearn />} />
      {/* <Route path="advertise" element={<AdminAdvertise />} /> */}
    </Routes>
  );
};

export default Admin;
