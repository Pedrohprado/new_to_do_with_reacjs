import { useState } from "react";
import "./App.css";
import NewTodo from "./components/NewTodo";
import TodoList from "./components/Todolist";

export default function App() {
  const [todos, setTodos] = useState([]);

  const onNewTodo = (value) => {
    setTodos([
      ...todos,
      {
        id: new Date().getTime(),
        title: value,
        checked: false,
      },
    ]);
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
          <NewTodo onNewTodo={onNewTodo} />
        </main>
      </div>
      <TodoList todos={todos} Ontoggle={Ontoggle} remove={remove} />
    </section>
  );
}
