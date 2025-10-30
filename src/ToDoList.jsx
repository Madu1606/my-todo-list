import React from "react";

function ToDoList({ taskList = [] }) {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
      <h1>My Todo List</h1>
      <ul>
        {taskList.length === 0 && <li>No tasks</li>}
        {taskList.map((item) => (
          <li key={item.id}>
            <span
              style={{
                textDecoration: item.isCompleted ? "line-through" : "none",
              }}
            >
              {item.task}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
