import React, { useEffect } from "react";
import { ListContainer, AddNewForm } from "../../components";
import { useFolder } from "../../hooks/useFolders";
import { useTask } from "../../hooks/useTasks";
import "./styles.css";
function FolderListPage() {
  const storage = window.localStorage;
  storage.setItem("folder", "");
  storage.setItem("tasks", "");
  const type = "folder";
  const { folders, addNewFolder, deleteFolder } = useFolder();
  useEffect(() => {
    storage.setItem("folder", "");
    storage.setItem("tasks", "");
    return () => {};
  }, []);

  return (
    <div className="container">
      <ListContainer type={type} listItems={folders} remove={deleteFolder} />
      <AddNewForm type={type} cb={addNewFolder} />
    </div>
  );
}

export default FolderListPage;
