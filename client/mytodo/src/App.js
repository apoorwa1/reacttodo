import React from "react";
import "./App.css";
import InputTodo from "./components/InputTodo";
import ListTodo from "./components/ListTodo";
//import Collapse from "./components/collapse/collapse";

function App() {
  return (
    <>
      <div className="container">
        <InputTodo />
        <ListTodo />
      </div>
    </>
  );
}

export default App;
