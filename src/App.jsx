import React from "react";
import ToDoList from "./ToDoList";
import Form from "./Form";

const todoList1 = [
  { id: 1, task: "Buy groceries", isCompleted: false },
  { id: 2, task: "Finish React homework", isCompleted: true },
  { id: 3, task: "Walk the dog", isCompleted: false },
];

function App() {
  return (
    <div className="App" style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
      <ToDoList taskList={todoList1} />
      <hr />
      <Form />
    </div>
  );
}

export default App;

