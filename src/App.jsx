import React from "react";
import ToDoList from "./ToDoList"; 

const todoList1 = [
  { id: 1, task: "Buy groceries", isCompleted: false },
  { id: 2, task: "Finish React homework", isCompleted: true },
  { id: 3, task: "Walk the dog", isCompleted: false },
];

function App() {
  return (
    <div className="App">
      <ToDoList taskList={todoList1} /> {}
    </div>
  );
}

export default App;

