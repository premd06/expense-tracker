// App.jsx is the main file

import React, { useState, useEffect } from "react"

// This is importing components
import Header from "./components/Header"
import Balance from "./components/Balance"
import TransactionForm from "./components/TransactionForm"
import TransactionList from "./components/TransactionList"
import ExpenseChart from "./components/ExpenseChart"

// This is getting the image to show on the website
import mascot from "./assets/mascot.png"

function App() {
  // All the user transactions will hold all the data (expenses and income)
  const [transactions, setTransactions] = useState(
    JSON.parse(localStorage.getItem("transactions")) || []
  )

  // Whenever transactions change it will save them in localStorage
  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions))
  }, [transactions])

  // This adds a new transaction
  const addTransaction = (newTransaction) => {
    setTransactions([newTransaction, ...transactions])
  }

  // This deletes a transaction by ID
  const deleteTransaction = (id) => {
    setTransactions(transactions.filter((t) => t.id !== id))
  }

  return (
    <div className="app-wrapper">
      <Header mascot={mascot} />

      <div className="container">
        <div className="left">
          <div className="card">
            <Balance transactions={transactions} />
          </div>

          <div className="card">
            {/* This is a form to add income/expense */}
            <TransactionForm addTransaction={addTransaction} />
          </div>
        </div>

        <div className="right">
          <div className="card">
            {/* This is a chart showing expenses */}
            <ExpenseChart transactions={transactions} />
          </div>

          <div className="card">
            {/* This is a list of all transactions */}
            <TransactionList
              transactions={transactions}
              deleteTransaction={deleteTransaction}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
