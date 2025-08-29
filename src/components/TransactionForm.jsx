// TransactionForm.jsx is the form where the user adds income or expense

import React, { useState } from "react"

function TransactionForm(props) {
  // This gets the addTransaction function from props
  let addTransaction = props.addTransaction

  let [description, setDescription] = useState("")
  let [amount, setAmount] = useState("")
  let [category, setCategory] = useState("Food")
  let [type, setType] = useState("expense")

  // This is when the form is submitted
  let handleSubmit = function(e) {
    e.preventDefault()

    // This makes sure description and amount are not empty
    if (description === "" || amount === "") {
      return
    }

    // This is to create a new transaction object
    let newTransaction = {
      id: Date.now(), // The unique ID using current time
      description: description,
      amount: parseFloat(amount), // Turns string into number
      category: category,
      type: type
    }

    // Adds the new transaction to the app
    addTransaction(newTransaction)

    // Resets the form fields
    setDescription("")
    setAmount("")
  }

  return (
    <form className="transaction-form" onSubmit={handleSubmit}>
      {/* The description input (what's this expense about) */}
      <input 
        type="text" 
        placeholder="Description"
        value={description}
        onChange={function(e) { setDescription(e.target.value) }}
      />

      {/* Amount input */}
      <input 
        type="number" 
        placeholder="Amount"
        value={amount}
        onChange={function(e) { setAmount(e.target.value) }}
      />

      {/* Category dropdown */}
      <select value={category} onChange={function(e) { setCategory(e.target.value) }}>
        <option>Food</option>
        <option>Rent</option>
        <option>Entertainment</option>
        <option>Transport</option>
        <option>Other (or Select When Entering Income)</option>
      </select>

      {/* The dropdown (expense or income) */}
      <select value={type} onChange={function(e) { setType(e.target.value) }}>
        <option value="expense">Expense</option>
        <option value="income">Income</option>
      </select>

      {/* The submit button */}
      <button type="submit">Add Transaction</button>
    </form>
  )
}

export default TransactionForm
