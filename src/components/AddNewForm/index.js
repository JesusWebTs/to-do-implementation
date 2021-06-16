import React, { useState } from "react";
import "./styles.css";
function AddNewForm({ type, cb }) {
  const [text, setText] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    if (type === "folder") cb({ folder: text });
    if (type === "task") cb({ title: text, done: false });
    setText("");
  };
  return (
    <form onSubmit={onSubmit} className="form">
      <input
        type="text"
        placeholder={`New ${type}`}
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
        className="form__input"
      ></input>
      <input type="submit" value="Add" className="form__button" />
    </form>
  );
}

export default AddNewForm;
