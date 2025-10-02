import React from "react";

const todoList1 = [
  { id: 1, task: "Buy groceries", isCompleted: false },
  { id: 2, task: "Finish React homework", isCompleted: true },
  { id: 3, task: "Walk the dog", isCompleted: false },
];

function App() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
      <h1>My Todo List</h1>
      <ul>
        {todoList1.map((item) => (
          <li key={item.id}>
            <span style={{ textDecoration: item.isCompleted ? "line-through" : "none" }}>
              {item.task}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

