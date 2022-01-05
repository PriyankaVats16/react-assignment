import React from "react";

const TodoItem = ({ todo, removeTodo, updatedTodos }) => {
  const [todoEditing, setTodoEditing] = React.useState(null);
  const [editText, setEditingText] = React.useState("");
  const handleEditSubmit = (id) => {
    updatedTodos(editText, id);
    setTodoEditing(null);
  };

  return (
    <div className="item-todo">
      {todo.id === todoEditing ? (
        <input type="text" onChange={(e) => setEditingText(e.target.value)} />
      ) : (
        <div>{todo.label}</div>
      )}
      <div className="todo-actions">
        {todo.id === todoEditing ? (
          <button
            id="submit-edit-button"
            onClick={() => handleEditSubmit(todo.id)}
          >
            Submit Edit
          </button>
        ) : (
          <button id="edit-button" onClick={() => setTodoEditing(todo.id)}>
            Edit
          </button>
        )}
        <button id="delete-button" onClick={() => removeTodo(todo.id)}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
