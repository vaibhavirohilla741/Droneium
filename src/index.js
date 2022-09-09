import React from 'react';
import ReactDOM from "react-dom"
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter } from 'react-router-dom'
import firebase from "firebase/compat/app";

// Use your config values here.
firebase.initializeApp({
  apiKey: "AIzaSyARs54C8POWckakeaW0XlILoQZumZzP2UA",
  authDomain: "droneium-74d8c.firebaseapp.com",
  projectId: "droneium-74d8c",
  storageBucket: "droneium-74d8c.appspot.com",
  messagingSenderId: "193661098882",
  appId: "1:193661098882:web:ecee8fd2c3a25b55474d9b",
  measurementId: "G-6KYZFHBS7H"
});
ReactDOM.render(
  <React.StrictMode>
    
      <BrowserRouter>
        <App />
      </BrowserRouter>
  
  </React.StrictMode>,
  document.getElementById("root")
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
