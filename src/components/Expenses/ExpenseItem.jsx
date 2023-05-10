import './ExpenseItem.css'

import { useState } from 'react'

import ExpenseDate from './ExpenseDate'
import Card from '../UI/Card'

function ExpenseItem({title, date, amount}) {

    const [newtitle, setNewTitle] = useState(title)

    const clickHandler = () => {
        setNewTitle('Updated')
    }

    return (
      <li>
        <Card className="expense-item">
            <ExpenseDate date={date} />
            <div className='expense-item__description'>
                <h2>{newtitle}</h2>
                <div className='expense-item__price'>${amount}</div>
            </div>
        </Card>
      </li>
    )
}

export default ExpenseItem