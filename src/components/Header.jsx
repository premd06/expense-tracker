// Header.jsx is the top part of the website (The Money Image & Website Title)

import React from "react"

function Header({ mascot }) {
  return (
    <header className="header">
      <div className="header-left">
        {/* Image on the left side */}
        <img 
          src={mascot} 
          alt="Financial Advisor Mascot" 
          className="mascot" 
        />

        {/* Text is on the right  */}
        <div className="header-text">
          <h1>Expense Tracker</h1>
          <h2>Start by entering your income, 
              then input the amount of your expenses.
              Don't forget to add a description.</h2>
        </div>
      </div>
    </header>
  )
}

export default Header
