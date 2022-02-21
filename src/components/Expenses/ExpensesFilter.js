import React from 'react';

import './styles/ExpensesFilter.css'

const ExpensesFilter = (props) => {
    const filteredYearHandler = (event) => {
        event.preventDefault();
        props.onFilteredYear(event.target.value)
    }

    return (
        <div className='expenses-filter'>
            <div className='expenses-filter__control'>
                <label>Filter by year</label>
                <select value={props.selected} onChange={filteredYearHandler}>
                    <option value='2025'>2025</option>
                    <option value='2024'>2024</option>
                    <option value='2023'>2023</option>
                    <option value='2022'>2022</option>
                </select>
            </div>
        </div >
    );
};

export default ExpensesFilter;