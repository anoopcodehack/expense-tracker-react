function Budget({ budget, setBudget, total }) {
  const remaining = budget - total;

  return (
    <div>
      <input
        type="number"
        placeholder="Set Monthly Budget"
        onChange={(e) => setBudget(Number(e.target.value))}
      />
      {budget > 0 && (
        <p style={{ color: remaining >= 0 ? "green" : "red" }}>
          {remaining >= 0
            ? `Remaining: ₹${remaining}`
            : `Over budget by ₹${Math.abs(remaining)}`}
        </p>
      )}
    </div>
  );
}

export default Budget;
