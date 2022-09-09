import React,{useState} from 'react';
import firebase from 'firebase/compat/app';
import auth from "firebase/compat/auth"
import classes from './NavigationItem.module.css';

const navigationItem = ( props ) =>
 {  const [logout, setLogout] = useState(localStorage.getItem('isAuth'));
    
    let signout = () => {
        
        firebase.auth().signOut()
            .then(r => {
                console.log('signout');
                localStorage.removeItem("isAuth")
                window.location.href = '/';
                setLogout(false);
            })
    }
    return !logout ? (<li className={classes.NavigationItem}>
        <a 
            href={props.link} 
            className={props.active ? classes.active : null}>{props.children}</a>
            </li>)
    :(<li className={classes.NavigationItem}><a 
            onClick={signout}>Logout</a>
            </li>)
    
    }

export default navigationItem;