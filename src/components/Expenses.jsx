import React from 'react';
import ExpenseItemY from './ExpenseItemY';

const ExpensesY = () => {
    let expensesData =[
        {
            id: 'e1',
            name: 'Home',
            date: new Date(2023, 6, 21),
            price: '70000$',
        },
        {
            id: 'e2',
            name: 'Laptop',
            date: new Date(2021, 9, 5),
            price: '900$',
        },
        {
            id: 'e3',
            name: 'Car',
            date: new Date(2022, 1, 7),
            price: '50000$',
        },
    ]
    return (
        <div>
            {expensesData.map((el) =>{
                return(
                    <ExpenseItemY
                     key={el.id}
                     name={el.name}
                     date={el.date.toDateString()}
                     price={el.price}
                     />
                )
            })}
        </div>
    );
};

export default ExpensesY;