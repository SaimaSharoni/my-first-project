// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, FacebookAuthProvider, signInWithPopup } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAHOlx-QDWO6APxsUVEkSG8Ek9V8xrVAig",
  authDomain: "eng-sca-809cc.firebaseapp.com",
  projectId: "eng-sca-809cc",
  storageBucket: "eng-sca-809cc.appspot.com",
  messagingSenderId: "158592579900",
  appId: "1:158592579900:web:8f92b20ef6d5e9e69b0639"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();

// Initialize Firestore and get a reference to the service
const db = getFirestore(app);
const storage = getStorage(app);

// Function to sign in with Google using a popup
const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    const user = result.user;
    // Handle the signed-in user information and token as needed
    console.log('Google sign-in successful:', user, token);
  } catch (error) {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    const email = error.customData.email;
    const credential = GoogleAuthProvider.credentialFromError(error);
    console.error('Google sign-in error:', errorCode, errorMessage, email, credential);
  }
};

// Function to sign in with Facebook using a popup
const signInWithFacebook = async () => {
  try {
    const result = await signInWithPopup(auth, facebookProvider);
    const credential = FacebookAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    const user = result.user;
    // Handle the signed-in user information and token as needed
    console.log('Facebook sign-in successful:', user, token);
  } catch (error) {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    const email = error.customData.email;
    const credential = FacebookAuthProvider.credentialFromError(error);
    console.error('Facebook sign-in error:', errorCode, errorMessage, email, credential);
  }
};

export { auth, googleProvider, facebookProvider, db, storage, signInWithGoogle, signInWithFacebook };
