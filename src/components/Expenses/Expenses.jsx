import './Expenses.css'
import Card from '../UI/Card'
import ExpensesFilter from './ExpensesFilter'
import ExpensesList from './ExpensesList'
import ExpensesChart from './ExpensesChart'

import { useState } from 'react'

function Expenses({expenses}) {

   const [filteredYear, setFilteredYear] = useState('2020')


   const filterChangeHandler = selectedYear => {
     setFilteredYear(selectedYear)
   }

   const filteredExpenses = expenses.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear
   })

   

   return (
      <>
        <Card className='expenses'>
        <ExpensesFilter onChangeFilter={filterChangeHandler} filteredYear={filteredYear}/>
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList expenses={filteredExpenses} />
       </Card>
      </>
   )
}

export default Expenses