import React, { useState } from 'react';
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../components/firebase';
import { useNavigate, Link } from 'react-router-dom';
import BackButton from '../components/BackButton';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert('Registration successful');
      navigate('/'); // Navigate to '/' after successful registration
    } catch (error) {
      setError(error.message);
    }
  };

  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      alert('Login with Google successful');
      navigate('/'); // Navigate to '/' after successful login
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className=' p-2 bg-gray-100 pt-16'>
      <BackButton />
    <div className="flex items-center justify-center p-4 ">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <form onSubmit={handleRegister}>
          <div className="mb-4">
            <label className="block text-gray-700">Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700">Confirm Password:</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-950 text-white py-2 rounded hover:bg-orange-200 transition duration-200"
          >
            Register
          </button>
        </form>
        <div className="mt-4 text-sm text-center">
          <span>Already have an account? </span>
          <Link to="/login" className="text-blue-600 hover:underline">Login here</Link>
        </div>
        <button
            onClick={handleGoogleLogin}
            className="flex items-center justify-center gap-2 mt-4 w-full py-2 px-4 border border-gray-300 rounded-md shadow-sm hover:bg-orange-200 text-gray-700"
          >
            <img src="https://docs.material-tailwind.com/icons/google.svg" alt="Google" className="h-6 w-6" />
            Register with Google
          </button>
        
      </div>
    </div>
    </div>
  );
};

export default Register;
