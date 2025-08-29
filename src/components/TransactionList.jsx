// TransactionList.jsx
// Shows all the transactions that the user added

import React from "react"

function TransactionList({ transactions, deleteTransaction }) {
  // icons for each category
  const categoryIcons = {
    Food: "🍔",
    Rent: "🏠",
    Entertainment: "🎮",
    Transport: "🚗",
    Other: "📝"
  }

  return (
    <div className="transaction-list">
      {/* if there are no transactions, show this text */}
      {transactions.length === 0 && <p>No transactions yet.</p>}

      {/* loop through transactions and show each one */}
      {transactions.map((t) => (
        <div 
          key={t.id} 
          className={`transaction-item ${t.type}`}
        >
          {/* left side (icon + description) */}
          <div className="transaction-left">
            <span className="transaction-icon">
              {categoryIcons[t.category] || "💰"}
            </span>

            <div>
              <p className="transaction-desc">{t.description}</p>
              <p className="transaction-category">{t.category}</p>
            </div>
          </div>

          {/* right side (amount + delete button) */}
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
