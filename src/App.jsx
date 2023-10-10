import { useState } from "react";
import "./App.css";
import Buttonremove from "./Buttonremove";

export default function App() {
  const [value, setValue] = useState("");
  const [todos, setTodos] = useState([]);

  const erase = () => {
    setValue("");
  };

  const submit = () => {
    setTodos([
      ...todos,
      {
        id: new Date().getTime(),
        title: value,
        checked: false,
      },
    ]);
    erase();
  };

  const onChange = (event) => {
    setValue(event.target.value);
  };

  const onkeyDown = (event) => {
    if (event.key === "Enter") {
      submit();
    } else if (event.key === "Escape") {
      erase();
    }
  };

  const Ontoggle = (todo) => {
    setTodos(
      todos.map((obj) =>
        obj.id === todo.id ? { ...obj, checked: !todo.checked } : obj
      )
    );
  };

  const remove = (todo) => {
    console.log("remove", todo);
    setTodos(todos.filter((obj) => obj.id !== todo.id)); //How do this working?
  };

  return (
    <section id="app" className="container">
      <header>
        <h1 className="title">TO - DO</h1>
      </header>
      <div className="master">
        <main>
          <input
            type="text"
            className="newToDo"
            placeholder="O que precisa ser feito?"
            value={value}
            onChange={onChange}
            onKeyDown={onkeyDown}
          />
        </main>
      </div>
      <ul className="todo-list">
        {todos.map((todo) => (
          <li key={todo.id.toString()}>
            <span
              className={[" ", todo.checked ? "checked" : ""].join(" ")}
              onClick={() => Ontoggle(todo)}
            >
              {todo.title}
            </span>
            <Buttonremove onRemove={() => remove(todo)} />
          </li>
        ))}
      </ul>
    </section>
  );
}
