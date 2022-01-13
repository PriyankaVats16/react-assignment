import React, { useRef } from "react";

const TodoItem = ({ todo, removeTodo, updatedTodos }) => {
  const [todoEditing, setTodoEditing] = React.useState(null);
  const [editText, setEditingText] = React.useState("");
  const editTextRef = useRef(null);
  const handleEditSubmit = () => {
    updatedTodos(editText, todo.id);
    setTodoEditing(null);
  };

  const handleEdit = () => {
    setTodoEditing(todo.id);
    setTimeout(() => {
      editTextRef.current.focus();
    }, 10);
  };

  return (
    <div className="item-todo">
      {todo.id === todoEditing ? (
        <input
          ref={editTextRef}
          className="edit-item"
          type="text"
          onChange={(e) => setEditingText(e.target.value)}
        />
      ) : (
        <div>{todo.label}</div>
      )}
      <div className="todo-actions">
        {todo.id === todoEditing ? (
          <button id="submit-edit-button" onClick={handleEditSubmit}>
            Submit Edit
          </button>
        ) : (
          <button id="edit-button" onClick={handleEdit}>
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
