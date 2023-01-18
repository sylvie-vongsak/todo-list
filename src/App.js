import "./App.css";
import { useState } from "react";

export default function App() {
  const [todos, setTodos] = useState([]);

  return (
    <div className="app-wrapper">
      <h1>● My to do list ●</h1>

      <Form
        addTodo={(todo) => {
          setTodos((prev) => [...prev, todo]);
        }}
      />
      <div className="todo-list">
        {todos.map((todo, i) => (
          <Todo
            onDelete={() => {
              setTodos((prev) => {
                return prev.filter((_, y) => i !== y);
              });
            }}
            key={i}
          >
            {todo}
          </Todo>
        ))}
      </div>
    </div>
  );
}
const Form = ({ addTodo }) => {
  const onSubmit = (event) => {
    event.preventDefault();

    const todoText = event.currentTarget.elements.todo.value;
    addTodo(todoText);
    event.currentTarget.reset();
  };

  return (
    <form className="form-wrapper" onSubmit={onSubmit}>
      <input id="todo" className="input" type="text" placeholder="Add a task" />
      <Button type="submit">Submit</Button>
    </form>
  );
};

const Button = ({ children, ...props }) => {
  return (
    <button className="button" {...props}>
      {children}
    </button>
  );
};

const Todo = ({ children, onDelete }) => {
  return (
    <div className="todo-wrapper">
      <Checkbox />
      <span className="todo-text">{children}</span>
      <button onClick={onDelete} className="todo-delete">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          width="1.2em"
          height="1.2em"
          viewBox="0 0 256 256"
        >
          <path
            fill="white"
            d="M216 48H40a12 12 0 0 0 0 24h4v136a20.1 20.1 0 0 0 20 20h128a20.1 20.1 0 0 0 20-20V72h4a12 12 0 0 0 0-24Zm-28 156H68V72h120ZM76 20A12 12 0 0 1 88 8h80a12 12 0 0 1 0 24H88a12 12 0 0 1-12-1ZZ"
          ></path>
        </svg>
      </button>
    </div>
  );
};

const Checkbox = () => {
  const [checked, setChecked] = useState(false);

  const onChange = (event) => {
    setChecked(event.target.checked);
  };
  return (
    <div className="checkbox">
      <input type="checkbox" checked={checked} onChange={onChange} />
      {checked && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
        >
          <path
            fill="white"
            d="M9 16.17L5.53 12.7a.996.996 0 1 0-1.41 1.41l4.18 4.18c.39.39 1.02.39 1.41 0L20.29 7.71a.996.996 0 1 0-1.41-1.41L9 16.17z"
          ></path>
        </svg>
      )}
    </div>
  );
};
