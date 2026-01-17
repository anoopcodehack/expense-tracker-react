import { useState } from "react";

function ExpenseForm({ addExpense }) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("Food");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (amount <= 0) {
      alert("Amount must be positive");
      return;
    }

    addExpense({
      id: Date.now(),
      title,
      amount: Number(amount),
      category,
      date
    });

    setTitle("");
    setAmount("");
    setDate("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={title} onChange={e => setTitle(e.target.value)} placeholder="Title" required />
      <input type="number" value={amount} onChange={e => setAmount(e.target.value)} placeholder="Amount" required />
      <select value={category} onChange={e => setCategory(e.target.value)}>
        <option>Food</option>
        <option>Travel</option>
        <option>Bills</option>
        <option>Other</option>
      </select>
      <input type="date" value={date} onChange={e => setDate(e.target.value)} required />
      <button>Add Expense</button>
    </form>
  );
}

export default ExpenseForm;
