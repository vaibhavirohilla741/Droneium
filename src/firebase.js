// Import the functions you need from the SDKs you need
import firebase from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyARs54C8POWckakeaW0XlILoQZumZzP2UA",
  authDomain: "droneium-74d8c.firebaseapp.com",
  projectId: "droneium-74d8c",
  storageBucket: "droneium-74d8c.appspot.com",
  messagingSenderId: "193661098882",
  appId: "1:193661098882:web:ecee8fd2c3a25b55474d9b",
  measurementId: "G-6KYZFHBS7H"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();