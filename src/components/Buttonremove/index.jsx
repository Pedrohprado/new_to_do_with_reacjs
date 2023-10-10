import { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";

export default function Buttonremove({ onRemove }) {
  const [button, setButton] = useState(true);

  return (
    <>
      {button && (
        <button
          onClick={onRemove}
          className="remove"
          onMouseOver={() => {
            setButton(false);
          }}
        >
          <FaTrashAlt size={20} fill="#010101dd" />
        </button>
      )}
      {!button && (
        <button
          onClick={onRemove}
          color="red"
          className="remove"
          onMouseOut={() => {
            setButton(true);
          }}
        >
          deseja remover?
        </button>
      )}
    </>
  );
}
