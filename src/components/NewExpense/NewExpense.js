import React, { useState } from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
    const [show, setShow] = useState(false);

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
        setShow(false);
    };

    const startEditingHandler = () => {
        setShow(true);
    }

    const stopEditingHandler = () => {
        setShow(false)
    }

    return <div className="new-expense">
        {!show && <button onClick={startEditingHandler}>Add New Expense</button>}
        {show && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditingHandler} />}
    </div>
}

export default NewExpense;