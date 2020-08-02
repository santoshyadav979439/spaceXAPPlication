import React from 'react';
import classes from './LeftBar.module.css'
const LeftBar = (props) => {
   
    return (
        <div className={classes.LeftBar}>
           {props.children}

        </div>
    );
};

export default LeftBar;