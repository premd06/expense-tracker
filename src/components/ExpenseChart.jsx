// ExpenseChart.jsx shows a pie chart of expenses by category

import React, { useState } from "react"
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer, Sector } from "recharts"

function ExpenseChart({ transactions }) {
  // This stores the hovered slice of the pie the user is on currently
  const [activeIndex, setActiveIndex] = useState(null)

  // This is to get expense transactions
  let expenseTransactions = []
  transactions.forEach((t) => {
    if (t.type === "expense") {
      expenseTransactions.push(t)
    }
  })

  // This groups amounts by category
  let categories = {}
  expenseTransactions.forEach((t) => {
    if (categories[t.category]) {
      categories[t.category] = categories[t.category] + t.amount
    } else {
      categories[t.category] = t.amount
    }
  })

  // This converts the object into an array for the chart
  let data = []
  for (let cat in categories) {
    data.push({ name: cat, value: categories[cat] })
  }

  // The colors for the chart slices
  let COLORS = ["#8884d8", "#82ca9d", "#ffc658", "#ff8042", "#8dd1e1"]

  // If no expenses are given it return the below
  if (data.length === 0) {
    return <p>No expenses to show.</p>
  }

  // When the user's mouse hovers a slice
  const onPieEnter = (entry, index) => {
    setActiveIndex(index)
  }

  return (
    <div className="card" style={{ padding: "20px" }}>
      <h3>Expenses by Category</h3>
      <ResponsiveContainer width="100%" height={350} minWidth={350}>
        <PieChart margin={{ top: 30, right: 30, bottom: 30, left: 30 }}>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            outerRadius={120}
            fill="#8884d8"
            labelLine={false}
            label={(props) => {
              let percent = props.percent * 100
              return `${percent.toFixed(0)}%`
            }}
            isAnimationActive={true}
            animationDuration={800}
            activeIndex={activeIndex}
            onMouseEnter={onPieEnter}
            activeShape={(props) => {
              const { cx, cy, innerRadius, outerRadius, startAngle, endAngle, fill } = props
              return (
                <Sector
                  cx={cx}
                  cy={cy}
                  innerRadius={innerRadius}
                  outerRadius={outerRadius + 10} // Makes the slice pop out
                  startAngle={startAngle}
                  endAngle={endAngle}
                  fill={fill}
                />
              )
            }}
          >
            {data.map((entry, index) => {
              return <Cell key={index} fill={COLORS[index % COLORS.length]} />
            })}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}

export default ExpenseChart
