import './NewExpense.css';

import ExpenseForm from './ExpenseForm';

import { useState } from 'react';

function NewExpense({onExpenseSubmit}) {

  const [isExpenseForm, setIsExpenseForm] = useState(false)

  const showFormHandler = () => {
    setIsExpenseForm(true)
  }

  const hiddenFormHandler = () => {
    setIsExpenseForm(false)
  }


  return (
    <div className="new-expense">
      { isExpenseForm && <ExpenseForm onExpenseSubmit={onExpenseSubmit} onExpenseFormCancel={hiddenFormHandler} />}
      { !isExpenseForm && <button onClick={showFormHandler}>Add Expense</button> }
    </div>
  );
}

export default NewExpense;
