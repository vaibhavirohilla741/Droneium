import React, { useState,useEffect } from 'react';
import classes from './Logo.module.css';
import axios from 'axios';

const logo = (props) => {
    const[logosrc,setlogosrc] = useState("");
    useEffect(() => {
        axios.get("https://droneium-74d8c-default-rtdb.asia-southeast1.firebasedatabase.app/logo.json")
        .then(res => {
          setlogosrc(res.data);
        })
       
        //Runs on every render
      },[]);
      console.log(logosrc);
    return (
    <div className={classes.Logo} style={{height: props.height}}>
        <img src={logosrc} alt="MyBurger" />
    </div>
)};

export default logo;