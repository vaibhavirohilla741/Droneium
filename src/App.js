import Layout from "./components/Layout/Layout";
import "./App.css";
import {Route, Routes} from "react-router-dom";
import React from "react";
import Home from "./Container/Home/Home";
import Contact from "./Container/Contact/Contact";
function App() {
  return (
      <Layout>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        
      </Layout>
      
    
  );
}

export default App;
