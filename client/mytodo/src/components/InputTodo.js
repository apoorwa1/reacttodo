import React, { useState } from "react";

const InputTodo = () => {
  const [description, setDescription] = useState("");
  function onChange(e) {
    setDescription(e.target.value);
  }

  async function onSubmitForm(e) {
    e.preventDefault();
    try {
      const body = { description };
      const response = await fetch("http://localhost:5000/todos", {
        method: "POST",
        headers: {
          "content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });
      console.log(response);
    } catch (error) {
      console.log(error.message);
    }
  }
  return (
    <div>
      <h1 className="text-center mt-5">InputTodo for perntodo app</h1>
      <form onSubmit={onSubmitForm}>
        <input type="text" value={description} onChange={onChange}></input>
        <button className="btn btn-danger">Add</button>
      </form>
    </div>
  );
};

export default InputTodo;
