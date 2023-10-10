import { useState } from "react";
import "./styles.css";

export default function NewTodo({ onNewTodo }) {
  const [value, setValue] = useState("");

  const erase = () => {
    setValue("");
  };

  const submit = () => {
    if (onNewTodo) {
      onNewTodo(value);
      erase();
    }
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

  return (
    <>
      <h1>NewTodo</h1>
      <input
        type="text"
        className="newToDo"
        placeholder="O que precisa ser feito?"
        value={value}
        onChange={onChange}
        onKeyDown={onkeyDown}
      />
    </>
  );
}
