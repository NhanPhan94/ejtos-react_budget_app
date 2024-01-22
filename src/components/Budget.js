import React, { useContext, useState, useEffect} from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    
    const { budget, dispatch, expenses, currency} = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    // const handleBudgetChange = (event) => {
    //     setNewBudget(event.target.value);
    //     dispatch({ type: 'SET_BUDGET', payload: newBudget });
    // }
    const handleBudgetChange = (event) => {
        const updatedBudget = parseFloat(event.target.value);
        setNewBudget(updatedBudget);
        dispatch({ type: 'SET_BUDGET', payload: updatedBudget });
    }
    const totalExpenses = expenses.reduce((total, item) => {
        return (total = total + item.cost);
    }, 0);
    useEffect(() => {
        if (totalExpenses > budget) {
            alert("You cannot reduce the budget value lower than spending!!");
            setNewBudget(budget); // Reset the input value to the current budget
        }
        if(budget > 20000){
            alert('You cannot increase the budget value higher than 20000');
            setNewBudget(budget); // Reset the input value to the current budget
        }
    }, [budget, totalExpenses, currency]);

    return (
<div className='alert alert-secondary'>
<span>Budget: {currency} </span>
<input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
</div>
    );
};
export default Budget;

// const { expenses, budget } = useContext(AppContext);
//     const totalExpenses = expenses.reduce((total, item) => {
//         return (total = total + item.cost);
//     }, 0);

