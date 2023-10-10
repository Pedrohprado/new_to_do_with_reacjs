import Buttonremove from "../Buttonremove";
import "./styles.css";

export default function TodoList({ todos, Ontoggle, remove }) {
  return (
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
  );
}
