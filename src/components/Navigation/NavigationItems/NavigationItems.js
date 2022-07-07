import React from 'react';

import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = () => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/" active>Home</NavigationItem>
        <NavigationItem link="/">Gallary</NavigationItem>
        <NavigationItem link="/">Pages</NavigationItem>
        <NavigationItem link="/">Blog</NavigationItem>
        <NavigationItem link="/contact">Contact</NavigationItem>
    </ul>
);

export default navigationItems;