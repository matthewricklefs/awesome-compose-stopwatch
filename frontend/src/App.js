import React, { useState } from "react";
import axios from "axios";

import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import Display from "./components/Display";

import "./App.scss";

// TODO 1: add Stopwatch component to front end
// STOP / START / SAVE
// From when it started to when it stopped

// TODO 2:
// Display into a model and display all time spans in

// TODO 3:  be able to access all saved timespans

function App() {
  const [todos, setTodos] = useState(0);
  const [time, setTime] = useState({ ms: 0, s: 0, m: 0, h: 0 });

  axios
    .get("/api")
    .then((response) => {
      setTodos({
        todos: response.data.data,
      });
    })
    .catch((e) => console.log("Error : ", e));

  const handleAddTodo = (value) => {
    axios
      .post("/api/todos", { text: value })
      .then(() => {
        setTodos({
          todos: [...todos, { text: value }],
        });
      })
      .catch((e) => console.log("Error : ", e));
  };

  // Not started = 0
  // started = 1
  // stopped = 2

  return (
    <div className="App container">
      <div className="container-fluid">
        <div className="row">
          <div className="col-xs-12 col-sm-8 col-md-8 offset-md-2">
            <h1>Todos</h1>
            <div className="todo-app">
              <AddTodo handleAddTodo={handleAddTodo} />
              <TodoList todos={todos} />
              <Display time={time} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
