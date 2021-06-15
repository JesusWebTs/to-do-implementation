import React, { useState, useEffect } from "react";
import "./styles.css";
import { ListContainer, AddNewForm } from "../../components";
import { useTask } from "../../hooks/useTasks";

function TaskListPage() {
  const storage = window.localStorage;
  const type = "task";
  const _task = JSON.parse(storage.getItem("tasks"));
  const { addNewTask, editTask, tasks } = useTask(_task);

  useEffect(() => {
    storage.setItem("folder", "");
    return () => {};
  }, []);

  return (
    <div className="container">
      <ListContainer type={type} listItems={tasks} upload={editTask} />
      <AddNewForm type={type} cb={addNewTask} />
    </div>
  );
}

export default TaskListPage;
