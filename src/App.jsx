// App.jsx
// This is the main file for the Expense Tracker project

import React, { useState, useEffect } from "react"

// importing components
import Header from "./components/Header"
import Balance from "./components/Balance"
import TransactionForm from "./components/TransactionForm"
import TransactionList from "./components/TransactionList"
import ExpenseChart from "./components/ExpenseChart"

// importing mascot image
import mascot from "./assets/mascot.png"

function App() {
  // transactions will hold all the data (expenses and income)
  // if there are saved transactions in localStorage, use them, otherwise start with an empty array
  const [transactions, setTransactions] = useState(
    JSON.parse(localStorage.getItem("transactions")) || []
  )

  // whenever transactions change, save them in localStorage
  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions))
  }, [transactions])

  // add a new transaction (it goes at the start of the list)
  const addTransaction = (newTransaction) => {
    setTransactions([newTransaction, ...transactions])
  }

  // delete a transaction by id
  const deleteTransaction = (id) => {
    setTransactions(transactions.filter((t) => t.id !== id))
  }

  return (
    <div className="app-wrapper">
      {/* Header with the mascot */}
      <Header mascot={mascot} />

      <div className="container">
        <div className="left">
          <div className="card">
            {/* Balance info goes here */}
            <Balance transactions={transactions} />
          </div>

          <div className="card">
            {/* Form to add income/expense */}
            <TransactionForm addTransaction={addTransaction} />
          </div>
        </div>

        <div className="right">
          <div className="card">
            {/* Chart showing expenses */}
            <ExpenseChart transactions={transactions} />
          </div>

          <div className="card">
            {/* List of all transactions */}
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
