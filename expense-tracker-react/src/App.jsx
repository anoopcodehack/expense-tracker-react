import { useEffect, useState } from "react";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import Budget from "./components/Budget";
import "./App.css";


function App() {
  const [expenses, setExpenses] = useState(() => {
    return JSON.parse(localStorage.getItem("expenses")) || [];
  });

  const [budget, setBudget] = useState(() => {
    return JSON.parse(localStorage.getItem("budget")) || 0;
  });

  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  useEffect(() => {
    localStorage.setItem("budget", JSON.stringify(budget));
  }, [budget]);

  const total = expenses.reduce((sum, exp) => sum + exp.amount, 0);

  const addExpense = (expense) => {
    setExpenses([...expenses, expense]);
  };

  const deleteExpense = (id) => {
    setExpenses(expenses.filter(exp => exp.id !== id));
  };

  return (
   <div className="container">
      <h1>Expense Tracker (React)</h1>

      <Budget budget={budget} setBudget={setBudget} total={total} />
      <ExpenseForm addExpense={addExpense} />
      <h2>Total: ₹{total}</h2>
      <ExpenseList expenses={expenses} deleteExpense={deleteExpense} />
    </div>
  );
}

export default App;
