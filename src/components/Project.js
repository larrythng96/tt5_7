import { FaTimes } from "react-icons/fa";
import { useNavigate, Link } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState, useEffect, useParams } from "react";
import Expenses from "./Expenses";

const Project = ({ project, onDelete }) => {
  const [showAddExpense, setShowAddExpense] = useState(false);
  const [expenses, setExpenses] = useState([]);
  // const params = useParams();

  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = `/expenses/${project.id}`; 
    navigate(path);
  }

  useEffect(() => {
    const getExpenses = async () => {
      const expensesFromServer = await fetchExpenses(project.id)
      setExpenses(expensesFromServer)
    }

    getExpenses()
  }, [])

  // Fetch Expenses for Projects
  const fetchExpenses = async (project_id) => {
    const res = await fetch("http://localhost:5000/expenses");
    let data = await res.json();

    data = data.filter((expenses) => expenses.project_id === project_id);
    console.log(data)

    return data;
  };

  // Fetch Expense
  const fetchExpense = async (id) => {
    const res = await fetch(`http://localhost:5000/expenses/${id}`);
    const data = await res.json();

    return data;
  };

  // Add Expense
  const addExpense = async (expense) => {
    const res = await fetch("http://localhost:5000/expenses", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(expense),
    });

    const data = await res.json();

    setExpenses([...expenses, data]);
  };

  // Delete Expense
  const deleteExpense = async (expense_id) => {
    const res = await fetch(`http://localhost:5000/expenses/${expense_id}`, {
      method: "DELETE",
    });
    //We should control the response status to decide if we will change the state or not.
    res.status === 200
      ? setExpenses(expenses.filter((expense) => expense.id !== expense_id))
      : alert("Error Deleting This Expense");
  };

  return (
    <Routes>
      <Route
        path="/"
        element={
          <div className={`project`} onClick={routeChange}>
            <h3>
              <Link to={`/projects/${project.id}`}>{project.name}</Link>
              <FaTimes
                style={{ color: "red", cursor: "pointer" }}
                onClick={() => onDelete(project.id)}
              />
            </h3>
            <p>{project.description}</p>
            <p>Budget: ${project.budget}</p>
          </div>
        }
      />
      <Route
        path={`/:project_id`}
        element={
          <Expenses expenses={expenses} onDelete={deleteExpense}/>
        }
      />
    </Routes>
  );
};

export default Project;
