import Layout from "./components/Layout/Layout";
import "./App.css";
import {Route, Routes} from "react-router-dom";
import React from "react";
import Home from "./Container/Home/Home";
import Contact from "./Container/Contact/Contact";
import Login from "./components/Auth/Login";


function App() {
 
  return (
      <Layout>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
        </Routes>
       
      </Layout>
      
    
  );
}

export default App;
