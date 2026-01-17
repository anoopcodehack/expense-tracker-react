function ExpenseList({ expenses, deleteExpense }) {
  if (expenses.length === 0) {
    return <p>No expenses yet</p>;
  }

  return (
    <ul>
      {expenses.map(exp => (
        <li key={exp.id}>
          {exp.title} - ₹{exp.amount}
          <button onClick={() => deleteExpense(exp.id)}>X</button>
        </li>
      ))}
    </ul>
  );
}

export default ExpenseList;
