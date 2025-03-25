import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDR7XnBuuF1ArBMhhiOLlosBZQgjtr1dx8",
  authDomain: "test-sbox2022.firebaseapp.com",
  projectId: "test-sbox2022",
  storageBucket: "test-sbox2022.appspot.com",
  messagingSenderId: "922164950295",
  appId: "1:922164950295:web:3a79b058d64f6a67c5b352"
};

// Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig);

export const db = fb.firestore();