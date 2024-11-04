import React, { useState, useEffect } from 'react';
import { db, storage } from '../../components/firebase';
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc, Timestamp } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { format } from 'date-fns';
import BackButton from '../../components/BackButton';

const AdminLetsLearn = () => {
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [fileUrl, setFileUrl] = useState(null);
  const [file, setFile] = useState(null);
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const postsSnapshot = await getDocs(collection(db, 'letslearn'));
        const fetchedPosts = postsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setPosts(fetchedPosts);
      } catch (error) {
        console.error('Error fetching posts: ', error);
      }
    };

    fetchPosts();
  }, []);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFile(file);
    setFileUrl(URL.createObjectURL(file));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let fileDownloadUrl = fileUrl;
    if (file) {
      const fileRef = ref(storage, `letslearn/${file.name}`);
      await uploadBytes(fileRef, file);
      fileDownloadUrl = await getDownloadURL(fileRef);
    }

    const postData = {
      title,
      content,
      fileUrl: fileDownloadUrl || null,
      createdAt: Timestamp.now(),
    };

    try {
      if (editId) {
        await updateDoc(doc(db, 'letslearn', editId), postData);
        setEditId(null);
      } else {
        const docRef = await addDoc(collection(db, 'letslearn'), postData);
        setPosts([...posts, { id: docRef.id, ...postData }]);
      }

      setTitle('');
      setContent('');
      setFile(null);
      setFileUrl(null);
    } catch (error) {
      console.error('Error adding/updating post: ', error);
    }
  };

  const handleEdit = (post) => {
    setTitle(post.title);
    setContent(post.content);
    setFileUrl(post.fileUrl);
    setEditId(post.id);
  };

  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, 'letslearn', id));
      setPosts(posts.filter(post => post.id !== id));
    } catch (error) {
      console.error('Error deleting post: ', error);
    }
  };

  return (
    <div className="pt-16 bg-gray-100 min-h-screen">
      <BackButton />
      <div className="px-4 sm:px-8 pt-2 min-h-screen flex flex-col lg:flex-row">
        <div className="flex-1 mb-8 lg:mr-8 lg:mb-0">
          <div className="bg-white p-4 sm:p-6 rounded shadow-md">
            <h3 className="text-xl font-bold mb-4">Posts</h3>
            <ul className="grid grid-cols-1 gap-4">
              {posts.map((post) => (
                <li key={post.id} className="bg-white p-4 rounded shadow-md">
                  <div className="mb-2">
                    <h4 className="font-semibold">{post.title}</h4>
                    <p>{post.content}</p>
                    {post.fileUrl && (
                      <p>
                        Attachment: <a href={post.fileUrl} target="_blank" rel="noopener noreferrer">Download File</a>
                      </p>
                    )}
                    <small className="text-gray-500">
                      {post.createdAt && format(post.createdAt.toDate(), 'PPpp')}
                    </small>
                  </div>
                  <div className="flex justify-end mt-2">
                    <button
                      onClick={() => handleEdit(post)}
                      className="bg-yellow-500 text-white py-1 px-2 rounded hover:bg-yellow-600 transition duration-200 mr-2"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(post.id)}
                      className="bg-red-500 text-white py-1 px-2 rounded hover:bg-red-600 transition duration-200"
                    >
                      Delete
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="w-full lg:w-1/3 bg-white p-4 sm:p-6 rounded shadow-md lg:sticky lg:top-20">
          <h2 className="text-2xl font-bold mb-6 text-center">Add/Edit Post</h2>
          <form onSubmit={handleSubmit} className="mb-4">
            <div className="mb-4">
              <label className="block text-gray-700">Post Title</label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Post Content</label>
              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                required
                className="w-full h-60 px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Attach File (Optional)</label>
              <input
                type="file"
                onChange={handleFileChange}
                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            {fileUrl && (
              <div className="mb-4">
                <p>Selected File: {file.name}</p>
              </div>
            )}
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-200"
            >
              {editId ? 'Update Post' : 'Add Post'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminLetsLearn;
