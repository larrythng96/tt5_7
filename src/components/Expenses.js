import Expense from './Expense'

const Expenses = ({ expenses, onDelete }) => {
  return (
    <>
      {expenses.map((expense, index) => (
        <Expense key={index} expense={expense} onDelete={onDelete} />
      ))}
    </>
  )
}

export default Expenses
