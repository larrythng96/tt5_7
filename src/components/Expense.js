import { FaTimes } from 'react-icons/fa'

const Expense = ({ expense, onDelete }) => {
  return (
    <div
      className={`expense`}
    >
      <h3>
        {expense.name}{' '}
        <FaTimes
          style={{ color: 'red', cursor: 'pointer' }}
          onClick={() => onDelete(expense.id)}
        />
      </h3>
      <p><b>Name:</b> {expense.name}</p>
      <p><b>Description:</b> {expense.description}</p>
      <p><b>Category:</b> {expense.category_id}</p>
      <p><b>Amount:</b> ${expense.amount}</p>
      <p><b>Created At:</b> {expense.created_at}</p>
      <p><b>Created By:</b> {expense.created_by}</p>
      <p><b>Updated At:</b> {expense.updated_at}</p>
      <p><b>Updated By:</b> {expense.updated_by}</p>
    </div>
  )
}

export default Expense