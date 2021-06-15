import React from "react";
import { ListContainer, AddNewForm } from "../../components";
import { useFolder } from "../../hooks/useFolders";
import { useTask } from "../../hooks/useTasks";
import "./styles.css";
function FolderListPage() {
  const type = "folder";
  const { folders, setTargetFolder } = useFolder();
  const { setTasks } = useTask();
  return (
    <div className="container">
      <ListContainer
        type={type}
        listItems={folders}
        setTasks={(tasks, folder) => {
          setTargetFolder(folder);
          setTasks(tasks);
        }}
      />
      <AddNewForm type={type} />
    </div>
  );
}

export default FolderListPage;
