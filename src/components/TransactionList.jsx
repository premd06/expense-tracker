// TransactionList.jsx shows all the transactions that the user added

import React from "react"

function TransactionList({ transactions, deleteTransaction }) {
  // The icons for each category, making it look very cool 
  const categoryIcons = {
    Food: "🍔",
    Rent: "🏠",
    Entertainment: "🎮",
    Transport: "🚗",
    Other: "📝"
  }

  return (
    <div className="transaction-list">
      {/* If there are no transactions it will show this text */}
      {transactions.length === 0 && <p>No transactions yet.</p>}

      {/* This is to loop through transactions and show each one */}
      {transactions.map((t) => (
        <div 
          key={t.id} 
          className={`transaction-item ${t.type}`}
        >
          {/* The left side (icon + description) */}
          <div className="transaction-left">
            <span className="transaction-icon">
              {categoryIcons[t.category] || "💰"}
            </span>

            <div>
              <p className="transaction-desc">{t.description}</p>
              <p className="transaction-category">{t.category}</p>
            </div>
          </div>

          {/* The right side (amount + delete button) */}
          <div className="transaction-right">
            <p className="transaction-amount">
              {t.type === "expense" ? "-" : "+"}${t.amount.toFixed(2)}
            </p>
            <button onClick={() => deleteTransaction(t.id)}>❌</button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default TransactionList
