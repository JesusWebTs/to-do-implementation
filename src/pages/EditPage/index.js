import React, { useState } from "react";
import "./styles.css";
import { ListContainer, AddNewForm } from "../../components";
import taskList from "../../moocks";

function EditPage({ title, close, upload, uuid }) {
  const [text, setText] = useState();
  return (
    <div className="container">
      <h2>Editing Task "{title}"</h2>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <div>
        <button
          onClick={() => {
            upload(uuid, { title: text });
            close();
          }}
        >
          Save
        </button>
        <button onClick={close}>Cancel</button>
      </div>
    </div>
  );
}

export default EditPage;
