// Balance.jsx is to show the user's income, expenses, and total balance

import React from "react"

function Balance({ transactions }) {
  // This is to get all the income
  // Using filter for type === "income" and add them up
  let income = 0
  transactions.forEach((t) => {
    if (t.type === "income") {
      income = income + t.amount
    }
  })

  // This gets all the expenses
  let expense = 0
  transactions.forEach((t) => {
    if (t.type === "expense") {
      expense = expense + t.amount
    }
  })

  // The balance is just income - expense
  let balance = income - expense

  return (
    <div>
      <h3>Your Balance</h3>

      {/* This is the main balance */}
      <p style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
        ${balance.toFixed(2)}
      </p>

      {/* This is the income vs expense section */}
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <p>Income</p>
          <p style={{ color: "#22c55e", fontWeight: "bold" }}>
            ${income.toFixed(2)}
          </p>
        </div>

        <div>
          <p>Expense</p>
          <p style={{ color: "#ef4444", fontWeight: "bold" }}>
            ${expense.toFixed(2)}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Balance
