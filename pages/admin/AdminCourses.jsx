import React, { useState, useEffect } from 'react';
import { db } from '../../components/firebase';
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc } from 'firebase/firestore';
import BackButton from '../../components/BackButton';

const AdminCourses = () => {
  const [courses, setCourses] = useState([]);
  const [courseTitle, setCourseTitle] = useState('');
  const [courseDescription, setCourseDescription] = useState('');
  const [courseFee, setCourseFee] = useState('');
  const [editId, setEditId] = useState(null);

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const courseData = {
      title: courseTitle,
      description: courseDescription,
      fee: courseFee,
    };

    try {
      if (editId) {
        await updateDoc(doc(db, 'courses', editId), courseData);
        setEditId(null);
      } else {
        await addDoc(collection(db, 'courses'), courseData);
      }

      // Refresh courses list after adding/updating
      const updatedCoursesSnapshot = await getDocs(collection(db, 'courses'));
      const updatedCourses = updatedCoursesSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setCourses(updatedCourses);

      // Clear form fields
      setCourseTitle('');
      setCourseDescription('');
      setCourseFee('');
    } catch (error) {
      console.error('Error adding/updating course: ', error);
    }
  };

  const handleEdit = (course) => {
    setEditId(course.id);
    setCourseTitle(course.title);
    setCourseDescription(course.description);
    setCourseFee(course.fee);
  };

  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, 'courses', id));
      setCourses(courses.filter(course => course.id !== id));
    } catch (error) {
      console.error('Error deleting course: ', error);
    }
  };

  return (
    <div className='pt-16 bg-gray-100 min-h-screen'>
      <BackButton />
      <div className="px-4 lg:px-8 pt-2 min-h-screen flex flex-col lg:flex-row">
        <div className="flex-1 mr-0 lg:mr-8 mb-8 lg:mb-0">
          <div className="grid grid-cols-1 gap-6">
            {courses.map((course) => (
              <div key={course.id} className="bg-white p-6 rounded shadow-md">
                <div>
                  <p className="font-semibold">{course.title}</p>
                  <p>Description: {course.description}</p>
                  <p>Fee: {course.fee} BDT</p>
                </div>
                <div className="flex justify-end mt-4">
                  <button
                    onClick={() => handleEdit(course)}
                    className="bg-yellow-500 text-white py-1 px-2 rounded hover:bg-yellow-600 transition duration-200 mr-2"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(course.id)}
                    className="bg-red-500 text-white py-1 px-2 rounded hover:bg-red-600 transition duration-200"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex-1 max-w-full lg:max-w-md bg-white p-6 rounded shadow-md sticky top-20 h-fit">
          <h2 className="text-2xl font-bold mb-6 text-center">{editId ? 'Update Course' : 'Add Course'}</h2>
          <form onSubmit={handleSubmit} className="mb-4">
            <div className="mb-4">
              <label className="block text-gray-700">Course Title</label>
              <input
                type="text"
                value={courseTitle}
                onChange={(e) => setCourseTitle(e.target.value)}
                required
                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Course Description</label>
              <textarea
                value={courseDescription}
                onChange={(e) => setCourseDescription(e.target.value)}
                required
                className="w-full h-40 lg:h-60 px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Course Fee</label>
              <input
                type="text"
                value={courseFee}
                onChange={(e) => setCourseFee(e.target.value)}
                required
                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-200"
            >
              {editId ? 'Update Course' : 'Add Course'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminCourses;
