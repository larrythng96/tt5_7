import { FaTimes } from 'react-icons/fa'

const Expense = ({ expense, onDelete }) => {
  return (
    <div
      className={`project`}
    >
      <h3>
        {expense.name}{' '}
        <FaTimes
          style={{ color: 'red', cursor: 'pointer' }}
          onClick={() => onDelete(expense.id)}
        />
      </h3>
      <p>{expense.description}</p>
      <p>Amount: ${expense.amount}</p>
      <p>Category: ${expense.category_id}</p>
    </div>
  )
}

export default Expense
