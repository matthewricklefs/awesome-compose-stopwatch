import React from "react";

function AddTodo(props) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const { value } = e.target.elements.value;
    if (value.length > 0) {
      props.handleAddTodo(value);
      e.target.reset();
    }
  };

  return (
    <div>
      <form
        noValidate
        onSubmit={() => handleSubmit}
        className="new-todo form-group"
      >
        <input
          type="text"
          name="value"
          required
          minLength={1}
          className="form-control"
        />
        <button className="btn btn-primary" type="submit">
          Add Todo
        </button>
      </form>
    </div>
  );
}

export default AddTodo;
