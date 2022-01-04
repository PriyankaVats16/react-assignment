import React from "react";

const TodoForm = ({ addTodo }) => {
  const [userInput, setUserInput] = React.useState("");

  const handleChange = (e) => {
    setUserInput(e.currentTarget.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(userInput);
    setUserInput("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Type..." onChange={handleChange} value={userInput} />
      <button>Add</button>
    </form>
  );
};

export default TodoForm;
