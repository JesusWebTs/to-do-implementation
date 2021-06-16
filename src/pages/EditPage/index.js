import React, { useState } from "react";
import "./styles.css";

function EditPage({ title, close, upload, _id }) {
  const [text, setText] = useState();
  return (
    <div className="container">
      <h2>Editing Task "{title}"</h2>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <div>
        <button
          onClick={() => {
            upload(_id, { title: text });
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
