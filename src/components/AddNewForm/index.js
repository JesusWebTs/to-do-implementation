import React, { useState } from "react";

function AddNewForm({ type, cb }) {
  const [text, setText] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    if (type === "folder") cb({ folder: text });
    if (type === "task") cb({ title: text, done: false });
    setText("");
  };
  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder={`Add new ${type}`}
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      ></input>
      <input type="submit" value="add" />
    </form>
  );
}

export default AddNewForm;
