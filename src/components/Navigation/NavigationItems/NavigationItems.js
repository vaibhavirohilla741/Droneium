import React from "react";
import firebase from "firebase/compat/app";
import auth from "firebase/compat/auth";
import classes from "./NavigationItems.module.css";
import NavigationItem from "./NavigationItem/NavigationItem";

const navigationItems = () => {
  return !localStorage.getItem("isAuth") ? (
    <ul className={classes.NavigationItems}>
      <NavigationItem link="/" active>
        Home
      </NavigationItem>
      <NavigationItem link="/gallary">Gallary</NavigationItem>
      <NavigationItem link="/contact">Contact</NavigationItem>
      <NavigationItem link="/login">Login</NavigationItem>
    </ul>
  ) : (
    <NavigationItem logout={true} link="/">
      Logout
    </NavigationItem>
  );
};

export default navigationItems;
