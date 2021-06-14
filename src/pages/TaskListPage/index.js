import React from "react";
import "./styles.css";
import { ListContainer, AddNewForm } from "../../components";
import { useTask } from "../../hooks/useTasks";

function TaskListPage() {
  const type = "task";
  const { addNewTask, tasks, editTask } = useTask();
  return (
    <div className="container">
      <ListContainer type={type} listItems={tasks} upload={editTask} />
      <AddNewForm type={type} cb={addNewTask} />
    </div>
  );
}

export default TaskListPage;
