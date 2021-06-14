import React from "react";
import "./styles.css";

function ListItem({ item, type, upload }) {
  const { done, title, uuid } = item;

  return (
    <>
      {type === "task" ? (
        <div className="grid-item grid-item--task">
          <input
            type="checkbox"
            checked={done}
            onChange={() => upload(uuid, { done: !done })}
          />
          <a>{title}</a>
          <button>Edit</button>
        </div>
      ) : null}

      {type === "folder" ? (
        <div className="grid-item grid-item--folder">
          <a>- {title}</a>
          <button>View items</button>
          <button>Remove</button>
        </div>
      ) : null}
    </>
  );
}

export default ListItem;
