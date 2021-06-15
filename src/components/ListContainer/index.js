import React from "react";
import "./styles.css";

import { ListItem } from "./Component";

function ListContainer({
  listItems = [],
  type,
  upload = () => {},
  remove = () => {},
}) {
  return (
    <div className="list-container">
      {listItems.map((item) => (
        <ListItem
          type={type}
          item={item}
          upload={upload}
          remove={remove}
        ></ListItem>
      ))}
    </div>
  );
}

export default ListContainer;
