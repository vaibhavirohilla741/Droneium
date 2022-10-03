import Layout from "./components/Layout/Layout";
import "./App.css";
import {Route, Routes} from "react-router-dom";
import React from "react";
import Home from "./Container/Home/Home";
import Contact from "./Container/Contact/Contact";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import Gallary from "./Container/GallaryContainer/GallaryContainer"

function App() {
  
 
  return (
      <Layout>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register/>}/>
          <Route path="/gallary" element={<Gallary />}/>
        </Routes>
       
      </Layout>
      
    
  );
}

export default App;
