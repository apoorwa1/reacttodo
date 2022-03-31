import React from "react";
import "./App.css";
import InputTodo from "./components/InputTodo";
import ListTodo from "./components/ListTodo";
import LoginButton from "./components/Login.js";
import LogoutButton from "./components/Logout";
import Profile from "./components/Profile";
//import Collapse from "./components/collapse/collapse";

function App() {
  return (
    <>
      <div className="container">
        <LoginButton />
        <LogoutButton />
        <Profile />
        <InputTodo />
        <ListTodo />
      </div>
    </>
  );
}

export default App;
