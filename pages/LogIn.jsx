import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../components/firebase';
import BackButton from '../components/BackButton';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { setUser } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      setUser(userCredential.user);
      navigate('/');
    } catch (error) {
      setError('Failed to log in. Please check your email and password and try again.');
      console.error('Login error:', error);
    }
  };

  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const userCredential = await signInWithPopup(auth, provider);
      setUser(userCredential.user);
      navigate('/');
    } catch (error) {
      setError('Failed to log in with Google. Please try again.');
      console.error('Google login error:', error);
    }
  };

  return (
    <div className='p-2 bg-gray-100 pt-16 min-h-screen'>
      <BackButton />
      <div className="flex items-center justify-center p-12 ">
        <div className="bg-white p-6 rounded shadow-md w-full max-w-md">
          <h1 className="text-3xl font-bold mb-4 text-center">Login</h1>
          <form onSubmit={handleLogin} className="space-y-4">
            {error && <p className="text-red-500">{error}</p>}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-blue-950 text-white font-semibold rounded-md hover:bg-orange-200"
            >
              Login
            </button>
          </form>
          <button
            onClick={handleGoogleLogin}
            className="flex items-center justify-center gap-2 mt-4 w-full py-2 px-4 border border-gray-300 rounded-md shadow-sm hover:bg-orange-200 text-gray-700"
          >
            <img src="https://docs.material-tailwind.com/icons/google.svg" alt="Google" className="h-6 w-6" />
            Login with Google
          </button>
          <div className="mt-4 text-sm text-center">
            <Link to="/forgot-password" className="text-blue-600 hover:underline">Forgot Password?</Link>
          </div>
          <div className="mt-2 text-sm text-center">
            <span>Don't have an account? </span>
            <Link to="/register" className="text-blue-600 hover:underline">Sign up here</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
