import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { db, auth } from '../components/firebase';
import { collection, getDocs } from 'firebase/firestore';
import { format } from 'date-fns';

const UserLetsLearn = () => {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const checkUser = () => {
      auth.onAuthStateChanged(user => {
        if (!user) {
          navigate('/login');
        }
      });
    };

    const fetchPosts = async () => {
      try {
        const postsSnapshot = await getDocs(collection(db, 'letslearn'));
        const fetchedPosts = postsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setPosts(fetchedPosts);
      } catch (error) {
        console.error('Error fetching posts: ', error);
      }
    };

    checkUser();
    fetchPosts();
  }, [navigate]);

  const sharePost = async (post) => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: post.title,
          text: post.content,
          url: window.location.href, // Replace with the actual URL of the post if available
        });
        console.log('Post shared successfully');
      } catch (error) {
        console.error('Error sharing post: ', error);
      }
    } else {
      alert('Web Share API is not supported in your browser.');
    }
  };

  return (
    <div className="p-4 sm:p-8 bg-gray-100 min-h-screen" style={{ paddingTop: '5rem' }}>

      <div className="w-full mx-auto bg-white p-4 sm:p-6 rounded shadow-md">
        <h2 className="text-xl sm:text-2xl font-bold mb-6 text-center">Let's Learn</h2>
        <ul className="grid grid-cols-1 gap-4">
          {posts.map((post) => (
            <li key={post.id} className="bg-white p-4 rounded shadow-md">
              <div className="mb-2 flex flex-col sm:flex-row justify-between items-start sm:items-center">
                <h4 className="font-semibold text-lg sm:text-base">{post.title}</h4>
                <small className="text-gray-500 font-bold mt-1 sm:mt-0">
                  {post.createdAt && format(post.createdAt.toDate(), 'PPpp')}
                </small>
              </div>
              
              <p className="mb-2">{post.content}</p>
              <div className="flex flex-col sm:flex-row justify-between">
                {post.fileUrl && (
                  <p className="mb-2">
                    <a
                      href={post.fileUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue-950 text-white py-1 px-2 rounded hover:bg-orange-600 transition duration-200 inline-block"
                      download
                    >
                      Download File
                    </a>
                  </p>
                )}
                <div className="mt-2 sm:mt-0 flex justify-end sm:justify-start">
                  <button
                    onClick={() => sharePost(post)}
                    className="bg-orange-600 text-white py-1 px-2 rounded hover:bg-blue-950 transition duration-200"
                  >
                    Share
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default UserLetsLearn;
