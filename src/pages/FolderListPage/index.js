import React from "react";
import { ListContainer, AddNewForm } from "../../components";
import "./styles.css"
function FolderListPage() {
  return (
    <div className="container">
      <ListContainer />
      <AddNewForm />
    </div>
  );
}

export default FolderListPage;
