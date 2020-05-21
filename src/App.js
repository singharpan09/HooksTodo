import React, { useState } from "react";

import "bootstrap/dist/css/bootstrap.css";

import { Button, FormControl, InputGroup, Badge } from "react-bootstrap";
import "./App.css";

function App() {
  const [todo, settodo] = useState("");
  const [todoList, settodoList] = useState([]);

  const addtodo = (todo) => {
    const newTodo = [
      ...todoList,
      { id: Date.now(), todo: todo, completed: false },
    ];
    settodo("");
    settodoList(newTodo);
  };
  const handlechange = (todo) => {
    const newTodo = [...todoList];
    const Index = newTodo.indexOf(todo);
    console.log(Index);
    newTodo[Index].completed =
      newTodo[Index].completed === false ? true : false;
    settodoList(newTodo);
  };

  return (
    <div className="App">
      <h3>#Todo's for the day</h3>

      <InputGroup className="mb">
        <FormControl
          required={true}
          placeholder="Enter Todos...."
          value={todo}
          onChange={(e) => settodo(e.target.value)}
        />
      </InputGroup>

      <Button
        disabled={todo.length === 0 ? true : false}
        onClick={() => {
          addtodo(todo);
        }}
        variant="success"
      >
        Submit
      </Button>

      {todoList.map((todo) => (
        <p key={todo.id}>
          {todo.todo}
          <input
            className="checked"
            type="checkbox"
            checked={todo.completed}
            onChange={() => handlechange(todo)}
          />
          {todo.completed === true && (
            <Badge variant="secondary">completed</Badge>
          )}
        </p>
      ))}
    </div>
  );
}

export default App;
//need to install both "bootstrap" & "react-bootstrap"
