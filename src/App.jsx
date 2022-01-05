import { useEffect, useState } from "react";
import "./styles.css";
import TodoFind from "./components/todoFind";
import TodoForm from "./components/todoForm";
import TodoItem from "./components/todoItem";

export default function App() {
  const [todos, setTodos] = useState([]);
  const [term, setTerm] = useState("");

  useEffect(() => {
    const json = localStorage.getItem("todos");
    const loadedTodos = JSON.parse(json);
    if (loadedTodos) {
      setTodos(loadedTodos);
    }
  }, []);

  useEffect(() => {
    const json = JSON.stringify(todos);
    localStorage.setItem("todos", json);
  }, [todos]);

  const addTodo = (userInput) => {
    if (userInput) {
      const newItem = {
        id: new Date().getTime(),
        label: userInput,
        done: false
      };
      setTodos([...todos, newItem]);
    }
  };

  const updatedTodos = (editedText, id) => {
    if (editedText) {
      const editItem = [...todos].map((todo) => {
        if (todo.id === id) {
          todo.label = editedText;
        }
        return todo;
      });

      setTodos(editItem);
    }
  };

  const removeTodo = (id) => {
    setTodos([...todos.filter((todo) => todo.id !== id)]);
  };

  const onSearchChange = (event) => {
    setTerm(event);
  };

  const search = (items, str) => {
    if (str) {
      return items.filter((item) => {
        return item.label.toLowerCase().indexOf(str.toLowerCase()) > -1;
      });
    }
    return items;
  };
  const visibleElement = search(todos, term);
  console.log(visibleElement.length);

  return (
    <div className="App">
      <div>
        <h1>ToDo List</h1>

        <TodoForm addTodo={addTodo} />

        {visibleElement.length !== 0 ? (
          visibleElement.map((todo) => {
            return (
              <TodoItem
                key={todo.id}
                todo={todo}
                removeTodo={removeTodo}
                updatedTodos={updatedTodos}
              />
            );
          })
        ) : (
          <h2>Nothing Here !!</h2>
        )}

        {todos.length !== 0 ? (
          <TodoFind onSearchChange={onSearchChange} term={term} />
        ) : null}
      </div>
    </div>
  );
}
