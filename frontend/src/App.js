import React, { useState, useEffect } from "react";
import axios from "axios";

import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";

import "./App.scss";

// TODO 1: add Stopwatch component to front end
// STOP / START / SAVE
// From when it started to when it stopped

// TODO 2:
// Display into a model and display all time spans in

// TODO 3:  be able to access all saved timespans

/**
 * Multi line comments are your friends
 * @returns 
 */
function App() {
  const [todos, setTodos] = useState([]);

  /**
   * Go fetch the todos already saved in our DB.
   */
  const fetchTodos = () => {
    axios
    .get("/api")
    .then((response) => {
      setTodos({
        todos: response.data.data,
      });
    })
    .catch((e) => console.log("Error : ", e));
  };

  /**
   * Niffty lifecycle things from React for computations by side effect.
   */
  useEffect(() => {
    fetchTodos();
  }, [todos.length]); // if the length of the array is not passed as the second paramter of useEffect we will end up in an infinite loop.

  /**
   * Handle adding a todo
   * Notice that this function is passed as a paramter to a component later.
   * @param {*} value 
   */
  const handleAddTodo = (value) => {
    console.log('handleAddTodo', typeof todos.todos, todos.todos); // it seems that todos is an object with a key called 'todos' and an array value {todos: []}. Is this intended?
    axios
      .post("/api/todos", { text: value })
      .then(() => {
        setTodos({
          todos: [...todos.todos, { text: value }],
        });
      })
      .catch((e) => console.log("Error : ", e));
  };

  return (
    <div className="App container">
      <div className="container-fluid">
        <div className="row">
          <div className="col-xs-12 col-sm-8 col-md-8 offset-md-2">
            <h1>Todos</h1>
            <h2>Now with stop-watches!</h2>
            <div className="todo-app">
              <AddTodo handleAddTodo={handleAddTodo} />
              <TodoList todos={todos.todos} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
