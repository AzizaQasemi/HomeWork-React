import React from 'react';
import classes from './ExpenseItemY.module.css'
const ExpenseItemY = (props) => {
    return (
        <div className={classes.ExpenseItemY}>
            <p className={classes.name}>{props.name}</p>
            <h1 className={classes.date}>{props.date}</h1>
            <p className={classes.price}>{props.price}</p>
        </div>
    );
};

export default ExpenseItemY;