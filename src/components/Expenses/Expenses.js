import React, { useState } from 'react';
import ExpensesList from './ExpensesList';
import './styles/Expenses.css'
import Card from "../UI/Card";
import ExpensesFilter from './ExpensesFilter';
import ExpensesChart from './ExpensesChart';

const Expenses = (props) => {
  const [year, setFilteredYear] = useState('2022');

  const onSaveFiltered = (filteredYear) => {
    setFilteredYear(filteredYear);
  };

  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === year;
  });

  return (
    <div>
      <li>
        <Card className="expenses">
          <ExpensesFilter selected={year} onFilteredYear={onSaveFiltered} />
          <ExpensesChart expenses={filteredExpenses} />
          <ExpensesList items={filteredExpenses} />
        </Card>
      </li>
    </div >
  );
}


export default Expenses